'use strict';

var _ = require('lodash');
var Contact = require('./contact.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Contact
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  Contact.find(function (err, contacts) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(contacts);
  });
};

/**
 * Get a single Contact
 *
 * @param req
 * @param res
 */
exports.show = function (req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if (err) { return handleError(res, err); }
    if (!contact) { return res.status(404).end(); }
    return res.status(200).json(contact);
  });
};

/**
 * Creates a new Contact in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
  console.log(req.body);
  Contact.create(req.body, function (err, message) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(message);
  });
};

/**
 * Updates an existing Contact in the DB.
 *
 * @param req
 * @param res
 */
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Contact.findById(req.params.id, function (err, contact) {
    if (err) { return handleError(res, err); }
    if (!contact) { return res.status(404).end(); }
    var updated = _.merge(contact, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(contact);
    });
  });
};

/**
 * Deletes a Contact from the DB.
 *
 * @param req
 * @param res
 */
exports.destroy = function (req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if (err) { return handleError(res, err); }
    if (!contact) { return res.status(404).end(); }
    contact.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};
