const { resolve } = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const JsIncGenerator = require('./webpack.plugins.JsIncGenerator');

// ----------------------------------------------------------------------------
// plugins
// ----------------------------------------------------------------------------

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});

// TODO 調整生產設定
const terserPlugin = new TerserPlugin({
  terserOptions: {
    safari10: true,
    compress: true,
    mangle: true,
  },
});

module.exports = {
  mode: 'production',
  entry: {
    lottTranslator: ['./src/i18n/lott-translator-export.js'],
    bettingCompress: ['./src/compress/export.js'],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    library: {
      type: 'var',
      name: '[name]',
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    definePlugin,
    new JsIncGenerator(),
    new HtmlWebpackPlugin({
      title: 'B2B',
      filename: 'index.html',
      template: './src/index.html',
      inject: 'head', // 將 script 標籤注入到 head
      scriptLoading: 'defer', // 使用 defer
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      terserPlugin,
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            'lodash',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-modules-commonjs',
          ],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
};
