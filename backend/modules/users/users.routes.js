'use strict';

const router = require('express').Router();

const userController = require('./users.controller');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/new', userController.create);
// router.put('/user/:id', userController.putOne);
// router.delete('/user/:id', userController.deleteOne);

module.exports = router;
