'use strict';

const router = require('express').Router();
const passport = require('passport');
const authController = require('./auth.controller');

router.post('/login', authController.login);
// router.post('/logout', authController.logout);

// Redirect the user to Facebook for authentication.
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('back from facebook with this stuff: ');
    console.log(req.query);
    // did i get anything back?
    res.json(req.query);
  });

module.exports = router;
