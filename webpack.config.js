const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const config = (env) => {

  const isDevelopment = env === 'development'
  const fontPath = isDevelopment ? '[name].[ext]' : '/static/fonts/[name].[ext]'
  const imagePath = isDevelopment ? '[name].[ext]' : '/static/images/[name].[hash].[ext]'

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.[hash].js'
    },
    devServer: {
      open: true,
      port: 3000,
      stats:'errors-only'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude:/node_modules/,
          use:'babel-loader'
        }, {
          test: /\.s?[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
          test: /\.(png|jpe?g|gif|svg)$/,
          loader:'file-loader',
          options: {
            name: imagePath
          }
        }, {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader',
          options: {
            name:fontPath,
          }
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
      }),
      new ErrorOverlayPlugin()
    ],
    devtool: 'cheap-module-source-map'
  }
}

module.exports = config