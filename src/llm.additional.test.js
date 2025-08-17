import { LLMModule } from './llm.js';

const getMockPipeline = () => {
  return Promise.resolve(global.mockPipeline);
};

describe('LLMModule additional coverage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    delete window.transformers;
    Object.defineProperty(global.navigator, 'hardwareConcurrency', { value: 8, configurable: true });
    if ('gpu' in navigator) {
      Object.defineProperty(navigator, 'gpu', { value: undefined, configurable: true });
    }
  });

  test('non-streaming path simulates token streaming when onToken provided', async () => {
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async () => [{ generated_text: 'Hello world' }]);
    const m = new LLMModule();
    const received = [];
    const genPromise = m.generate('Prompt', { onToken: t => received.push(t) });
    // Wait sufficient time for simulated streaming (50ms per token)
    await new Promise(r => setTimeout(r, 600));
    const result = await genPromise;
    expect(result).toBe('Hello world');
    expect(received.join('')).toBe('Hello world');
    expect(received.length).toBeGreaterThanOrEqual(3); // "Hello", space, "world"
  });

  test('device, model id and initialized state accessors', async () => {
    const pipeline = await getMockPipeline();
    pipeline.__setImpl(async () => [{ generated_text: 'Accessor' }]);
    const m = new LLMModule();
    expect(m.isInitialized()).toBe(false);
    await m.generate('x');
    expect(m.isInitialized()).toBe(true);
    expect(['wasm', 'webgpu']).toContain(m.getDevice());
    expect(m.getModelId()).toContain('Qwen2.5');
  });
});
