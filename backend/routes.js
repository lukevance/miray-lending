'use strict';

const router = require('express').Router();

const userRoutes = require('./modules/users/users.routes');
// const authRoutes = require('./modules/auth/auth.routes');
const borrowerRoutes = require('./modules/borrowers/borrowers.routes');
const donationRoutes = require('./modules/donations/donations.routes');
const loanRoutes = require('./modules/loans/loans.routes');
const paymentRoutes = require('./modules/payments/payments.routes');

// direct routes to correct modules
router.use('/user', userRoutes);
// router.use('/auth', authRoutes);
router.use('/borrower', borrowerRoutes);
router.use('/donation', donationRoutes);
router.use('/loan', loanRoutes);
router.use('/pay', paymentRoutes);

module.exports = router;
