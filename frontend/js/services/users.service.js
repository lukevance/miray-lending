angular.module('lendingApp')
  .service('newUserService', ['$http', 'envService', newUserService])
  .service('getUserService', ['$http', 'envService', getUserService])
  .service('getUserProfileService', ['$http', 'envService', getUserProfileService])
  .service('editUserService', ['$http', 'envService', editUserService]);

function newUserService($http, envService){
  return function (userData, nextFunc) {
    // connect to new user post request at API
    $http.post(envService.path + '/user/new', userData)
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

function getUserService ($http, envService){
  // get user info from API
  return function (userID, nextFunc) {
    return $http.get(envService.path + '/user/' + userID)
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

function getUserProfileService ($http, envService){
  // get user info from API
  return function (userID, nextFunc) {
    return $http.get(envService.path + '/user/profile/' + userID)
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

function editUserService ($http, envService){
  // edit user info API
  return function (userID, editedUserObj, nextFunc){
    return $http.put(envService.path + '/user/update/' + userID)
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
