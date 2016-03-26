angular.module('lendingApp')
  .controller('UserController', ['getLoanForDonorService', 'getUserService', UserController]);

function UserController (getLoanForDonorService, getUserService) {
  var vm = this;
  // find current user ID
  vm.userID = 1;
  // get user info from server using ID
  getUserService(vm.userID, storeUser);
  // get loan info using donation info
  function storeUser(userData) {
    vm.profile = userData;
    // loop through array of donations
    vm.profile.donations.forEach(function(val){
      // get loan info from loan ID
      getLoanForDonorService(val.loan, vm.userID, function(loanData){
        val.loan = loanData;
        console.log(val);
      });
    });
  }

}
