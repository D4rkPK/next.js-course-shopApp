module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true, 
    es6: true,
  },
  extends: [
    'eslint:recommend',
    'plugin:jsx-a11y/recommend',
    'plugin:prettier/recommend',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'semi': ['error', 'always'],
  }
}