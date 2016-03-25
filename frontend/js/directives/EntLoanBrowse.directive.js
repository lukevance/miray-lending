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
      $scope.signinActive = false;
      $scope.donationActive = false;
      function selectEnt (clickedEnt) {
        console.log(clickedEnt);
        $scope.currEnt = clickedEnt;
      }

      $scope.donate = donate;
      function donate () {
        // if user not signed in
        $scope.signinActive = false;
        // else open donation
        $scope.donationActive = true;

      }
    }
  };
}
