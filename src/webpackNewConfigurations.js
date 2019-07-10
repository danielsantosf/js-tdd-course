//new version, @babel/preset-env e babel-loader

module.exports = {
  entry: {
    filename: './src/app.js'
  },
  output: {
    filename: './src/build5.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]

            }
          }
      }
    ]
  }
}
