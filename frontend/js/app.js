angular.module('lendingApp', ['ngRoute'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
  // .config(function($locationProvider){
  //   $locationProvider.html5Mode(true);
  // });
