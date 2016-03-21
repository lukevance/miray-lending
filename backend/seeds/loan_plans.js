exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('loan_plans').del(),

    // Inserts seed entries
    knex('loan_plans').insert({
      name: '1 Year - 18%',
      duration_in_years: 1,
      monthly_rate_in_percent: 18,
      minimum_schedule_in_percent: {
        1: 1.5,
        2: 1.5,
        3: 1.5,
        4: 6.5,
        5: 6.5,
        6: 6.5,
        7: 6.5,
        8: 6.5,
        9: 6.5,
        10: 10,
        11: 10,
        12: 10
      }
    })
  );
};
