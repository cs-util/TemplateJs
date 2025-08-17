# Development Guide

## Quick Start

1. **Start the local server:**
   ```bash
   # Option 1: Using VS Code Live Server (Recommended)
   # Right-click index.html and select "Open with Live Server"
   
   # Option 2: Using Node.js http-server
   npm start
   ```

2. **Open in browser:**
   Navigate to http://localhost:5500 (Live Server) or http://localhost:8000 (npm start)

3. **Test the features:**
   - **LLM Stream**: Generate text with real-time streaming
   - **TTS Only**: Test text-to-speech with sentence highlighting
   - **LLM → TTS**: Generate text and speak it automatically

## Architecture Overview

```
index.html              # Main UI with 3 tabs
├── src/
│   ├── app.js          # Main application controller
│   ├── llm.js          # LLM module (Transformers.js)
│   ├── tts.js          # TTS module (Kokoro + Web Speech fallback)
│   ├── audio.js        # Audio module (AudioContext + AudioWorklet)
│   ├── worklet.js      # AudioWorklet processor for PCM playback
│   └── utils/
│       └── utils.js    # Text processing utilities
└── models/             # Model storage for offline use
    ├── llm/            # Language model files
    └── tts/            # TTS model files
```

## Key Features

### Device Detection
- Automatically detects WebGPU support
- Falls back to WASM when WebGPU unavailable
- Shows device status in header

### LLM Integration
- Uses Transformers.js for browser-based inference
- Supports streaming text generation
- Measures TTFB (Time to First Byte) and tokens/second
- Configurable parameters (temperature, top_p, max_tokens)

### TTS System
- Primary: Kokoro 82M ONNX (placeholder in demo)
- Fallback: Web Speech API with voice selection
- Sentence-level highlighting during playback
- Play/Pause/Resume/Stop controls

### Audio Pipeline
- AudioWorklet for low-latency PCM playback
- Ring buffer for smooth audio streaming
- Chunk completion events for UI synchronization

## Configuration

Edit the model IDs in the source files:
```javascript
// In src/llm.js
const LLM_MODEL_ID = 'onnx-community/Qwen2.5-0.5B-Instruct-ONNX';

// In src/tts.js
const TTS_MODEL_ID = 'onnx-community/Kokoro-82M-v1.0-ONNX';
```

## Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test -- --coverage

# Watch mode
npm run test:watch

# Lint code
npm run lint
```

## Offline Setup

1. Download model files to `models/` directory
2. Update model IDs to point to local paths
3. Serve via HTTP (not file://) for proper CORS handling
4. Models will be cached in browser storage after first load

## Browser Support

- **WebGPU**: Chrome/Edge 113+, Firefox with experimental flag
- **WASM**: All modern browsers
- **AudioWorklet**: Chrome 66+, Firefox 76+, Safari 14.1+
- **Web Speech API**: Chrome, Edge, Safari (limited in Firefox)

## Performance Tips

- Use WebGPU when available for faster inference
- Start with smaller models for testing
- Monitor browser memory usage with large models
- Consider quantized models for better performance

## Troubleshooting

### Common Issues

1. **"Failed to load model"**
   - Check internet connection for first load
   - Verify model ID is correct
   - Ensure server has CORS headers

2. **"WebGPU not available"**
   - Normal on older browsers/hardware
   - Demo will fall back to WASM automatically

3. **"Audio not working"**
   - Try clicking first to enable audio context
   - Check browser audio permissions
   - Verify AudioWorklet support

4. **"Slow performance"**
   - Switch to smaller model
   - Use WebGPU if available
   - Close other browser tabs

### Debug Mode

Open browser dev tools and check console for detailed logs.
