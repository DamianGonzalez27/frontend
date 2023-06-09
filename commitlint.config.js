module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']
    ],
    'subject-case': [2, 'always', 'sentence-case'],
    'scope-case': [2, 'always', 'kebab-case'],
    'body-max-line-length': [2, 'always', 72]
  }
}
