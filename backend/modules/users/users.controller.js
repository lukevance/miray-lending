'use strict';

function getAll (req, res, next) {
  req.models.users.find().exec(function(err, usersData) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(usersData);
    }
  });
}

function getById (req, res, next) {
  req.models.users
  .find()
  .where({id: req.params.id})
  .limit(1)
  .exec(function(err, userData){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(userData);
    }
  });
}

function create (req, res, next) {
  req.models.users
  .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.email
    })
  .exec(function(err, userMade){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(userMade);
    }
  });
}

function update () {

}

function deleteOne () {

}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteOne
};
