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
      // if ($window.sessionStorage.profile) {
      //   $scope.userInfo = $window.sessionStorage.profile;
      //   console.log($scope.userInfo.name);
      // }
      $scope.signinSubmit = signinSubmit;
      function signinSubmit (email, password) {
        var userCred = {email: email, password: password};
        userSigninService(userCred, function(response){
          console.log(response);
          $window.sessionStorage.profile = response.data.profile;
          $window.sessionStorage.token = response.data.token;
        });
      }

    }
  };
}
