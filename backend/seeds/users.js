
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      name: 'Bugs Bunny',
      email: 'bugz@acme.com',
      password: '12345678'
    }),
    knex('users').insert({
      name: 'Elmur Fudd',
      email: 'efudd@wabbits.com',
      password: '12345678'
    })
  );
};
