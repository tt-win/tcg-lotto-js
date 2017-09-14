const { resolve } = require('path');
const NpmHtmlWebpackPlugin = require('html-webpack-plugin');
const NpmExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const NpmInlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const NpmCleanWebpackPlugin = require('clean-webpack-plugin');

var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';


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


//-- plugins

const vendors = [
  'lodash',
];



module.exports = {
    entry: {
      bundle : ['./src/export.js'],
    },

    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'lott-translator.js',
        libraryTarget: 'var',
        library: 'LottoTranslator'
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
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
