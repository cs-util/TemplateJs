Showcase running an **LLM** and **TTS** fully in the browser (WebGPU/WASM), plus **streaming** and **AudioWorklet** playback. 

---

## 0) Goal & scope

Build a browser-only demo that proves:

1. a small **ONNX LLM** can run *entirely client-side* with **Transformers.js**,
2. **TTS** can run locally (primary: **kokoro**; fallback: **Web Speech API**),
3. **streaming** text and **low-latency audio** via **AudioWorklet**,
4. models and assets can be used **offline** after first load (served locally).

No server runtime. A small, clean codebase that a developer can read in one sitting.
References: Transformers.js pipeline & env (WebGPU/WASM, browser cache) and ONNX Runtime Web backends; Kokoro TTS; AudioWorklet; Web Speech API. ([Hugging Face][1], [onnxruntime.ai][2], [MDN Web Docs][3])

---

## 1) User-visible demo flows (3 tabs)

### Tab A — “LLM Stream”

* Input: prompt textarea + “Generate”.
* Output: token-streamed text (append as it arrives), auto-scroll.
* Status: device (“webgpu” or “wasm”), model id, first-token latency, tokens/sec.

### Tab B — “TTS Only”

* Input: short sample paragraph (editable).
* Actions: Play / Pause / Resume / Stop, Voice dropdown (if Web Speech fallback), Rate/Pitch sliders.
* Output: sentence-highlight as speech progresses.

### Tab C — “LLM → TTS”

* Uses the same prompt UI as Tab A, then speaks the generated text sentence-by-sentence with highlight.
* Shows a small **progress bar** while models/weights are loading.

---

## 2) Stack & dependencies

* **Transformers.js** in the browser (ESM from CDN or local file). Use `pipeline('text-generation', ...)`, device=`'webgpu'` when available; fallback `'wasm'`. Supports on-device WebGPU/WASM via ONNX Runtime Web. ([Hugging Face][1], [onnxruntime.ai][2])
* **Kokoro TTS (82M, ONNX)** via a JS wrapper (“kokoro-js” flavor) for local neural speech; provides streaming generation suitable for sentence-level playback. ([Hugging Face][4])
* **AudioWorklet** for low-latency PCM playback & chunk boundary events. ([MDN Web Docs][3])
* **Fallback TTS**: **Web Speech API** (`speechSynthesis`) with device voices. ([MDN Web Docs][5])

> Offline: host the JS bundles + ONNX model files locally; enable Transformers.js browser caching via `env` so models persist (IndexedDB/Cache). ([Hugging Face][6])

---

## 3) Minimal feature set (acceptance)

* ✅ Runs with **WebGPU** if `navigator.gpu` exists; otherwise **WASM**. Device shown in UI.
* ✅ LLM: visible **token streaming**; first token in < \~5s on a mid desktop GPU with tiny model (non-binding metric).
* ✅ TTS: sentence-aligned highlight; **Play/Pause/Resume/Stop** work reliably.
* ✅ AudioWorklet: buffered PCM playback; “chunk advanced” and “playback ended” events.
* ✅ **Offline** after first load when served from a local web server with model files present.
* ✅ Codebase: ≤ \~800 LoC total across 5–7 files.

---

## 4) Models & defaults

* **LLM (default):** a tiny instruction-tuned ONNX causal LM (e.g., a \~200–700M-param model that runs in WebGPU). Parameterize as `LLM_MODEL_ID` string for quick swaps.
* **TTS (primary):** **Kokoro-82M ONNX** (en) with a single voice to keep assets small. `TTS_MODEL_ID` string to swap voices/quantizations. ([Hugging Face][4])

---

## 5) Architecture

```
UI (Tabs A/B/C) 
   ↕
App Controller
   ├─ LLM Module (Transformers.js pipeline + TextStreamer)
   ├─ TTS Module (kokoro stream or Web Speech fallback)
   └─ Audio Module (AudioContext + AudioWorklet + ring buffer)
```

### 5.1 LLM Module

* Init on first use:

  * `pipeline('text-generation', LLM_MODEL_ID, { device, progress_callback })`.
  * Device: `'webgpu'` if `navigator.gpu` else `'wasm'`.
  * Enable cache via `env` (see §8). ([Hugging Face][1])
* Generation:

  * Parameters: `max_new_tokens` (e.g., 256), `temperature≈0.8`, `top_p≈0.95`.
  * Use **TextStreamer** or `pipeline.stream(...)` to receive tokens incrementally; append to UI as tokens arrive, measure TTFB/tokens/sec. ([Hugging Face][1])

### 5.2 TTS Module

* **Primary (kokoro)**:

  * Load once; expose `stream(textChunks)` → async iterator yielding `{ audio: Float32Array, text?: string }`.
  * Normalize text into sentence chunks; enqueue each to the audio ring buffer; on each played chunk, mark sentence as “spoken” in UI. ([Hugging Face][4])
* **Fallback (Web Speech)**:

  * Split text into sentences; enqueue `SpeechSynthesisUtterance` per sentence; wire up buttons to `speechSynthesis.pause/resume/cancel`. ([MDN Web Docs][5])

### 5.3 Audio Module (AudioWorklet)

* `AudioContext({ sampleRate: 24000 })` to match TTS output.
* Worklet processor maintains a small **ring buffer** of Float32 PCM; pulls frames in `process()`, posts `next_chunk` when a buffer drains; posts `playback_ended` when queue empties after having data. ([MDN Web Docs][3])

---

## 6) UI spec

* **Header:** “Device: webgpu|wasm · LLM: <id> · TTS: kokoro|web-speech”.
* **Tabs:** A (LLM Stream), B (TTS Only), C (LLM → TTS).
* **Controls:**

  * A: textarea + Generate; status line (TTFB, tok/s).
  * B: textarea; Play/Pause/Resume/Stop; Rate/Pitch; (optional) Voice select.
  * C: textarea + Generate & Speak; progress bar during model loads.
* **Story/Text area:** streamed tokens; sentence spans with `.spoken` highlight; auto-scroll.

---

## 7) Configuration & env

* `LLM_MODEL_ID`: string (e.g., local folder or HF repo path).
* `TTS_MODEL_ID`: kokoro ONNX repo/folder.
* `DEVICE`: auto-select from `navigator.gpu`.
* **Transformers.js env** (set before importing/initializing):

  * `env.allowRemoteModels = false` for fully offline (when models are hosted locally).
  * `env.useBrowserCache = true` to persist models in browser storage.
  * (Optional) tune ONNX WASM threads: `env.backends.onnx.wasm.numThreads`. ([Hugging Face][6])

---

## 8) Offline & packaging

* Serve from a **local HTTP server** (avoid `file://` CORS issues).
* Place ONNX model files under `/models/llm/**` and `/models/tts/**`.
* Point `LLM_MODEL_ID` and `TTS_MODEL_ID` to **relative paths**.
* First run downloads from local server → cached in browser; subsequent runs work **offline** (no network) if assets are already in cache. ([Hugging Face][6])

---

## 9) Error handling

* WebGPU missing → automatically fall back to WASM; show a small “slower CPU mode” badge.
* Model load failure (network/offline cold start) → show retry CTA and a hint to “Install local assets” page.
* Audio underrun → briefly show “buffering…” and pause highlight advancement until next chunk.
* Web Speech not available → hide B’s voice selector and mark fallback unavailable.

---

## 10) Pseudocode (essential)

**LLM init + stream**

```js
import { pipeline, env } from 'transformers';

// env configuration (see §7)
const gen = await pipeline('text-generation', LLM_MODEL_ID, { device, progress_callback });
const stream = await gen.stream(prompt, { max_new_tokens, temperature, top_p });

for await (const chunk of stream) {
  const token = typeof chunk === 'string' ? chunk : chunk?.token?.text || '';
  if (token) appendToken(token); // update UI
}
```

(Uses Transformers.js pipeline/streaming in the browser.) ([Hugging Face][1])

**TTS primary (kokoro) streaming**

```js
const sentences = splitIntoSentences(text);
for await (const { audio, text: seg } of kokoro.stream(sentences)) {
  worklet.port.postMessage({ type: 'pcm', data: audio }); // Float32Array
  queueHighlight(seg); // track which sentence to mark when played
}
```

(Kokoro 82M ONNX used locally; stream yields small audio chunks.) ([Hugging Face][4])

**AudioWorklet processor (concept)**

```js
class PCMQueueProcessor extends AudioWorkletProcessor {
  constructor(){ super(); this.q = []; this.port.onmessage = e => this.q.push(e.data); }
  process(_, outputs) {
    const out = outputs[0][0];
    // fill 'out' from this.q front chunk; when chunk drains → postMessage('next_chunk')
    return true;
  }
}
registerProcessor('pcm-queue', PCMQueueProcessor);
```

(Worklet runs on the audio rendering thread for low-latency custom processing.) ([MDN Web Docs][3])

**TTS fallback (Web Speech)**

```js
for (const s of splitIntoSentences(text)) {
  const u = new SpeechSynthesisUtterance(s);
  u.onstart = () => markSpoken(s);
  speechSynthesis.speak(u);
}
```

(Controller is `window.speechSynthesis`; supports pause/resume/cancel.) ([MDN Web Docs][5])

---

## 11) Folder layout (tiny)

```
/public
  /models/llm/...      # ONNX weights/tokenizer
  /models/tts/...      # kokoro ONNX weights
/src
  index.html           # minimal UI + tabs
  app.js               # controller
  llm.js               # Transformers.js glue
  tts.js               # kokoro + fallback
  audio.js             # AudioContext/Worklet setup
  worklet.js           # PCMQueueProcessor
```

---

## 12) Test checklist

* **WebGPU path:** Chrome/Edge on desktop with `navigator.gpu` → device label shows “webgpu”; generation visibly streams.
* **WASM path:** Run in a browser without WebGPU → device label “wasm”; still streams (slower).
* **TTS primary:** kokoro plays sentences; highlight advances per chunk; Stop resets state.
* **Fallback TTS:** disable kokoro / delete models → Web Speech works with voice selection.
* **Offline:** stop network after first successful run (assets cached) → demo still works.

---

## 13) What to leave out (by design)

* No complex prompt engineering or long stories (keep latency tight).
* No user accounts, no server APIs, no persistence beyond model cache.
* No background music/SFX (optional stretch).

---

## 14) Stretch goals (nice-to-have)

* Toggle quantized LLM/TTS weights to compare speed/quality.
* Metrics overlay (TTFB, tok/s, audio buffer fill %).
* Button to clear model cache (IndexedDB/Cache) and re-measure cold start.

---

### References (core, load-bearing)

* Transformers.js **pipeline & browser usage** (WebGPU/WASM, in-browser models). ([Hugging Face][1])
* ONNX Runtime Web **front-end backends** (WebGPU/WASM) used under Transformers.js. ([onnxruntime.ai][2])
* Transformers.js **env** (allow remote/local models, browser cache). ([Hugging Face][6])
* **Kokoro 82M** ONNX TTS (JS usage & model). ([Hugging Face][4])
* **AudioWorklet** for low-latency custom audio processing. ([MDN Web Docs][3])
* **Web Speech API** `speechSynthesis` fallback. ([MDN Web Docs][5])

If a README skeleton or a ready-to-run template is needed next, say the word and I’ll package it.

[1]: https://huggingface.co/docs/transformers.js/en/pipelines?utm_source=chatgpt.com "The pipeline API"
[2]: https://onnxruntime.ai/docs/tutorials/web/?utm_source=chatgpt.com "Web | onnxruntime"
[3]: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet?utm_source=chatgpt.com "AudioWorklet - Web APIs | MDN"
[4]: https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX?utm_source=chatgpt.com "onnx-community/Kokoro-82M-v1.0-ONNX"
[5]: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis?utm_source=chatgpt.com "SpeechSynthesis - Web APIs | MDN"
[6]: https://huggingface.co/docs/transformers.js/en/api/env?utm_source=chatgpt.com "env"
