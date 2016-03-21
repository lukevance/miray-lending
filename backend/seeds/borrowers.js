
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('borrowers').del(),

    // Inserts seed entries
    knex('borrowers').insert({
      name: 'Bob Barker',
      bio: 'Bob is from springfield and used to be a Dentist, he has 4 kids and a dog.',
      dob: '1985-03-14',
      id_num_national: 'A1234',
      image_url: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      phone: '123-456-8901',
      address: '501 other street',
      city: 'Rivertown',
      region: 'OH'
    }),
    knex('borrowers').insert({
      name: 'Jenny Jetson',
      bio: 'Born and raised in happyville, Jenny has worked as an accountant for the last 7 years.',
      dob: '1960-04-20',
      id_num_national: 'C5634',
      image_url: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      phone: '123-456-8901',
      address: '123 some street',
      city: 'Topsfield',
      region: 'MA'
    }),
    knex('borrowers').insert({
      name: 'Sasha Cedric',
      bio: 'Originally from the big apple, sasha has since been a traveling book salesman.',
      dob: '1997-07-17',
      id_num_national: 'B0987',
      image_url: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
      phone: '123-456-8901',
      address: '2002 some street',
      city: 'Norman',
      region: 'OK'
    })
  );
};
