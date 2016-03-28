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
  seedData.groups.forEach(function(val, indx, array){
    req.models.groups
    .create(val)
    .exec(function(err, newGroup){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.groups.push(newGroup);
      }
      if (indx === (array.length - 1)) {
        seedBorrowers();
      }
    });
  });
  // seed borrowerRoutes
  function seedBorrowers () {
  seedData.borrowers.forEach(function(val, indx, array){
    req.models.borrowers
    .create(val)
    .exec(function(err, newBorrower){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.borrowers.push(newBorrower);
      }
      if (indx === (array.length - 1)) {
        seedLoans();
      }
    });
  });
}
  // seed loans
function seedLoans() {
  seedData.loans.forEach(function(val, indx, array){
    req.models.loans
    .create(val)
    .exec(function(err, newLoan){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.loans.push(newLoan);
      }
      if (indx === (array.length - 1)) {
        seedPayments();
      }
    });
  });
}
  // seed payments
function seedPayments () {
  seedData.payments.forEach(function(val, indx, array){
    req.models.payments
    .create(val)
    .exec(function(err, newPayment){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.payments.push(newPayment);
      }
      if (indx === (array.length - 1)) {
        seedUsers();
      }
    });
  });
}
  // seed users
function seedUsers () {
  seedData.users.forEach(function(val, indx, array){
    req.models.users
    .create(val)
    .exec(function(err, newUser){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.users.push(newUser);
      }
      if (indx === (array.length - 1)) {
        seedDonations();
      }
    });
  });
}
  // seed donations
function seedDonations () {
  seedData.donations.forEach(function(val, indx, array){
    req.models.donations
    .create(val)
    .exec(function(err, newDonation){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        data.donations.push(newDonation);
      }
      if (indx === (array.length - 1)) {
        endIt();
      }
    });
  });
}

// // seed statements
// function seedStatements () {
// seedData.statements.forEach(function(val, indx, array){
//   req.models.statements
//   .create(val)
//   .exec(function(err, newStatement){
//     if (err) {
//       return res.json({error: err}, 500);
//     } else {
//       data.donations.push(newStatement);
//     }
//     if (indx === (array.length - 1)) {
//       endIt();
//     }
//   });
// });
// }

  function endIt () {
    res.json(data);
  }
});

module.exports = router;
