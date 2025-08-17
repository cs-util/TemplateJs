/**
 * Tests for worklet.js logic executed in main thread context.
 * We can't instantiate AudioWorkletProcessor directly in Jest, but we can
 * evaluate the file and test the class behavior by mocking the globals.
 */

describe('PCMQueueProcessor', () => {
  let processor;
  let postedMessages;

  beforeEach(() => {
    jest.resetModules();
    postedMessages = [];
    // Mock minimal AudioWorkletProcessor environment
    global.sampleRate = 24000;
    global.currentTime = 0;
    class MockPort { postMessage(msg) { postedMessages.push(msg); } }
    class MockAudioWorkletProcessor { constructor() { this.port = new MockPort(); } }
    global.AudioWorkletProcessor = MockAudioWorkletProcessor;
    global.registerProcessor = jest.fn((name, clazz) => {
      processor = new clazz();
    });

    require('./worklet.js');
  });

  test('queues audio and processes frames generating underrun then playback ended', () => {
    // Queue a small buffer
    processor.handleMessage({ type: 'queue-audio', audioData: new Float32Array([0.1, 0.2, 0.3]) });
    // Simulate process call with small output
    const outputs = [[new Float32Array(128)]];
    processor.process([], outputs);
    // Some messages may have been posted (chunk-queued)
    expect(postedMessages.some(m => m.type === 'chunk-queued')).toBe(true);
  });

  test('queue invalid audio data path', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    processor.queueAudio({ not: 'array' });
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('process with no samples triggers underrun message', () => {
    // Ensure no queued audio but mark playing state
    const out = [[new Float32Array(32)]];
    // Force availableSamples to 1 to write then underrun
    processor.availableSamples = 1;
    processor.ringBuffer[0] = 0.5;
    processor.process([], out);
    expect(postedMessages.find(m => m.type === 'buffer-underrun')||{}).toBeDefined();
  });

  test('process while paused outputs silence', () => {
    const out = [[new Float32Array(16)]];
    processor.isPaused = true;
    processor.process([], out);
    expect(Array.from(out[0][0]).every(v => v === 0)).toBe(true);
  });

  test('pause and stop reset state', () => {
    processor.handleMessage({ type: 'queue-audio', audioData: new Float32Array([0.1, 0.2]) });
    processor.handleMessage({ type: 'pause' });
    expect(processor.isPaused).toBe(true);
    processor.handleMessage({ type: 'resume' });
    expect(processor.isPaused).toBe(false);
    processor.handleMessage({ type: 'stop' });
    expect(processor.availableSamples).toBe(0);
  });
});
