module.exports = {
  groups: [
    {
      name: 'Original Group',
      officer_id: '1',
      city: 'Example Town',
      region: 'Example Region A'
    },
    {
      name: 'Beta Group',
      officer_id: '2',
      city: 'Sample Town',
      region: 'Example Region B'
    }
  ],
  borrowers: [
    {
      name: 'Nirina Margueritte',
      bio: 'Before,my job was selling frite potatoes.That’s a very little work because one of it cost 50 ariary. In one day, I got  for benefits 1,500 ariary; we had just rice for food and nothing else. Now my occupation changed. When I was selling frite potatoes ,now I sell rice.I chose that because,every day Malagasy peoples need it.',
      dob: '1985-03-14',
      id_num_national: 'A1234',
      image_url: '/images/people-photos/',
      phone: '123 456 09823',
      address: '',
      city: '',
      region: '',
      group: ''
    },
    {
      name: 'Baoely Honorencia',
      bio: 'I sell charcot in bag and get some Malagasy arts from countryside and sell to town. I chose those because the charcot is very useful. Every day people’s need it for cooking. And Malagasy arts is so expensive in town,many french man come and buy it.',
      dob: '1987-04-20',
      id_num_national: 'C5634',
      image_url: '/images/people-photos/',
      phone: '243 987 16393',
      address: '',
      city: '',
      region: '',
      group: ''
    },
    {
      name: 'Deborah Brigitte',
      bio: 'I don’t know how to say the rejoice that I have in my heart. Before,we lived with suffering and poverty. The head always hurt because me and my husband thought how about today? The kids school?the food? Sometimes we slept without anything. Because my husband occupation was waiting for people byu something heavy like cement,rice in bag...and carry it for 1,000Ar. Sometimes nothing because people choose to go with bus. And me I tried to find someone to give me some clothes to wash.',
      dob: '1977-07-17',
      id_num_national: 'B0987',
      image_url: '/images/people-photos/',
      phone: '123 456 78901',
      address: '',
      city: '',
      region: '',
      group: ''
    },
    {
      name: 'Jean Pierre',
      bio: '',
      dob: '',
      id_num_national: '',
      image_url: '',
      phone: '',
      address: '',
      city: '',
      region: '',
      group: ''
    },
    {
      name: 'Victor',
      bio: '',
      dob: '',
      id_num_national: '',
      image_url: '',
      phone: '',
      address: '',
      city: '',
      region: '',
      group: ''
    }
  ],
  loans: [
    {
      amount: 1200000,
      balance: 120000,
      rate_plan_id: 1,
      description: 'Nirina is trying to start selling rice in the city markets. She needs funds for a cart and donkey to transport rice from her village to the nearest city where rice is sold at a much higher price.',
      active: true,
      borrower: 1,
      group: 1
    },
    {
      amount: 3000000,
      balance: 3000000,
      rate_plan_id: 1,
      description: 'Baoely wants to become a chicken farmer so that she can sell eggs and provide food for her children. Eggs get a good price in her village, but chickens are expensive to purchase. These funds will help her get started.',
      active: true,
      borrower: 2,
      group: 1
    },
    {
      amount: 2000000,
      balance: 2000000,
      rate_plan_id: 1,
      description: 'Deborah is trying ...',
      active: true,
      borrower: 3,
      group: 1
    },
    {
      amount: 8000000,
      balance: 8000000,
      rate_plan_id: 1,
      description: 'Jean Pierre is going to open a store in his village to sell basic necessities, like sugar and petrol, this loan will help him build a small structure and stock the shelves for the first store in his town.',
      active: true,
      borrower: 4,
      group: 2
    }
  ],
  payments: [
    {
      amount: 120000,
      borrower: 1,
      loan: 1,
      date: '2015-09-30'
    },
    {
      amount: 120000,
      borrower: 1,
      loan: 1,
      date: '2015-10-31'
    },
    {
      amount: 120000,
      borrower: 1,
      loan: 1,
      date: '2015-11-30'
    },
    {
      amount: 240000,
      borrower: 1,
      loan: 1,
      date: '2015-12-31'
    },
    {
      amount: 300000,
      borrower: 2,
      loan: 2,
      date: '2015-09-30'
    },
    {
      amount: 160000,
      borrower: 2,
      loan: 2,
      date: '2015-10-31'
    },
    {
      amount: 160000,
      borrower: 2,
      loan: 2,
      date: '2015-11-30'
    },
    {
      amount: 250000,
      borrower: 2,
      loan: 2,
      date: '2015-12-31'
    }
  ],
  users: [
    {
      name: '',
      email: '',
      password: '',
      role: ''
    }
  ],
  donations: [
    {
      amount: '',
      donor: '',
      loan: ''
    }
  ],
  loan_plans: [
    {
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
    }
  ]
};
