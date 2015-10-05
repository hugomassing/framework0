'use strict';

var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var User = require('./user.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Creates a new user in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
  User.create(req.body, function (err, user) {
    if (err) { return handleError(res, err); }
    var token = jwt.sign(
      { _id: user._id },
      config.secrets.session,
      { expiresInMinutes: 60 * 5 }
    );
    res.status(201).json({ token: token, user: user });
  });
};

/**
 * Return the current logged user.
 *
 * @param req
 * @param res
 */
exports.getMe = function (req, res) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -passwordHash', function (err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.json(401); }
    res.status(200).json(user);
  });
};

/**
 * Get list of User
 *
 * @param req
 * @param res
 */
exports.getAll = function (req, res) {
  User.find({}, "-passwordHash -salt", function (err, users) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(users);
  });
};

/**
 * Remove an user.
 *
 * @param req
 * @param res
 */
exports.remove = function (req, res) {
  var userId = req.params.id;
  User.remove({
    _id: userId
  }, function (err) {
    if (err) { return handleError(res, err); }
    res.status(200).end();
  });
};



/*

exports.getAll = function () {

  var def = q.defer();

  User.find(function (err, users) {
    if (err) { return def.reject(err); }
    def.resolve(users);
  });

  return def.promise;

};

exports.getAll = function () {

  return q.Promise(function (resolve, reject) {

    User.find(function (err, users) {
      if (err) { return reject(err); }
      resolve(users);
    });

  });

};

exports.getAll = function () {
  return q.nfcall(User.find.bind(User));
};


exports.getAll = function (req, res) {
  userService.getAll().then(function (users) {
    res.status(200).send(users);
  }).catch(function (err) {
    res.status(400).send({ message: err.message });
  });
};
*/
