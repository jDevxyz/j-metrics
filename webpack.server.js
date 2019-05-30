const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: path.resolve(path.join(__dirname, 'src/index.ts')),
  output: {
    path: path.resolve(path.join(__dirname, 'dist')),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'J-Metrics'
  },
  target: 'node'
})
