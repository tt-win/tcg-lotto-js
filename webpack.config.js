const { resolve } = require('path');
const NpmHtmlWebpackPlugin = require('html-webpack-plugin');
const NpmExtractTextPlugin = require('extract-text-webpack-plugin');
const NpmCleanWebpackPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const webpack = require('webpack');

// ----------------------------------------------------------------------------
// plugins
// ----------------------------------------------------------------------------

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});

const loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  options: {
    eslint: {
      emitWarning: true,
    },
    minimize: isDev,
  },
});

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendors', 'manifest'],
  filename: isDev ? '[name].bundle.js' : '[name].bundle.[chunkhash:8].js',
  minChunks: 'Infinity',
});

const htmlWebpackPlugin = new NpmHtmlWebpackPlugin({
  title: 'B2B',
  filename: 'index.html',
  template: './src/index.html',
});

// for css bundle
const extractTextPlugin = new NpmExtractTextPlugin({
  filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
});

const cleanWebpackPlugin = new NpmCleanWebpackPlugin(['dist'], {
  root: resolve(__dirname, '.'),
  verbose: false,
  dry: false,
});

// TODO 調整生產設定
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  sourceMap: true,
  exclude: /(.*\.min\.js|PIE.*js)/,
  compress: {
    dead_code: true,
    warnings: false,
  },
  output: { comments: false },
  dead_code: true,
  unused: true,
});

module.exports = {
  entry: {
    lottTranslator: ['./src/i18n/lott-translator-export.js'],
    bettingCompress: ['./src/compress/export.js'],
  },

  resolve: {
    alias: {
      'lott-js': resolve(__dirname, './src/index'),
    },
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'var',
    library: '[name]',
  },

  plugins: [
    cleanWebpackPlugin,
    uglifyJsPlugin,
    loaderOptionsPlugin,
    htmlWebpackPlugin,
    commonsPlugin,
    definePlugin,
    extractTextPlugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['lodash'],
          presets: ['env'],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
