'use strict';

function create(req, res) {
  console.log(req.body);
  let groupInfo = req.body;
  // groupInfo.name = req.body.name;
  groupInfo.officer_id = req.body.officerName;
  // groupInfo.city = req.body.city;
  // groupInfo.region = req.body.region;
  req.models.loan_groups
  .create(groupInfo)
  .exec(function(err, newGroup) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(newGroup);
    }
  });
}

module.exports = {
  create
};
