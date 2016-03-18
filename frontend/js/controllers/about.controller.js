angular.module('lendingApp')
  .controller('AboutController', [AboutController]);

function AboutController () {
  var vm = this;
  vm.title = 'About Page';
  vm.subtitle = 'This is the about page';
}
