angular.module('lendingApp')
  .directive('adminCreate', ['$route', 'getLoanPlansService', 'getEntrepreneursService', 'getGroupService', 'newGroupService', 'newEntrepreneurService', 'newLoanService', 'newPaymentService', adminCreate]);

function adminCreate ($route, getLoanPlansService, getEntrepreneursService, getGroupService, newGroupService, newEntrepreneurService, newLoanService, newPaymentService) {
  return {
    restric: 'E',
    templateUrl: 'partials/adminCreatePanel.html',
    controller: function ($scope) {
      $scope.groupActive = false;
      $scope.entActive = false;
      $scope.loanActive = false;
      $scope.paymentActive = false;


      // activate and grab each form
      $scope.activateGroup = activateGroup;
      $scope.activateLoan = activateLoan;
      $scope.activateEntrepreneur = activateEntrepreneur;
      $scope.activatePayment = activatePayment;

      // get info for group form
      function activateGroup () {
        // getLoanOfficerService(function(groups){
        //   console.log(groups.data);
        //   $scope.groupsInfo = groups.data;
        // });
        $scope.groupActive = !$scope.groupActive;
      }

      // get info for entrepreneur form
      function activateEntrepreneur () {
        $scope.entActive = !$scope.entActive;
      }

      // get info for loan form
      function activateLoan () {

          // get groups
          getGroupService(function(groups){
            $scope.groupsInfo = groups;
            // get borrowers
            getEntrepreneursService(function(entrepreneurs){
              $scope.entrepreneursInfo = entrepreneurs.data;
              // get plans
              getLoanPlansService(function(loanPlans){
                $scope.loanPlans = loanPlans;
              });
            });
          });

        $scope.loanActive = !$scope.loanActive;
      }

      // get info for payment form
      function activatePayment () {
        // get borrowers
        getEntrepreneursService(function(entrepreneurs){
          $scope.entrepreneursInfo = entrepreneurs.data;
        });
        // get loans
        $scope.paymentActive = !$scope.paymentActive;
      }


      // setup models for forms data
      $scope.groupForm = {};
      $scope.entForm = {};
      $scope.loanForm = {};
      $scope.paymentForm = {};

      // provide validation functions
      $scope.validGroup = validGroup;
      $scope.validEnt = validEnt;
      $scope.validLoan = validLoan;
      $scope.validPayment = validPayment;

      // define submit functino
      $scope.submitForm = submitForm;

      // define clear funciton
      $scope.clearForm = clearForm;


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
          borrower: loanForm.borrower.id,
          amount: loanForm.amount,
          group: loanForm.group.id,
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
          $scope.groupForm = {};
          $scope.groupActive = false;
        } else if (form === 'ent'){
          $scope.entForm = {};
          $scope.entActive = false;
        } else if (form === 'loan'){
          $scope.loanForm = {};
          $scope.loanActive = false;
        } else if (form === 'payment') {
          $scope.paymentForm = {};
          $scope.paymentActive = false;
        }
        $route.reload();
      }
    }
  };
}
