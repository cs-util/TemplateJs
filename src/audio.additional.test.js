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

  test('resume ignores if not paused', async () => {
    await instance.initialize();
    await instance.resume();
    // Should not throw
  });

  test('destroy cleans resources', async () => {
    await instance.initialize();
    instance.destroy();
    expect(instance.audioContext).toBeNull();
    expect(instance.workletNode).toBeNull();
    expect(instance.isInitialized).toBe(false);
  });
});
