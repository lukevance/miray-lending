exports.up = function(knex, Promise) {
  return knex.schema.createTable('borrowers', function(table){
    table.increments('id').unique().primary();
    table.string('name');
    table.text('bio');
    table.date('dob');
    table.string('id_num_national');
    table.string('image_url');
    table.string('phone');
    table.string('address');
    table.string('city');
    table.string('region');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('borrowers');
};
