angular.module('lendingApp')
  .service('newUserService', ['$http', newUserService])
  .service('getUserService', ['$http', getUserService])
  .service('getUserProfileService', ['$http', getUserProfileService])
  .service('editUserService', ['$http', editUserService]);

function newUserService($http){
  return function (userData, nextFunc) {
    // connect to new user post request at API
    $http.post('//localhost:3000/user/new', userData)
    .then(function(responseData, err){
      if (err) {
        throw err;
      } else {
        nextFunc(responseData);
      }
    })
    .catch(function(err){
      console.log(err);
      // handle err
    });
  };
}

function getUserService ($http){
  // get user info from API
  return function (userID, nextFunc) {
    return $http.get('//localhost:3000/user/' + userID)
    .then(function(userData, err){
      if (err) {
        throw err;
      } else {
        nextFunc(userData.data[0]);
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function getUserProfileService ($http){
  // get user info from API
  return function (userID, nextFunc) {
    return $http.get('//localhost:3000/user/profile/' + userID)
    .then(function(userData, err){
      if (err) {
        throw err;
      } else {
        nextFunc(userData.data[0]);
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function editUserService ($http){
  // edit user info API
  return function (userID, editedUserObj, nextFunc){
    return $http.put('//localhost:3000/user/update/' + userID)
    .then(function(updatedUser, err){
      if (err) {
        throw err;
      } else {
        nextFunc(updatedUser);
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
}
