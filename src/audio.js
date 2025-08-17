export class AudioModule extends EventTarget {
  constructor() {
    super();
    this.audioContext = null;
    this.workletNode = null;
    this.isInitialized = false;
    this.isPaused = false;
    this.queue = [];
  }

  async initialize() {
    if (this.isInitialized) return;

    try {
      // Create AudioContext with appropriate sample rate for TTS
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: 24000
      });

      // Load and register the AudioWorklet processor
      await this.audioContext.audioWorklet.addModule('./src/worklet.js');

      // Create the worklet node
      this.workletNode = new AudioWorkletNode(this.audioContext, 'pcm-queue-processor');

      // Connect to speakers
      this.workletNode.connect(this.audioContext.destination);

      // Set up message handling
      this.workletNode.port.onmessage = (event) => {
        const { type, data } = event.data;
        
        switch (type) {
          case 'chunk-complete':
            this.dispatchEvent(new CustomEvent('chunk-complete', { detail: data }));
            break;
          case 'playback-ended':
            this.dispatchEvent(new CustomEvent('playback-ended'));
            break;
          case 'buffer-underrun':
            this.dispatchEvent(new CustomEvent('buffer-underrun'));
            break;
        }
      };

      this.isInitialized = true;

    } catch (error) {
      console.error('Failed to initialize AudioModule:', error);
      throw new Error(`Audio initialization failed: ${error.message}`);
    }
  }

  async resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  async queueAudio(audioData, metadata = {}) {
    await this.initialize();
    await this.resumeAudioContext();

    if (this.isPaused) {
      // Queue for later playback
      this.queue.push({ audioData, metadata });
      return;
    }

    this.workletNode.port.postMessage({
      type: 'queue-audio',
      audioData: audioData,
      metadata: metadata
    });
  }

  async pause() {
    this.isPaused = true;
    
    if (this.workletNode) {
      this.workletNode.port.postMessage({
        type: 'pause'
      });
    }
  }

  async resume() {
    if (!this.isPaused) return;
    
    this.isPaused = false;
    await this.resumeAudioContext();

    // Process any queued audio
    while (this.queue.length > 0) {
      const { audioData, metadata } = this.queue.shift();
      this.workletNode.port.postMessage({
        type: 'queue-audio',
        audioData: audioData,
        metadata: metadata
      });
    }

    if (this.workletNode) {
      this.workletNode.port.postMessage({
        type: 'resume'
      });
    }
  }

  stop() {
    this.isPaused = false;
    this.queue = [];
    
    if (this.workletNode) {
      this.workletNode.port.postMessage({
        type: 'stop'
      });
    }
  }

  getBufferStatus() {
    if (!this.workletNode) return { length: 0, duration: 0 };
    
    // This would require the worklet to report back buffer status
    // For now, return a placeholder
    return { length: 0, duration: 0 };
  }

  destroy() {
    this.stop();
    
    if (this.workletNode) {
      this.workletNode.disconnect();
      this.workletNode = null;
    }
    
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    
    this.isInitialized = false;
  }
}
