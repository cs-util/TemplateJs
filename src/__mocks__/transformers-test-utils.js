/**
 * Shared test utilities for transformers mocking
 * This module provides consistent mocking setup across all tests
 */

// Create a mock transformers environment
export const createMockEnv = () => ({
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
});

// Create a configurable mock pipeline implementation
export const createMockPipeline = () => {
  let mockPipelineImpl = async () => async () => ({ generated_text: 'mocked response' });
  
  const mockPipeline = jest.fn(async () => mockPipelineImpl);
  mockPipeline.__setImpl = (fn) => { mockPipelineImpl = fn; };
  
  return mockPipeline;
};

// Create mock transformers config
export const createMockTransformersConfig = (mockPipeline, mockEnv) => ({
  initializeTransformers: jest.fn(async () => ({
    pipeline: mockPipeline,
    env: mockEnv
  })),
  getTransformersInstance: jest.fn(() => ({
    pipeline: mockPipeline,
    env: mockEnv
  })),
  resetTransformersInstance: jest.fn()
});

// Create mock browser transformers
export const createMockBrowserTransformers = (mockPipeline, mockEnv) => ({
  initializeBrowserTransformers: jest.fn(async () => ({
    pipeline: mockPipeline,
    env: mockEnv
  }))
});

// Create mock @huggingface/transformers package
export const createMockTransformersPackage = (mockPipeline, mockEnv) => ({
  env: mockEnv,
  pipeline: mockPipeline
});
