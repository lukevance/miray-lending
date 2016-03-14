
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('borrowers').del(),

    // Inserts seed entries
    knex('borrowers').insert({
      name: 'first_borrower',
      bio: 'This is the first borrower and they have a great business idea for their community.'
    }),
    knex('borrowers').insert({
      name: 'second_borrower',
      bio: 'This is the second borrower and they have a totally different business idea for their community.'
    })
  );
};
