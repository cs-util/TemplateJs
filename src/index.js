// Configuration constants for the Local LLM Demo
export const CONFIG = {
  LLM_MODEL_ID: 'onnx-community/Qwen2.5-0.5B-Instruct-ONNX',
  TTS_MODEL_ID: 'onnx-community/Kokoro-82M-v1.0-ONNX',
  SAMPLE_RATE: 24000,
  MAX_NEW_TOKENS: 256,
  TEMPERATURE: 0.8,
  TOP_P: 0.95
};

import { splitIntoSentences, formatPromptForInstruction } from './utils/text-processing.js';

export { splitIntoSentences, formatPromptForInstruction };

export function detectWebGPUSupport() {
  return 'gpu' in navigator;
}

export function getOptimalDevice() {
  return detectWebGPUSupport() ? 'webgpu' : 'wasm';
}

console.log("Local LLM Demo initialized");
