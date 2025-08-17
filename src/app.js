import { LLMModule } from './llm.js';
import { TTSModule } from './tts.js';
import { AudioModule } from './audio.js';

class AppController {
  constructor() {
    this.llm = new LLMModule();
    this.tts = new TTSModule();
    this.audio = new AudioModule();
    
    this.currentTab = 'llm-stream';
    this.isGenerating = false;
    this.isSpeaking = false;
    
    this.initializeUI();
    this.setupEventListeners();
    this.detectDevice();
  }

  async detectDevice() {
    const deviceStatus = document.getElementById('device-status');
    const hasWebGPU = navigator.gpu !== undefined;
    
    if (hasWebGPU) {
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (adapter) {
          deviceStatus.textContent = 'webgpu';
          deviceStatus.className = 'text-green-600';
        } else {
          deviceStatus.textContent = 'wasm (webgpu unavailable)';
          deviceStatus.className = 'text-orange-600';
        }
      } catch {
        deviceStatus.textContent = 'wasm (webgpu error)';
        deviceStatus.className = 'text-orange-600';
      }
    } else {
      deviceStatus.textContent = 'wasm (webgpu unsupported)';
      deviceStatus.className = 'text-orange-600';
    }
  }

  initializeUI() {
    // Initialize tab switching
    this.switchTab('llm-stream');
    
    // Initialize TTS controls
    this.updateTTSControls();
    
    // Hide loading progress initially
    document.getElementById('loading-progress').classList.add('hidden');
  }

  setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.switchTab(e.target.dataset.tab);
      });
    });

    // LLM Stream tab
    document.getElementById('generate-btn').addEventListener('click', () => {
      this.generateText();
    });

    // TTS Only tab
    document.getElementById('tts-play').addEventListener('click', () => {
      this.playTTS();
    });
    document.getElementById('tts-pause').addEventListener('click', () => {
      this.pauseTTS();
    });
    document.getElementById('tts-resume').addEventListener('click', () => {
      this.resumeTTS();
    });
    document.getElementById('tts-stop').addEventListener('click', () => {
      this.stopTTS();
    });

    // TTS controls
    document.getElementById('tts-rate').addEventListener('input', (e) => {
      document.getElementById('rate-value').textContent = e.target.value;
      this.tts.setRate(parseFloat(e.target.value));
    });
    document.getElementById('tts-pitch').addEventListener('input', (e) => {
      document.getElementById('pitch-value').textContent = e.target.value;
      this.tts.setPitch(parseFloat(e.target.value));
    });
    document.getElementById('tts-voice').addEventListener('change', (e) => {
      this.tts.setVoice(e.target.value);
    });

    // LLM → TTS tab
    document.getElementById('generate-speak-btn').addEventListener('click', () => {
      this.generateAndSpeak();
    });
    document.getElementById('combined-pause').addEventListener('click', () => {
      this.pauseTTS();
    });
    document.getElementById('combined-stop').addEventListener('click', () => {
      this.stopTTS();
    });

    // Audio module events
    this.audio.addEventListener('chunk-complete', (data) => {
      this.tts.markSentenceSpoken(data.sentenceIndex);
    });
    this.audio.addEventListener('playback-ended', () => {
      this.isSpeaking = false;
      this.updateTTSControls();
    });
  }

  switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-indigo-600', 'text-white');
      btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active', 'bg-indigo-600', 'text-white');
    document.querySelector(`[data-tab="${tabName}"]`).classList.remove('bg-gray-200', 'text-gray-700');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    this.currentTab = tabName;
  }

  showProgress(show, text = 'Loading models...') {
    const progressContainer = document.getElementById('loading-progress');
    const progressText = document.getElementById('loading-text');
    
    if (show) {
      progressContainer.classList.remove('hidden');
      progressText.textContent = text;
    } else {
      progressContainer.classList.add('hidden');
    }
  }

  updateProgress(percentage, text) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('loading-text');
    
    progressBar.style.width = `${percentage}%`;
    if (text) progressText.textContent = text;
  }

  async generateText() {
    if (this.isGenerating) return;

    const prompt = document.getElementById('llm-prompt').value.trim();
    if (!prompt) {
      this.showError('Please enter a prompt');
      return;
    }

    this.isGenerating = true;
    const generateBtn = document.getElementById('generate-btn');
    const output = document.getElementById('llm-output');
    const statsEl = {
      ttfb: document.getElementById('ttfb'),
      tokensPerSec: document.getElementById('tokens-per-sec')
    };

    generateBtn.textContent = 'Generating...';
    generateBtn.disabled = true;
    output.textContent = '';

    try {
      this.showProgress(true, 'Loading LLM model...');
      
      let startTime = Date.now();
      let firstTokenTime = null;
      let tokenCount = 0;

      await this.llm.generate(prompt, {
        onToken: (token) => {
          if (!firstTokenTime) {
            firstTokenTime = Date.now();
            const ttfb = firstTokenTime - startTime;
            statsEl.ttfb.textContent = `TTFB: ${ttfb}ms`;
          }
          
          tokenCount++;
          output.textContent += token;
          output.scrollTop = output.scrollHeight;
          
          // Update tokens per second
          if (firstTokenTime) {
            const elapsed = (Date.now() - firstTokenTime) / 1000;
            const tokensPerSec = elapsed > 0 ? (tokenCount / elapsed).toFixed(1) : '0';
            statsEl.tokensPerSec.textContent = `Tokens/s: ${tokensPerSec}`;
          }
        },
        onProgress: (progress) => {
          this.updateProgress(progress.percentage, progress.text);
        }
      });

      document.getElementById('llm-status').textContent = 'loaded';
      document.getElementById('llm-status').className = 'text-green-600';
      
    } catch (error) {
      this.showError(`Generation failed: ${error.message}`);
      console.error('Generation error:', error);
    } finally {
      this.isGenerating = false;
      generateBtn.textContent = 'Generate';
      generateBtn.disabled = false;
      this.showProgress(false);
    }
  }

  async playTTS() {
    const text = document.getElementById('tts-text').value.trim();
    if (!text) {
      this.showError('Please enter text to speak');
      return;
    }

    if (this.isSpeaking) {
      this.stopTTS();
    }

    try {
      this.showProgress(true, 'Loading TTS model...');
      this.isSpeaking = true;
      this.updateTTSControls();

      const outputEl = document.getElementById('tts-output');
      outputEl.innerHTML = '';

      await this.tts.speak(text, {
        outputElement: outputEl,
        audioModule: this.audio,
        onProgress: (progress) => {
          this.updateProgress(progress.percentage, progress.text);
        }
      });

      document.getElementById('tts-status').textContent = 'loaded';
      document.getElementById('tts-status').className = 'text-blue-600';

    } catch (error) {
      this.showError(`TTS failed: ${error.message}`);
      console.error('TTS error:', error);
      this.isSpeaking = false;
      this.updateTTSControls();
    } finally {
      this.showProgress(false);
    }
  }

  pauseTTS() {
    this.tts.pause();
    this.audio.pause();
  }

  resumeTTS() {
    this.tts.resume();
    this.audio.resume();
  }

  stopTTS() {
    this.tts.stop();
    this.audio.stop();
    this.isSpeaking = false;
    this.updateTTSControls();
  }

  async generateAndSpeak() {
    const prompt = document.getElementById('combined-prompt').value.trim();
    if (!prompt) {
      this.showError('Please enter a prompt');
      return;
    }

    if (this.isGenerating || this.isSpeaking) return;

    this.isGenerating = true;
    const generateBtn = document.getElementById('generate-speak-btn');
    const output = document.getElementById('combined-output');

    generateBtn.textContent = 'Generating...';
    generateBtn.disabled = true;
    output.innerHTML = '';

    try {
      this.showProgress(true, 'Loading models...');
      
      // Generate text first
      let generatedText = '';
      await this.llm.generate(prompt, {
        onToken: (token) => {
          generatedText += token;
          output.textContent = generatedText;
          output.scrollTop = output.scrollHeight;
        },
        onProgress: (progress) => {
          this.updateProgress(progress.percentage * 0.7, `Loading LLM: ${progress.text}`);
        }
      });

      // Then speak it
      this.isGenerating = false;
      this.isSpeaking = true;
      generateBtn.textContent = 'Speaking...';
      
      output.innerHTML = '';
      await this.tts.speak(generatedText, {
        outputElement: output,
        audioModule: this.audio,
        onProgress: (progress) => {
          this.updateProgress(70 + progress.percentage * 0.3, `Loading TTS: ${progress.text}`);
        }
      });

      document.getElementById('llm-status').textContent = 'loaded';
      document.getElementById('tts-status').textContent = 'loaded';

    } catch (error) {
      this.showError(`Generation/Speech failed: ${error.message}`);
      console.error('Combined error:', error);
    } finally {
      this.isGenerating = false;
      this.isSpeaking = false;
      generateBtn.textContent = 'Generate & Speak';
      generateBtn.disabled = false;
      this.showProgress(false);
    }
  }

  updateTTSControls() {
    // Update button states based on speaking status
    // This would be more complex in a real implementation
  }

  showError(message) {
    const errorContainer = document.getElementById('error-container');
    const errorMessage = document.getElementById('error-message');
    
    errorMessage.textContent = message;
    errorContainer.classList.remove('hidden');
    
    setTimeout(() => {
      errorContainer.classList.add('hidden');
    }, 5000);
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new AppController();
});
