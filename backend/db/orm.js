'use strict';

var Waterline = require('waterline');

var orm = new Waterline();

var config = require('./waterlineFile');

// load model definitions
var User = require('../modules/users/users.model');
var Donation = require('../modules/donations/donations.model');
var Loan = require('../modules/loans/loans.model');

orm.loadCollection(User);
orm.loadCollection(Donation);
orm.loadCollection(Loan);

module.exports = {};

module.exports.initialize = function(app, PORT, callback) {
  orm.initialize(config, function(err, models){
    if (err) {
      throw err;
    }
    callback(models.collections, models.connections);
  });
};
