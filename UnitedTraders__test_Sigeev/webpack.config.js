const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanCSS = require('clean-css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-srcsets-loader'
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]'
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progresive: true,
                quality: 70
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-70',
                speed: 4
              }
            }
          }
        ]
      }, {
        test: /\.(svg)$/i,
        loader: 'raw-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "assets/fonts/[name].[ext]"
          }
        }
      }, {
        test: /\.css$/,
        use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },

  devServer: {
    overlay: true
  },

  plugins: [
    new MiniCssExtractPlugin({filename: '[name].css'}),
    new HtmlWebPackPlugin({inject: true, filename: 'index.html', chunks: ['client'], template: './index.html', alwaysWriteToDisk: true}),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(['dist'], {}),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ],

  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
