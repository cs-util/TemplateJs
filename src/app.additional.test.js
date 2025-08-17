/**
 * Additional coverage tests for app.js UI controller.
 */

// Mock dependent modules before requiring app.js
jest.mock('./llm.js', () => {
  return { LLMModule: jest.fn().mockImplementation(() => ({
    generate: jest.fn(async (prompt, { onToken, onProgress } = {}) => {
      // Simulate progress callbacks
      if (onProgress) {
        onProgress({ percentage: 10, text: 'init' });
        onProgress({ percentage: 100, text: 'done' });
      }
      // Stream a couple tokens
      if (onToken) {
        onToken('Hello');
        onToken(' world');
      }
    })
  })) };
});

jest.mock('./tts.js', () => {
  return { TTSModule: jest.fn().mockImplementation(() => ({
    speak: jest.fn(async (text, { onProgress, outputElement } = {}) => {
      if (onProgress) {
        onProgress({ percentage: 50, text: 'loading' });
        onProgress({ percentage: 100, text: 'ready' });
      }
      if (outputElement) {
        // Directly set text without referencing outer-scope document
        outputElement.textContent = text;
      }
    }),
    pause: jest.fn(),
    resume: jest.fn(),
    stop: jest.fn(),
    setRate: jest.fn(),
    setPitch: jest.fn(),
    setVoice: jest.fn(),
    markSentenceSpoken: jest.fn()
  })) };
});

jest.mock('./audio.js', () => {
  return { AudioModule: jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    pause: jest.fn(),
    resume: jest.fn(),
    stop: jest.fn()
  })) };
});

// Basic navigator mock
Object.defineProperty(global, 'navigator', {
  value: { gpu: undefined },
  writable: true
});

describe('AppController (app.js)', () => {
  let AppController;

  function buildDOM() {
    document.body.innerHTML = `
      <div id="device-status"></div>
      <div id="loading-progress" class="hidden"><div id="progress-bar"></div><span id="loading-text"></span></div>
      <textarea id="llm-prompt"></textarea>
      <button id="generate-btn">Generate</button>
      <div id="llm-output"></div>
      <div id="tts-output"></div>
      <div id="ttfb"></div>
      <div id="tokens-per-sec"></div>
      <div id="llm-status"></div>
      <textarea id="tts-text"></textarea>
      <button id="tts-play"></button>
      <button id="tts-pause"></button>
      <button id="tts-resume"></button>
      <button id="tts-stop"></button>
      <span id="rate-value"></span><input id="tts-rate" type="range" value="1" />
      <span id="pitch-value"></span><input id="tts-pitch" type="range" value="1" />
      <select id="tts-voice"><option value="voice1">voice1</option></select>
      <textarea id="combined-prompt"></textarea>
      <button id="generate-speak-btn">Generate & Speak</button>
      <div id="combined-output"></div>
      <button id="combined-pause"></button>
      <button id="combined-stop"></button>
      <div id="tts-status"></div>
      <div id="error-container" class="hidden"><span id="error-message"></span></div>
      <button class="tab-btn" data-tab="llm-stream"></button>
      <button class="tab-btn" data-tab="tts-only"></button>
      <button class="tab-btn" data-tab="llm-tts"></button>
      <div id="llm-stream" class="tab-content"></div>
      <div id="tts-only" class="tab-content"></div>
      <div id="llm-tts" class="tab-content"></div>
    `;
  }

  beforeEach(() => {
    jest.resetModules();
    buildDOM();
  require('./app.js'); // register DOMContentLoaded listener
  // Trigger DOMContentLoaded to instantiate AppController
  document.dispatchEvent(new Event('DOMContentLoaded'));
  AppController = window.app.constructor;
  });

  test('initialization sets up UI and unsupported device status', () => {
    expect(document.getElementById('device-status').textContent).toContain('wasm');
    // Tab switch default
    expect(window.app.currentTab).toBe('llm-stream');
  });

  test('generateText happy path streams tokens and updates stats', async () => {
    const prompt = document.getElementById('llm-prompt');
    prompt.value = 'Test prompt';
    await window.app.generateText();
    expect(document.getElementById('llm-output').textContent).toBe('Hello world');
    expect(document.getElementById('ttfb').textContent).toContain('TTFB');
    expect(document.getElementById('tokens-per-sec').textContent).toContain('Tokens');
  });

  test('generateText with empty prompt shows error', async () => {
    await window.app.generateText();
    expect(document.getElementById('error-container').classList.contains('hidden')).toBe(false);
  });

  test('playTTS happy path renders output', async () => {
    const text = document.getElementById('tts-text');
    text.value = 'Hello audio';
    await window.app.playTTS();
    expect(document.getElementById('tts-output').textContent || document.getElementById('tts-output').innerHTML).toContain('Hello audio');
  });

  test('playTTS with empty text shows error', async () => {
    await window.app.playTTS();
    expect(document.getElementById('error-container').classList.contains('hidden')).toBe(false);
  });

  test('pause/resume/stop delegate to modules', () => {
    const tts = window.app.tts;
    const audio = window.app.audio;
    window.app.pauseTTS();
    window.app.resumeTTS();
    window.app.stopTTS();
    expect(tts.pause).toHaveBeenCalled();
    expect(tts.resume).toHaveBeenCalled();
    expect(tts.stop).toHaveBeenCalled();
    expect(audio.pause).toHaveBeenCalled();
    expect(audio.resume).toHaveBeenCalled();
    expect(audio.stop).toHaveBeenCalled();
  });

  test('generateAndSpeak runs both generation and speech', async () => {
    const prompt = document.getElementById('combined-prompt');
    prompt.value = 'Combined test';
    await window.app.generateAndSpeak();
    // After speak output should contain tokens
    expect(document.getElementById('combined-output').textContent).toContain('Hello world');
  });

  test('showProgress and updateProgress manipulate DOM', () => {
    window.app.showProgress(true, 'Loading test');
    expect(document.getElementById('loading-progress').classList.contains('hidden')).toBe(false);
    window.app.updateProgress(55, 'Halfway');
    expect(document.getElementById('progress-bar').style.width).toBe('55%');
    window.app.showProgress(false);
    expect(document.getElementById('loading-progress').classList.contains('hidden')).toBe(true);
  });

  test('detectDevice with gpu support variations', async () => {
    // Force new app with gpu present and adapter
    navigator.gpu = { requestAdapter: jest.fn().mockResolvedValue({}) };
    buildDOM();
    const controller = new AppController();
    await controller.detectDevice();
    expect(document.getElementById('device-status').textContent).toBe('webgpu');
    // Adapter null path
    navigator.gpu.requestAdapter.mockResolvedValueOnce(null);
    await controller.detectDevice();
    expect(document.getElementById('device-status').textContent).toContain('unavailable');
  });

  test('showError displays then hides message', () => {
    jest.useFakeTimers();
    window.app.showError('Problem occurred');
    const container = document.getElementById('error-container');
    expect(container.classList.contains('hidden')).toBe(false);
    jest.advanceTimersByTime(5000);
    expect(container.classList.contains('hidden')).toBe(true);
    jest.useRealTimers();
  });

  test('generateText handles generation error path', async () => {
    // Replace llm.generate to throw
    const original = window.app.llm.generate;
    window.app.llm.generate = jest.fn(async () => { throw new Error('boom'); });
    const prompt = document.getElementById('llm-prompt');
    prompt.value = 'Err path';
    await window.app.generateText();
    expect(document.getElementById('error-container').classList.contains('hidden')).toBe(false);
    window.app.llm.generate = original;
  });

  test('playTTS handles speak error path', async () => {
    const original = window.app.tts.speak;
    window.app.tts.speak = jest.fn(async () => { throw new Error('tts fail'); });
    const text = document.getElementById('tts-text');
    text.value = 'Err path';
    await window.app.playTTS();
    expect(document.getElementById('error-container').classList.contains('hidden')).toBe(false);
    window.app.tts.speak = original;
  });

  test('generateAndSpeak error during generation', async () => {
    const original = window.app.llm.generate;
    window.app.llm.generate = jest.fn(async () => { throw new Error('gen fail'); });
    const prompt = document.getElementById('combined-prompt');
    prompt.value = 'Err path';
    await window.app.generateAndSpeak();
    expect(document.getElementById('error-container').classList.contains('hidden')).toBe(false);
    window.app.llm.generate = original;
  });

  test('detectDevice error branch (adapter throw)', async () => {
    navigator.gpu = { requestAdapter: jest.fn().mockRejectedValue(new Error('fail')) };
    buildDOM();
    const controller = new AppController();
    await controller.detectDevice();
    expect(document.getElementById('device-status').textContent).toContain('error');
  });

  test('updateTTSControls is callable (no-op)', () => {
    expect(() => window.app.updateTTSControls()).not.toThrow();
  });

  test('generateText early return when already generating', async () => {
    window.app.isGenerating = true;
    const spy = jest.spyOn(window.app.llm, 'generate');
    await window.app.generateText();
    expect(spy).not.toHaveBeenCalled();
    window.app.isGenerating = false;
  });

  test('generateAndSpeak early return when busy', async () => {
    window.app.isGenerating = true;
    const spy = jest.spyOn(window.app.llm, 'generate');
    await window.app.generateAndSpeak();
    expect(spy).not.toHaveBeenCalled();
    window.app.isGenerating = false;
  });

  test('playTTS stops existing speech first', async () => {
    window.app.isSpeaking = true;
    const stopSpy = jest.spyOn(window.app, 'stopTTS');
    const text = document.getElementById('tts-text');
    text.value = 'Re-speak';
    await window.app.playTTS();
    expect(stopSpy).toHaveBeenCalled();
  });

  test('pauseTTS and resumeTTS call underlying modules', () => {
    const pauseSpy = jest.spyOn(window.app.tts, 'pause');
    const resumeSpy = jest.spyOn(window.app.tts, 'resume');
    window.app.pauseTTS();
    window.app.resumeTTS();
    expect(pauseSpy).toHaveBeenCalled();
    expect(resumeSpy).toHaveBeenCalled();
  });

  test('stopTTS sets flags and calls underlying modules', () => {
    const stopSpy = jest.spyOn(window.app.tts, 'stop');
    window.app.isSpeaking = true;
    window.app.stopTTS();
    expect(stopSpy).toHaveBeenCalled();
    expect(window.app.isSpeaking).toBe(false);
  });

  test('event listeners wiring invokes handlers', async () => {
    const generateBtn = document.getElementById('generate-btn');
    document.getElementById('llm-prompt').value = 'Prompt via click';
    generateBtn.click();
    // Allow async generate
    await Promise.resolve();

    const ttsText = document.getElementById('tts-text');
    ttsText.value = 'Play via click';
    document.getElementById('tts-play').click();
    await Promise.resolve();

    document.getElementById('tts-pause').click();
    document.getElementById('tts-resume').click();
    document.getElementById('tts-stop').click();

    // Rate/pitch change
    const rate = document.getElementById('tts-rate');
    rate.value = '1.2';
    rate.dispatchEvent(new Event('input'));
    const pitch = document.getElementById('tts-pitch');
    pitch.value = '0.8';
    pitch.dispatchEvent(new Event('input'));
    const voice = document.getElementById('tts-voice');
    voice.value = 'voice1';
    voice.dispatchEvent(new Event('change'));

    // Combined generate & speak
    document.getElementById('combined-prompt').value = 'Combined via click';
    document.getElementById('generate-speak-btn').click();
    await Promise.resolve();

    document.getElementById('combined-pause').click();
    document.getElementById('combined-stop').click();

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => btn.click());

    expect(window.app.llm.generate).toHaveBeenCalled();
    expect(window.app.tts.speak).toHaveBeenCalled();
    expect(window.app.tts.setRate).toHaveBeenCalledWith(1.2);
    expect(window.app.tts.setPitch).toHaveBeenCalledWith(0.8);
    expect(window.app.tts.setVoice).toHaveBeenCalledWith('voice1');
  });
});
