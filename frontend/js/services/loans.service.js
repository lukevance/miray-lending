angular.module('lendingApp')
  .service('getLoanPlansService', ['$http', getLoanPlansService])
  .service('newLoanService', ['$http', newLoanService]);

  function newLoanService ($http) {
    return function (loanObj, nextFunc) {
      return $http.post('//localhost:3000/loan/new', loanObj)
      .then(function(loanData){
        nextFunc(loanData);
      });
    };
  }

  function getLoanPlansService($http) {
    return function (nextFunc) {
      return $http.get('//localhost:3000/loan/plans')
      .then(function(loanPlans){
        nextFunc(loanPlans.data);
      });
    };
  }
