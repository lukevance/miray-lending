'use strict';

const router = require('express').Router();
const borrowerController = require('./borrowers.controller');

router.get('/', borrowerController);

module.exports = router;
