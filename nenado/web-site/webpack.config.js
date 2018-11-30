const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: {
		client: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/wp-content/themes/nenado/'
		// publicPath: '/'
	},

	resolve: {
		alias: {
			client: path.resolve(__dirname, 'src/'),
			client_modules: path.resolve(__dirname, 'src/modules'),
			client_blocks: path.resolve(__dirname, 'src/blocks'),
			blocks: path.resolve(__dirname, 'src/blocks'),
			src: path.resolve(__dirname, 'src/'),
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
						plugins: ["transform-function-bind", 'transform-object-rest-spread']
					}
				}
			}, {
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
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
		new CompressionPlugin({
			test: /\.js$|.jsx$|\.html$/
		})
	],

	optimization: {
		minimizer: [new UglifyJsPlugin()]
	}
}
