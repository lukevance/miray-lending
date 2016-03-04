angular.module('templateApp')
  .controller('MainController', [MainController]);



function MainController () {
  var vm = this;
  vm.title = 'Angular Template App';
  vm.subtitle = 'Welcome to Angular!';
}
