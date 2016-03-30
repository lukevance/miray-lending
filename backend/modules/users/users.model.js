'use strict';

const Waterline = require('waterline');

var User = Waterline.Collection.extend({
  identity: 'users',
  connection: 'myLocalPostgres',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name:
      {
        type: 'string'
      },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string'
    },
    balance: 'integer',
    role: 'string',

    donations: {
      collection: 'donations',
      via : 'donor'
    }
  }
});

module.exports = User;
