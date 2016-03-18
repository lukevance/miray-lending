angular.module('lendingApp')
  .controller('EntrepreneursController', ['getOneEntrepreneurService', 'getEntrepreneursService', EntrepreneursController]);

function EntrepreneursController (getEntrepreneursService, getOneEntrepreneurService) {
  var vm = this;
  vm.title = 'Entrepreneur Page';
  vm.subtitle = 'This is the entrepreuner page';
  // get all Entrepreneur data
  getEntrepreneursService(saveEntrepreneurs);
  function saveEntrepreneurs (serviceResults) {
    vm.allEntrepreneurs = serviceResults.data;
  }

  // function getOneEntrepreneur (id, nextFunc) {
  //   getOneEntrepreneurService(id, nextFunc);
  // }
}
