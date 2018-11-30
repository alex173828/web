const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
	mode: 'development',

	entry: {
		client: ['./src/index.js', hotMiddlewareScript],
	},

	output: {
		path: path.resolve(__dirname, './../dist'),
		filename: '[name].js',
		publicPath: '/wp-content/themes/app-jedi/'
	},

	resolve: {
		alias: {
			client: path.resolve(__dirname, './../src/'),
			client_modules: path.resolve(__dirname, './../src/modules'),
			client_blocks: path.resolve(__dirname, './../src/blocks'),
			client_pages: path.resolve(__dirname, './../src/pages/'),
			client_actions: path.resolve(__dirname, './../src/js/actions/'),

			actions: path.resolve(__dirname, './../src/js/actions/'),
			modules: path.resolve(__dirname, './../src/modules'),
			blocks: path.resolve(__dirname, './../src/blocks'),
			pages: path.resolve(__dirname, './../src/pages/'),
			src: path.resolve(__dirname, './../src/')
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["env", "react"],
						plugins: ["transform-function-bind", 'transform-object-rest-spread', "react-hot-loader/babel"]
					}
				}
			}, {
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
					{
			          loader: 'sass-resources-loader',
			          options: {
			            resources: [
			            	'./src/variables.scss',
			            	'./src/mixins.scss'
			            ]
			          },
			        },
				]
			}, {
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "assets/fonts/[name].[ext]",
					}
				}
			}, {
				test: /\.(gif|png|jpe?g)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/img/[hash].[ext]'
						}
					}, {
						loader: 'image-webpack-loader',
						options: {
							disable: true
						}
					}
				]
			}, {
				test: /\.(svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/icons/[hash].[ext]'
						}
					}
				]
			}, {
				test: /\.css$/,
				use: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},

	devtool: 'inline-source-map',

	devServer: {
		overlay: true,
		contentBase: './dist',
		// hot: true
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebPackPlugin({
			inject: true,
			filename: 'index.html',
			chunks: [ 'client' ],
			template: './src/index.html',
			alwaysWriteToDisk: true
		}),
		new HtmlWebpackHarddiskPlugin({
			outputPath: path.resolve(__dirname, './../dist')
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
