"use strict";

const path = require("path");
const webpack = require("webpack")

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack/hot/dev-server",
    "./app/main.js"
  ],
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: [ "babel" ],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}
