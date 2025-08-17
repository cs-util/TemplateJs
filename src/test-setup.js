/**
 * Global test setup for transformers mocking
 */

import { 
  createMockEnv, 
  createMockPipeline, 
  createMockTransformersConfig,
  createMockBrowserTransformers,
  createMockTransformersPackage
} from './__mocks__/transformers-test-utils.js';

// Create shared mock instances
const mockEnv = createMockEnv();
const mockPipeline = createMockPipeline();

// Mock the transformers-config module
jest.mock('./transformers-config.js', () => createMockTransformersConfig(mockPipeline, mockEnv));

// Mock the browser-transformers module for app tests
jest.mock('./browser-transformers.js', () => createMockBrowserTransformers(mockPipeline, mockEnv));

// Mock @huggingface/transformers package directly for compatibility
jest.mock('@huggingface/transformers', () => createMockTransformersPackage(mockPipeline, mockEnv));

// Export for test access
global.mockPipeline = mockPipeline;
global.mockEnv = mockEnv;
