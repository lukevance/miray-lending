'use strict';

const router = require('express').Router();
const passport = require('passport');
const authController = require('./auth.controller');

router.post('/login', authController.login);
// router.post('/logout', authController.logout);

// Redirect the user to Facebook for authentication.
router.get('/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/user/profile',
                                      failureRedirect: '/login' }));

module.exports = router;
