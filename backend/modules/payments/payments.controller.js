'use strict';

function getById (req, res) {
  console.log(req.params);
  req.models.payments
  .find()
  .where({id: req.params.id})
  .limit(1)
  .exec(function(err, paymentData) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(paymentData);
    }
  });
}

function create (req, res) {
  console.log(req.body);
  var paymentInfo = req.body;
  paymentInfo.borrower = req.body.borrower_id;
  paymentInfo.loan = req.body.loan_id;
  req.models.payments
  .create(paymentInfo)
  .exec(function(err, newPayment) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(newPayment);
    }
  });
}

module.exports = {
  getById,
  create
};
