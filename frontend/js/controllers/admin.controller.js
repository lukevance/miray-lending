angular.module('lendingApp')
  .controller('AdminController', ['getLoanPlansService', 'getEntrepreneursService', 'getGroupService', 'newGroupService', 'newEntrepreneurService', 'newLoanService', 'newPaymentService', AdminController]);

function AdminController (getLoanPlansService, getEntrepreneursService, getGroupService) {
  var vm = this;
  vm.title = 'Admin Page';
  vm.subtitle = 'welcome to the admin page - this page needs authorization';

}
