const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './_assets/js/blog.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('../assets/blog.css'),
  ]
};
