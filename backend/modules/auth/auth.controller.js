'use strict';
const bcrypt = require('bcrypt');

function login (req, res) {
  let userData = req.body;
  req.models.users
  .find()
  .where({email: userData.email})
  .limit(1)
  .exec(function(err, userInfo){
    if (err) {
      return res.json({error: err}, 500);
    } else {
      // encrypt password for comparison
      bcrypt.compare(userData.password, userInfo[0].password, function(err, response) {
        if (err) {
          console.log(err);
          res.json({error: err}, 500);
        } else {
          if (response === true) {
            // send JWT with users info, but not password
            res.json(userInfo[0]);
          } else {
            res.json({error: 'incorrect credentials'});
          }
        }
      });
    }
  });
}


module.exports = {
  login
};
