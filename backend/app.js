'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressJwt = require('express-jwt');
// const jwt = require('jsonwebtoken');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth');

require('dotenv').load();

const routes = require('./routes');

const app = express();

// choose routes to protect
// ------ > NEED TO PROTECT app.use('/group/allData', expressJwt({secret: process.env.JWT_Secret}));
app.use('/user/update', expressJwt({secret: process.env.JWT_Secret}));
app.use('/user/del', expressJwt({secret: process.env.JWT_Secret}));
app.use('/borrower/new', expressJwt({secret: process.env.JWT_Secret}));
app.use('/borrower/update', expressJwt({secret: process.env.JWT_Secret}));
app.use('/borrower/del', expressJwt({secret: process.env.JWT_Secret}));
app.use('/loan/new', expressJwt({secret: process.env.JWT_Secret}));
app.use('/loan/del', expressJwt({secret: process.env.JWT_Secret}));
app.use('/pay/new', expressJwt({secret: process.env.JWT_Secret}));


// initialize jwt
// app.use(express.json());
// app.use(express.urlencoded());

// TODO get rid of view engine and views folder
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// cors middleware
app.use(cors());

// ORM middleware
app.use(function(req, res, next){
  req.models = app.models;
  next();
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
