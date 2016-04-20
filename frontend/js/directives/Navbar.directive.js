angular.module('lendingApp')
  .directive('navbarMiray', ['userSigninService', navbarMiray]);

function navbarMiray (userSigninService) {
  return  {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'partials/navbar.html',
    controller: function ($scope, $window, $location) {
      if ($window.localStorage.token) {
        $scope.userInfo = JSON.parse(window.atob($window.localStorage.token.split('.')[1]));
      }
      $scope.signinSubmit = signinSubmit;
      // define signin function
      function signinSubmit (email, password) {
        var userCred = {email: email, password: password};
        userSigninService(userCred, function(response){
          $window.localStorage.token = response.data.token;
          if ($window.localStorage.token) {
            $scope.userInfo = JSON.parse(window.atob($window.localStorage.token.split('.')[1]));
            if ($scope.userInfo.role === 'admin') {
              $location.path('/admin');
            } else {
              $location.path('/mydashboard');
            }
          }
        });
      }
      $scope.signout = signout;
      // define signout function
      function signout () {
        delete $window.localStorage.token;
        if ($window.localStorage.token) {
          $scope.userInfo = JSON.parse(window.atob($window.localStorage.token.split('.')[1]));
        } else {
          delete $scope.userInfo;
        }
      }

    }
  };
}
