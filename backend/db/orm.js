'use strict';

const Waterline = require('waterline');

const orm = new Waterline();

let config = require('./waterlineFile');

// load model definitions
let User = require('../modules/users/users.model');
let Donation = require('../modules/donations/donations.model');
let Loan = require('../modules/loans/loans.model');
let Borrower = require('../modules/borrowers/borrowers.model');
let Payment = require('../modules/payments/payments.model');
let Group = require('../modules/groups/groups.model');
let Rate_Plan = require('../modules/loan_rate_plans/rate_plans.model');

orm.loadCollection(User);
orm.loadCollection(Donation);
orm.loadCollection(Loan);
orm.loadCollection(Borrower);
orm.loadCollection(Payment);
orm.loadCollection(Group);
orm.loadCollection(Rate_Plan);

module.exports = {};

module.exports.initialize = function(app, PORT, callback) {
  orm.initialize(config, function(err, models){
    if (err) {
      throw err;
    }
    callback(models.collections, models.connections);
  });
};
