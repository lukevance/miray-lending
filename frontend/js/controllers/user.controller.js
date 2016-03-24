angular.module('lendingApp')
  .controller('UserController', ['getLoanService', 'getUserService', UserController]);

function UserController (getLoanService, getUserService) {
  var vm = this;
  // find current user ID
  vm.userID = 1;
  // get user info from server using ID
  getUserService(vm.userID, storeUser);
  // get loan info using donation info
  function storeUser(userData) {
    vm.profile = userData;
    userData.donations.forEach(function(val){
      getLoanService(val.loan_id, storeLoan);
    });
  }
  // get entrepreneur info using loan info
  function storeLoan (loanData) {
    console.log(loanData);
  }



}
