import { TTSModule } from '../src/tts.js';

// Mock dependencies for comprehensive testing
global.document = {
  createElement: jest.fn((tag) => {
    const element = {
      tagName: tag.toUpperCase(),
      textContent: '',
      innerHTML: '',
      className: '',
      id: '',
      appendChild: jest.fn(),
      setAttribute: jest.fn(),
      getAttribute: jest.fn(),
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
        contains: jest.fn(),
      }
    };
    
    if (tag === 'option') {
      element.value = '';
      element.selected = false;
    }
    
    return element;
  }),
  getElementById: jest.fn(),
};

global.navigator = {
  gpu: {
    requestAdapter: async () => ({ requestDevice: async () => ({}) })
  }
};

global.speechSynthesis = {
  getVoices: jest.fn(() => [
    { name: 'English Voice', lang: 'en-US', default: true },
    { name: 'Spanish Voice', lang: 'es-ES', default: false },
  ]),
  addEventListener: jest.fn(),
  speak: jest.fn(),
  pause: jest.fn(),
  resume: jest.fn(),
  cancel: jest.fn(),
};

global.window = {
  speechSynthesis: global.speechSynthesis
};

// Mock SpeechSynthesisUtterance
global.SpeechSynthesisUtterance = jest.fn().mockImplementation(function(text) {
  this.text = text;
  this.voice = null;
  this.rate = 1;
  this.pitch = 1;
  this.onstart = null;
  this.onend = null;
  this.onerror = null;
  return this;
});

// Mock Kokoro TTS
jest.mock('kokoro-js', () => ({
  KokoroTTS: {
    from_pretrained: jest.fn().mockImplementation(() => {
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
  TextSplitterStream: class MockTextSplitterStream {
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

describe('TTSModule - Comprehensive Coverage', () => {
  let tts;

  beforeEach(() => {
    tts = new TTSModule();
    jest.clearAllMocks();
  });

  describe('loadVoices', () => {
    test('should load voices and populate voice selector', () => {
      const mockVoiceSelect = {
        innerHTML: '',
        appendChild: jest.fn(),
      };
      
      jest.spyOn(global.document, 'getElementById').mockReturnValue(mockVoiceSelect);
      
      tts.loadVoices();
      
      expect(global.speechSynthesis.getVoices).toHaveBeenCalled();
      expect(mockVoiceSelect.appendChild).toHaveBeenCalledTimes(2); // Two voices
      expect(tts.selectedVoice).toBeDefined();
      expect(tts.selectedVoice.name).toBe('English Voice');
    });

    test('should handle missing voice selector element', () => {
      jest.spyOn(global.document, 'getElementById').mockReturnValue(null);
      
      expect(() => tts.loadVoices()).not.toThrow();
    });

    test('should handle no speechSynthesis', () => {
      const originalSpeechSynthesis = global.speechSynthesis;
      delete global.window.speechSynthesis;
      global.speechSynthesis = undefined;
      
      expect(() => tts.loadVoices()).not.toThrow();
      
      // Restore
      global.speechSynthesis = originalSpeechSynthesis;
      global.window.speechSynthesis = originalSpeechSynthesis;
    });

    test('should select first voice if no default voice', () => {
      const voicesWithoutDefault = [
        { name: 'Voice 1', lang: 'en-US', default: false },
        { name: 'Voice 2', lang: 'es-ES', default: false },
      ];
      global.speechSynthesis.getVoices.mockReturnValue(voicesWithoutDefault);
      
      const mockVoiceSelect = {
        innerHTML: '',
        appendChild: jest.fn(),
      };
      jest.spyOn(global.document, 'getElementById').mockReturnValue(mockVoiceSelect);
      
      tts.loadVoices();
      
      expect(tts.selectedVoice).toBe(voicesWithoutDefault[0]);
    });
  });

  describe('splitIntoSentences', () => {
    test('should split text into sentences correctly', () => {
      const text = 'Hello world. How are you? I am fine!';
      const sentences = tts.splitIntoSentences(text);
      
      expect(sentences).toEqual([
        'Hello world.',
        'How are you.',
        'I am fine.',
      ]);
    });

    test('should handle text with multiple punctuation marks', () => {
      const text = 'Hello!!! Are you there??? Yes.';
      const sentences = tts.splitIntoSentences(text);
      
      expect(sentences).toEqual([
        'Hello.',
        'Are you there.',
        'Yes.',
      ]);
    });

    test('should filter out empty sentences', () => {
      const text = 'Hello.. World! ';
      const sentences = tts.splitIntoSentences(text);
      
      expect(sentences).toEqual([
        'Hello.',
        'World.',
      ]);
    });
  });

  describe('displaySentences', () => {
    test('should create sentence spans in output element', () => {
      const outputElement = {
        innerHTML: '',
        appendChild: jest.fn(),
      };
      
      const createElementSpy = jest.spyOn(global.document, 'createElement');
      
      tts.sentences = ['Hello world.', 'How are you?'];
      tts.displaySentences(outputElement);
      
      expect(outputElement.innerHTML).toBe('');
      expect(outputElement.appendChild).toHaveBeenCalledTimes(2);
      
      // Check that createElement was called for spans
      expect(createElementSpy).toHaveBeenCalledWith('span');
    });
  });

  describe('speak method', () => {
    test('should initialize and speak with web speech when Kokoro unavailable', async () => {
      // Mock Kokoro to fail
      global.navigator = { gpu: undefined };
      
      const outputElement = {
        innerHTML: '',
        appendChild: jest.fn(),
        textContent: 'Hello world. How are you?'
      };
      
      const mockSpeakWithWebSpeech = jest.spyOn(tts, 'speakWithWebSpeech').mockResolvedValue();
      
      await tts.speak('Hello world. How are you?', { outputElement });
      
      expect(tts.sentences).toEqual(['Hello world.', 'How are you.']);
      expect(mockSpeakWithWebSpeech).toHaveBeenCalled();
      
      // Restore
      global.navigator = {
        gpu: {
          requestAdapter: async () => ({ requestDevice: async () => ({}) })
        }
      };
    });

    test('should handle TTS initialization errors', async () => {
      const mockInitialize = jest.spyOn(tts, 'initializeKokoro').mockRejectedValue(new Error('TTS failed'));
      
      await expect(tts.speak('Hello world')).rejects.toThrow('TTS failed');
      
      mockInitialize.mockRestore();
    });
  });

  describe('speakWithWebSpeech', () => {
    test('should speak sentences using Web Speech API', async () => {
      tts.sentences = ['Hello.', 'World.'];
      tts.selectedVoice = { name: 'Test Voice' };
      tts.rate = 1.5;
      tts.pitch = 1.2;

      const outputElement = {
        innerHTML: '',
        appendChild: jest.fn(),
      };

      // Track utterances created
      const utterances = [];
      global.SpeechSynthesisUtterance.mockImplementation(function(text) {
        this.text = text;
        this.voice = null;
        this.rate = 1;
        this.pitch = 1;
        utterances.push(this);
        return this;
      });

      const speakPromise = tts.speakWithWebSpeech(outputElement);

      // Wait a bit for the first utterance to be created
      await new Promise(resolve => setTimeout(resolve, 50));

      // Simulate first utterance
      if (utterances[0]) {
        if (utterances[0].onstart) utterances[0].onstart();
        setTimeout(() => {
          if (utterances[0].onend) utterances[0].onend();
        }, 50);
      }

      // Wait for second utterance
      await new Promise(resolve => setTimeout(resolve, 100));

      // Simulate second utterance  
      if (utterances[1]) {
        if (utterances[1].onstart) utterances[1].onstart();
        setTimeout(() => {
          if (utterances[1].onend) utterances[1].onend();
        }, 50);
      }

      await speakPromise;

      expect(global.speechSynthesis.speak).toHaveBeenCalledTimes(2);
    });

    test('should handle speech synthesis errors', async () => {
      tts.sentences = ['Hello.'];

      let utteranceCallbacks = {};
      global.SpeechSynthesisUtterance.mockImplementation(function(text) {
        this.text = text;
        utteranceCallbacks = this;
        return this;
      });

      const speakPromise = tts.speakWithWebSpeech();

      // Simulate error
      setTimeout(() => {
        if (utteranceCallbacks.onerror) {
          utteranceCallbacks.onerror({ error: 'synthesis-failed' });
        }
      }, 10);

      await expect(speakPromise).rejects.toThrow('Speech synthesis failed');
    });

    test('should stop speaking when isStopped is true', async () => {
      tts.sentences = ['Hello.', 'World.'];
      tts.isStopped = true;

      const result = await tts.speakWithWebSpeech();
      expect(result).toBeUndefined();
      expect(global.speechSynthesis.speak).not.toHaveBeenCalled();
    });

    test('should handle pause state', async () => {
      tts.sentences = ['Sentence 1', 'Sentence 2'];
      tts.isPaused = true;

      const speakPromise = tts.speakWithWebSpeech();

      // It should not proceed while paused
      await new Promise(resolve => setTimeout(resolve, 200));
      expect(global.speechSynthesis.speak).not.toHaveBeenCalled();

      tts.isPaused = false;

      // Now it should proceed
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // It will only have tried to speak the first sentence by now
      expect(global.speechSynthesis.speak).toHaveBeenCalledTimes(1);

      // Let the promise complete to avoid open handles
      const utterance = global.SpeechSynthesisUtterance.mock.results[0].value;
      if (utterance && utterance.onend) utterance.onend();
      
      // After the first sentence ends, the second one should be spoken
      await new Promise(resolve => setTimeout(resolve, 200));
      expect(global.speechSynthesis.speak).toHaveBeenCalledTimes(2);

      const utterance2 = global.SpeechSynthesisUtterance.mock.results[1].value;
      if (utterance2 && utterance2.onend) utterance2.onend();
      
      await speakPromise;
    });

    test('should call original onerror handler', async () => {
      tts.sentences = ['Error test'];
      const originalOnError = jest.fn();
      let utterance;
      global.SpeechSynthesisUtterance.mockImplementation(function(text) {
          utterance = this;
          this.text = text;
          this.onerror = originalOnError;
          return this;
      });
  
      const speakPromise = tts.speakWithWebSpeech();
  
      // Simulate error
      setTimeout(() => {
        if (utterance.onerror) {
            utterance.onerror({ error: 'synthesis-failed' });
        }
      }, 10);
  
      await expect(speakPromise).rejects.toThrow('Speech synthesis failed');
      expect(originalOnError).toHaveBeenCalled();
    });
  });

  describe('speakWithKokoro', () => {
    beforeEach(() => {
      // Ensure WebGPU is available for these tests, to bypass the initial check
      global.navigator.gpu = {
        requestAdapter: async () => ({ requestDevice: async () => ({}) })
      };
    });

    test('should throw error if audio worklet is not initialized', async () => {
      const outputElement = { textContent: 'some text' };
      await expect(tts.speakWithKokoro(null, outputElement)).rejects.toThrow('Audio worklet not initialized');
    });

    test('should throw error for empty text content', async () => {
      const audioModule = { port: { postMessage: jest.fn() } };
      const outputElement = { textContent: '  ' }; // whitespace only
      await expect(tts.speakWithKokoro(audioModule, outputElement)).rejects.toThrow('No text content to speak');
    });
  });

  describe('Playback control', () => {
    test('pause should call speechSynthesis.pause for web speech', () => {
      tts.useWebSpeech = true;
      tts.pause();
      expect(global.speechSynthesis.pause).toHaveBeenCalled();
      expect(tts.isPaused).toBe(true);
    });

    test('resume should call speechSynthesis.resume for web speech', () => {
      tts.useWebSpeech = true;
      tts.resume();
      expect(global.speechSynthesis.resume).toHaveBeenCalled();
      expect(tts.isPaused).toBe(false);
    });

    test('stop should call speechSynthesis.cancel for web speech', () => {
      tts.useWebSpeech = true;
      tts.stop();
      expect(global.speechSynthesis.cancel).toHaveBeenCalled();
      expect(tts.isStopped).toBe(true);
    });
    
    test('stop should close Kokoro splitter if active', () => {
        const mockSplitter = { close: jest.fn() };
        tts.currentSplitter = mockSplitter;
        tts.stop();
        expect(mockSplitter.close).toHaveBeenCalled();
        expect(tts.isStopped).toBe(true);
    });
  });

  describe('TTSModule state and configuration', () => {
    test('setVoice should select a voice by index', () => {
      const voices = global.speechSynthesis.getVoices();
      tts.setVoice(1);
      expect(tts.selectedVoice).toBe(voices[1]);
    });

    test('getAvailableVoices should return voices from speechSynthesis', () => {
      const voices = global.speechSynthesis.getVoices();
      expect(tts.getAvailableVoices()).toEqual(voices);
    });

    test('isWebSpeechAvailable should return true if supported', () => {
      expect(tts.isWebSpeechAvailable()).toBe(true);
    });

    test('isKokoroAvailable should return false initially', () => {
      expect(tts.isKokoroAvailable()).toBe(false);
    });
    
    test('isKokoroAvailable should return true after initialization', async () => {
      await tts.initializeKokoro();
      // Since our mock for from_pretrained resolves, kokoroModel should be set
      expect(tts.isKokoroAvailable()).toBe(true);
    });

    test('getCurrentSystem should report correct TTS system', async () => {
      // Initially, no system is active until an attempt to speak or initialize is made
      expect(tts.getCurrentSystem()).toBe('none');
      
      // Initialize, which should set Kokoro as the primary if WebGPU is available
      await tts.initializeKokoro();
      expect(tts.getCurrentSystem()).toBe('kokoro');

      // Force web speech fallback
      const originalGpu = global.navigator.gpu;
      global.navigator.gpu = undefined;
      tts.kokoroModel = null; // reset
      tts.useWebSpeech = false;
      await tts.initializeKokoro();
      expect(tts.getCurrentSystem()).toBe('web-speech');
      
      // Restore
      global.navigator.gpu = originalGpu;
    });
  });
});
