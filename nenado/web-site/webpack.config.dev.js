const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
	mode: 'development',

	entry: {
		client: ['./src/index.js', hotMiddlewareScript],
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/wp-content/themes/nenado/'
	},

	resolve: {
		alias: {
			client: path.resolve(__dirname, 'src/'),
			client_modules: path.resolve(__dirname, 'src/modules'),
			client_blocks: path.resolve(__dirname, 'src/blocks'),
			src: path.resolve(__dirname, 'src/'),
			blocks: path.resolve(__dirname, 'src/blocks'),
			elements: path.resolve(__dirname, 'src/elements/'),
			client_pages: path.resolve(__dirname, 'src/pages/'),
			client_actions: path.resolve(__dirname, 'src/js/actions/'),
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
				test: /\.(gif|png|jpe?g|svg)$/i,
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
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},

	devtool: 'inline-source-map',

	devServer: {
		contentBase: './dist',
		hot: true
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
			outputPath: path.resolve(__dirname, 'dist')
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
