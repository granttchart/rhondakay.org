const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  watch: devMode,
  entry: path.resolve(__dirname, 'src/app.js'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'rhondakay.min.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "rhondakay.min.css"
    })
  ],
  module: {
    rules: [{
      test: /\.sass$/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Less to CSS
      }]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  }
}