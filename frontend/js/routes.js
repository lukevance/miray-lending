angular.module('lendingApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as MC'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupController as SC'
      });
  });
