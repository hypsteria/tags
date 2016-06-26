var express = require('express');
var app = express();
var config = require('./config');

// setup the app middlware
require('./middleware')(app);

app.use(express.static(__dirname + '/..'));

app.use(function(err, req, res, next) {
	res.status(500).send('Oops');
});

module.exports = app;