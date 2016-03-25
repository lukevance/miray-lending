'use strict';

const Waterline = require('waterline');

let Borrower = Waterline.Collection.extend({
  identity: 'borrowers',
  connection: 'myLocalPostgres',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: 'string',
    bio: 'text',
    dob: 'date',
    id_num_national: 'string',
    image_url: 'string',
    phone: 'string',
    address: 'string',
    city: 'string',
    region: 'string',

    loans: {
      collection: 'loans',
      via: 'borrower'
    },
    payments: {
      collection: 'payments',
      via: 'borrower'
    }
  }
});

module.exports = Borrower;
