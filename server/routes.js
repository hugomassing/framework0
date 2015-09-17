'use strict';

var config = require('./config/environment');

module.exports = function (app) {

  // API
<<<<<<< HEAD
  app.use('/api/contacts', require('./api/contact'));
=======
>>>>>>> 453dee087511105700000c44d4f4efd5cfc637d8
  app.use('/api/users', require('./api/user'));

  // Auth
  app.use('/auth', require('./auth'));

  app.route('/:url(api|app|bower_components|assets)/*')
    .get(function (req, res) {
      res.status(404).end();
    });

  app.route('/*')
    .get(function (req, res) {
      res.sendFile(
        app.get('appPath') + '/index.html',
        { root: config.root }
      );
    });

};
