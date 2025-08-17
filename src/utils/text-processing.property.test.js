import fc from 'fast-check';
import { 
  splitTextIntoChunks, 
  splitIntoSentences, 
  estimateTokenCount, 
  formatDuration, 
  calculateTokensPerSecond 
} from './text-processing.js';

// Property-Based Test for utils functions
describe('Property-based tests for utils', () => {
    // Property: Split chunks should preserve total text length
    test('splitTextIntoChunks preserves text content', () => {
        fc.assert(
            fc.property(fc.string({ minLength: 1, maxLength: 1000 }), fc.integer({ min: 10, max: 200 }), (text, chunkSize) => {
                const chunks = splitTextIntoChunks(text, chunkSize);
                const rejoined = chunks.join(' ').replace(/\s+/g, ' ').trim();
                const normalizedOriginal = text.trim().replace(/\s+/g, ' ');
                return rejoined === normalizedOriginal;
            })
        );
    });

    // Property: Sentences should end with punctuation
    test('splitIntoSentences adds punctuation', () => {
        fc.assert(
            fc.property(fc.string({ minLength: 1, maxLength: 500 }), (text) => {
                const sentences = splitIntoSentences(text);
                return sentences.every(sentence => sentence.endsWith('.'));
            })
        );
    });

    // Property: Token count should be positive for non-empty text
    test('estimateTokenCount returns positive for non-empty text', () => {
        fc.assert(
            fc.property(fc.string({ minLength: 1, maxLength: 1000 }), (text) => {
                const count = estimateTokenCount(text);
                return count > 0;
            })
        );
    });

    // Property: Format duration should be valid for non-negative numbers
    test('formatDuration handles valid inputs', () => {
        fc.assert(
            fc.property(fc.float({ min: 0, max: 3600 }), (seconds) => {
                const formatted = formatDuration(seconds);
                return typeof formatted === 'string' && formatted.includes(':');
            })
        );
    });

    // Property: Tokens per second calculation
    test('calculateTokensPerSecond returns valid rate', () => {
        fc.assert(
            fc.property(fc.integer({ min: 1, max: 1000 }), fc.integer({ min: 100, max: 10000 }), (tokens, ms) => {
                const rate = calculateTokensPerSecond(tokens, ms);
                return parseFloat(rate) >= 0;
            })
        );
    });
});
