'use strict';

var express = require('express');
var chalk = require('chalk');
var config = require('./config/environment');
var mongoose = require('mongoose');
var https = require('https');
var fs = require('fs');
var path = require('path');

mongoose.connect(config.mongo.uri, config.mongo.options);

var app = express();
var server = require('https').createServer({
    key: fs.readFileSync(path.join(__dirname, './cert/server.key')),
    cert: fs.readFileSync(path.join(__dirname, './cert/server.crt')),
    ca: fs.readFileSync(path.join(__dirname, './cert/ca.crt')),
    requestCert: true,
    rejectUnauthorized: false
  }, app);

require('./config/express')(app);
require('./routes')(app);

server.listen(config.port, config.ip, function () {

  console.log(
    chalk.red('\nExpress server listening on port ')
    + chalk.yellow('%d')
    + chalk.red(', in ')
    + chalk.yellow('%s')
    + chalk.red(' mode.\n'),
    config.port,
    app.get('env')
  );

  if (config.env === 'development') {
    require('ripe').ready();
  }

});

module.exports = server;
