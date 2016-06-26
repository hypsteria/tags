var app = require('./server');
var config = require('./config');

app.listen(config.port, function () {
	console.log('started at localhost:3000');
});