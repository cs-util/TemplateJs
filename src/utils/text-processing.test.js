import { 
  splitTextIntoChunks, 
  normalizeText, 
  estimateTokenCount, 
  splitIntoSentences,
  formatPromptForInstruction,
  tokenizeForDisplay,
  formatDuration,
  debounce,
  calculateTokensPerSecond
} from './text-processing.js';

describe('Text Processing Utilities', () => {
  describe('splitTextIntoChunks', () => {
    test('should split text into chunks of specified size', () => {
      const text = 'This is a long sentence that should be split into multiple chunks for processing.';
      const chunks = splitTextIntoChunks(text, 20);
      
      expect(chunks.length).toBeGreaterThan(1);
      chunks.forEach(chunk => {
        expect(chunk.length).toBeLessThanOrEqual(20);
      });
    });

    test('should handle empty or invalid input', () => {
      expect(splitTextIntoChunks('')).toEqual([]);
      expect(splitTextIntoChunks(null)).toEqual([]);
      expect(splitTextIntoChunks(undefined)).toEqual([]);
    });

    test('should handle single word longer than chunk size', () => {
      const chunks = splitTextIntoChunks('supercalifragilisticexpialidocious', 10);
      expect(chunks).toEqual(['supercalifragilisticexpialidocious']);
    });
  });

  describe('normalizeText', () => {
    test('should normalize whitespace and punctuation', () => {
      const text = '  Hello    world.How are you?Fine!  ';
      const normalized = normalizeText(text);
      
      expect(normalized).toBe('Hello world. How are you? Fine!');
    });

    test('should handle empty or invalid input', () => {
      expect(normalizeText('')).toBe('');
      expect(normalizeText(null)).toBe('');
      expect(normalizeText(undefined)).toBe('');
    });
  });

  describe('estimateTokenCount', () => {
    test('should estimate token count for text', () => {
      const text = 'Hello world';
      const count = estimateTokenCount(text);
      
      expect(count).toBeGreaterThan(0);
      expect(typeof count).toBe('number');
    });

    test('should handle empty or invalid input', () => {
      expect(estimateTokenCount('')).toBe(0);
      expect(estimateTokenCount(null)).toBe(0);
      expect(estimateTokenCount(undefined)).toBe(0);
    });
  });

  describe('formatDuration', () => {
    test('should format seconds to MM:SS format', () => {
      expect(formatDuration(65)).toBe('1:05');
      expect(formatDuration(0)).toBe('0:00');
      expect(formatDuration(3661)).toBe('61:01');
    });

    test('should handle invalid input', () => {
      expect(formatDuration(-1)).toBe('0:00');
      expect(formatDuration('invalid')).toBe('0:00');
    });
  });

  describe('debounce', () => {
    test('should debounce function calls', (done) => {
      let callCount = 0;
      const fn = debounce(() => {
        callCount++;
      }, 50);

      fn();
      fn();
      fn();

      setTimeout(() => {
        expect(callCount).toBe(1);
        done();
      }, 100);
    });
  });

  describe('calculateTokensPerSecond', () => {
    test('should calculate tokens per second', () => {
      const result = calculateTokensPerSecond(100, 5000); // 100 tokens in 5 seconds
      expect(result).toBe('20.0');
    });

    test('should handle invalid input', () => {
      expect(calculateTokensPerSecond(100, 0)).toBe(0);
      expect(calculateTokensPerSecond('invalid', 1000)).toBe(0);
    });
  });
});
