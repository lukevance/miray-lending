'use strict';

const Waterline = require('waterline');

let Loan = Waterline.Collection.extend({
  identity: 'loans',
  connection: 'myLocalPostgres',

  attributes: {
    borrower_id: 'integer',
    amount: 'integer',
    balance: 'integer',
    group_id: 'integer',
    rate_plan_id: 'integer',
    description: 'text',
    date_awarded: 'datetime',

    donations: {
      collection: 'donations',
      via: 'loan'
    },
    payments: {
      collection: 'payments',
      via: 'loan'
    },
    borrower: {
      model: 'borrowers'
    }
  }
});

module.exports = Loan;
