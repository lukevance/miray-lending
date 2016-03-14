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
      host: 'localhost',
      database: 'microlending'
    }
  },

  defaults: {
    migrate: 'alter'
  }
};

module.exports = config;
