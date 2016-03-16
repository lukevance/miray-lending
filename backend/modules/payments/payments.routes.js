'use strict';

const router = require('express').Router();

let paymentsController = require('./payments.controller');


router.get('/:id', paymentsController.getById);
router.post('/new', paymentsController.create);


module.exports = router;
