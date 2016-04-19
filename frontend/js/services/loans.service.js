angular.module('lendingApp')
  .service('getLoanPlansService', ['$http', 'envService', getLoanPlansService])
  .service('newLoanService', ['$http', 'envService', newLoanService])
  .service('getLoanService', ['$http', 'envService', getLoanService])
  .service('getLoanForDonorService', ['$http', 'envService', getLoanForDonorService]);

  function newLoanService ($http, envService) {
    return function (loanObj, nextFunc) {
      return $http.post(envService.path + '/loan/new', loanObj)
      .then(function(loanData){
        nextFunc(loanData);
      });
    };
  }

  function getLoanPlansService($http, envService) {
    return function (nextFunc) {
      return $http.get(envService.path + '/loan/plans')
      .then(function(loanPlans){
        nextFunc(loanPlans.data);
      });
    };
  }

  function getLoanService ($http, envService) {
    return function (loanID, nextFunc) {
      return $http.get(envService.path + '/loan/' + loanID)
      .then(function(loanInfo){
        nextFunc(loanInfo.data);
      });
    };
  }

  function getLoanForDonorService ($http, envService) {
    return function (loanID, userID, nextFunc) {
      return $http.get(envService.path + '/loan/' + loanID + '?donor=' + userID)
      .then(function(loanInfo){
        nextFunc(loanInfo.data);
      });
    };
  }
