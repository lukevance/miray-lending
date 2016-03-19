angular.module('lendingApp')
  .controller('AdminController', [AdminController]);

function AdminController () {
  var vm = this;
  vm.title = 'Admin Page';
  vm.subtitle = 'welcome to the admin page - this page needs authorization';
  // setup models for forms data
  vm.groupForm = {};
  vm.entForm = {};
  vm.loanForm = {};
  vm.paymentForm = {};

  // provide validation functions
  vm.validGroup = validGroup;
  vm.validEnt = validEnt;
  vm.validLoan = validLoan;
  vm.validPayment = validPayment;

  // define submit functino
  vm.submitForm = submitForm;


  // define validation functions
  function validGroup (groupForm) {
    console.log(groupForm);
  }

  function validEnt (entForm) {
    console.log(entForm);
  }

  function validLoan (loanForm) {
    console.log(loanForm);
  }

  function validPayment (paymentForm) {
    console.log(paymentForm);
  }

  function submitForm (event, validFunc, formObj) {
    event.preventDefault();
    validFunc(formObj);
  }
}
