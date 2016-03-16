'use strict';

const Waterline = require('waterline');

let Payment = Waterline.Collection.extend({
  identity: 'payments',
  connection: 'myLocalPostgres',

  attributes: {
    loan_id: 'integer',
    borrower_id: 'integer',
    amount: 'integer',

    borrower: {
      model: 'borrowers'
    },
    loan: {
      model: 'loans'
    }
  }
});

module.exports = Payment;
