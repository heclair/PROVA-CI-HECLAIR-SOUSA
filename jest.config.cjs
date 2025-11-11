/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  transform: { '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.ts', '!**/*.d.ts', '!dist/**', '!**/*.test.ts'],
  testMatch: ['**/?(*.)+(spec|test).ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  verbose: true
};
