angular.module('lendingApp')
  .service('getEntrepreneursService', ['$http', getEntrepreneursService]);


function getEntrepreneursService ($http) {
  return function (nextFunc) {
    $http.get('//localhost:3000/borrower')
    .then(function(entrepreneursData) {
      console.log(entrepreneursData);
      nextFunc(entrepreneursData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}
