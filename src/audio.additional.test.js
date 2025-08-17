/**
 * Additional coverage for audio.js (AudioModule)
 */

describe('AudioModule', () => {
  let AudioModule;
  let instance;
  let originalAudioContext;

  beforeEach(() => {
    jest.resetModules();
    // Mock AudioContext
    originalAudioContext = global.AudioContext;
    const mockPort = { postMessage: jest.fn(), onmessage: null };
    const mockWorkletNode = {
      port: mockPort,
      connect: jest.fn(),
      disconnect: jest.fn()
    };
    const mockContext = {
      state: 'running',
      audioWorklet: { addModule: jest.fn().mockResolvedValue(undefined) },
      resume: jest.fn().mockResolvedValue(undefined),
      close: jest.fn().mockResolvedValue(undefined),
      destination: {}
    };
    global.AudioWorkletNode = jest.fn().mockImplementation(() => mockWorkletNode);
    global.AudioContext = jest.fn().mockImplementation(() => mockContext);
    global.window = { AudioContext: global.AudioContext, webkitAudioContext: undefined };
    ({ AudioModule } = require('./audio.js'));
    instance = new AudioModule();
  });

  afterEach(() => {
    global.AudioContext = originalAudioContext;
  });

  test('initialize sets up worklet and event bridge', async () => {
    await instance.initialize();
    expect(instance.isInitialized).toBe(true);
    expect(instance.workletNode).toBeTruthy();
  });

  test('queueAudio initializes lazily and posts message', async () => {
    await instance.queueAudio(new Float32Array([0, 1, 0.5]));
    expect(instance.workletNode.port.postMessage).toHaveBeenCalledWith(expect.objectContaining({ type: 'queue-audio' }));
  });

  test('pause resume stop cycle', async () => {
    await instance.initialize();
    await instance.pause();
    expect(instance.isPaused).toBe(true);
    await instance.resume();
    expect(instance.isPaused).toBe(false);
    instance.stop();
    expect(instance.isPaused).toBe(false);
  });

  test('queueAudio while paused stores then flushes', async () => {
    await instance.initialize();
    await instance.pause();
    const initialQueueLen = instance.queue.length;
    await instance.queueAudio(new Float32Array([0.2, 0.3]));
    expect(instance.queue.length).toBe(initialQueueLen + 1);
    await instance.resume();
    // Queue should be flushed
    expect(instance.queue.length).toBe(0);
  });

  test('event forwarding from worklet port', async () => {
    await instance.initialize();
    const events = [];
  instance.addEventListener('next_chunk', () => events.push('next_chunk'));
    instance.addEventListener('chunk-complete', () => events.push('chunk-complete'));
    instance.addEventListener('playback_ended', () => events.push('playback_ended'));
    instance.addEventListener('buffer-underrun', () => events.push('buffer-underrun'));
    const port = instance.workletNode.port;
    port.onmessage({ data: { type: 'next_chunk', data: {} } });
    port.onmessage({ data: { type: 'chunk-complete', data: {} } });
    port.onmessage({ data: { type: 'playback_ended' } });
    port.onmessage({ data: { type: 'buffer-underrun' } });
    expect(events).toEqual([
      'next_chunk','chunk-complete','playback_ended','buffer-underrun'
    ]);
  });

  test('initialize error path', async () => {
    // Force failure on addModule
    jest.resetModules();
    const failingPort = { postMessage: jest.fn(), onmessage: null };
    const failingWorkletNode = { port: failingPort, connect: jest.fn(), disconnect: jest.fn() };
    global.AudioWorkletNode = jest.fn().mockImplementation(() => failingWorkletNode);
    const mockContext = {
      state: 'running',
      audioWorklet: { addModule: jest.fn().mockRejectedValue(new Error('boom')) },
      resume: jest.fn().mockResolvedValue(undefined),
      close: jest.fn().mockResolvedValue(undefined),
      destination: {}
    };
    global.AudioContext = jest.fn().mockImplementation(() => mockContext);
    ({ AudioModule } = require('./audio.js'));
    const inst = new AudioModule();
    await expect(inst.initialize()).rejects.toThrow('Audio initialization failed');
  });

  test('resume ignores if not paused', async () => {
    await instance.initialize();
    await instance.resume();
    // Should not throw
  });

  test('stop without initialization does nothing', () => {
    const fresh = new AudioModule();
    expect(() => fresh.stop()).not.toThrow();
  });

  test('destroy cleans resources', async () => {
    await instance.initialize();
    instance.destroy();
    expect(instance.audioContext).toBeNull();
    expect(instance.workletNode).toBeNull();
    expect(instance.isInitialized).toBe(false);
  });

  test('getBufferStatus returns placeholder', () => {
    expect(instance.getBufferStatus()).toEqual({ length: 0, duration: 0 });
  });
});
