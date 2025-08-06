const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
});