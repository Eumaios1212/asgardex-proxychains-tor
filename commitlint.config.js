// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // “2” = error, “always” = enforce every commit
    // "1" = warn, = violations show up in output, but don't make Commitlint exit with failure.
    'type-enum': [
      2,
      'always',
      [
        // 'build',
        // 'chore',
        'ci',
        'docs',
        // 'feat',
        // 'fix',
        // 'perf',
        'refactor',
        'revert',
        // 'style',
        'test',
        'wip'
      ]
    ]
  }
};
