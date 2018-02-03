const _ = require('lodash')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = require('./webpack.config')

module.exports = _.assign({}, config, {
  output: _.assign({}, config.output, {
    publicPath: '/build',
  }),
  plugins: [].concat(config.plugins, [
    new UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ]),
})
