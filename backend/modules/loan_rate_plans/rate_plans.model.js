'use strict';

const Waterline = require('waterline');

let Rate_Plan = Waterline.Collection.extend({
  identity: 'rate_plans',
  connection: 'myLocalPostgres',

  attributes: {
    name: 'string',
    duration_in_years: 'integer',
    monthly_rate_in_percent: 'float',
    minimum_schedule_in_percent: 'json'
  }
});

module.exports = Rate_Plan;
