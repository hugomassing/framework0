'use strict';

var _ = require('lodash');
var Group = require('./group.model');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Group
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  Group.find(function (err, groups) {
    if (err) { return handleError(res, err); }
    return res.status(200).json(groups);
  });
};

/**
 * Get a single Group
 *
 * @param req
 * @param res
 */
exports.show = function (req, res) {
    Group.findById(req.params.id, function (err, group) {
      if (err) { return handleError(res, err); }
      if (!group) { return res.status(404).end(); }
      return res.status(200).json(group);
    });
};

/**
 * Creates a new Group in the DB.
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
  Group.create(req.body, function (err, group) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(group);
  });
};

/**
 * Updates an existing Group in the DB.
 *
 * @param req
 * @param res
 */
exports.update = function (req, res) {
  if (req.body._id) { delete req.body._id; }
  Group.findById(req.params.id, function (err, group) {
    if (err) { return handleError(res, err); }
    if (!group) { return res.status(404).end(); }
    var updated = _.merge(group, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(group);
    });
  });
};

/**
 * Deletes a Group from the DB.
 *
 * @param req
 * @param res
 */
exports.destroy = function (req, res) {
  Group.findById(req.params.id, function (err, group) {
    if (err) { return handleError(res, err); }
    if (!group) { return res.status(404).end(); }
    group.remove(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(204).end();
    });
  });
};
