
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('donations').del(),

    // Inserts seed entries
    knex('donations').insert({
      loan_id: 1,
      donor_id: 2,
      amount: 30,
      date: new Date()
    }),
    knex('donations').insert({
      loan_id: 2,
      donor_id: 1,
      amount: 10,
      date: new Date()
    })
  );
};
