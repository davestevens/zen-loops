"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OfflinePlugin = require("offline-plugin");

module.exports = {
  entry: {
    "bundle": [
      "babel-polyfill",
      "./app/main.jsx"
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.[hash].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production")
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.html"
    }),
    new OfflinePlugin({
      safeToUseOptionalCaches: true,

      caches: {
        main: [
          "bundle.[hash].js",
          "index.html"
        ],
        optional: [
          ":rest:"
        ]
      },

      ServiceWorker: {
        events: true
      },
      AppCache: {
        events: true
      }
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [ "babel-loader" ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.scss?$/,
      use: [ "style-loader", "css-loader", "autoprefixer-loader", "sass-loader" ],
      include: __dirname
    }, {
      test: /manifest.json$/,
      use: ["file-loader?name=manifest.json", "web-app-manifest-loader"],
      include: __dirname
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loaders: ["file-loader?context=app/assets&name=images/[path][name].[ext]", {
        loader: "image-webpack-loader",
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 4,
          },
          pngquant: {
            quality: "75-90",
            speed: 3,
          },
        },
      }],
      exclude: /node_modules/,
      include: __dirname,
    }]
  }
}
