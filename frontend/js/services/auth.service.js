angular.module('lendingApp')
  .service('userSigninService', ['$http', '$window', userSigninService]);
  // .service('currentUserService', [currentUserService]);

function userSigninService ($http, $window) {
  return function (userCredentials, nextFunc) {
    return $http.post('//miraydevelopment.herokuapp.com/auth/login', userCredentials)
    .then(function(authedUserData){
      nextFunc(authedUserData);
    })
    .catch(function(err){
      console.log(err);
      delete $window.localStorage.token;
    });
  };
}
