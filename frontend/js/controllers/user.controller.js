angular.module('lendingApp')
  .controller('UserController', ['getUserService', UserController]);

function UserController (getUserService) {
  var vm = this;
  // find current user ID
  vm.userID = 1;
  // get user info from server using ID
  getUserService(vm.userID, storeUser);
  // get loan info using donation info

  // get entrepreneur info using loan info



  function storeUser(userData) {
    vm.profile = userData;
    getLoa
  }
}
