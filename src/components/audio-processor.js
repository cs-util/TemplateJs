// Audio utilities for the Local LLM Demo
export class AudioProcessor {
  constructor(sampleRate = 24000) {
    this.sampleRate = sampleRate;
    this.buffer = [];
  }

  processAudioChunk(audioData) {
    if (!audioData || audioData.length === 0) {
      throw new Error('Invalid audio data');
    }

    // Convert to Float32Array if needed
    let float32Data;
    if (audioData instanceof Float32Array) {
      float32Data = audioData;
    } else if (Array.isArray(audioData)) {
      float32Data = new Float32Array(audioData);
    } else {
      throw new Error('Audio data must be Float32Array or Array');
    }

    this.buffer.push(...float32Data);
    return float32Data;
  }

  getBufferLength() {
    return this.buffer.length;
  }

  getBufferDuration() {
    return this.buffer.length / this.sampleRate;
  }

  clearBuffer() {
    this.buffer = [];
  }

  resample(targetSampleRate) {
    if (targetSampleRate === this.sampleRate) {
      return new Float32Array(this.buffer);
    }

    const ratio = this.sampleRate / targetSampleRate;
    const newLength = Math.floor(this.buffer.length / ratio);
    const resampled = new Float32Array(newLength);

    for (let i = 0; i < newLength; i++) {
      const srcIndex = Math.floor(i * ratio);
      resampled[i] = this.buffer[srcIndex] || 0;
    }

    return resampled;
  }
}
