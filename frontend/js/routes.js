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
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'AdminController as ADC'
      })
      .when('/entrepreneurs', {
        templateUrl: 'views/entrepreneurs.html',
        controller: 'EntrepreneursController as EC'
      })
      .when('/mydashboard', {
        templateUrl: 'views/userProfile.html',
        controller: 'UserController as UC'
      })
      .when('/discover', {
        templateUrl: 'views/discover.html',
        controller: 'DiscoverController as DC'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as ADC'
      })
      .when('/how-it-works', {
        templateUrl: 'views/how-it-works.html',
        controller: 'AboutController as ABC'
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        controller: 'ErrorController as ERC'
      })
      .otherwise({redirectTo: '/404'});
  });
