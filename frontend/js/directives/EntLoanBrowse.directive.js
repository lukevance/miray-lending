angular.module('lendingApp')
  .directive('entBrowse', entBrowse);

function entBrowse () {
  return {
    restrict: 'E',
    scope: {
      entrepreneur: '='
    },
    templateUrl: 'partials/entBrowse.html',
    controller: function($scope){
      console.log($scope.entrepreneur);
    }
  };
}
