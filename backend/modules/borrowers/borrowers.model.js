'use strict';

const Waterline = require('waterline');

let Borrower = Waterline.Collection.extend({
  identity: 'borrowers',
  connection: 'myLocalPostgres',

  attributes: {
    name: 'string',
    bio: 'text',

    loans: {
      collection: 'loans',
      via: 'borrower'
    }
  }
});

module.exports = Borrower;
