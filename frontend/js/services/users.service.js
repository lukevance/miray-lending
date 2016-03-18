angular.module('lendingApp')
  .service('newUserService', ['$http', newUserService]);

function newUserService($http){
  return function (userData, nextFunc) {
    // connect to new user post request at API
    $http.post('//localhost:3000', userData)
    .then(function(responseData, err){
      if (err) {
        throw err;
      } else {
        console.log(responseData);
        nextFunc(responseData);
      }
    })
    .catch(function(err){
      console.log(err);
      // handle err
    });
  };
}

function editUserService ($http){
  // edit user info API
}

function getUserService ($http){
  // get user info from API
}
