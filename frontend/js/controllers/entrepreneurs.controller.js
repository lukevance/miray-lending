angular.module('lendingApp')
  .controller('EntrepreneursController', ['$location', 'getOneEntrepreneurService', 'getEntrepreneursService', EntrepreneursController]);

function EntrepreneursController ($location, getOneEntrepreneurService, getEntrepreneursService) {
  var vm = this;
  vm.sortByTracker = 'group.start_date';
  // get all Entrepreneur data
  getEntrepreneursService(saveEntrepreneurs);
  function saveEntrepreneurs (serviceResults) {
    vm.allEntrepreneurs = serviceResults.data;
    console.log(vm.allEntrepreneurs[0]);
  }



}
