'use strict';

const router = require('express').Router();

let loanController = require('./loans.controller');

router.get('/plans', loanController.getPlans);
router.get('/:id', loanController.getById);
router.post('/new', loanController.create);
router.delete('/del/:id', loanController.deleteOne);

module.exports = router;
