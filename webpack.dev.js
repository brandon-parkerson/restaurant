const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
     hot: true,
     watchFiles: ['src/index.html'],
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
 });