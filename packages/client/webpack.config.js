const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { NODE_ENV } = process.env

module.exports = {
  mode: NODE_ENV === 'development' ? 'development' : 'production',
  entry: {
    app: './src/index',
    vendor: [
      'react',
      'react-dom',
      'lodash',
      'glamor',
      'substyle',
      'substyle-glamor',
    ],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-[hash].js',
    publicPath: NODE_ENV === 'development' ? '/' : '/build/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: 'favicon.ico',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        loader: 'raw-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
}
