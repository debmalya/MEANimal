var connect = require('connect');
var app = connect();
app.listen(3000);

var helloWorld = function(req,res,next) {
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World');
};
app.use(helloWorld);

console.log("Server runnin't http://localhost:3000/");
