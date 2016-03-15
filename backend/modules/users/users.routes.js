'use strict';

const router = require('express').Router();

const userController = require('./users.controller');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/new', userController.create);
router.put('/update/:id', userController.update);
router.delete('/del/:id', userController.deleteOne);

module.exports = router;
