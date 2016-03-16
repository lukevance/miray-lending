'use strict';

const router = require('express').Router();
const borrowerController = require('./borrowers.controller');

router.get('/', borrowerController.getAll);
router.get('/:id', borrowerController.getById);
router.post('/new', borrowerController.create);
router.put('/update/:id', borrowerController.update);
router.delete('/del/:id', borrowerController.deleteOne);

module.exports = router;
