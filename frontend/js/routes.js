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
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController as AC'
      })
      .when('/entrepreneurs', {
        templateUrl: 'views/entrepreneurs.html',
        controller: 'EntrepreneursController as EC'
      })
      .when('entrepreneur', {
        templateUrl: 'views/entrepreneurProfile.html',
        controller: 'EntrepreneurProfileController as EPC'
      })
      .when('/backers', {
        templateUrl: 'views/backers.html',
        controller: 'BackersController as BC'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as ADC'
      });
  });
