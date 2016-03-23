angular.module('lendingApp')
  .controller('EntrepreneursController', ['$location', 'getOneEntrepreneurService', 'getEntrepreneursService', EntrepreneursController]);

function EntrepreneursController ($location, getOneEntrepreneurService, getEntrepreneursService) {
  var vm = this;
  vm.title = 'Entrepreneur Page';
  vm.subtitle = 'This is the entrepreuner page';
  // get all Entrepreneur data
  getEntrepreneursService(saveEntrepreneurs);
  function saveEntrepreneurs (serviceResults) {
    vm.allEntrepreneurs = serviceResults.data;
  }

}
