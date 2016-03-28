angular.module('lendingApp')
  .directive('navbarMiray', ['userSigninService', navbarMiray]);

function navbarMiray (userSigninService) {
  return  {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'partials/navbar.html',
    controller: function ($scope, $window) {
      if ($window.localStorage.token) {
        $scope.userInfo = JSON.parse(window.atob($window.localStorage.token.split('.')[1]));
      }
      $scope.signinSubmit = signinSubmit;
      // define signin function
      function signinSubmit (email, password) {
        var userCred = {email: email, password: password};
        userSigninService(userCred, function(response){
          console.log(response);
          // console.log(window.atob(response.data.token.split('.')[1]));
          $window.localStorage.token = response.data.token;
        });
      }
      $scope.signout = signout;
      // define signout function
      function signout () {
        delete $window.localStorage.token;
      }

    }
  };
}
