'use strict';

const router = require('express').Router();

let groupController = require('./groups.controller');

router.post('/new', groupController.create);

module.exports = router;
