angular.module('lendingApp')
  .directive('entLoanHomeDirective', entLoanHomeDirective);


function entLoanHomeDirective () {
  return {
    restrict: 'E',
    scope: {
      entrepreneur: '='
    },
    template: 'partials/entLoanHome.html',
    controller: ''
  };
}
