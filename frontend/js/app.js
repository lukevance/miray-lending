angular.module('lendingApp', ['ngRoute', 'ngLoadScript'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
  // .config(function($locationProvider){
  //   $locationProvider.html5Mode(true);
  // });
