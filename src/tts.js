// Configuration
const FALLBACK_TO_WEB_SPEECH = true;

export class TTSModule {
  constructor() {
    this.kokoroModel = null;
    this.useWebSpeech = false;
    this.isLoading = false;
    this.currentUtterance = null;
    this.currentSplitter = null;
    this.sentences = [];
    this.currentSentenceIndex = 0;
    this.isPaused = false;
    this.isStopped = false;
    
    // Settings
    this.rate = 1.0;
    this.pitch = 1.0;
    this.selectedVoice = null;
    
    this.initializeWebSpeech();
  }

  initializeWebSpeech() {
    if ('speechSynthesis' in window && speechSynthesis) {
      // Load voices
      this.loadVoices();
      
      // Handle voice changes
      speechSynthesis.addEventListener('voiceschanged', () => {
        this.loadVoices();
      });
    }
  }

  loadVoices() {
    if (!('speechSynthesis' in window) || !speechSynthesis) return;
    
    const voices = speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('tts-voice');
    
    if (voiceSelect && voices.length > 0) {
      voiceSelect.innerHTML = '';
      
      voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        if (voice.default) {
          option.selected = true;
          this.selectedVoice = voice;
        }
        voiceSelect.appendChild(option);
      });
      
      if (!this.selectedVoice && voices.length > 0) {
        this.selectedVoice = voices[0];
      }
    }
  }

  async initializeKokoro(onProgress) {
    if (this.kokoroModel) return this.kokoroModel;
    if (this.isLoading) {
      while (this.isLoading) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return this.kokoroModel;
    }

    this.isLoading = true;

    try {
      onProgress?.({ percentage: 0, text: 'Loading Kokoro TTS model...' });
      
      // Check for WebGPU availability first
      if (!navigator.gpu) {
        throw new Error('WebGPU not available');
      }

      // Try to load Kokoro model
      const { KokoroTTS } = await import('kokoro-js');
      
      this.kokoroModel = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
        dtype: "fp32",
        device: "webgpu",
        progress_callback: (item) => {
          if (item.status === "progress" && item.file?.endsWith?.("onnx")) {
            const progress = Math.round(item.progress * 100);
            onProgress?.({ percentage: progress, text: `Loading Kokoro model: ${progress}%` });
          }
        },
      });

      onProgress?.({ percentage: 100, text: 'Kokoro TTS loaded successfully' });
      this.useWebSpeech = false;
      return this.kokoroModel;

    } catch (error) {
      console.warn('Kokoro TTS not available, falling back to Web Speech API:', error);

      if (FALLBACK_TO_WEB_SPEECH && 'speechSynthesis' in window) {
        this.useWebSpeech = true;
        onProgress?.({ percentage: 100, text: 'Using Web Speech API' });
        return 'web-speech';
      } else {
        throw new Error('No TTS system available');
      }
    } finally {
      this.isLoading = false;
    }
  }

  async _simulateModelLoad(onProgress) {
    for (let i = 0; i <= 100; i += 10) {
      onProgress?.({ percentage: i, text: `Loading Kokoro model: ${i}%` });
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  splitIntoSentences(text) {
    // Simple sentence splitting
    return text
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .map(s => s + '.');
  }

  async speak(text, options = {}) {
    const { outputElement, onProgress, audioModule } = options;

    try {
      // Initialize TTS system
      await this.initializeKokoro(onProgress);
      
      // Split text into sentences
      this.sentences = this.splitIntoSentences(text);
      this.currentSentenceIndex = 0;
      this.isStopped = false;
      this.isPaused = false;

      // Display sentences in output element
      if (outputElement) {
        this.displaySentences(outputElement);
      }

      if (this.useWebSpeech) {
        await this.speakWithWebSpeech(outputElement);
      } else {
        await this.speakWithKokoro(audioModule, outputElement);
      }

    } catch (error) {
      console.error('TTS failed:', error);
      throw error;
    }
  }

  displaySentences(outputElement) {
    outputElement.innerHTML = '';
    
    this.sentences.forEach((sentence, index) => {
      const span = document.createElement('span');
      span.textContent = sentence + ' ';
      span.id = `sentence-${index}`;
      span.className = 'sentence';
      outputElement.appendChild(span);
    });
  }

  async speakWithWebSpeech(outputElement) {
    return new Promise((resolve, reject) => {
      let currentIndex = 0;

      const speakNext = () => {
        if (currentIndex >= this.sentences.length || this.isStopped) {
          resolve();
          return;
        }

        if (this.isPaused) {
          // Wait for resume
          setTimeout(speakNext, 100);
          return;
        }

        const sentence = this.sentences[currentIndex];
        const utterance = new SpeechSynthesisUtterance(sentence);
        this.currentUtterance = utterance;

        // Configure utterance
        if (this.selectedVoice) {
          utterance.voice = this.selectedVoice;
        }
        utterance.rate = this.rate;
        utterance.pitch = this.pitch;

        utterance.onstart = () => {
          if (outputElement) {
            this.markSentenceSpoken(currentIndex);
          }
        };

        utterance.onend = () => {
          currentIndex++;
          setTimeout(speakNext, 100); // Small delay between sentences
        };

        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          reject(new Error('Speech synthesis failed'));
        };

        speechSynthesis.speak(utterance);
      };

      speakNext();
    });
  }

  async speakWithKokoro(audioModule, outputElement) {
    // Import Kokoro TTS modules
    const { KokoroTTS, TextSplitterStream } = await import('kokoro-js');
    
    // 0) Guards
    if (!navigator.gpu) {
      throw new Error("WebGPU is required for Kokoro TTS");
    }
    if (!audioModule?.port) {
      throw new Error("Audio worklet not initialized");
    }

    // 1) Load TTS model (cache instance in class to avoid reloading)
    if (!this.kokoroModel) {
      this.kokoroModel = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
        dtype: "fp32",
        device: "webgpu",
        progress_callback: (item) => {
          if (item.status === "progress" && item.file?.endsWith?.("onnx")) {
            // Update progress for ONNX files only
            const progress = Math.round(item.progress * 100);
            console.log(`Loading Kokoro model: ${progress}%`);
            // You can emit a progress event here if needed
          }
        },
      });
    }

    // 2) Get text content and prepare sentences
    const text = outputElement.textContent ?? "";
    if (!text.trim()) {
      throw new Error("No text content to speak");
    }

    // Split into sentences and render as spans for highlighting
    this.sentences = this.splitIntoSentences(text);
    this.displaySentences(outputElement);

    // 3) Initialize tracking variables
    this.pendingTexts = [];
    this.currentSentenceIndex = 0;
    this.isStopped = false;
    this.isPaused = false;

    // 4) Set up worklet message handler
    const originalHandler = audioModule.port.onmessage;
    const onWorkletMsg = (evt) => {
      const data = evt?.data;
      if (!data || typeof data !== "object") return;
      
      if (data.type === "next_chunk") {
        this.advanceHighlight();
      } else if (data.type === "playback_ended") {
        this.finalizeUIState();
      }
      
      // Call original handler if it exists
      if (originalHandler) {
        originalHandler(evt);
      }
    };
    audioModule.port.onmessage = onWorkletMsg;

    // 5) Create splitter and stream
    this.currentSplitter = new TextSplitterStream();
    const stream = this.kokoroModel.stream(this.currentSplitter);

    // 6) Start consuming the stream
    const consume = (async () => {
      try {
        for await (const chunk of stream) {
          if (this.isStopped) break;
          
          if (chunk.audio && chunk.audio.audio) {
            // Send Float32Array PCM data to worklet
            audioModule.port.postMessage(chunk.audio.audio);
          }
          
          if (chunk.text) {
            this.pendingTexts.push(chunk.text);
            this.tryResolveHighlights();
          }
        }
      } catch (error) {
        console.error('TTS streaming error:', error);
        throw error;
      }
    })();

    // 7) Feed text to splitter
    try {
      for (const sentence of this.sentences) {
        if (this.isStopped) break;
        this.currentSplitter.push(sentence + " ");
      }
      this.currentSplitter.close();

      // Wait for stream to complete
      await consume;
      
    } catch (error) {
      console.error('Kokoro TTS failed:', error);
      throw error;
    } finally {
      // Restore original message handler
      audioModule.port.onmessage = originalHandler;
      this.currentSplitter = null;
    }
  }

  // Helper method to advance sentence highlighting
  advanceHighlight() {
    if (this.currentSentenceIndex < this.sentences.length) {
      this.markSentenceSpoken(this.currentSentenceIndex);
      this.currentSentenceIndex++;
    }
  }

  // Helper method to finalize UI state when playback ends
  finalizeUIState() {
    this.isStopped = true;
    this.isPaused = false;
    this.currentSentenceIndex = 0;
    
    // Clear all highlights
    document.querySelectorAll('.sentence.spoken').forEach(el => {
      el.classList.remove('spoken');
    });
  }

  // Helper method to try resolving pending text snippets to highlights
  tryResolveHighlights() {
    // For simplicity, we'll assume the chunks align with sentences
    // In a more sophisticated implementation, you would normalize text
    // and map character ranges as described in the reference
    while (this.pendingTexts.length > 0 && this.currentSentenceIndex < this.sentences.length) {
      const pendingText = this.pendingTexts.shift();
      // Simple matching - in production you'd want more robust text alignment
      if (pendingText && pendingText.trim()) {
        // Text is available, highlight will be triggered by worklet next_chunk message
      }
    }
  }

  markSentenceSpoken(index) {
    const sentenceEl = document.getElementById(`sentence-${index}`);
    if (sentenceEl) {
      // Remove previous highlights
      document.querySelectorAll('.sentence.spoken').forEach(el => {
        el.classList.remove('spoken');
      });
      
      // Highlight current sentence
      sentenceEl.classList.add('spoken');
    }
    
    this.currentSentenceIndex = index;
  }

  pause() {
    if (this.useWebSpeech) {
      speechSynthesis.pause();
    }
    this.isPaused = true;
  }

  resume() {
    if (this.useWebSpeech) {
      speechSynthesis.resume();
    }
    this.isPaused = false;
  }

  stop() {
    this.isStopped = true;
    this.isPaused = false;
    
    if (this.useWebSpeech) {
      speechSynthesis.cancel();
    }
    
    // For Kokoro, stop the stream and clear worklet queue
    if (this.currentSplitter) {
      try {
        this.currentSplitter.close?.();
      } catch (e) {
        // Ignore errors when closing splitter
      }
      this.currentSplitter = null;
    }
    
    // Clear highlights
    document.querySelectorAll('.sentence.spoken').forEach(el => {
      el.classList.remove('spoken');
    });
    
    this.currentSentenceIndex = 0;
  }

  setRate(rate) {
    this.rate = rate;
  }

  setPitch(pitch) {
    this.pitch = pitch;
  }

  setVoice(voiceIndex) {
    const voices = speechSynthesis.getVoices();
    if (voices[voiceIndex]) {
      this.selectedVoice = voices[voiceIndex];
    }
  }

  getAvailableVoices() {
    return speechSynthesis.getVoices();
  }

  isWebSpeechAvailable() {
    return 'speechSynthesis' in window;
  }

  isKokoroAvailable() {
    return this.kokoroModel !== null;
  }

  getCurrentSystem() {
    if (this.kokoroModel) return 'kokoro';
    if (this.useWebSpeech) return 'web-speech';
    return 'none';
  }
}
