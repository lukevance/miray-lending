angular.module('lendingApp')
  .service('getEntrepreneursService', ['$http', 'envService', getEntrepreneursService])
  .service('getOneEntrepreneurService', ['$http', 'envService', getOneEntrepreneurService])
  .service('newEntrepreneurService', ['$http', 'envService', newEntrepreneurService])
  .service('updateEntrepreneurSevice', ['$http', 'envService', updateEntrepreneurSevice]);

function getEntrepreneursService ($http, envService) {
  return function (nextFunc) {
    return $http.get(envService.path + '/borrower')
    .then(function(entrepreneursData) {
      nextFunc(entrepreneursData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function getOneEntrepreneurService ($http, envService) {
  return function (entID, nextFunc) {
    return $http.get(envService.path + '/borrower' + entID)
    .then(function(entrepreneurData) {
      nextFunc(entrepreneurData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function newEntrepreneurService ($http, envService) {
  return function (newEntObj, nextFunc) {
    return $http.post(envService.path + '/borrower/new', newEntObj)
    .then(function(createdEnt){
      nextFunc(createdEnt);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}

function updateEntrepreneurSevice ($http, envService) {
  return function (entID, updatedEntObj, nextFunc) {
    return $http.put(envService.path + '/borrower/update' + entID)
    .then(function(editedEnt) {
      nextFunc(editedEnt);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}
