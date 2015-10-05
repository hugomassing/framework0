'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./user.controller');
var auth = require('../../auth/auth.service');

router.get('/me', auth.isAuthenticated(), controller.getMe);
router.get('/', auth.isAdmin(), controller.getAll);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', auth.isAdmin(), controller.remove);

module.exports = router;
