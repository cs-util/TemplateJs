import { AudioProcessor } from './audio-processor.js';

describe('AudioProcessor', () => {
  let processor;

  beforeEach(() => {
    processor = new AudioProcessor(24000);
  });

  test('should initialize with correct sample rate', () => {
    expect(processor.sampleRate).toBe(24000);
    expect(processor.getBufferLength()).toBe(0);
  });

  test('should process Float32Array audio chunks', () => {
    const audioData = new Float32Array([0.1, 0.2, 0.3]);
    const result = processor.processAudioChunk(audioData);
    
    expect(result).toEqual(audioData);
    expect(processor.getBufferLength()).toBe(3);
  });

  test('should process Array audio chunks', () => {
    const audioData = [0.1, 0.2, 0.3];
    const result = processor.processAudioChunk(audioData);
    
    expect(result).toBeInstanceOf(Float32Array);
    expect(result.length).toBe(audioData.length);
    expect(processor.getBufferLength()).toBe(3);
  });

  test('should throw error for invalid audio data', () => {
    expect(() => processor.processAudioChunk(null)).toThrow('Invalid audio data');
    expect(() => processor.processAudioChunk([])).toThrow('Invalid audio data');
    expect(() => processor.processAudioChunk("invalid")).toThrow('Audio data must be Float32Array or Array');
  });

  test('should calculate buffer duration correctly', () => {
    const audioData = new Float32Array(24000); // 1 second of audio at 24kHz
    processor.processAudioChunk(audioData);
    
    expect(processor.getBufferDuration()).toBe(1);
  });

  test('should clear buffer', () => {
    processor.processAudioChunk(new Float32Array([1, 2, 3]));
    expect(processor.getBufferLength()).toBe(3);
    
    processor.clearBuffer();
    expect(processor.getBufferLength()).toBe(0);
  });

  test('should resample audio', () => {
    // Fill buffer with test data
    processor.buffer = [1, 2, 3, 4, 5, 6];
    
    // Test no resampling needed
    const noResample = processor.resample(24000);
    expect(noResample).toEqual(new Float32Array([1, 2, 3, 4, 5, 6]));
    
    // Test downsampling
    const downsampled = processor.resample(12000);
    expect(downsampled.length).toBe(3);
    expect(downsampled[0]).toBe(1);
    expect(downsampled[1]).toBe(3);
    expect(downsampled[2]).toBe(5);
  });
});
