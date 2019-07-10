const webpack = require('webpack');

module.exports = {
  entry: {
    filename: './src/app.js'
  },
  output : {
    filename: './src/build2.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }
    ]
  }
}
