exports.up = function(knex, Promise) {
  return knex.schema.createTable('borrowers', function(table){
    table.increments('id').unique().primary();
    table.string('name');
    table.text('bio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('borrowers');
};
