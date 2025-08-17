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

      expect(result.pipeline).toEqual(mockPipeline);
      expect(result.env).toEqual(mockEnv);
      expect(configureWASMThreads).toHaveBeenCalledWith(mockEnv);
      expect(configureDeviceSelection).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith('[transformers] Transformers.js loaded and configured successfully');
    });

    test('initializes transformers from npm package in node environment', async () => {
      delete global.window;
      delete global.navigator;
      delete global.process;
      global.window = undefined;
      global.navigator = undefined;
      global.process = { env: {} };

      // Mock the dynamic import
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      mockImport.mockResolvedValue({
        pipeline: mockPipeline,
        env: mockEnv
      });

      const result = await initializeTransformers();

      expect(result.pipeline).toEqual(mockPipeline);
      expect(result.env).toEqual(mockEnv);
      expect(result.env.useBrowserCache).toBe(false);
      expect(result.env.allowLocalModels).toBe(true);
      expect(result.env.localModelPath).toBe('./models/');
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
      expect(console.log).toHaveBeenCalledTimes(1); // Only called once
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
      expect(console.log).toHaveBeenCalledTimes(1); // Only called once
    });

    test('throws error when transformers package fails to load', async () => {
      delete global.window;
      delete global.navigator;
      delete global.process;
      global.window = undefined;
      global.navigator = undefined;
      global.process = { env: {} };

      // Mock failed import
      mockImport.mockRejectedValue(new Error('Module not found'));

      await expect(initializeTransformers()).rejects.toThrow(
        'Failed to load @huggingface/transformers package – ensure dependency is installed.'
      );

      // Should reset promise so retry is possible
      expect(getTransformersInstance()).toBeNull();
    });

    test('configures browser environment with custom paths', async () => {
      const mockPipeline = jest.fn();
      const mockEnv = {};
      
      delete global.window;
      delete global.navigator;
      global.window = {
        transformers: {
          pipeline: mockPipeline,
          env: mockEnv
        },
        LOCAL_LLM_MODELS_BASE: '/custom/models/',
        LOCAL_LLM_LOCAL_ONLY: true
      };
      global.navigator = {};

      await initializeTransformers();

      expect(mockEnv.localModelPath).toBe('/custom/models/');
      expect(mockEnv.allowLocalModels).toBe(true);
      expect(mockEnv.allowRemoteModels).toBe(false);
      expect(mockEnv.useBrowserCache).toBe(true);
      expect(console.log).toHaveBeenCalledWith('[transformers] Local model path:', '/custom/models/');
    });

    test('configures node environment with environment variables', async () => {
      delete global.window;
      delete global.navigator;
      delete global.process;
      global.window = undefined;
      global.navigator = undefined;
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

      await initializeTransformers();

      expect(mockEnv.localModelPath).toBe('/env/models/');
      expect(mockEnv.allowRemoteModels).toBe(false);
      expect(mockEnv.useBrowserCache).toBe(false);
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

      expect(instance.pipeline).toEqual(mockPipeline);
      expect(instance.env).toEqual(mockEnv);
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
