'use strict';

const router = require('express').Router();

var donationsController = require('./donations.controller');


router.get('/:id', donationsController.getById);
router.post('/new', donationsController.create);


module.exports = router;
