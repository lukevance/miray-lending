angular.module('lendingApp')
  .service('getLoanPlansService', ['$http', getLoanPlansService])
  .service('newLoanService', ['$http', newLoanService])
  .service('getLoanService', ['$http', getLoanService])
  .service('getLoanForDonorService', ['$http', getLoanForDonorService]);

  function newLoanService ($http) {
    return function (loanObj, nextFunc) {
      return $http.post('//miraydevelopment.herokuapp.com/loan/new', loanObj)
      .then(function(loanData){
        nextFunc(loanData);
      });
    };
  }

  function getLoanPlansService($http) {
    return function (nextFunc) {
      return $http.get('//miraydevelopment.herokuapp.com/loan/plans')
      .then(function(loanPlans){
        nextFunc(loanPlans.data);
      });
    };
  }

  function getLoanService ($http) {
    return function (loanID, nextFunc) {
      return $http.get('//miraydevelopment.herokuapp.com/loan/' + loanID)
      .then(function(loanInfo){
        nextFunc(loanInfo.data);
      });
    };
  }

  function getLoanForDonorService ($http) {
    return function (loanID, userID, nextFunc) {
      return $http.get('//miraydevelopment.herokuapp.com/loan/' + loanID + '?donor=' + userID)
      .then(function(loanInfo){
        nextFunc(loanInfo.data);
      });
    };
  }
