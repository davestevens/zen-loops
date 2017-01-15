"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "babel-polyfill",
    "./app/main.jsx"
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
      }
    })
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
