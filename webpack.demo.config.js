const config = require('./webpack.base.config.js')

const demoConfig = Object.assign({}, config, {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'demo.js'
  }
})

module.exports = demoConfig

