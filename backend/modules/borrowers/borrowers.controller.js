'use strict';

// function getAll (req, res) {
//   req.models.borrowers
//   .find()
//   .populate('loans')
//   .populate('payments')
//   .exec(function(err, borrowersData) {
//     if (err) {
//       return res.json({error: err}, 500);
//     } else {
//       res.json(borrowersData);
//     }
//   });
// }

function getAll (req, res) {
  req.models.loans
  .find({active: true})
  .populate(['group', 'borrower', 'donations', 'payments'])
  .exec(function(err, allBorrowers){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      var count = 0;
      allBorrowers.forEach(function(loan){
        loan.amount = ((loan.amount / 3100).toFixed())*1;
        loan.totalDonations = (addAmounts(loan.donations) / 3100).toFixed()*1;
        count++;
      });
      if (count === allBorrowers.length){
        res.json(allBorrowers);
      }
    }
  });
}

function getById (req, res) {
  req.models.borrowers
  .find()
  .where({id: req.params.id})
  .limit(1)
  .exec(function(err, borrowerData){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(borrowerData);
    }
  });
}

function create (req, res) {
  // do some validation
  req.models.borrowers
  .create(req.body)
  .exec(function(err, newBorrower){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(newBorrower);
    }
  });
}

function update (req, res) {
  // check for authorization
  // admin credentials?
  req.models.borrowers
  .update({
    id: req.params.id
  }, req.body)
  .exec(function(err, updatedBorrower){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(updatedBorrower);
    }
  });
}

function deleteOne (req, res) {
  // check for authorization
  // admin credentials?
  req.models.borrowers
  .destroy({
    id: req.params.id
  })
  .exec(function(err, deletedBorrower) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(deletedBorrower);
    }
  });
}

function addAmounts (array) {
  var total = 0;
  array.forEach(function(transaction){
    total += transaction.amount;
  });
  return total;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteOne
};
