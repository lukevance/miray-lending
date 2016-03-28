angular.module('lendingApp')
  .controller('AdminController', ['getLoanPlansService', 'getEntrepreneursService', 'getGroupAdminService', 'newGroupService', 'newEntrepreneurService', 'newLoanService', 'newPaymentService', AdminController]);

function AdminController (getLoanPlansService, getEntrepreneursService, getGroupAdminService) {
  var vm = this;
  vm.title = 'Admin Page';
  vm.subtitle = 'welcome to the admin page - this page needs authorization';
  getGroupAdminService(saveGroups);

  function saveGroups (groupInfo) {
    vm.totalLoansAmount = groupInfo.totalAmount;
    vm.totalPaymentsAmount = groupInfo.totalPayments;
    vm.totalDonationsAmount = groupInfo.totalDonations;
    vm.groups = [];
    for (var group in groupInfo) {
      if (groupInfo[group].hasOwnProperty('id')) {
        vm.groups.push(groupInfo[group]);
      }
    }
  }

}
