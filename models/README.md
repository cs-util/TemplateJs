# Model Storage

This directory contains the ONNX model files for offline operation.

## Directory Structure

- `llm/` - Language model files (ONNX format)
- `tts/` - Text-to-speech model files (Kokoro ONNX)

## Setup for Offline Use

1. Download the required model files:
   - **LLM**: Qwen2.5-0.5B-Instruct-ONNX from Hugging Face
   - **TTS**: Kokoro-82M-v1.0-ONNX from Hugging Face

2. Place the model files in their respective directories.

3. Update the model IDs in the source code to point to local paths:
   ```javascript
   const LLM_MODEL_ID = './models/llm/';
   const TTS_MODEL_ID = './models/tts/';
   ```

4. Serve the application from a local HTTP server to enable offline caching.

## Note

For the demo to work fully offline, all model files must be present and the application must be served over HTTP (not file://) due to CORS restrictions.
