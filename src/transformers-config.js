/**
 * Transformers.js Configuration Module
 * Handles initialization and configuration of the Transformers.js library
 */

let transformersInstance = null;
let initializationPromise = null;

/**
 * Initialize Transformers.js with proper configuration
 * @returns {Promise<Object>} Transformers.js instance with { pipeline, env }
 */
export async function initializeTransformers() {
  // Return existing instance if already initialized
  if (transformersInstance) {
    return transformersInstance;
  }

  // Return existing initialization promise to prevent concurrent inits
  if (initializationPromise) {
    return initializationPromise;
  }

  initializationPromise = (async () => {
    try {
      let transformers;

      // In browser environment, try to use the globally loaded transformers from CDN
      if (typeof window !== 'undefined' && window.transformers) {
        transformers = window.transformers;
      } else {
        // For Node.js/test environment, try to dynamically import the installed package
        try {
          const transformersModule = await import('@huggingface/transformers');
          transformers = {
            pipeline: transformersModule.pipeline,
            env: transformersModule.env
          };
        } catch (error) {
          throw new Error('Failed to load @huggingface/transformers package – ensure dependency is installed.');
        }
      }

      const { pipeline, env } = transformers;
      
      // Configure environment
      configureTransformersEnv(env);

      transformersInstance = { pipeline, env };
      console.log('[transformers] Transformers.js loaded and configured successfully');
      
      return transformersInstance;
    } catch (error) {
      // Reset promises on failure so retry is possible
      initializationPromise = null;
      throw error;
    }
  })();

  return initializationPromise;
}

/**
 * Configure the Transformers.js environment
 * @param {Object} env - Transformers environment object
 */
function configureTransformersEnv(env) {
  // Browser environment configuration
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    // Run fully local (no Hub calls) when in browser with local models
    env.localModelPath = window.LOCAL_LLM_MODELS_BASE || '/models/';   // base folder served by dev server
    env.allowLocalModels = true;
    env.allowRemoteModels = !window.LOCAL_LLM_LOCAL_ONLY;

    // Optional: tune WASM threads for CPU fallback
    if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
      env.backends = env.backends || {};
      env.backends.onnx = env.backends.onnx || {};
      env.backends.onnx.wasm = env.backends.onnx.wasm || {};
      env.backends.onnx.wasm.numThreads = Math.min(navigator.hardwareConcurrency || 4, 8);
    }

    // Device selection
    if (typeof navigator !== 'undefined' && navigator.gpu) {
      const DEVICE = navigator.gpu ? 'webgpu' : 'wasm';
      window.__TRANSFORMERS_DEVICE__ = DEVICE; // expose for debugging
      
      console.log('[transformers] Device detected:', DEVICE);
    }
    
    console.log('[transformers] Local model path:', env.localModelPath);
  } else {
    // Node.js/test environment configuration
    env.useBrowserCache = false;
    env.allowLocalModels = true;
    env.allowRemoteModels = !process.env.LOCAL_LLM_LOCAL_ONLY; // Allow remote for tests unless explicitly disabled
    env.localModelPath = process.env.LOCAL_LLM_MODELS_BASE || './models/';
  }

  // Enable browser cache between sessions for browser
  if (typeof window !== 'undefined') {
    env.useBrowserCache = true;
  }
}

/**
 * Get the current transformers instance
 * @returns {Object|null} Current transformers instance or null if not initialized
 */
export function getTransformersInstance() {
  return transformersInstance;
}

/**
 * Reset the transformers instance (mainly for testing)
 */
export function resetTransformersInstance() {
  transformersInstance = null;
  initializationPromise = null;
}
