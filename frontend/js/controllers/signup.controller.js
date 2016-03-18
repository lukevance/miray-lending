angular.module('lendingApp')
  .controller('SignupController', ['newUserService', SignupController]);


function SignupController (newUserService) {
  var vm = this;
  vm.something = '';
  vm.submitUser = submitUser;
  vm.newUser = {};
  vm.successMessage = successMessage;


  function submitUser(event) {
    event.preventDefault();
    newUserService(vm.newUser, vm.successMessage);
  }

  function successMessage (userObj) {
    newUserClear();
    console.log('user created: ' + userObj);
  }

  function newUserClear() {
    vm.newUser.name = '';
    vm.newUser.email = '';
    vm.newUser.password = '';
    vm.newUser.confPassword = '';
  }


}
