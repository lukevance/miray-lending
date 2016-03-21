angular.module('lendingApp')
  .controller('AdminController', ['newGroupService', 'newEntrepreneurService', 'newLoanService', 'newPaymentService', AdminController]);

function AdminController (newGroupService, newEntrepreneurService, newLoanService, newPaymentService) {
  var vm = this;
  vm.title = 'Admin Page';
  vm.subtitle = 'welcome to the admin page - this page needs authorization';
  vm.groupActive = false;
  vm.entActive = false;
  vm.loanActive = false;
  vm.paymentActive = false;

  // activate and grab each form

  // ----- get groups ----- //

  // ----- get borrowers ----- //

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

  // define clear funciton
  vm.clearForm = clearForm;


  // define validation functions
  function validGroup (groupForm) {
    console.log('sent: ' + groupForm);
    newGroupService(groupForm, function(newGroup){
      console.log('recvd: ');
      console.log(newGroup.data);
    });

  }

  function validEnt (entForm) {
    console.log('sent: ' + entForm);
    newEntrepreneurService(entForm, function(newEnt){
      console.log('recvd: ');
      console.log(newEnt.data);

    });
  }

  function validLoan (loanForm) {
    console.log('sent: ' + loanForm);
    newLoanService(loanForm, function(newLoan) {
      console.log('recvd: ' + newLoan);
    });
  }

  function validPayment (paymentForm) {
    console.log('sent: ' + paymentForm);
    newPaymentService(paymentForm, function(newPayment) {
      console.log(newPayment);
    });
  }

  function submitForm (event, validFunc, formObj) {
    event.preventDefault();
    validFunc(formObj);
  }

  function clearForm (formObj){
    console.log(formObj);
    formObj = {};
  }
}
