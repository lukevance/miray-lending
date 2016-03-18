angular.module('lendingApp')
  .controller('EntrepreneursController', ['getEntrepreneursService', EntrepreneursController]);

function EntrepreneursController (getEntrepreneursService) {
  var vm = this;
  vm.title = 'Entrepreneur Page';
  vm.subtitle = 'This is the entrepreuner page';

  vm.entrepreneursData = getEntrepreneursService(saveEntrepreneurs);

  function saveEntrepreneurs (serviceResults) {
    vm.allEntrepreneurs = serviceResults;
  }
}
