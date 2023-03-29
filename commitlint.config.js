module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // More information about types: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type

    'type-enum': [
      2,
      'always',
      [
        'improvement',
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  }
}
