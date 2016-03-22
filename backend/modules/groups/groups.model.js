'use strict';

const Waterline = require('waterline');

let Group = Waterline.Collection.extend({
  identity: 'loan_groups',
  connection: 'myLocalPostgres',

  attributes: {
    name: 'string',
    officer_id: 'integer',
    city: 'string',
    region: 'string',

    loans: {
      collection: 'loans',
      via: 'group_id'
    }
  }
});

module.exports = Group;
