angular.module('lendingApp')
  .controller('SignupController', ['$window', 'newUserService', SignupController]);


function SignupController ($window, newUserService) {
  var vm = this;
  vm.something = '';
  vm.submitUser = submitUser;
  vm.newUser = {};
  vm.successMessage = successMessage;


  function submitUser(event) {
    event.preventDefault();
    newUserService(vm.newUser, vm.successMessage);
  }

  function successMessage (response) {
    newUserClear();
    $window.localStorage.token = response.data.token;

  }

  function newUserClear() {
    vm.newUser.name = '';
    vm.newUser.email = '';
    vm.newUser.password = '';
    vm.newUser.confPassword = '';
  }


}
