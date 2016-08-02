var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

module.exports = {

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: [ path.join(__dirname, '/../src/platform/app/shared'), 'node_modules' ]
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        include: /\/app\//,
        loader: 'file-loader?name=templates/[1]&regExp=src/(.*)'
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: ROOT + '/dist',
      verbose: true,
      dry: false
    })
  ]
};
