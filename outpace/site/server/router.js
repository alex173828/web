const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/*', function(req, res) {
	res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

module.exports = router;
