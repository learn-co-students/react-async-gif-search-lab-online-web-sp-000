var path = require('path');
var webpack = require('webpack');

module.exports = {
  watchOptions: {
    poll: 1000 // Check for changes every second
  },
  entry: './src/index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
