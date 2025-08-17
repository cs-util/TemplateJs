/**
 * Test setup for transformers.js mocking
 * This module provides consistent mocking for transformers across all tests
 */

// Create a mock transformers environment
const mockEnv = {
  useBrowserCache: false,
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

// Create a configurable mock pipeline implementation
let mockPipelineImpl = async () => async () => ({ generated_text: 'mocked response' });

const mockPipeline = jest.fn(async () => mockPipelineImpl);
mockPipeline.__setImpl = (fn) => { mockPipelineImpl = fn; };

// Mock the transformers-config module
jest.mock('../transformers-config.js', () => ({
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

// Mock the browser-transformers module for app tests
jest.mock('../browser-transformers.js', () => ({
  initializeBrowserTransformers: jest.fn(async () => ({
    pipeline: mockPipeline,
    env: mockEnv
  }))
}));

// Mock @huggingface/transformers package directly for compatibility
jest.mock('@huggingface/transformers', () => ({
  env: mockEnv,
  pipeline: mockPipeline
}));

export { mockPipeline, mockEnv };
