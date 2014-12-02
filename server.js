var appRoot = require('app-root-path');
var myModule = require(appRoot + '/server.js');
var myModulePath = require('app-root-path').resolve('/public/test.html');
// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser.urlencoded({ extended: false }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json
app.use(methodOverride()); 					// simulate DELETE and PUT

app.listen(8080);	
console.log("Magic happens on port 8080 with __dirname of %s", __dirname); 			// shoutout to the user

app.get('/', function( req, res) {
    res.send("Hello World");
});
