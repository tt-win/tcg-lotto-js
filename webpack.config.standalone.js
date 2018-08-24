const { resolve } = require('path');
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
    minimize: true,
  },
});

const cleanWebpackPlugin = new NpmCleanWebpackPlugin(['dist'], {
  root: resolve(__dirname, '.'),
  verbose: false,
  dry: false,
});

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  sourceMap: false,
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
    definePlugin,
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
          presets: ['es2015'],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: false,
};
