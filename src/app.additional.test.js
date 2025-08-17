/**
 * Additional coverage tests for app.js UI controller.
 */

// Mock dependent modules before requiring app.js
jest.mock('./llm.js', () => {
  return { LLMModule: jest.fn().mockImplementation(() => ({
    generate: jest.fn(async (prompt, { onToken, onProgress } = {}) => {
      // Simulate progress callbacks
      if (onProgress) {
        onProgress({ percentage: 10, text: 'init' });
        onProgress({ percentage: 100, text: 'done' });
      }
      // Stream a couple tokens
      if (onToken) {
        onToken('Hello');
        onToken(' world');
      }
    })
  })) };
});

jest.mock('./tts.js', () => {
  return { TTSModule: jest.fn().mockImplementation(() => ({
    speak: jest.fn(async (text, { onProgress, outputElement } = {}) => {
      if (onProgress) {
        onProgress({ percentage: 50, text: 'loading' });
        onProgress({ percentage: 100, text: 'ready' });
      }
      if (outputElement) {
        // Directly set text without referencing outer-scope document
        outputElement.textContent = text;
      }
    }),
    pause: jest.fn(),
    resume: jest.fn(),
    stop: jest.fn(),
    setRate: jest.fn(),
    setPitch: jest.fn(),
    setVoice: jest.fn(),
    markSentenceSpoken: jest.fn()
  })) };
});

jest.mock('./audio.js', () => {
  return { AudioModule: jest.fn().mockImplementation(() => ({
    addEventListener: jest.fn(),
    pause: jest.fn(),
    resume: jest.fn(),
    stop: jest.fn()
  })) };
});

// Basic navigator mock
Object.defineProperty(global, 'navigator', {
  value: { gpu: undefined },
  writable: true
});

describe('AppController (app.js)', () => {
  let AppController;

  function buildDOM() {
    document.body.innerHTML = `
      <div id="device-status"></div>
      <div id="loading-progress" class="hidden"><div id="progress-bar"></div><span id="loading-text"></span></div>
      <textarea id="llm-prompt"></textarea>
      <button id="generate-btn">Generate</button>
      <div id="llm-output"></div>
      <div id="tts-output"></div>
      <div id="ttfb"></div>
      <div id="tokens-per-sec"></div>
      <div id="llm-status"></div>
      <textarea id="tts-text"></textarea>
      <button id="tts-play"></button>
      <button id="tts-pause"></button>
      <button id="tts-resume"></button>
      <button id="tts-stop"></button>
      <span id="rate-value"></span><input id="tts-rate" type="range" value="1" />
      <span id="pitch-value"></span><input id="tts-pitch" type="range" value="1" />
      <select id="tts-voice"><option value="voice1">voice1</option></select>
      <textarea id="combined-prompt"></textarea>
      <button id="generate-speak-btn">Generate & Speak</button>
      <div id="combined-output"></div>
      <button id="combined-pause"></button>
      <button id="combined-stop"></button>
      <div id="tts-status"></div>
      <div id="error-container" class="hidden"><span id="error-message"></span></div>
      <button class="tab-btn" data-tab="llm-stream"></button>
      <button class="tab-btn" data-tab="tts-only"></button>
      <button class="tab-btn" data-tab="llm-tts"></button>
      <div id="llm-stream" class="tab-content"></div>
      <div id="tts-only" class="tab-content"></div>
      <div id="llm-tts" class="tab-content"></div>
    `;
  }

  beforeEach(() => {
    jest.resetModules();
    buildDOM();
  require('./app.js'); // register DOMContentLoaded listener
  // Trigger DOMContentLoaded to instantiate AppController
  document.dispatchEvent(new Event('DOMContentLoaded'));
  AppController = window.app.constructor;
  });

  test('initialization sets up UI and unsupported device status', () => {
    expect(document.getElementById('device-status').textContent).toContain('wasm');
    // Tab switch default
    expect(window.app.currentTab).toBe('llm-stream');
  });

  test('generateText happy path streams tokens and updates stats', async () => {
    const prompt = document.getElementById('llm-prompt');
    prompt.value = 'Test prompt';
    await window.app.generateText();
    expect(document.getElementById('llm-output').textContent).toBe('Hello world');
    expect(document.getElementById('ttfb').textContent).toContain('TTFB');
    expect(document.getElementById('tokens-per-sec').textContent).toContain('Tokens');
  });

  test('generateText with empty prompt shows error', async () => {
    await window.app.generateText();
    expect(document.getElementById('error-container').classList.contains('hidden')).toBe(false);
  });

  test('playTTS happy path renders output', async () => {
    const text = document.getElementById('tts-text');
    text.value = 'Hello audio';
    await window.app.playTTS();
    expect(document.getElementById('tts-output').textContent || document.getElementById('tts-output').innerHTML).toContain('Hello audio');
  });

  test('playTTS with empty text shows error', async () => {
    await window.app.playTTS();
    expect(document.getElementById('error-container').classList.contains('hidden')).toBe(false);
  });

  test('pause/resume/stop delegate to modules', () => {
    const tts = window.app.tts;
    const audio = window.app.audio;
    window.app.pauseTTS();
    window.app.resumeTTS();
    window.app.stopTTS();
    expect(tts.pause).toHaveBeenCalled();
    expect(tts.resume).toHaveBeenCalled();
    expect(tts.stop).toHaveBeenCalled();
    expect(audio.pause).toHaveBeenCalled();
    expect(audio.resume).toHaveBeenCalled();
    expect(audio.stop).toHaveBeenCalled();
  });

  test('generateAndSpeak runs both generation and speech', async () => {
    const prompt = document.getElementById('combined-prompt');
    prompt.value = 'Combined test';
    await window.app.generateAndSpeak();
    // After speak output should contain tokens
    expect(document.getElementById('combined-output').textContent).toContain('Hello world');
  });

  test('showProgress and updateProgress manipulate DOM', () => {
    window.app.showProgress(true, 'Loading test');
    expect(document.getElementById('loading-progress').classList.contains('hidden')).toBe(false);
    window.app.updateProgress(55, 'Halfway');
    expect(document.getElementById('progress-bar').style.width).toBe('55%');
    window.app.showProgress(false);
    expect(document.getElementById('loading-progress').classList.contains('hidden')).toBe(true);
  });

  test('detectDevice with gpu support variations', async () => {
    // Force new app with gpu present and adapter
    navigator.gpu = { requestAdapter: jest.fn().mockResolvedValue({}) };
    buildDOM();
    const controller = new AppController();
    await controller.detectDevice();
    expect(document.getElementById('device-status').textContent).toBe('webgpu');
    // Adapter null path
    navigator.gpu.requestAdapter.mockResolvedValueOnce(null);
    await controller.detectDevice();
    expect(document.getElementById('device-status').textContent).toContain('unavailable');
  });
});
