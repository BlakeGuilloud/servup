'use strict';

var express = require('express');
var collectionRouter = require('./routers/Collection.router');
var http = require('http');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./db');
var url = process.env.MONGODB_URI || 'mongodb://localhost/tada';
var port = process.env.PORT || 8100;

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/collections', collectionRouter);

db.connect(url, function (err) {
  if (err) {
    console.log('Error on mongo connect', err);
    process.exit(1);
  } else {
    http.createServer(app).listen(port, function () {
      console.log('app listening on port: ' + port);
    });
  }
});