var jsdom = require('jsdom');
var connect = require('connect');
var http = require('http');
var path = require('path');

var app = connect();

app.use(require('body-parser').raw());
app.use(require('serve-static')(path.join(process.cwd(), 'tests')));
app.listen(3130);

jsdom.env({
	url: 'http://localhost:3130',
	done: function(errors, window) {
		console.log(errors, window);
	}
});


