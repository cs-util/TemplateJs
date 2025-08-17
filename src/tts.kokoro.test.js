import { TTSModule } from '../src/tts.js';

// Mock dependencies
global.navigator = {
  gpu: {
    requestAdapter: async () => ({ requestDevice: async () => ({}) })
  }
};

global.speechSynthesis = {
  getVoices: () => [],
  addEventListener: () => {},
  speak: () => {},
  pause: () => {},
  resume: () => {},
  cancel: () => {}
};

global.window = {
  speechSynthesis: global.speechSynthesis
};

// Mock Kokoro TTS
jest.mock('kokoro-js', () => ({
  KokoroTTS: {
    from_pretrained: jest.fn(() => {
      if (!global.navigator?.gpu) {
        throw new Error('WebGPU not available');
      }
      return Promise.resolve({
        stream: jest.fn(() => ({
          [Symbol.asyncIterator]: async function* () {
            yield { text: 'Hello', audio: { audio: new Float32Array([0.1, 0.2]) } };
            yield { text: 'world', audio: { audio: new Float32Array([0.3, 0.4]) } };
          }
        }))
      });
    })
  },
  TextSplitterStream: class {
    constructor() {
      this.chunks = [];
    }
    push(text) {
      this.chunks.push(text);
    }
    close() {
      // Mock close
    }
  }
}));

describe('TTSModule speakWithKokoro', () => {
  let tts;
  let mockAudioModule;
  let mockOutputElement;

  beforeEach(() => {
    jest.clearAllMocks();
    
    tts = new TTSModule();
    
    mockAudioModule = {
      port: {
        postMessage: jest.fn(),
        onmessage: null
      }
    };

    mockOutputElement = {
      innerHTML: '',
      textContent: 'Hello world. This is a test.',
      appendChild: jest.fn(),
      querySelectorAll: () => [],
      getElementById: () => null
    };

    // Mock DOM methods
    global.document = {
      createElement: jest.fn(() => ({
        textContent: '',
        id: '',
        className: '',
        classList: {
          add: jest.fn(),
          remove: jest.fn()
        }
      })),
      getElementById: jest.fn(() => null),
      querySelectorAll: jest.fn(() => [])
    };

    // Reset global navigator for each test
    global.navigator.gpu = {
      requestAdapter: async () => ({ requestDevice: async () => ({}) })
    };
  });

  test('should initialize Kokoro model with WebGPU', async () => {
    const progressCallback = jest.fn();
    
    await expect(tts.initializeKokoro(progressCallback)).resolves.toBeDefined();
    expect(progressCallback).toHaveBeenCalledWith({
      percentage: 0,
      text: 'Loading Kokoro TTS model...'
    });
  });

  test('should fall back to Web Speech when WebGPU unavailable', async () => {
    // Remove WebGPU support
    global.navigator.gpu = undefined;
    
    const progressCallback = jest.fn();
    const result = await tts.initializeKokoro(progressCallback);
    
    expect(result).toBe('web-speech');
    expect(tts.useWebSpeech).toBe(true);
    expect(progressCallback).toHaveBeenCalledWith({
      percentage: 100,
      text: 'Using Web Speech API'
    });
  });

  test('should handle speakWithKokoro with proper audio streaming', async () => {
    // Force Kokoro to be used instead of WebSpeech
    tts.useWebSpeech = false;
    tts.kokoroModel = { stream: jest.fn() };
    
    // Mock successful streaming
    const mockStream = {
      [Symbol.asyncIterator]: async function* () {
        yield { text: 'Hello', audio: { audio: new Float32Array([0.1, 0.2]) } };
        yield { text: 'world', audio: { audio: new Float32Array([0.3, 0.4]) } };
      }
    };
    
    tts.kokoroModel.stream.mockReturnValue(mockStream);
    
    const speakPromise = tts.speakWithKokoro(mockAudioModule, mockOutputElement);
    
    // Simulate worklet messages
    setTimeout(() => {
      const mockHandler = mockAudioModule.port.onmessage;
      if (mockHandler) {
        mockHandler({ data: { type: 'next_chunk' } });
        mockHandler({ data: { type: 'playback_ended' } });
      }
    }, 10);
    
    await expect(speakPromise).resolves.toBeUndefined();
    expect(mockAudioModule.port.postMessage).toHaveBeenCalled();
  });

  test('should handle stop correctly', () => {
    tts.currentSplitter = { close: jest.fn() };
    tts.isStopped = false;
    
    tts.stop();
    
    expect(tts.isStopped).toBe(true);
    expect(tts.currentSplitter).toBe(null); // Should be set to null after stop
  });

  test('should throw error when no TTS system available', async () => {
    // Create a completely clean environment
    const originalNavigator = global.navigator;
    const originalSpeechSynthesis = global.speechSynthesis;
    const originalWindow = global.window;
    
    try {
      global.navigator = { gpu: undefined };
      global.speechSynthesis = undefined;
      global.window = {};
      
      const newTts = new TTSModule();
      await expect(newTts.initializeKokoro()).rejects.toThrow('No TTS system available');
    } finally {
      // Restore original values
      global.navigator = originalNavigator;
      global.speechSynthesis = originalSpeechSynthesis;
      global.window = originalWindow;
    }
  });
});
