'use strict';

const router = require('express').Router();

const userController = require('./users.controller');

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getOne);
router.post('/user', userController.postOne);
router.put('/user/:id', userController.putOne);
router.delete('/user/:id', userController.deleteOne);

module.exports = router;
