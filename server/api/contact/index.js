'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./contact.controller');

router.get('/', controller.index);
router.get('/:id', controller.show);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
