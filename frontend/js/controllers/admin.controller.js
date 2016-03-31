angular.module('lendingApp')
  .controller('AdminController', ['getLoanPlansService', 'getEntrepreneursService', 'getGroupAdminService', 'newGroupService', 'newEntrepreneurService', 'newLoanService', 'newPaymentService', AdminController]);

function AdminController (getLoanPlansService, getEntrepreneursService, getGroupAdminService) {
  var vm = this;
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

  // *** for dashboard layout
  vm.changeSection = changeSection;
  vm.showSection = 'overview';

  function changeSection (section) {
    vm.showSection = section;
  }
}
