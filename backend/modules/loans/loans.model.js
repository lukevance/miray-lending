'use strict';

const Waterline = require('waterline');

let Loan = Waterline.Collection.extend({
  identity: 'loans',
  connection: 'myLocalPostgres',

  attributes: {
    // borrower_id: 'integer',
    amount: 'integer',
    balance: 'integer',
    rate_plan_id: 'integer',
    description: 'text',
    date_awarded: 'datetime',
    active: 'boolean',

    donations: {
      collection: 'donations',
      via: 'loan'
    },
    payments: {
      collection: 'payments',
      via: 'loan_id'
    },
    borrower_id: {
      model: 'borrowers'
    },
    group_id: {
      model: 'loan_groups'
    }
  }
});

module.exports = Loan;
