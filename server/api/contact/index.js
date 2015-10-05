'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./contact.controller');
var auth = require('../../auth/auth.service');

router.get('/', auth.isAdmin(), controller.index);
router.post('/', controller.create);
router.delete('/:id', auth.isAdmin(), controller.remove);
module.exports = router;
