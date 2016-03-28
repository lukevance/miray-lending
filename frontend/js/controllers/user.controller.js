angular.module('lendingApp')
  .controller('UserController', ['$window','getLoanForDonorService', 'getUserProfileService', UserController]);

function UserController ($window, getLoanForDonorService, getUserProfileService) {
  var vm = this;
  // check to see if user is logged in
  if ($window.localStorage.token) {
    // find current user ID
    vm.userInfo = JSON.parse(window.atob($window.localStorage.token.split('.')[1]));
    // get user info from server using ID
    getUserProfileService(vm.userInfo.id, storeUser);

  } else {
    $window.location.href('/#/');
  }

  // get loan info using donation info
  function storeUser(userData) {
    vm.profile = userData;
    // loop through array of donations
    vm.profile.donations.forEach(function(val){
      // get loan info from loan ID
      getLoanForDonorService(val.loan, vm.userInfo.id, function(loanData){
        val.loan = loanData;
        console.log(val);
      });
    });
  }



}
