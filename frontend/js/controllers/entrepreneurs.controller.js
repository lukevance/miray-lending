angular.module('lendingApp')
  .controller('EntrepreneursController', ['$location', 'getOneEntrepreneurService', 'getEntrepreneursService', EntrepreneursController]);

function EntrepreneursController ($location, getOneEntrepreneurService, getEntrepreneursService) {
  var vm = this;
  vm.sortByTracker = 'group.start_date';
  vm.sort = [true, false, false, false];
  vm.selectSort = selectSort;
  // get all Entrepreneur data
  getEntrepreneursService(saveEntrepreneurs);
  function saveEntrepreneurs (serviceResults) {
    vm.allEntrepreneurs = serviceResults.data;
  }

  function selectSort(num) {
    for (var i = 0; i < vm.sort.length; i++) {
      if (i === num) {
        vm.sort[i] = true;
      } else {
        vm.sort[i] = false;
      }
    }
  }



}
