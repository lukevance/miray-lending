
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('borrowers').del(),

    // Inserts seed entries
    knex('borrowers').insert({
      name: 'Bob Barker',
      bio: 'Bob is from springfield and used to be a Dentist, he has 4 kids and a dog.'
    }),
    knex('borrowers').insert({
      name: 'Jenny Jetson',
      bio: 'Born and raised in happyville, Jenny has worked as an accountant for the last 7 years.'
    }),
    knex('borrowers').insert({
      name: 'Sasha Cedric',
      bio: 'Originally from the big apple, sasha has since been a traveling book salesman.'
    })
  );
};
