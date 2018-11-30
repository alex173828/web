const express = require('express');

const path = require('path');
const router = require('./router.js');

const app = express();
// app.use('static', express.static(__dirname + './../src/assets'));
// app.use('/', express.static(__dirname + './../dist/'));
app.use(express.static('dist'));

app.use('/', router);

app.listen(3000, function() {
	console.log('dev server is runed');
});
