
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('loans').del(),

    // Inserts seed entries
    knex('loans').insert({
      borrower_id: 1,
      amount: 100,
      balance: 100,
      group_id: 1,
      description: 'This is a loan for that first super cool business idea.',
      date_created: new Date()
    }),
    knex('loans').insert({
      borrower_id: 2,
      amount: 50,
      balance: 50,
      group_id: 1,
      description: 'This loan is for that second really different business idea.',
      date_created: new Date()
    })
  );
};
