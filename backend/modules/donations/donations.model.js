'use strict';

const Waterline = require('Waterline');

var Donation = Waterline.Collection.extend({
  identity: 'donations',
  connection: 'myLocalPostgres',

  attributes: {
    loan_id: 'integer',
    donor_id: 'integer',
    amount: 'integer',

    donor: {
      model: 'users'
    }
  }
});

module.exports = Donation;
