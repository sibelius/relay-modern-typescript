const path = require('path');

const { merge } = require('webpack-merge');

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const webpackCommonConfig = require('./webpackCommonConfig');

const cwd = process.cwd();
const outputPath = path.join(cwd, 'build');

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new ReactRefreshPlugin(),
  ],
  devServer: {
    contentBase: outputPath,
    disableHostCheck: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    hotOnly: false,
    compress: true,
    open: true,
    port: 8889,
  },
  // uncomment to have less warnings
  // stats: { warnings: false },
});
