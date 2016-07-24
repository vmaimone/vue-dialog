const config = require('./webpack.base.config.js')

const libConfig = Object.assign({}, config, {
  entry: './src/lib/index.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'vue-modal-lib.js',
    library: 'vModal',
    libraryTarget: 'umd'
  }
})

module.exports = libConfig
