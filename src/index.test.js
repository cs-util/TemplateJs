import { 
  CONFIG, 
  splitIntoSentences, 
  formatPromptForInstruction, 
  detectWebGPUSupport, 
  getOptimalDevice 
} from './index.js';

describe('Local LLM Demo Configuration', () => {
  test('CONFIG contains required constants', () => {
    expect(CONFIG.LLM_MODEL_ID).toBeDefined();
    expect(CONFIG.TTS_MODEL_ID).toBeDefined();
    expect(CONFIG.SAMPLE_RATE).toBe(24000);
    expect(CONFIG.MAX_NEW_TOKENS).toBe(256);
    expect(CONFIG.TEMPERATURE).toBe(0.8);
    expect(CONFIG.TOP_P).toBe(0.95);
  });

  test('splitIntoSentences correctly splits text', () => {
    const text = "Hello world. This is a test! How are you?";
    const sentences = splitIntoSentences(text);
    
    expect(sentences).toHaveLength(3);
    expect(sentences[0]).toBe("Hello world.");
    expect(sentences[1]).toBe("This is a test.");
    expect(sentences[2]).toBe("How are you.");
  });

  test('splitIntoSentences handles empty and single sentence text', () => {
    expect(splitIntoSentences("")).toEqual([]);
    expect(splitIntoSentences("Single sentence")).toEqual(["Single sentence."]);
  });

  test('formatPromptForInstruction creates proper format', () => {
    const prompt = "Tell me about AI";
    const formatted = formatPromptForInstruction(prompt);
    
    expect(formatted).toContain("<|im_start|>system");
    expect(formatted).toContain("You are a helpful assistant.");
    expect(formatted).toContain("<|im_start|>user");
    expect(formatted).toContain("Tell me about AI");
    expect(formatted).toContain("<|im_start|>assistant");
  });

  test('detectWebGPUSupport returns boolean', () => {
    const result = detectWebGPUSupport();
    expect(typeof result).toBe('boolean');
  });

  test('getOptimalDevice returns valid device', () => {
    const device = getOptimalDevice();
    expect(['webgpu', 'wasm']).toContain(device);
  });
});
