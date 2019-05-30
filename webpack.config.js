'use strict'

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const config = {
  externals: [ nodeExternals() ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
}

module.exports = config
