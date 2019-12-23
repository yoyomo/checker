const path = require('path');
const outputPath = path.resolve(__dirname, './docs');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      type: 'javascript/auto',
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['APP_URL'])
  ],
  devServer: {
    contentBase: outputPath
  },
};