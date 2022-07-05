const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: ['./src/assets/js/script.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js',
    assetModuleFilename: 'assets/images/[name][ext][query]',
    clean: true,
  },

  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      title: "~we don't talk about bruno~",
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 2. remove CSS from JS and save into an external file
          { loader: MiniCssExtractPlugin.loader },
          // 1. generate CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          // 3. remove CSS from JS and save into an external file
          { loader: MiniCssExtractPlugin.loader },
          // 2. generate CSS into CommonJS
          'css-loader',
          // 1. tranpile SCSS into CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
