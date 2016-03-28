'use strict';

var knex = require('../../db/knex');

function getById (req, res) {
  if (req.query.donor) {
    let donor = req.query.donor;
    req.models.loans
    .find({id: req.params.id})
    .populate(['borrower', 'payments', 'group', 'donations'])
    .exec(function(err, loanData) {
      if (err) {
        return res.json({error: err}, 500);
      } else {

        let modifiedLoanObj = copy(loanData[0]);
        modifiedLoanObj.totalPayments = 0;
        // calculate donor percentages
        modifiedLoanObj.donations.forEach(function(donation){
          if (donation.donor.toString() === donor) {
            // save donation percentage
            modifiedLoanObj.donationLoanPercentage = (donation.amount / modifiedLoanObj.amount);
          }
        });
        // add payments save percentage
        modifiedLoanObj.payments.forEach(function(payment){
          if (payment.id) {
            modifiedLoanObj.totalPayments += payment.amount;
          }
        });
        modifiedLoanObj.paymentForDonor = (modifiedLoanObj.totalPayments * modifiedLoanObj.donationLoanPercentage);
        res.json(modifiedLoanObj);
      }
    });
  } else {
    // just grab loan, no donor calculations
    req.models.loans
    .find({id: req.params.id})
    .populate(['borrower', 'payments', 'group', 'donations'])
    .exec(function(err, loanData) {
      if (err) {
        return res.json({error: err}, 500);
      } else {
        res.json(loanData);
      }
    });
  }
}

function getPlans (req, res) {
  req.models.rate_plans
  .find()
  .exec(function(err, loanPlans){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(loanPlans);
    }
  });
}

function create (req, res) {
  // do some authorization to be sure that person can create
  let newLoanInfo = req.body;
  newLoanInfo.active = true;
  newLoanInfo.balance = newLoanInfo.amount;
  req.models.loans
  .create(newLoanInfo)
  .exec(function(err, newLoan) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(newLoan);
    }
  });
}

function deleteOne (req, res) {
  // do some authorization
  req.models.loans
  .destroy({
    id: req.params.id
  })
  .exec(function(err, deletedLoan) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(deletedLoan);
    }
  });
}

// utility functions
function copy(object) {
  var new_object = {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      new_object[key] = object[key];
    }
  }
  return new_object;
}

module.exports = {
  getById,
  create,
  deleteOne,
  getPlans
};
