angular.module('lendingApp', ['ngRoute', 'angular-jwt'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
  // .config(function($locationProvider){
  //   $locationProvider.html5Mode(true);
  // });
