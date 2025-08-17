// AudioWorklet processor for PCM audio playback
class PCMQueueProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    
    // Audio queue and playback state
    this.audioQueue = [];
    this.currentBuffer = null;
    this.bufferPosition = 0;
    this.chunkIndex = 0;
    this.isPaused = false;
    this.isPlaying = false;
    
    // Ring buffer for smooth playback
    this.ringBuffer = new Float32Array(sampleRate * 2); // 2 seconds buffer
    this.writePosition = 0;
    this.readPosition = 0;
    this.availableSamples = 0;
    
    // Handle messages from main thread
    this.port.onmessage = (event) => {
      this.handleMessage(event.data);
    };
  }

  handleMessage(data) {
    const { type } = data;
    
    switch (type) {
      case 'queue-audio':
        this.queueAudio(data.audioData, data.metadata);
        break;
      case 'pause':
        this.isPaused = true;
        break;
      case 'resume':
        this.isPaused = false;
        break;
      case 'stop':
        this.stop();
        break;
    }
  }

  queueAudio(audioData, metadata = {}) {
    // Convert to Float32Array if needed
    let float32Data;
    if (audioData instanceof Float32Array) {
      float32Data = audioData;
    } else if (audioData instanceof Array) {
      float32Data = new Float32Array(audioData);
    } else {
      console.error('Invalid audio data type');
      return;
    }

    this.audioQueue.push({
      data: float32Data,
      metadata: {
        ...metadata,
        chunkIndex: this.chunkIndex++
      }
    });

    // Fill ring buffer
    this.fillRingBuffer();
  }

  fillRingBuffer() {
    while (this.audioQueue.length > 0 && this.availableSamples < this.ringBuffer.length * 0.8) {
      const chunk = this.audioQueue.shift();
      const data = chunk.data;
      
      for (let i = 0; i < data.length; i++) {
        this.ringBuffer[this.writePosition] = data[i];
        this.writePosition = (this.writePosition + 1) % this.ringBuffer.length;
        this.availableSamples++;
        
        // Prevent buffer overflow
        if (this.availableSamples >= this.ringBuffer.length) {
          break;
        }
      }
      
      // Notify that chunk has been queued
      this.port.postMessage({
        type: 'chunk-queued',
        data: chunk.metadata
      });
    }
  }

  stop() {
    this.audioQueue = [];
    this.currentBuffer = null;
    this.bufferPosition = 0;
    this.isPaused = false;
    this.isPlaying = false;
    this.availableSamples = 0;
    this.readPosition = 0;
    this.writePosition = 0;
    this.chunkIndex = 0;
  }

  process(inputs, outputs) {
    const output = outputs[0];
    
    if (!output || output.length === 0) {
      return true;
    }

    const outputChannel = output[0];
    const framesToProcess = outputChannel.length;
    
    if (this.isPaused || this.availableSamples === 0) {
      // Output silence
      outputChannel.fill(0);
      return true;
    }

    let samplesWritten = 0;
    let wasPlaying = this.isPlaying;
    this.isPlaying = true;

    // Fill output buffer from ring buffer
    for (let i = 0; i < framesToProcess; i++) {
      if (this.availableSamples > 0) {
        outputChannel[i] = this.ringBuffer[this.readPosition];
        this.readPosition = (this.readPosition + 1) % this.ringBuffer.length;
        this.availableSamples--;
        samplesWritten++;
      } else {
        // No more audio data, fill with silence
        outputChannel[i] = 0;
      }
    }

    // Check if we need to refill the buffer
    if (this.availableSamples < this.ringBuffer.length * 0.3) {
      this.fillRingBuffer();
    }

    // Report chunk completion based on samples consumed
    if (samplesWritten > 0) {
      const samplesPerChunk = sampleRate * 0.1; // Assuming 100ms chunks
      if (this.bufferPosition > 0 && this.bufferPosition % samplesPerChunk < samplesWritten) {
        this.port.postMessage({
          type: 'chunk-complete',
          data: {
            chunkIndex: Math.floor(this.bufferPosition / samplesPerChunk),
            timestamp: currentTime
          }
        });
      }
      this.bufferPosition += samplesWritten;
    }

    // Check if playback has ended
    if (wasPlaying && this.availableSamples === 0 && this.audioQueue.length === 0) {
      this.isPlaying = false;
      this.port.postMessage({
        type: 'playback-ended'
      });
    }

    // Report buffer underrun if we couldn't fill the entire output buffer
    if (samplesWritten < framesToProcess && this.isPlaying) {
      this.port.postMessage({
        type: 'buffer-underrun',
        data: {
          requested: framesToProcess,
          available: samplesWritten
        }
      });
    }

    return true;
  }
}

// Register the processor
registerProcessor('pcm-queue-processor', PCMQueueProcessor);
