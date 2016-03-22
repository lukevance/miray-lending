
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      name: 'Bugs Bunny',
      email: 'bugz@acme.com',
      password: '12345678',
      role: 'donor'
    }),
    knex('users').insert({
      name: 'Elmur Fudd',
      email: 'efudd@wabbits.com',
      password: '12345678',
      role: 'donor'
    }),
    knex('users').insert({
      name: 'Officer Jones',
      email: 'officer@miray.com',
      password: '12345678',
      role: 'officer'
    }),
    knex('users').insert({
      name: 'Main Admin',
      email: 'pete@miray.com',
      password: 'password123',
      role: 'admin'
    })
  );
};
