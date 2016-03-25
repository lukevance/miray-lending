'use strict';

const Waterline = require('waterline');

let Loan = Waterline.Collection.extend({
  identity: 'loans',
  connection: 'myLocalPostgres',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
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
      via: 'loan'
    },
    borrower: {
      model: 'borrowers'
    },
    group: {
      model: 'loan_groups'
    }
  }
});

module.exports = Loan;
