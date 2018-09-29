module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'airbnb',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'parser': 'babel-eslint',
  'plugins': ['react'],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    // 'no-unused-vars': ['off'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'import/prefer-default-export': 'off',
  }
};
