const path = require('path')
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
  module: {
    rules: [
      {
        test: /\.scss|.sass$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpe?g)$/i,
        loader: 'responsive-loader',
        options: {
          sizes: [320, 768, 1200, 2500, 3000],
          quality: 70,
          outputPath: path.resolve(__dirname, 'dist/assets/img')
        }
      }
  ]
  }
};