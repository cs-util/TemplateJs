# Model Download Instructions

This directory should contain the ONNX models for local inference. Follow these steps to download the required models:

## Prerequisites

Install the Hugging Face Hub CLI:

```bash
pip install -U huggingface_hub
```

## Download LLM Models

Download the Qwen 2.5 0.5B Instruct model (recommended for this demo):

```bash
cd /workspaces/LocalLLMDemo
hf download onnx-community/Qwen2.5-0.5B-Instruct --local-dir ./models/onnx-community/Qwen2.5-0.5B-Instruct
```

Alternative smaller model (Gemma 3 270M):

```bash
hf download onnx-community/gemma-3-270m-it-ONNX --local-dir ./models/onnx-community/gemma-3-270m-it-ONNX
```

## Download TTS Models

Download the Kokoro TTS model:

```bash
hf download onnx-community/Kokoro-82M-ONNX --local-dir ./models/onnx-community/Kokoro-82M-ONNX
```

## Expected Directory Structure

After downloading, your structure should look like:

```
/models/
  onnx-community/
    Qwen2.5-0.5B-Instruct/
      config.json
      tokenizer.json
      tokenizer_config.json
      generation_config.json
      onnx/
        model.onnx
        model_quantized.onnx   # (optional variants)
    Kokoro-82M-ONNX/
      onnx/model.onnx
      ... (other files)
```

## Alternative: Python Download

If you prefer Python:

```python
from huggingface_hub import snapshot_download

# LLM
snapshot_download("onnx-community/Qwen2.5-0.5B-Instruct", 
                 local_dir="./models/onnx-community/Qwen2.5-0.5B-Instruct")

# TTS
snapshot_download("onnx-community/Kokoro-82M-ONNX", 
                 local_dir="./models/onnx-community/Kokoro-82M-ONNX")
```

## Notes

- These are ONNX models specifically designed for browser inference with Transformers.js v3
- The models will be served locally by your development server
- Make sure you're running the demo on an HTTP server (like VS Code Live Server) not file:// protocol
