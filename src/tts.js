// Configuration
const TTS_MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
const FALLBACK_TO_WEB_SPEECH = true;

export class TTSModule {
  constructor() {
    this.kokoroModel = null;
    this.useWebSpeech = false;
    this.isLoading = false;
    this.currentUtterance = null;
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
    if ('speechSynthesis' in window) {
      // Load voices
      this.loadVoices();
      
      // Handle voice changes
      speechSynthesis.addEventListener('voiceschanged', () => {
        this.loadVoices();
      });
    }
  }

  loadVoices() {
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
      
      // Try to load Kokoro (this is a placeholder since Kokoro JS wrapper may not be available)
      // In a real implementation, you would load the actual Kokoro model
      
      // Simulate model loading for demonstration
      for (let i = 0; i <= 100; i += 10) {
        onProgress?.({ percentage: i, text: `Loading Kokoro model: ${i}%` });
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // For now, we'll fall back to Web Speech API
      throw new Error('Kokoro model not available in this demo');
      
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

  splitIntoSentences(text) {
    // Simple sentence splitting
    return text
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .map(s => s + '.');
  }

  async speak(text, options = {}) {
    const { outputElement, audioModule, onProgress } = options;

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
    // Placeholder for Kokoro implementation
    // In a real implementation, this would:
    // 1. Load the Kokoro ONNX model
    // 2. Generate audio for each sentence
    // 3. Stream audio to the AudioWorklet
    // 4. Mark sentences as spoken based on audio playback progress
    
    throw new Error('Kokoro TTS not implemented in this demo');
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
