const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const cwd = process.cwd();
const outputPath = path.join(cwd, 'build');

module.exports = {
  context: path.resolve(cwd, './'),
  entry: ['./src/index.tsx'],
  output: {
    path: outputPath,
    publicPath: '/',
    pathinfo: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader?cacheDirectory'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
