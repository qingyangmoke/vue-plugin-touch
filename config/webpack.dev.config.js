const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const banner = `vue-touch
Description:vue touch events
Author: ${pkg.author}
Version: v${pkg.version}
Github: ${pkg.repository.url}`
;

const config = {
  entry: {
    'vueTouch': [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    filename: 'index.debug.js',
    libraryTarget: 'umd',
    library: 'vueTouch',
  },
  plugins: [
    new webpack.BannerPlugin(banner),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
    // noParse: /src\/p2\/p2.js/
  },
};

module.exports = config;
