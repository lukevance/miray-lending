'use strict';

const Waterline = require('waterline');

let Group = Waterline.Collection.extend({
  identity: 'groups',
  connection: 'myLocalPostgres',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: 'string',
    officer_id: 'integer',
    city: 'string',
    region: 'string',

    loans: {
      collection: 'loans',
      via: 'group'
    }
  }
});

module.exports = Group;
