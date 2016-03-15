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
      password: req.body.password
    })
  .exec(function(err, userMade){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(userMade);
    }
  });
}

function update (req, res, next) {
  // check for authorization
  // admin credentials?
  // email from jwt matches email in user?
  req.models.users
  .update({
    id: req.params.id
  }, req.body)
  .exec(function(err, updatedUser){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(updatedUser);
    }
  });
}

function deleteOne (req, res, next) {
  // check for authorization
  // email from jwt matches email in user?
  // admin credentials?
  console.log(req.params.id);
  console.log(req.body);
  req.models.users
  .destroy({
    id: req.params.id
  })
  .exec(function(err, deletedUser) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(deletedUser);
    }
  });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteOne
};
