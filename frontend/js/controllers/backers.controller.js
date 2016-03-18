angular.module('lendingApp')
  .controller('BackersController', ['getUserService', 'newUserService', 'editUserService', BackersController]);

function BackersController (getUserService, newUserService, editUserService) {
  var vm = this;
  vm.title = 'Backers Page';
  vm.subtitle = 'This is the backers page';
  vm.getUser = getUser;
  vm.users = {};

  function getUser (id) {
    getUserService(id, showUser);
  }

  function showUser (userData) {
    console.log(userData);
    vm.users = userData.data;
  }
}
