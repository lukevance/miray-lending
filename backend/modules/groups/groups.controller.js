'use strict';

function create(req, res) {
  console.log(req.body);
  res.json('not yet implemented, data sent: ' + req.body);
}

module.exports = {
  create
};
