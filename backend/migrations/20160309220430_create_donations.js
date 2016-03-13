exports.up = function(knex, Promise) {
    return knex.schema.createTable('donations', function(table){
      table.increments('id').unique().primary();
      table.integer('loan_id');
      table.integer('donor_id');
      table.integer('amount');
      table.timestamp('date');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donations');
};
