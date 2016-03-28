'use strict';

function getById (req, res) {
  req.models.donations
  .find()
  .where({id: req.params.id})
  .limit(1)
  .populate('loan_id')
  .exec(function(err, donationData) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(donationData);
    }
  });
}

function create (req, res) {
  console.log(req.body);
  var donationInfo = req.body;
  req.models.donations
  .create(donationInfo)
  .exec(function(err, newDonation) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(newDonation);
    }
  });
}

module.exports = {
  getById,
  create
};
