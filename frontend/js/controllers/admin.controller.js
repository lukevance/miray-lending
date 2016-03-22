angular.module('lendingApp')
  .controller('AdminController', ['getLoanPlansService', 'getEntrepreneursService', 'getGroupService', 'newGroupService', 'newEntrepreneurService', 'newLoanService', 'newPaymentService', AdminController]);

function AdminController (getLoanPlansService, getEntrepreneursService, getGroupService, newGroupService, newEntrepreneurService, newLoanService, newPaymentService) {
  var vm = this;
  vm.title = 'Admin Page';
  vm.subtitle = 'welcome to the admin page - this page needs authorization';
  vm.groupActive = false;
  vm.entActive = false;
  vm.loanActive = false;
  vm.paymentActive = false;


  // activate and grab each form
  vm.activateGroup = activateGroup;
  vm.activateLoan = activateLoan;
  vm.activateEntrepreneur = activateEntrepreneur;
  vm.activatePayment = activatePayment;

  // get info for group form
  function activateGroup () {
    // getLoanOfficerService(function(groups){
    //   console.log(groups.data);
    //   vm.groupsInfo = groups.data;
    // });
    vm.groupActive = true;
  }

  // get info for entrepreneur form
  function activateEntrepreneur () {
    vm.entActive = true;
  }

  // get info for loan form
  function activateLoan () {
    // get groups
    getGroupService(function(groups){
      vm.groupsInfo = groups.data;
      // get borrowers
      getEntrepreneursService(function(entrepreneurs){
        vm.entrepreneursInfo = entrepreneurs.data;
        // get plans
        getLoanPlansService(function(loanPlans){
          vm.loanPlans = loanPlans;
        });
      });
    });

    vm.loanActive = true;
  }

  // get info for payment form
  function activatePayment () {
    // get borrowers

    // get loans
    vm.paymentActive = true;
  }


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
    let loanBody = {
      borrower_id: loanForm.borrower.id,
      amount: loanForm.amount,
      group_id: loanForm.group.id,
      rate_plan_id: loanForm.rate_plan.id,
      description: loanForm.description,
      date_awarded: loanForm.start_date
    };
    console.log('sent: ' + loanBody);
    newLoanService(loanBody, function(newLoan) {
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
