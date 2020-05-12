var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(DIST_DIR),
  },
  module: {
      rules: [
          {
              test: /\.jsx?/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader', 
                query: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
          }
      ]
  }
};