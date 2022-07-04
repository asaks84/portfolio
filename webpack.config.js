const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: ["./src/assets/js/script.js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["index"],
      title: "~we don't talk about bruno~",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
     filename: "assets/css/style.css",
    }),
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].bundle.js",
    assetModuleFilename: 'assets/images/[name][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 3. remove CSS from JS and save into an external file
          { loader: MiniCssExtractPlugin.loader },
          // 2. generate CSS into CommonJS
          "css-loader",
          // 1. tranpile SCSS into CSS
          "sass-loader",
        ],
      },
      {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: "asset/resource",
     },
    ],
  },
};
