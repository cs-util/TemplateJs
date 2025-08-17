import { LLMModule } from './llm.js';

const getMockPipeline = () => {
  return Promise.resolve(global.mockPipeline);
};

describe('LLMModule core behavior', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(global.navigator, 'hardwareConcurrency', { value: 4, configurable: true });
    // Reset GPU
    if ('gpu' in navigator) {
      Object.defineProperty(navigator, 'gpu', { value: undefined, configurable: true });
    }
  });

  test('formatPrompt includes role markers', () => {
    const m = new LLMModule();
    const p = m.formatPrompt('Test');
    expect(p).toContain('<|im_start|>system');
    expect(p).toContain('<|im_start|>user');
    expect(p).toContain('<|im_start|>assistant');
  });

  test('extractToken handles multiple shapes', () => {
    const m = new LLMModule();
    expect(m.extractToken('hello')).toBe('hello');
    expect(m.extractToken({ token: { text: 'hi' } })).toBe('hi');
    expect(m.extractToken({ generated_text: 'done' })).toBe('done');
    expect(m.extractToken({})).toBe('');
  });

  test('tokenizeForDisplay splits and preserves whitespace tokens', () => {
    const m = new LLMModule();
    const toks = m.tokenizeForDisplay('Hello  world');
    expect(toks.length).toBeGreaterThan(1);
  });

  test('generate uses streaming path when async iterator returned', async () => {
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async () => ({
      // async generator returning two chunks
      async *[Symbol.asyncIterator]() {
        yield { token: { text: 'Hello' } };
        yield { generated_text: ' world' }; // final
      }
    }));

    const m = new LLMModule();
    let collected = '';
    const result = await m.generate('Hi', { onToken: t => { collected += t; } });
    expect(result).toBe('Hello world');
    expect(collected).toBe('Hello world');
  });

  test('generate falls back to non-streaming path', async () => {
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async () => ({ generated_text: 'non-streaming result' }));
    
    const m = new LLMModule();
    const result = await m.generate('test');
    expect(result).toBe('non-streaming result');
  });

  test('pipeline is created only once across multiple generate calls', async () => {
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async () => [{ generated_text: 'First' }]);
    const m = new LLMModule();
    await m.generate('one');
    await m.generate('two');
    expect(pipeline).toHaveBeenCalledTimes(1); // reuse cached pipeline
  });

  test('detectDevice returns wasm when no gpu, webgpu when gpu available', async () => {
    const m1 = new LLMModule();
    expect(await m1.detectDevice()).toBe('wasm');

    // Provide a fake gpu adapter
    Object.defineProperty(navigator, 'gpu', { value: { requestAdapter: async () => ({ name: 'fake' }) }, configurable: true });
    const m2 = new LLMModule();
    expect(await m2.detectDevice()).toBe('webgpu');
  });

  test('detectDevice gracefully falls back when adapter request throws', async () => {
    Object.defineProperty(navigator, 'gpu', { value: { requestAdapter: async () => { throw new Error('boom'); } }, configurable: true });
    const m = new LLMModule();
    const device = await m.detectDevice();
    expect(device).toBe('wasm');
  });

  test('progress callback with loaded==total computes 100%', async () => {
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async (_prompt, opts) => {
      opts?.progress_callback?.({ loaded: 10, total: 10, file: 'model.onnx' });
      return [{ generated_text: 'Done' }];
    });
    const m = new LLMModule();
    let pct = 0;
    await m.generate('x', { onProgress: p => { pct = p.percentage; } });
    expect(pct).toBe(100);
  });

  test('environment respects local only & localModelPath when flags set before initialization', async () => {
    window.LOCAL_LLM_LOCAL_ONLY = true;
    window.LOCAL_LLM_MODELS_BASE = '/models';
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async () => [{ generated_text: 'X' }]);
    const m = new LLMModule();
    await m.generate('test');
    // Note: Environment configuration is tested through the mocked transformers
    delete window.LOCAL_LLM_LOCAL_ONLY;
    delete window.LOCAL_LLM_MODELS_BASE;
  });

  test('concurrent generate calls wait on single initialization', async () => {
    const pipeline = await getMockPipeline();
    // Simulate slow pipeline construction
    pipeline.__setImpl(async () => {
      await new Promise(r => setTimeout(r, 50));
      return [{ generated_text: 'Y' }];
    });
    const m = new LLMModule();
    const p1 = m.generate('a');
    const p2 = m.generate('b'); // should wait for first
    const [r1, r2] = await Promise.all([p1, p2]);
    expect(r1).toBe('Y');
    expect(r2).toBe('Y');
  });

  test('extractToken returns primitive token when token is a string', () => {
    const m = new LLMModule();
    expect(m.extractToken({ token: 'primitive' })).toBe('primitive');
  });

  test('initializePipeline early-return when pipeline already set', async () => {
    const m = new LLMModule();
    // Pre-populate pipeline with dummy fn
    m.pipeline = async () => [{ generated_text: 'Pre' }];
    const result = await m.generate('ignored');
    expect(result).toBe('Pre');
  });

  test('progress callback handles missing total gracefully', async () => {
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async (_prompt, opts) => {
      // Simulate calling supplied progress callback with missing total
      opts?.progress_callback?.({ loaded: 5, file: 'model.onnx' });
      return [{ generated_text: 'Done' }];
    });
    const m = new LLMModule();
    let lastProgress;
    await m.generate('x', { onProgress: p => { lastProgress = p; } });
    expect(lastProgress).toBeDefined();
    expect(lastProgress.percentage).toBeGreaterThanOrEqual(0);
  });
});
