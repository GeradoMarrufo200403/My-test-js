module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.js',  // Para la nueva estructura
    '**/test/**/*.test.js'        // Mantiene compatibilidad con tu estructura anterior
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true
};