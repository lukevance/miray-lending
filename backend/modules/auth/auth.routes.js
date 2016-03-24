'use strict';

const router = require('express').Router();
const passport = require('passport');
const authController = require('./auth.controller');

router.post('/login', authController.login);
// router.post('/logout', authController.logout);

// Redirect the user to Facebook for authentication.
router.get('/facebook', passport.authenticate('facebook', { authType: 'rerequest', scope: ['email'] }));

router.get('/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/', successRedirect: '/auth/login' }));

module.exports = router;
