const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const path = require('path');
const router = require('./router.js');

const app = express();
app.use('static', express.static(__dirname + './../src/assets'));
app.use('/', express.static(__dirname + './../dist'));

const config = require('../webpack.config.js');
const compiler = webpack(config);

const wpmw = webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
});
app.use(wpmw);

const wphmw = webpackHotMiddleware(compiler);
app.use(wphmw);

app.use('/', router);

app.listen(3000, function() {
	console.log('dev server is runed');
});
