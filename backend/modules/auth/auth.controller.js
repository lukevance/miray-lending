'use strict';

function login (req, res) {
  console.log(req.body);
  res.json('heyyyy');
}


module.exports = {
  login
};
