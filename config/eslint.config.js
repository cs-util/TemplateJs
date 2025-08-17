const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  // Global ignores (placed first so they apply regardless of later configs)
  {
    ignores: [
      '.stryker-tmp/**',
      '**/.stryker-tmp/**',
      'coverage/**',
      'config/coverage/**',
      'mutation-testing/reports/**',
      'reports/**'
    ]
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
      'complexity': ['warn', 10],
      'max-depth': ['warn', 4],
    },
  },
];
