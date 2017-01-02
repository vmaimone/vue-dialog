const config = require('./webpack.base.config.js')

const libConfig = Object.assign({}, config, {
  entry: './src/lib/index.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'vue-dialog.js',
    library: 'VueDialog',
    libraryTarget: 'umd'
  }
})

module.exports = libConfig
