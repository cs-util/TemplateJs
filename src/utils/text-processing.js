// Text processing utilities for LLM and TTS
export function splitTextIntoChunks(text, chunkSize = 100) {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const words = text.trim().split(/\s+/);
  const chunks = [];
  let currentChunk = [];

  for (const word of words) {
    if (currentChunk.join(' ').length + word.length + 1 <= chunkSize) {
      currentChunk.push(word);
    } else {
      if (currentChunk.length > 0) {
        chunks.push(currentChunk.join(' '));
        currentChunk = [word];
      } else {
        // Word is longer than chunk size, add it anyway
        chunks.push(word);
      }
    }
  }

  if (currentChunk.length > 0) {
    chunks.push(currentChunk.join(' '));
  }

  return chunks;
}

export function splitIntoSentences(text) {
  return text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(s => s + '.');
}

export function formatPromptForInstruction(prompt) {
  return `<|im_start|>system
You are a helpful assistant.<|im_end|>
<|im_start|>user
${prompt}<|im_end|>
<|im_start|>assistant
`;
}

export function normalizeText(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/([.!?])\s*([A-Z])/g, '$1 $2');
}

export function estimateTokenCount(text) {
  if (!text || typeof text !== 'string') {
    return 0;
  }

  // Rough estimation: ~4 characters per token for English text
  return Math.ceil(text.length / 4);
}

export function tokenizeForDisplay(text) {
  // Simple tokenization for display purposes
  const words = text.split(/(\s+)/);
  return words.filter(word => word.length > 0);
}

export function formatDuration(seconds) {
  if (typeof seconds !== 'number' || seconds < 0) {
    return '0:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function calculateTokensPerSecond(tokenCount, durationMs) {
  if (typeof tokenCount !== 'number' || typeof durationMs !== 'number' || durationMs <= 0) {
    return 0;
  }

  return (tokenCount / (durationMs / 1000)).toFixed(1);
}
