module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'comma-dangle': ['error', 'only-multiline'],
    'no-trailing-spaces': 'error',
  },
};
