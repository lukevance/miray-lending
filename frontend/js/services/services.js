angular.module('lendingApp')
  .service('generalService', ['$http', generalService])
  .service('newGroupService', ['$http', newGroupService])
  .service('newLoanService', ['$http', newLoanService])
  .service('newPaymentService', ['$http', newPaymentService]);

function generalService(){
  // provide general data and functionality
}

function newGroupService ($http) {
  return function (groupObj, nextFunc) {
    return $http.post('//localhost:3000/group/new')
    .then(function(groupData){
      nextFunc(groupData);
    });
  };
}

function newLoanService ($http) {
  return function (loanObj, nextFunc) {
    return $http.post('//localhost:3000/loan/new')
    .then(function(loanData){
      nextFunc(loanData);
    });
  };
}

function newPaymentService ($http) {
  return function (paymentObj, nextFunc) {
    return $http.post('//localhost:3000/payment/new')
    .then(function(paymentData){
      nextFunc(paymentData);
    });
  };
}
