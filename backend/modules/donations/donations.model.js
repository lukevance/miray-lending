'use strict';

const Waterline = require('waterline');

let Donation = Waterline.Collection.extend({
  identity: 'donations',
  connection: 'myLocalPostgres',

  attributes: {
    loan_id: 'integer',
    donor_id: 'integer',
    amount: 'integer',

    donor: {
      model: 'users'
    },
    loan: {
      model: 'loans'
    }
  }
});

module.exports = Donation;
