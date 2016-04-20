angular.module('lendingApp')
  .service('userSigninService', ['$http', '$window', 'envService', userSigninService]);
  // .service('currentUserService', [currentUserService]);

function userSigninService ($http, $window, envService) {
  return function (userCredentials, nextFunc) {
    return $http.post(envService.path + '/auth/login', userCredentials)
    .then(function(authedUserData){
      nextFunc(authedUserData);
    })
    .catch(function(err){
      console.log(err);
      delete $window.localStorage.token;
    });
  };
}
