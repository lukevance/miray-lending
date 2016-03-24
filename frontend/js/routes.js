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
      .when('/mydashboard', {
        templateUrl: 'views/userProfile.html',
        controller: 'UserController as UC'
      })
      .when('/backers', {
        templateUrl: 'views/backers.html',
        controller: 'BackersController as BC'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as ADC'
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        controller: 'ErrorController as ERC'
      })
      .otherwise({redirectTo: '/404'});
  });
