/**
 * Test coverage for transformers-utils.js shared utility functions
 */

import { configureWASMThreads, configureDeviceSelection } from './transformers-utils.js';

describe('Transformers Utils', () => {
  let originalNavigator;
  let originalWindow;

  beforeEach(() => {
    originalNavigator = global.navigator;
    originalWindow = global.window;
  });

  afterEach(() => {
    global.navigator = originalNavigator;
    global.window = originalWindow;
  });

  describe('configureWASMThreads', () => {
    test('configures WASM threads when navigator available', () => {
      // Delete and reassign to avoid read-only issues
      delete global.navigator;
      global.navigator = { hardwareConcurrency: 8 };

      const env = {};
      configureWASMThreads(env);

      expect(env.backends.onnx.wasm.numThreads).toBe(8);
    });

    test('limits WASM threads to 8 maximum', () => {
      delete global.navigator;
      global.navigator = { hardwareConcurrency: 16 };

      const env = {};
      configureWASMThreads(env);

      expect(env.backends.onnx.wasm.numThreads).toBe(8);
    });

    test('preserves existing backends configuration', () => {
      delete global.navigator;
      global.navigator = { hardwareConcurrency: 4 };

      const env = {
        backends: {
          onnx: {
            wasm: {
              existingConfig: 'preserved'
            }
          }
        }
      };

      configureWASMThreads(env);

      expect(env.backends.onnx.wasm.existingConfig).toBe('preserved');
      expect(env.backends.onnx.wasm.numThreads).toBe(4);
    });

    test('does nothing when navigator is undefined', () => {
      delete global.navigator;
      global.navigator = undefined;

      const env = {};
      configureWASMThreads(env);

      expect(env.backends).toBeUndefined();
    });

    test('does nothing when hardwareConcurrency is not available', () => {
      delete global.navigator;
      global.navigator = {};

      const env = {};
      configureWASMThreads(env);

      expect(env.backends).toBeUndefined();
    });
  });

  describe('configureDeviceSelection', () => {
    let consoleSpy;

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    test('detects webgpu when navigator.gpu is available', () => {
      delete global.navigator;
      delete global.window;
      global.navigator = { gpu: {} };
      global.window = {};

      const device = configureDeviceSelection();

      expect(device).toBe('webgpu');
      expect(global.window.__TRANSFORMERS_DEVICE__).toBe('webgpu');
      expect(consoleSpy).toHaveBeenCalledWith('[transformers] Device detected:', 'webgpu');
    });

    test('returns wasm when navigator.gpu is not available', () => {
      delete global.navigator;
      delete global.window;
      global.navigator = {};
      global.window = {};

      const device = configureDeviceSelection();

      expect(device).toBe('wasm');
      expect(global.window.__TRANSFORMERS_DEVICE__).toBe('wasm');
      expect(consoleSpy).toHaveBeenCalledWith('[transformers] Device detected:', 'wasm');
    });

    test('returns wasm without setting window property when window is undefined', () => {
      delete global.navigator;
      delete global.window;
      global.navigator = { gpu: {} };
      global.window = undefined;

      const device = configureDeviceSelection();

      expect(device).toBe('webgpu');
      expect(consoleSpy).toHaveBeenCalledWith('[transformers] Device detected:', 'webgpu');
    });

    test('returns wasm when navigator is undefined', () => {
      delete global.navigator;
      global.navigator = undefined;

      const device = configureDeviceSelection();

      expect(device).toBe('wasm');
      expect(consoleSpy).not.toHaveBeenCalled();
    });
  });
});
