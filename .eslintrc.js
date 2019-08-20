module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'vue/html-closing-bracket-spacing': 0,
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': false,
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'prefer-const': ['error', {
      'destructuring': 'all',
      "ignoreReadBeforeAssign": false
    }],
    'vue/max-attributes-per-line': [4, {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'indent': 'off',
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1
    }]
  }
}
