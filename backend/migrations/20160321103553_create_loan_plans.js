exports.up = function(knex, Promise) {
  return knex.schema.createTable('loan_plans', function(table){
    table.increments('id').unique().primary();
    table.string('name');
    table.integer('duration_in_years');
    table.float('monthly_rate_in_percent');
    table.json('minimum_schedule_in_percent');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('loan_plans');
};
