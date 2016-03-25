'use strict';

const router = require('express').Router();

const userRoutes = require('./modules/users/users.routes');
const authRoutes = require('./modules/auth/auth.routes');
const borrowerRoutes = require('./modules/borrowers/borrowers.routes');
const donationRoutes = require('./modules/donations/donations.routes');
const loanRoutes = require('./modules/loans/loans.routes');
const paymentRoutes = require('./modules/payments/payments.routes');
const groupRoutes = require('./modules/groups/groups.routes');

// direct routes to correct modules
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/borrower', borrowerRoutes);
router.use('/donation', donationRoutes);
router.use('/loan', loanRoutes);
router.use('/pay', paymentRoutes);
router.use('/group', groupRoutes);


// import seed data from file
const seedData = require('./db/waterlineSeed');
// define seed route to seed database through waterline
router.get('/seed', function(req, res){

  let data = {
    groups: [],
    borrowers: [],
    loans: [],
    payments: [],
    users: [],
    donations: [],
    loan_plans: []
  };
  // seed groups
  seedData.groups.forEach(function(val){
    req.models.groups
    .create(val)
    .exec(function(err, newGroup){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.groups.push(newGroup);
        console.log('groups success');
        seedBorrowers();
      }
    });
  });
  // seed borrowerRoutes
  function seedBorrowers () {
  seedData.borrowers.forEach(function(val){
    req.models.borrowers
    .create(val)
    .exec(function(err, newBorrower){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.borrowers.push(newBorrower);
        console.log('borrower success');
        seedLoans();
      }
    });
  });
}
  // seed loans
function seedLoans() {
  console.log('loans started');
  seedData.loans.forEach(function(val){
    req.models.loans
    .create(val)
    .exec(function(err, newLoan){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.loans.push(newLoan);
        seedPayments();
      }
    });
  });
}
  // seed payments
function seedPayments () {
  seedData.payments.forEach(function(val){
    req.models.payments
    .create(val)
    .exec(function(err, newPayment){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.payments.push(newPayment);
        seedUsers();
      }
    });
  });
}
  // seed users
function seedUsers () {
  seedData.users.forEach(function(val){
    req.models.users
    .create(val)
    .exec(function(err, newUser){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.users.push(newUser);
        seedDonations();
      }
    });
  });
}
  // seed donations
function seedDonations () {
  seedData.donations.forEach(function(val){
    req.models.donations
    .create(val)
    .exec(function(err, newDonation){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.donations.push(newDonation);
        endIt();
      }
    });
  });
}


  function endIt () {
    console.log('heyyy');
    res.json(data);
  }
});

module.exports = router;
