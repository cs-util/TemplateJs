import { LLMModule } from './llm.js';

// Mock @huggingface/transformers minimal API used
jest.mock('@huggingface/transformers', () => {
  const env = {
    useBrowserCache: false,
    allowLocalModels: false,
    allowRemoteModels: true,
    backends: { onnx: { wasm: { numThreads: 0 } } },
  };
  return {
    env,
    pipeline: jest.fn(async () => async () => ({ generated_text: 'ok' })),
  };
});

describe('LLMModule environment configuration', () => {
  beforeEach(() => {
    // Redefine hardwareConcurrency via defineProperty if needed
    Object.defineProperty(global.navigator, 'hardwareConcurrency', { value: 2, configurable: true });
    // Ensure gpu is undefined (simulate lack of WebGPU) – if property not present add it
    if ('gpu' in global.navigator) {
      Object.defineProperty(global.navigator, 'gpu', { value: undefined, configurable: true });
    }
  });

  test('initializes without xenova CDN import and configures env after pipeline load', async () => {
    const mod = new LLMModule();
    const { env, pipeline } = await import('@huggingface/transformers');
    // Not yet configured until initializePipeline runs
    expect(env.useBrowserCache).toBe(false);
    await mod.generate('hi', { onToken: () => {} });
    expect(pipeline).toHaveBeenCalled();
    expect(env.useBrowserCache).toBe(true);
    expect(env.allowLocalModels).toBe(true);
  });

  test('respects LOCAL_LLM_LOCAL_ONLY flag after initialization', async () => {
    window.LOCAL_LLM_LOCAL_ONLY = true;
    const mod = new LLMModule();
    const { env } = await import('@huggingface/transformers');
    await mod.generate('hello', { onToken: () => {} });
    expect(env.allowRemoteModels).toBe(false);
    delete window.LOCAL_LLM_LOCAL_ONLY;
  });
});
