'use strict';

var knex = require('../../db/knex');

function getById (req, res) {
  req.models.loans
  .find({id: req.params.id})
  .exec(function(err, loanData) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(loanData);
    }
  });
}

function getPlans (req, res) {
  knex('loan_plans')
  .select()
  .then(function(planData){
    res.json(planData);
  })
  .catch(function(error){
    console.log(error);
  });
}

function create (req, res) {
  console.log(req.body);
  // do some authorization to be sure that person can create
  let newLoanInfo = req.body;
  // newLoanInfo.borrower = req.body.borrower_id;
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

module.exports = {
  getById,
  create,
  deleteOne,
  getPlans
};
