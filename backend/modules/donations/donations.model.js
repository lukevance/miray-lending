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
    loan: {
      model: 'loans'
    }
  }
});

module.exports = Donation;
