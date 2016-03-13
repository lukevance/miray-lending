exports.up = function(knex, Promise) {
    return knex.schema.createTable('loan_groups', function(table){
      table.increments('id').unique().primary();
      table.string('name');
      table.string('region');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('loan_groups');
};
