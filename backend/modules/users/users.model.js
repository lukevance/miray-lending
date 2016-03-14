'use strict';

const Waterline = require('waterline');

var User = Waterline.Collection.extend({
  identity: 'user',
  connection: 'myLocalPostgres',

  attributes: {
    name: 'string',
    email: 'string',
    password: 'string',

    // donations: {
    //   collection: 'donation',
    //
    //
    // }
  }
});

module.exports = User;
