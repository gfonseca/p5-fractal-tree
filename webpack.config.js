const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|html|css)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};