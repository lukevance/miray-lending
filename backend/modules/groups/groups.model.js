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

    members: {
      collection: 'borrowers',
      via: 'group'
    }
  }
});

module.exports = Group;
