'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./contact.controller');

router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;
