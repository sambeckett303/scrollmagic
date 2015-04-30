'use strict';

var express = require('express');
var errorhandler = require('errorhandler');
//var favicon = require('serve-favicon');
var http = require('http');
var logfmt = require("logfmt");

//var bodyParser = require('body-parser');
var app = express();


app.set('port', process.env.PORT || 9090);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(errorhandler());
app.use(logfmt.requestLogger());
//app.use(bodyParser());



app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.get('/projects', function(req, res) {
  res.sendfile('projects.html');
});


app.get(/^(.+)$/, function(req, res){ 
  res.sendfile( __dirname + req.params[0]); 
});

var server = app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + server.address().port);
});