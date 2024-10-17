const path = require('path')

module.exports = (webpackConfigEnv, argv) => {

  return {
    entry: path.join(__dirname, './index'),
    output: {
      filename: 'main.js',
    },
  }
}
