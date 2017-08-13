const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/client.js',
  output: {
    path: './src/static/js/',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: "babel", 
        query:
          {
            presets:['es2015','react']
          }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  }
};