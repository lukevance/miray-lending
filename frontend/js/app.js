angular.module('lendingApp', ['ngRoute'])
  .config(function($locationProvider){
    $locationProvider.html5Mode(true);
  });
