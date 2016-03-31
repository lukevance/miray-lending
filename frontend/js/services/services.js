angular.module('lendingApp')
  .service('generalService', ['$http', generalService])
  .service('newPaymentService', ['$http', newPaymentService]);

function generalService(){
  // provide general data and functionality
}

function newPaymentService ($http) {
  return function (paymentObj, nextFunc) {
    return $http.post('//miraydevelopment.herokuapp.com/pay/new', paymentObj)
    .then(function(paymentData){
      nextFunc(paymentData);
    });
  };
}
