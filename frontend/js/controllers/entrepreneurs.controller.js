angular.module('lendingApp')
  .controller('EntrepreneursController', [EntrepreneursController]);

function EntrepreneursController () {
  var vm = this;
  vm.title = 'Entrepreneur Page';
  vm.subtitle = 'This is the entrepreuner page';
}
