var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackMerge = require('webpack-merge');
var path = require('path');
var commonConfig = require('./webpack.common.js');


module.exports = webpackMerge(commonConfig, {
  entry: {
    'vendor':     './src/vendor.js',
    'main':   './src/app.js'
  },

  output: {
    path: './dist',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    // new CleanWebpackPlugin(['dist/horisont'], {
    //   root: __dirname,
    //   verbose: true,
    //   dry: false
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: __dirname + '/dist'
  }
});
