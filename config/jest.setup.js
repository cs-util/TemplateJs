/**
 * Jest setup file for transformers.js mocking
 * This file runs before all tests and sets up necessary mocks
 */

// Create shared mock objects that tests can access
let mockPipelineImpl = async () => async () => ({ generated_text: 'mocked response' });
const mockPipeline = jest.fn(async () => mockPipelineImpl);
mockPipeline.__setImpl = (fn) => { mockPipelineImpl = fn; };

const mockEnv = {
  useBrowserCache: false, // Match test expectations
  allowLocalModels: true,
  allowRemoteModels: true,
  localModelPath: '/models/',
  backends: {
    onnx: {
      wasm: {
        numThreads: 4
      }
    }
  }
};

// Make mocks globally available
global.mockPipeline = mockPipeline;
global.mockEnv = mockEnv;

// Mock browser-transformers to avoid CDN imports in tests
jest.mock('../src/browser-transformers.js', () => ({
  initializeBrowserTransformers: jest.fn(async () => {
    // Return mock transformers for tests
    return {
      pipeline: mockPipeline,
      env: mockEnv
    };
  })
}));

// Mock transformers-config to return controlled test environment
jest.mock('../src/transformers-config.js', () => ({
  initializeTransformers: jest.fn(async () => ({
    pipeline: mockPipeline,
    env: mockEnv
  })),
  getTransformersInstance: jest.fn(() => ({
    pipeline: mockPipeline,
    env: mockEnv
  })),
  resetTransformersInstance: jest.fn()
}));

// Mock @huggingface/transformers package for compatibility
jest.mock('@huggingface/transformers', () => ({
  env: mockEnv,
  pipeline: mockPipeline
}));
