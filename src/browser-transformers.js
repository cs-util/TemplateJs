/**
 * Browser Transformers.js Initialization
 * Handles the CDN loading and configuration of Transformers.js in the browser
 */

import { configureWASMThreads, configureDeviceSelection } from './utils/transformers-utils.js';

/**
 * Initialize Transformers.js from CDN for browser usage
 * This function loads the Transformers.js library from CDN and configures it for local usage
 */
export async function initializeBrowserTransformers() {
  // Check if we're actually in a browser environment
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    throw new Error('Browser transformers can only be initialized in a browser environment');
  }

  try {
    // Dynamically import transformers from CDN
    const transformersModule = await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.7.2');
    const { pipeline, env } = transformersModule;

    // Configure environment for browser usage
    env.localModelPath = '/models/';   // base folder served by your dev server
    env.allowLocalModels = true;
    env.allowRemoteModels = false;

    // Configure WASM threads and device selection using shared utilities
    configureWASMThreads(env);
    configureDeviceSelection();
    
    // Make transformers available globally for compatibility
    window.transformers = { pipeline, env };
    
    console.log('[transformers] Transformers.js v3 loaded successfully');
    console.log('[transformers] Local model path:', env.localModelPath);

    return { pipeline, env };
  } catch (error) {
    console.error('[transformers] Failed to load Transformers.js from CDN:', error);
    throw error;
  }
}
