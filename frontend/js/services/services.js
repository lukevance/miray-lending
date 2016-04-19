angular.module('lendingApp')
  .service('envService', [envService])
  .service('newPaymentService', ['$http', 'envService', newPaymentService]);

function envService(){
  // provide utility variables and stuff
  var development = true;
  var apiPath = '';
  if (development) {
    apiPath = '//localhost:3000';
  } else {
    apiPath = '//miraydevelopment.herokuapp.com';
  }
  return {
    path: apiPath
  };
}

function newPaymentService ($http, envService) {
  return function (paymentObj, nextFunc) {
    return $http.post(envService.path + '/pay/new', paymentObj)
    .then(function(paymentData){
      nextFunc(paymentData);
    });
  };
}
