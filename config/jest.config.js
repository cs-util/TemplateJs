module.exports = {
  rootDir: '../',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '/.stryker-tmp/'],
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testEnvironment: 'jsdom',
};
