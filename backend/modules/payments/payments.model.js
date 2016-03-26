'use strict';

const Waterline = require('waterline');

let Payment = Waterline.Collection.extend({
  identity: 'payments',
  connection: 'myLocalPostgres',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    amount: 'integer',
    date: 'date',

    borrower: {
      model: 'borrowers'
    },
    loan: {
      model: 'loans'
    }
  }
});

module.exports = Payment;
