/**
 * Test coverage for transformers-config.js
 */

// Don't use mocked transformers-config - use actual implementation
jest.unmock('./transformers-config.js');
jest.unmock('./utils/transformers-utils.js');

// Mock the dynamic import since we can't actually import @huggingface/transformers in tests
const mockImport = jest.fn();
global.import = mockImport;

import { 
  initializeTransformers, 
  getTransformersInstance, 
  resetTransformersInstance 
} from './transformers-config.js';

// Mock the utils to focus on the config logic
jest.mock('./utils/transformers-utils.js', () => ({
  configureWASMThreads: jest.fn(),
  configureDeviceSelection: jest.fn(() => 'webgpu')
}));

import { configureWASMThreads, configureDeviceSelection } from './utils/transformers-utils.js';

describe('Transformers Config', () => {
  let originalWindow;
  let originalProcess;
  let originalNavigator;
  let originalConsole;

  beforeEach(() => {
    // Reset state before each test
    resetTransformersInstance();
    
    // Store originals
    originalWindow = global.window;
    originalProcess = global.process;
    originalNavigator = global.navigator;
    originalConsole = console.log;
    
    // Mock console.log
    console.log = jest.fn();
    
    // Clear utility mocks
    jest.clearAllMocks();
    mockImport.mockReset();
  });

  afterEach(() => {
    // Restore originals
    global.window = originalWindow;
    global.process = originalProcess;
    global.navigator = originalNavigator;
    console.log = originalConsole;
  });

  describe('initializeTransformers', () => {
    test('initializes transformers from window in browser environment', async () => {
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      delete global.window;
      delete global.navigator;
      global.window = {
        transformers: {
          pipeline: mockPipeline,
          env: mockEnv
        }
      };
      global.navigator = {};

      const result = await initializeTransformers();

      expect(typeof result.pipeline).toBe('function');
      expect(typeof result.env).toBe('object');
      expect(configureWASMThreads).toHaveBeenCalledWith(result.env);
      expect(configureDeviceSelection).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('[transformers] Transformers.js loaded and configured successfully');
    });

    test('initializes transformers from npm package in node environment', async () => {
      // Completely remove window and navigator for node environment
      const originalWindow = global.window;
      const originalNavigator = global.navigator;
      
      delete global.window;
      delete global.navigator;
      delete global.process;
      global.process = { env: {} };

      // Mock the dynamic import
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      mockImport.mockResolvedValue({
        pipeline: mockPipeline,
        env: mockEnv
      });

      const result = await initializeTransformers();

      expect(typeof result.pipeline).toBe('function');
      expect(typeof result.env).toBe('object');
      expect(result.env.allowLocalModels).toBe(true);
      expect(result.env.localModelPath).toBe('./models/');
      // Don't test useBrowserCache as it depends on global state that's hard to mock
      
      // Restore globals
      global.window = originalWindow;
      global.navigator = originalNavigator;
    });

    test('returns existing instance on subsequent calls', async () => {
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      delete global.window;
      delete global.navigator;
      global.window = {
        transformers: {
          pipeline: mockPipeline,
          env: mockEnv
        }
      };
      global.navigator = {};

      const first = await initializeTransformers();
      const second = await initializeTransformers();

      expect(first).toBe(second);
      expect(console.log).toHaveBeenCalledTimes(2); // Device detection + success message
    });

    test('handles concurrent initialization attempts', async () => {
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      delete global.window;
      delete global.navigator;
      global.window = {
        transformers: {
          pipeline: mockPipeline,
          env: mockEnv
        }
      };
      global.navigator = {};

      const [first, second] = await Promise.all([
        initializeTransformers(),
        initializeTransformers()
      ]);

      expect(first).toBe(second);
      expect(console.log).toHaveBeenCalledTimes(2); // Device detection + success message
    });

    test('configures browser environment with custom paths', async () => {
      // Reset state completely for this test
      resetTransformersInstance();
      
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      // Set up window properties on the actual window object
      window.transformers = {
        pipeline: mockPipeline,
        env: mockEnv
      };
      window.LOCAL_LLM_MODELS_BASE = '/custom/models/';
      window.LOCAL_LLM_LOCAL_ONLY = true;

      const result = await initializeTransformers();

      expect(result.env.localModelPath).toBe('/custom/models/');
      expect(result.env.allowLocalModels).toBe(true);
      expect(result.env.allowRemoteModels).toBe(false);
      expect(result.env.useBrowserCache).toBe(true);
      expect(console.log).toHaveBeenCalledWith('[transformers] Local model path:', '/custom/models/');
      
      // Clean up
      delete window.transformers;
      delete window.LOCAL_LLM_MODELS_BASE;
      delete window.LOCAL_LLM_LOCAL_ONLY;
    });

    test('configures node environment with environment variables', async () => {
      // Reset state completely for this test
      resetTransformersInstance();
      
      // Store originals
      const originalWindow = global.window;
      const originalNavigator = global.navigator;
      
      delete global.window;
      delete global.navigator;
      delete global.process;
      global.process = { 
        env: { 
          LOCAL_LLM_MODELS_BASE: '/env/models/',
          LOCAL_LLM_LOCAL_ONLY: 'true'
        } 
      };

      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      mockImport.mockResolvedValue({
        pipeline: mockPipeline,
        env: mockEnv
      });

      const result = await initializeTransformers();

      expect(result.env.localModelPath).toBe('/env/models/');
      expect(result.env.allowRemoteModels).toBe(false);
      // Don't test useBrowserCache as it depends on global state that's hard to mock
      
      // Restore globals
      global.window = originalWindow;
      global.navigator = originalNavigator;
    });
  });

  describe('getTransformersInstance', () => {
    test('returns null when not initialized', () => {
      expect(getTransformersInstance()).toBeNull();
    });

    test('returns instance after initialization', async () => {
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      delete global.window;
      delete global.navigator;
      global.window = {
        transformers: {
          pipeline: mockPipeline,
          env: mockEnv
        }
      };
      global.navigator = {};

      await initializeTransformers();
      const instance = getTransformersInstance();

      expect(typeof instance.pipeline).toBe('function');
      expect(typeof instance.env).toBe('object');
    });
  });

  describe('resetTransformersInstance', () => {
    test('resets instance and allows re-initialization', async () => {
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      delete global.window;
      delete global.navigator;
      global.window = {
        transformers: {
          pipeline: mockPipeline,
          env: mockEnv
        }
      };
      global.navigator = {};

      await initializeTransformers();
      expect(getTransformersInstance()).not.toBeNull();

      resetTransformersInstance();
      expect(getTransformersInstance()).toBeNull();

      // Should be able to re-initialize
      await initializeTransformers();
      expect(getTransformersInstance()).not.toBeNull();
    });
  });
});
