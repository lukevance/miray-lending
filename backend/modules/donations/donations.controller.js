'use strict';

function getById (req, res) {
  console.log(req.params);
  req.models.donations
  .find()
  .where({id: req.params.id})
  .limit(1)
  .exec(function(err, donationData) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(donationData);
    }
  });
}

function create (req, res) {
  var donationInfo = req.body;
  donationInfo.donor = req.body.donor_id;
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
