exports.up = function(knex, Promise) {
  return knex.schema.createTable('loans', function(table){
    table.increments('id').unique().primary();
    table.integer('borrower_id');
    table.integer('amount');
    table.integer('balance');
    table.integer('group_id');
    table.integer('rate_plan_id');
    table.text('description');
    table.timestamp('date_awarded');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('loans');
};
