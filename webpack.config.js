const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    open: true,
    port: 3000,
    stats:'errors-only',
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,
        use:'babel-loader'
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }, {
        test: /\.(png|jpe?g|gif)$/,
        use:'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app',
      filename: 'index.html',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}

module.exports = config