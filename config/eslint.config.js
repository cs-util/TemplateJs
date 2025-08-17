const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
  ignores: ['coverage/**', 'reports/**', 'node_modules/**', '.stryker-tmp/**'],
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
      'complexity': ['warn', 10],
      'max-depth': ['warn', 4],
    },
  },
];
