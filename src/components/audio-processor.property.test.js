import fc from 'fast-check';
import { AudioProcessor } from './audio-processor.js';

describe('AudioProcessor Property Tests', () => {

    // Arbitraries for generating valid audio data
    const audioDataArb = fc.array(fc.float({ min: -1, max: 1 }), { minLength: 1, maxLength: 1000 });
    const sampleRateArb = fc.integer({ min: 8000, max: 48000 });

    // Property-Based Testing
    describe('Property-Based Tests', () => {
        // Property: Processing audio should always return the same data
        it('should always return processed audio data', () => {
            fc.assert(
                fc.property(sampleRateArb, audioDataArb, (sampleRate, audioData) => {
                    const processor = new AudioProcessor(sampleRate);
                    const result = processor.processAudioChunk(new Float32Array(audioData));
                    expect(result).toBeInstanceOf(Float32Array);
                    expect(result.length).toBe(audioData.length);
                })
            );
        });

        // Property: Buffer length should increase with processed chunks
        it('should correctly track buffer length', () => {
            fc.assert(
                fc.property(audioDataArb, (audioData) => {
                    const processor = new AudioProcessor();
                    const initialLength = processor.getBufferLength();
                    processor.processAudioChunk(new Float32Array(audioData));
                    expect(processor.getBufferLength()).toBe(initialLength + audioData.length);
                })
            );
        });
    });

    // Metamorphic Testing
    describe('Metamorphic Tests', () => {
        // Metamorphic Relation: Processing the same data twice should double buffer size
        it('should double buffer size when processing same data twice', () => {
            fc.assert(
                fc.property(audioDataArb, (audioData) => {
                    const processor = new AudioProcessor();
                    processor.processAudioChunk(new Float32Array(audioData));
                    const firstLength = processor.getBufferLength();
                    processor.processAudioChunk(new Float32Array(audioData));
                    expect(processor.getBufferLength()).toBe(firstLength * 2);
                })
            );
        });

        // Metamorphic Relation: Clear buffer should reset length to zero
        it('should reset buffer length to zero after clearing', () => {
            fc.assert(
                fc.property(audioDataArb, (audioData) => {
                    const processor = new AudioProcessor();
                    processor.processAudioChunk(new Float32Array(audioData));
                    processor.clearBuffer();
                    expect(processor.getBufferLength()).toBe(0);
                })
            );
        });
    });

    // Edge Case Testing
    describe('Edge Case Tests', () => {
        // Test with empty audio data
        it('should handle empty audio data', () => {
            const processor = new AudioProcessor();
            expect(() => processor.processAudioChunk(new Float32Array([]))).toThrow('Invalid audio data');
        });

        // Test with very large sample rates
        it('should handle large sample rates correctly', () => {
            fc.assert(
                fc.property(fc.integer({ min: 44100, max: 192000 }), (sampleRate) => {
                    const processor = new AudioProcessor(sampleRate);
                    expect(processor.sampleRate).toBe(sampleRate);
                })
            );
        });

        // Test duration calculation
        it('should calculate duration correctly', () => {
            fc.assert(
                fc.property(sampleRateArb, audioDataArb, (sampleRate, audioData) => {
                    const processor = new AudioProcessor(sampleRate);
                    processor.processAudioChunk(new Float32Array(audioData));
                    const expectedDuration = audioData.length / sampleRate;
                    expect(processor.getBufferDuration()).toBeCloseTo(expectedDuration, 5);
                })
            );
        });
    });
});
