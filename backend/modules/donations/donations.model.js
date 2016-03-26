'use strict';

const Waterline = require('waterline');

let Donation = Waterline.Collection.extend({
  identity: 'donations',
  connection: 'myLocalPostgres',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    date: 'date',
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
