angular.module('lendingApp')
  .service('newDonationService', ['$http', 'envService', newDonationService]);
  // .service('currentUserService', [currentUserService]);

function newDonationService ($http, envService) {
  return function (donationDetails, nextFunc) {
    return $http.post(envService.path + '/donation/new', donationDetails)
    .then(function(authedUserData){
      nextFunc(authedUserData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}
