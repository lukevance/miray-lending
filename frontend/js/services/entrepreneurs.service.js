angular.module('lendingApp')
  .service('getEntrepreneursService', ['$http', getEntrepreneursService])
  .service('getOneEntrepreneurService', ['$http', getOneEntrepreneurService])
  .service('newEntrepreneurService', ['$http', newEntrepreneurService])
  .service('updateEntrepreneurSevice', ['$http', updateEntrepreneurSevice]);

function getEntrepreneursService ($http) {
  return function (nextFunc) {
    return $http.get('//miraydevelopment.herokuapp.com/borrower')
    .then(function(entrepreneursData) {
      nextFunc(entrepreneursData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function getOneEntrepreneurService ($http) {
  return function (entID, nextFunc) {
    return $http.get('//miraydevelopment.herokuapp.com/borrower' + entID)
    .then(function(entrepreneurData) {
      nextFunc(entrepreneurData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function newEntrepreneurService ($http) {
  return function (newEntObj, nextFunc) {
    return $http.post('//miraydevelopment.herokuapp.com/borrower/new', newEntObj)
    .then(function(createdEnt){
      nextFunc(createdEnt);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function updateEntrepreneurSevice ($http) {
  return function (entID, updatedEntObj, nextFunc) {
    return $http.put('//miraydevelopment.herokuapp.com/borrower/update' + entID)
    .then(function(editedEnt) {
      nextFunc(editedEnt);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}
