'use strict';

const Waterline = require('waterline');

let Donation = Waterline.Collection.extend({
  identity: 'donations',
  connection: 'myLocalPostgres',

  attributes: {
    amount: 'integer',

    donor_id: {
      model: 'users'
    },
    loan_id: {
      model: 'loans'
    }
  }
});

module.exports = Donation;
