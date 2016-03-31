'use strict';

const postgresqlAdapter = require('sails-postgresql');

var config = {
  adapters: {
    'default': postgresqlAdapter,
    postgres: postgresqlAdapter
  },
  // Build Connections Config
  // Setup connections using the named adapter configs
  connections: {
    myLocalPostgres: {
      adapter: 'postgres',
      url: process.env.DATABASE_URL
    }
  },

  defaults: {
    migrate: process.env.migrate
  }
};

module.exports = config;
