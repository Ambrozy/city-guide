const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BabiliPlugin = require("babili-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  plugins: [
    new BabiliPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: 'css-loader!csso-loader!sass-loader'
        })
      }
    ]
  }
});
