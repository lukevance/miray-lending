angular.module('lendingApp')
  .controller('BackersController', [BackersController]);

function BackersController () {
  var vm = this;
  vm.title = 'Backers Page';
  vm.subtitle = 'This is the backers page';
}
