const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  watch: devMode,
  entry: path.resolve(__dirname, 'src/index.js'),
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
    }),
    new CopyPlugin([
      {
        from: 'src/index.html',
        to: ''
      },
      {
        from: 'src/assets',
        to: 'assets/'
      }
    ])
  ],
    resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Less to CSS
          },
          {
            loader: 'postcss-loader' // Autoprefixer
          }
        ]
      }, 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}