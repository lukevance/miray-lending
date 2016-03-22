'use strict';

const Waterline = require('waterline');

let Payment = Waterline.Collection.extend({
  identity: 'payments',
  connection: 'myLocalPostgres',

  attributes: {
    amount: 'integer',

    borrower_id: {
      model: 'borrowers'
    },
    loan_id: {
      model: 'loans'
    }
  }
});

module.exports = Payment;
