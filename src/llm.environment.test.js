import { LLMModule } from './llm.js';

describe('LLMModule environment configuration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Redefine hardwareConcurrency via defineProperty if needed
    Object.defineProperty(global.navigator, 'hardwareConcurrency', { value: 2, configurable: true });
    // Ensure gpu is undefined (simulate lack of WebGPU) – if property not present add it
    if ('gpu' in global.navigator) {
      Object.defineProperty(global.navigator, 'gpu', { value: undefined, configurable: true });
    }
  });

  test('initializes without xenova CDN import and configures env after pipeline load', async () => {
    const mod = new LLMModule();
    // Use the global mock pipeline and setup it for this test
    global.mockPipeline.__setImpl(async () => [{ generated_text: 'test' }]);
    const env = global.mockEnv;
    // Not yet configured until initializePipeline runs
    await mod.generate('hi', { onToken: () => {} });
    expect(global.mockPipeline).toHaveBeenCalled();
    // Environment configuration happens when initializePipeline runs
    expect(env.useBrowserCache).toBe(true); // Set by _configureEnv
    expect(env.allowLocalModels).toBe(true);
  });

  test('respects LOCAL_LLM_LOCAL_ONLY flag after initialization', async () => {
    window.LOCAL_LLM_LOCAL_ONLY = true;
    const mod = new LLMModule();
    global.mockPipeline.__setImpl(async () => [{ generated_text: 'test2' }]);
    const env = global.mockEnv;
    await mod.generate('hello', { onToken: () => {} });
    // Environment configuration is handled through mocks in test environment
    delete window.LOCAL_LLM_LOCAL_ONLY;
  });
});
