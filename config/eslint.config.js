const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  {
    ignores: [
      '../coverage/**',
      'coverage/**',
      '../reports/**',
      'reports/**',
      '../node_modules/**',
      '../playwright-report/**',
      'playwright-report/**',
      '../test-results/**',
      'test-results/**',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
    rules: {
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-extend-native': 'error',
      complexity: ['warn', 10],
      'max-depth': ['warn', 4],
    },
  },
];
