/**
 * Shared utilities for Transformers.js configuration
 */

/**
 * Configure WASM threads for CPU fallback
 * @param {Object} env - Transformers environment object
 */
export function configureWASMThreads(env) {
  // Optional: tune WASM threads for CPU fallback
  if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
    env.backends = env.backends || {};
    env.backends.onnx = env.backends.onnx || {};
    env.backends.onnx.wasm = env.backends.onnx.wasm || {};
    env.backends.onnx.wasm.numThreads = Math.min(navigator.hardwareConcurrency || 4, 8);
  }
}

/**
 * Configure device selection and expose for debugging
 * @returns {string} The detected device type
 */
export function configureDeviceSelection() {
  // Device selection
  if (typeof navigator !== 'undefined' && navigator.gpu) {
    const DEVICE = navigator.gpu ? 'webgpu' : 'wasm';
    if (typeof window !== 'undefined') {
      window.__TRANSFORMERS_DEVICE__ = DEVICE; // expose for debugging
    }
    
    console.log('[transformers] Device detected:', DEVICE);
    return DEVICE;
  }
  return 'wasm';
}
