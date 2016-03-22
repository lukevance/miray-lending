angular.module('lendingApp')
  .service('generalService', ['$http', generalService])
  .service('newPaymentService', ['$http', newPaymentService]);

function generalService(){
  // provide general data and functionality
}

function newPaymentService ($http) {
  return function (paymentObj, nextFunc) {
    return $http.post('//localhost:3000/pay/new', paymentObj)
    .then(function(paymentData){
      nextFunc(paymentData);
    });
  };
}
