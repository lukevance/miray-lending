'use strict';

const Waterline = require('waterline');

let Statement = Waterline.Collection.extend({
  identity: 'statements',
  connection: 'myLocalPostgres',
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    date: 'date',
    minimum_due: 'integer',
    previous_balance: 'integer',
    interest: 'integer',
    last_payment: 'integer',
    new_balance: 'integer',
    
    loan: {
      model: 'loans'
    }
  }
});

module.exports = Statement;
