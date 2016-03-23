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
      // remove this line later when donations are connected
      $scope.entrepreneur.amount_raised = 50;
      $scope.selectEnt = selectEnt;
      function selectEnt (clickedEnt) {
        console.log(clickedEnt);
        $scope.currEnt = clickedEnt;
      }
    }
  };
}
