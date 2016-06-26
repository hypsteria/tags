var app = require('./server');
var config = require('./server/config');

app.listen(config.port, function () {
	console.log('started at localhost:3000');
});