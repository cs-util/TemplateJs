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
      tts.sentences = ['Hello.'];
      tts.isPaused = true;

      let utteranceCallbacks = {};
      global.SpeechSynthesisUtterance.mockImplementation(function(text) {
        utteranceCallbacks = this;
        return this;
      });

      const speakPromise = tts.speakWithWebSpeech();

      // Simulate that it stays paused for a while, then unpauses
      setTimeout(() => {
        tts.isPaused = false;
        setTimeout(() => {
          if (utteranceCallbacks.onstart) utteranceCallbacks.onstart();
          setTimeout(() => {
            if (utteranceCallbacks.onend) utteranceCallbacks.onend();
          }, 10);
        }, 150); // After the pause check timeout
      }, 50);

      await speakPromise;
      expect(global.speechSynthesis.speak).toHaveBeenCalled();
    });
  });

  describe('_simulateModelLoad', () => {
    test('should simulate progress callbacks', async () => {
      const onProgress = jest.fn();
      
      await tts._simulateModelLoad(onProgress);
      
      expect(onProgress).toHaveBeenCalledWith({
        percentage: 0,
        text: 'Loading Kokoro model: 0%'
      });
      expect(onProgress).toHaveBeenCalledWith({
        percentage: 100,
        text: 'Loading Kokoro model: 100%'
      });
      expect(onProgress.mock.calls.length).toBeGreaterThan(5);
    });

    test('should handle missing onProgress callback', async () => {
      await expect(tts._simulateModelLoad()).resolves.toBeUndefined();
    });
  });

  describe('markSentenceSpoken', () => {
    test('should mark sentence as spoken with CSS class', () => {
      const mockSentenceElement = {
        classList: {
          add: jest.fn(),
        }
      };
      
      jest.spyOn(global.document, 'getElementById').mockReturnValue(mockSentenceElement);
      
      tts.markSentenceSpoken(0);
      
      expect(global.document.getElementById).toHaveBeenCalledWith('sentence-0');
      expect(mockSentenceElement.classList.add).toHaveBeenCalledWith('spoken');
    });

    test('should handle missing sentence element', () => {
      jest.spyOn(global.document, 'getElementById').mockReturnValue(null);
      
      expect(() => tts.markSentenceSpoken(0)).not.toThrow();
    });
  });

  describe('stop method', () => {
    test('should stop TTS and cancel speech synthesis', () => {
      tts.currentSplitter = { close: jest.fn() };
      tts.currentUtterance = { voice: 'test' };
      tts.useWebSpeech = true; // Enable web speech for this test
      
      // Mock querySelectorAll
      global.document.querySelectorAll = jest.fn().mockReturnValue([
        { classList: { remove: jest.fn() } }
      ]);
      
      tts.stop();
      
      expect(tts.isStopped).toBe(true);
      expect(tts.currentSplitter).toBe(null);
      expect(global.speechSynthesis.cancel).toHaveBeenCalled();
    });

    test('should handle stop when no current splitter', () => {
      tts.currentSplitter = null;
      global.document.querySelectorAll = jest.fn().mockReturnValue([]);
      
      expect(() => tts.stop()).not.toThrow();
      expect(tts.isStopped).toBe(true);
    });
  });

  describe('pause and resume', () => {
    test('should pause and resume TTS', () => {
      tts.useWebSpeech = true; // Enable web speech for this test
      
      tts.pause();
      expect(tts.isPaused).toBe(true);
      expect(global.speechSynthesis.pause).toHaveBeenCalled();
      
      tts.resume();
      expect(tts.isPaused).toBe(false);
      expect(global.speechSynthesis.resume).toHaveBeenCalled();
    });

    test('should handle pause/resume without web speech', () => {
      tts.useWebSpeech = false;
      
      tts.pause();
      expect(tts.isPaused).toBe(true);
      // speechSynthesis should not be called
      
      tts.resume();
      expect(tts.isPaused).toBe(false);
    });
  });

  describe('isWebSpeechAvailable', () => {
    test('should return true when speechSynthesis is available', () => {
      expect(tts.isWebSpeechAvailable()).toBe(true);
    });

    test('should return false when speechSynthesis is not available', () => {
      const originalSpeechSynthesis = global.speechSynthesis;
      delete global.window.speechSynthesis;
      
      expect(tts.isWebSpeechAvailable()).toBe(false);
      
      // Restore
      global.window.speechSynthesis = originalSpeechSynthesis;
    });
  });
});
