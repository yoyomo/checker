const path = require('path');
const outputPath = path.resolve(__dirname, './docs');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.mjs',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.mjs$/,
      type: 'javascript/auto'
    }]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['APP_URL'])
  ],
  devServer: {
    contentBase: outputPath
  },
};