import { initializeTransformers } from './transformers-config.js';

// Configuration
// Primary model (ONNX format) – file set contains onnx/model*.onnx
const LLM_MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct';

// Local model base is read dynamically during environment configuration so tests
// (or host pages) can set window.LOCAL_LLM_MODELS_BASE before first generate().

export class LLMModule {
  constructor() {
    this.pipeline = null;
    this.device = null;
    this.isLoading = false;
  }

  _configureEnv(env) {
    // Enable browser cache between sessions
    env.useBrowserCache = true;
    env.allowLocalModels = true;
    
    this._configureRemoteModels(env);
    this._configureModelPath(env);
    this._configureONNXThreads(env);
  }

  _configureRemoteModels(env) {
    // Allow remote models unless user explicitly sets local-only flag
    const forceLocalOnly = (typeof window !== 'undefined' && window.LOCAL_LLM_LOCAL_ONLY) || false;
    env.allowRemoteModels = !forceLocalOnly;
  }

  _configureModelPath(env) {
    const base = (typeof window !== 'undefined' && window.LOCAL_LLM_MODELS_BASE) || null;
    if (base) {
      env.localModelPath = base.endsWith('/') ? base : `${base}/`;
    }
  }

  _configureONNXThreads(env) {
    // Optimize ONNX WASM threads (safe fallback 4)
    if (env.backends?.onnx?.wasm) {
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
      } catch {
        console.warn('WebGPU adapter request failed');
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
      // Initialize transformers through the configuration module
      const transformers = await initializeTransformers();
      const { pipeline, env } = transformers;
      this._configureEnv(env);

      // Detect device
      this.device = await this.detectDevice();
      
      // Create pipeline with progress callback
      onProgress?.({ percentage: 0, text: 'Initializing pipeline...' });
      
      this.pipeline = await pipeline('text-generation', LLM_MODEL_ID, {
        device: this.device,
        // Let transformers.js choose correct model.onnx / model_quantized.onnx automatically.
        progress_callback: (progress) => {
          // Some progress events may lack total; guard to avoid NaN.
            const total = progress.total || progress.loaded || 1;
            const loaded = progress.loaded || 0;
            const percentage = Math.min(100, Math.max(0, Math.round((loaded / total) * 100)));
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

      // Generate with streaming-enabled pipeline
      const generator = await pipeline(formattedPrompt, {
        max_new_tokens: maxNewTokens,
        temperature: temperature,
        top_p: topP,
        do_sample: doSample,
        return_full_text: false,
        streamer_callback: onToken
      });

      // Delegate handling to helpers for clarity (streaming vs non-streaming)
      if (generator && typeof generator[Symbol.asyncIterator] === 'function') {
        return await this._handleStreamingGenerator(generator, onToken);
      }

      return await this._handleNonStreamingResult(generator, onToken);

    } catch (error) {
      console.error('Generation failed:', error);
      throw new Error(`Text generation failed: ${error.message}`);
    }
  }

  async _handleStreamingGenerator(generator, onToken) {
    let fullText = '';
    for await (const chunk of generator) {
      const token = this.extractToken(chunk);
      if (token) {
        fullText += token;
        onToken?.(token);
      }
    }
    return fullText;
  }

  async _handleNonStreamingResult(generator, onToken) {
    const result = Array.isArray(generator) ? generator[0] : generator;
    const text = result?.generated_text || result?.text || '';

    // Simulate streaming for consistency
    if (onToken && text) {
      const tokens = this.tokenizeForDisplay(text);
      for (const token of tokens) {
        onToken(token);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }

    return text;
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
