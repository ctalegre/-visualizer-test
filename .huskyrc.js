const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'npm run lint:fix'
    ]),
    'commit-msg': tasks([
      'cat $HUSKY_GIT_PARAMS | npm run commitlint'
    ])
  }
}