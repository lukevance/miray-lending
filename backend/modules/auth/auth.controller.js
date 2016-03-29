'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_Secret;

function login (req, res) {
  let userData = req.body;
  req.models.users
  .find()
  .where({email: userData.email})
  .limit(1)
  .exec(function(err, userInfo){
    if (err) {
      return res.json({error: err}, 401);
    } else if (userInfo.length !== 1) {
      return res.status(401).json({error: 'Credentials are incorrect.'});
    } else {
      // encrypt password for comparison
      bcrypt.compare(userData.password, userInfo[0].password, function(err, response) {
        if (err) {
          console.log(err);
          res.json({error: err}, 500);
        } else {
          if (response === true) {
            // send user profile without password
            let profile = {
              id: userInfo[0].id,
              name: userInfo[0].name,
              email: userInfo[0].email,
              role: userInfo[0].role
            };

            // setup token with users info and secret
            let token = jwt.sign(profile, secret, {expiresIn: 60*60*5});
            res.json({token: token});
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
