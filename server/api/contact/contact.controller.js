'use strict';

var _ = require('lodash');
var Contact = require('./contact.model');
var nodemailer = require('nodemailer');

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
 * Creates a new Contact in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
  console.log(req.body);
  Contact.create(req.body, function (err, message) {
    if (err) { return handleError(res, err); }
    var transporter = nodemailer.createTransport();
    transporter.sendMail({
      from: message.email,
      to: 'hmassing@student.42.fr',
      subject: 'hello' + message.name,
      text: message.text
    });
    return res.status(201).json(message);
  });
};
