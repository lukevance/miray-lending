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
function getAllAdmin (req, res) {
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

function getAll (req, res) {
  req.models.groups
  .find()
  .populate('loans')
  .exec(function(err, groupsData){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      var newObj = {};
      groupsData.forEach(function(val){
        async.map(val.loans, function(loan, callback){
          // console.log(loan);
          req.models.loans
          .findOne(loan.id)
          .populate('borrower')
          .exec(function (errLoans, loanPlus){
            if (errLoans) {
              return callback(errLoans);
            } else {
              callback(null, loanPlus);
            }
          });
        }, function (errFromMap, results) {
          if (errFromMap) {
            return res.json(errFromMap);
          } else {

              newObj.group = groupsData;
              newObj.bonus = results;

          }
        });
      });
      res.json(newObj);
    }
  });
}



module.exports = {
  create,
  getAll,
  getAllAdmin
};
