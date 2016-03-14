'use strict';

const router = require('express').Router();
const authController = require('./auth.controller');

router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
