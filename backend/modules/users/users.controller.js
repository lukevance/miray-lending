'use strict';

function getAll (req, res, next) {
  console.log('models: ' + req.models);
  req.models.users.find().exec(function(err, usersData) {
    if (err) {
      return res.json({error: err}, 500);
    } else {
      res.json(usersData);
    }
  });
}

function getById () {

}
function create () {

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
