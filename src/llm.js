// Configuration
const LLM_MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct-ONNX';
const DEVICE_PRIORITY = ['webgpu', 'wasm'];

export class LLMModule {
  constructor() {
    this.pipeline = null;
    this.device = null;
    this.isLoading = false;
    this.setupEnvironment();
  }

  setupEnvironment() {
    // Configure Transformers.js environment
    if (typeof window !== 'undefined' && window.transformers) {
      const { env } = window.transformers;
      
      // Enable browser caching for offline use
      env.useBrowserCache = true;
      
      // Allow local models when serving from local server
      env.allowRemoteModels = true;
      env.allowLocalModels = true;
      
      // Optimize ONNX WASM performance
      env.backends.onnx.wasm.numThreads = navigator.hardwareConcurrency || 4;
    }
  }

  async detectDevice() {
    // Check WebGPU availability
    if (navigator.gpu) {
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (adapter) {
          return 'webgpu';
        }
      } catch (e) {
        console.warn('WebGPU adapter request failed:', e);
      }
    }
    return 'wasm';
  }

  async initializePipeline(onProgress) {
    if (this.pipeline) return this.pipeline;
    if (this.isLoading) {
      // Wait for current loading to complete
      while (this.isLoading) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      return this.pipeline;
    }

    this.isLoading = true;

    try {
      // Dynamically import Transformers.js
      let transformers;
      try {
        // Try to load from CDN
        transformers = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js');
      } catch (e) {
        // Fallback error handling
        throw new Error('Failed to load Transformers.js library');
      }

      const { pipeline, env } = transformers;
      
      // Configure environment
      env.useBrowserCache = true;
      env.allowRemoteModels = true;
      env.allowLocalModels = true;
      env.backends.onnx.wasm.numThreads = navigator.hardwareConcurrency || 4;

      // Detect device
      this.device = await this.detectDevice();
      
      // Create pipeline with progress callback
      onProgress?.({ percentage: 0, text: 'Initializing pipeline...' });
      
      this.pipeline = await pipeline('text-generation', LLM_MODEL_ID, {
        device: this.device,
        progress_callback: (progress) => {
          const percentage = Math.round((progress.loaded / progress.total) * 100);
          onProgress?.({ 
            percentage, 
            text: `Loading ${progress.file || 'model'}: ${percentage}%` 
          });
        }
      });

      onProgress?.({ percentage: 100, text: 'Model loaded successfully' });
      return this.pipeline;

    } catch (error) {
      console.error('Failed to initialize LLM pipeline:', error);
      throw new Error(`Failed to load LLM model: ${error.message}`);
    } finally {
      this.isLoading = false;
    }
  }

  async generate(prompt, options = {}) {
    const {
      onToken,
      onProgress,
      maxNewTokens = 256,
      temperature = 0.8,
      topP = 0.95,
      doSample = true
    } = options;

    try {
      // Ensure pipeline is initialized
      const pipeline = await this.initializePipeline(onProgress);

      // Format prompt for instruction-tuned model
      const formattedPrompt = this.formatPrompt(prompt);

      // Generate with streaming
      const generator = await pipeline(formattedPrompt, {
        max_new_tokens: maxNewTokens,
        temperature: temperature,
        top_p: topP,
        do_sample: doSample,
        return_full_text: false,
        streamer_callback: onToken
      });

      // Handle both streaming and non-streaming responses
      if (generator && typeof generator[Symbol.asyncIterator] === 'function') {
        // Streaming response
        let fullText = '';
        for await (const chunk of generator) {
          const token = this.extractToken(chunk);
          if (token) {
            fullText += token;
            onToken?.(token);
          }
        }
        return fullText;
      } else {
        // Non-streaming response
        const result = Array.isArray(generator) ? generator[0] : generator;
        const text = result.generated_text || result.text || '';
        
        // Simulate streaming for consistency
        if (onToken && text) {
          const tokens = this.tokenizeForDisplay(text);
          for (const token of tokens) {
            onToken(token);
            await new Promise(resolve => setTimeout(resolve, 50)); // Small delay for streaming effect
          }
        }
        
        return text;
      }

    } catch (error) {
      console.error('Generation failed:', error);
      throw new Error(`Text generation failed: ${error.message}`);
    }
  }

  formatPrompt(prompt) {
    // Format for instruction-tuned models (Qwen2.5 format)
    return `<|im_start|>system
You are a helpful assistant.<|im_end|>
<|im_start|>user
${prompt}<|im_end|>
<|im_start|>assistant
`;
  }

  extractToken(chunk) {
    // Extract token from different possible chunk formats
    if (typeof chunk === 'string') {
      return chunk;
    }
    if (chunk && chunk.token) {
      return chunk.token.text || chunk.token;
    }
    if (chunk && chunk.generated_text) {
      return chunk.generated_text;
    }
    return '';
  }

  tokenizeForDisplay(text) {
    // Simple tokenization for display purposes
    // In a real implementation, this could use the model's actual tokenizer
    const words = text.split(/(\s+)/);
    const tokens = [];
    
    for (const word of words) {
      if (word.length > 0) {
        tokens.push(word);
      }
    }
    
    return tokens;
  }

  getDevice() {
    return this.device;
  }

  getModelId() {
    return LLM_MODEL_ID;
  }

  isInitialized() {
    return this.pipeline !== null;
  }
}
