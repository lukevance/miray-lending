'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_Secret;

function getAll (req, res) {
  req.models.users
  .find()
  .populate('donations')
  .exec(function(err, usersData) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(usersData);
    }
  });
}

function getById (req, res) {
  req.models.users
  .find()
  .where({id: req.params.id})
  .limit(1)
  .populate('donations')
  .exec(function(err, userData){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(userData);
    }
  });
}

function create (req, res) {
  let newUserObj = req.body;
  newUserObj.role = 'donor';
  bcrypt.hash(req.body.password, 8, function(err, hash) {
    newUserObj.password = hash;
    req.models.users
    .create(newUserObj)
    .exec(function(err, userMade){
      if (err) {
        return res.json({error: err}, 500);
      } else {
        let profile = {
          id: userMade.id,
          name: userMade.name,
          email: userMade.email,
          role: userMade.role
        };
        let token = jwt.sign(profile, secret, {expiresIn: 60*3});
        res.json({token: token});
      }
    });
  });
}

function update (req, res) {
  console.log('user: ' + req.body.email + ' is trying to change their info');
  // check for authorization
  // admin credentials?
  // email from jwt matches email in user?
  req.models.users
  .update({
    id: req.params.id
  }, {balance: req.body.balance})
  .exec(function(err, updatedUser){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(updatedUser);
    }
  });
}

function deleteOne (req, res) {
  // check for authorization
  // email from jwt matches email in user?
  // admin credentials?
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
