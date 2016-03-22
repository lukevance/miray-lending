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
    vm.groupActive = !vm.groupActive;
  }

  // get info for entrepreneur form
  function activateEntrepreneur () {
    vm.entActive = !vm.entActive;
  }

  // get info for loan form
  function activateLoan () {
    if (!vm.groupsInfo) {
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
    }

    vm.loanActive = !vm.loanActive;
  }

  // get info for payment form
  function activatePayment () {
    // get borrowers

    // get loans
    vm.paymentActive = !vm.paymentActive;
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
    newGroupService(groupForm, function(newGroup){
      console.log('recvd: ');
      console.log(newGroup.data);
    });
    clearForm('group');
  }

  function validEnt (entForm) {
    newEntrepreneurService(entForm, function(newEnt){
      console.log('recvd: ');
      console.log(newEnt.data);
    });
    clearForm('ent');
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
    newLoanService(loanBody, function(newLoan) {
      console.log('recvd: ' + newLoan);
    });
    clearForm('loan');
  }

  function validPayment (paymentForm) {
    newPaymentService(paymentForm, function(newPayment) {
      console.log(newPayment);
    });
    clearForm('payment');
  }

  function submitForm (event, validFunc, formObj) {
    event.preventDefault();
    validFunc(formObj);
  }

  function clearForm (form){
    if (form === 'group') {
      vm.groupForm = {};
      vm.groupActive = false;
    } else if (form === 'ent'){
      vm.entForm = {};
      vm.entActive = false;
    } else if (form === 'loan'){
      vm.loanForm = {};
      vm.loanActive = false;
    } else if (form === 'payment') {
      vm.paymentForm = {};
      vm.paymentActive = false;
    }
  }
}
