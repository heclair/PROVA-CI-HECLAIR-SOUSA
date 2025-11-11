/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.ts', '!**/*.d.ts', '!dist/**', '!**/*.test.ts'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  verbose: true
};
