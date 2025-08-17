/**
 * Test setup for transformers.js mocking
 * This module provides consistent mocking for transformers across all tests
 */

import { 
  createMockEnv, 
  createMockPipeline, 
  createMockTransformersConfig,
  createMockBrowserTransformers,
  createMockTransformersPackage
} from './transformers-test-utils.js';

// Create shared mock instances
const mockEnv = createMockEnv();
const mockPipeline = createMockPipeline();

// Mock the transformers-config module
jest.mock('../transformers-config.js', () => createMockTransformersConfig(mockPipeline, mockEnv));

// Mock the browser-transformers module for app tests
jest.mock('../browser-transformers.js', () => createMockBrowserTransformers(mockPipeline, mockEnv));

// Mock @huggingface/transformers package directly for compatibility
jest.mock('@huggingface/transformers', () => createMockTransformersPackage(mockPipeline, mockEnv));

export { mockPipeline, mockEnv };
