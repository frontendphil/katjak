const _ = require('lodash')
const config = require('./webpack.config')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = _.assign({}, config, {
  output: _.assign({}, config.output, {
    publicPath: '/build',
  }),
  plugins: [].concat(config.plugins, [new UglifyJsPlugin()]),
})
