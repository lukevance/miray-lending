'use strict';

const async = require('async');

function create(req, res) {
  console.log(req.body);
  let groupInfo = req.body;
  // groupInfo.name = req.body.name;
  // groupInfo.officer_id = req.body.officerName;
  // groupInfo.city = req.body.city;
  // groupInfo.region = req.body.region;
  req.models.groups
  .create(groupInfo)
  .exec(function(err, newGroup) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(newGroup);
    }
  });
}

// switch names back later
function getAll (req, res) {
  req.models.groups
  .find()
  .populate('loans')
  .exec(function(err, groupsData){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(groupsData);
    }
  });
}

function getAllAdmin (req, res) {
  req.models.loans
  .find({active: true})
  .populate(['group', 'borrower', 'donations', 'payments'])
  .exec(function(err, allLoans){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      var groupedLoansObj = {};
      groupedLoansObj.totalAmount = 0;
      groupedLoansObj.totalPayments = 0;
      groupedLoansObj.totalDonations = 0;
      var endOfLoans = allLoans.length;
      var count = 0;
      allLoans.forEach(function(loan){
        var id = loan.group.id;
        if (groupedLoansObj[id]) {
          // if group obj already exists
          delete loan.group;
          // add loan amount to group amount;
          groupedLoansObj[id].groupAmount += loan.amount;
          // add loan payments to group payments;
          groupedLoansObj[id].groupPayments += addAmounts(loan.payments);
          // add donations to group donations;
          groupedLoansObj[id].groupDonations += addAmounts(loan.donations);


        //***** modify loan object *****//
          // add payments up
          loan.totalPayments = addAmounts(loan.payments);
          // add donations up
          loan.totalDonations = addAmounts(loan.payments);
          // add loan to group
          groupedLoansObj[id].loans.push(loan);
        } else {
          // add group obj to main response: groupedLoansObj
          groupedLoansObj[id] = copy(loan.group);
          delete loan.group;
          groupedLoansObj[id].groupAmount = loan.amount;
          groupedLoansObj[id].groupPayments = addAmounts(loan.payments);
          groupedLoansObj[id].groupDonations = addAmounts(loan.donations);

          // create arrays for loans in group
          groupedLoansObj[id].loans = [];
        //***** modify loan object *****//
          // add payments up
          loan.totalPayments = addAmounts(loan.payments);
          // add donations up
          loan.totalDonations = addAmounts(loan.payments);
          // push loan object into group
          groupedLoansObj[id].loans.push(loan);
        }
        count++;

        if (count === endOfLoans){
          // add group totals to allTotal
          for (var key in groupedLoansObj) {
            if (groupedLoansObj[key].hasOwnProperty('loans')) {
              groupedLoansObj.totalAmount += groupedLoansObj[key].groupAmount;
              groupedLoansObj.totalPayments += groupedLoansObj[key].groupPayments;
              groupedLoansObj.totalDonations += groupedLoansObj[key].groupDonations;
            }
          }
          // add group payments to allPayments

          res.json(groupedLoansObj);
        }
      });

    }
  });
}

// utility functions
function copy(object) {
  var new_object = {};
  for (var key in object) {
    if (object.hasOwnProperty(key) && typeof object[key] !== 'object') {
      new_object[key] = object[key];
    }
  }
  return new_object;
}

function addAmounts (array) {
  var total = 0;
  array.forEach(function(transaction){
    total += transaction.amount;
  });
  return total;
}



module.exports = {
  create,
  getAll,
  getAllAdmin
};
