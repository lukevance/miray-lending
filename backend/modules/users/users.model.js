'use strict';

const Waterline = require('waterline');

var User = Waterline.Collection.extend({
  identity: 'users',
  connection: 'myLocalPostgres',

  attributes: {
    name:
      {
        type: 'string'
      },
    email: {
      type: 'email',
      required: true
    },
    password: {
      type: 'string'
    }

    // donations: {
    //   collection: 'donation',
    //
    //
    // }
  }
});

module.exports = User;
