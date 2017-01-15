"use strict";

const path = require("path");
const webpack = require("webpack")

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack/hot/dev-server",
    "babel-polyfill",
    "./app/main.jsx"
  ],
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [ "babel" ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.scss?$/,
      loaders: [ "style", "css", "autoprefixer", "sass" ],
      include: __dirname
    }]
  }
}