import { getOptimalDevice } from './index.js';

describe('getOptimalDevice branch coverage', () => {
  const originalDescriptor = Object.getOwnPropertyDescriptor(navigator, 'gpu');

  afterAll(() => {
    if (originalDescriptor) {
      Object.defineProperty(navigator, 'gpu', originalDescriptor);
    } else if ('gpu' in navigator) {
      delete navigator.gpu; // restore absence
    }
  });

  test('returns webgpu when navigator.gpu present', () => {
    Object.defineProperty(navigator, 'gpu', { value: {}, configurable: true });
    expect(getOptimalDevice()).toBe('webgpu');
  });

  test('returns wasm when navigator.gpu absent', () => {
    if ('gpu' in navigator) {
      try { delete navigator.gpu; } catch { Object.defineProperty(navigator, 'gpu', { value: null, configurable: true }); }
    }
    expect(getOptimalDevice()).toBe('wasm');
  });
});
