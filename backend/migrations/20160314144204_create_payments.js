exports.up = function(knex, Promise) {
  return knex.schema.createTable('payments', function(table){
    table.increments('id').unique().primary();
    table.integer('loan_id');
    table.integer('borrower_id');
    table.integer('amount');
    table.timestamp('date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('payments');
};
