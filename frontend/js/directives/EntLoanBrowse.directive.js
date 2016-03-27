angular.module('lendingApp')
  .directive('entBrowse', ['userSigninService', 'newDonationService', entBrowse]);

function entBrowse (userSigninService, newDonationService) {
  return {
    restrict: 'E',
    scope: {
      entrepreneur: '='
    },
    templateUrl: 'partials/entBrowse.html',
    controller: function($scope, $window){
      // remove this line later when donations are connected
      $scope.entrepreneur.amount_raised = 50;
      $scope.selectEnt = selectEnt;
      $scope.signinActive = false;
      $scope.donationActive = false;
      function selectEnt (clickedEnt) {
        console.log(clickedEnt);
        $scope.currEnt = clickedEnt;
      }

      $scope.signinSubmit = signinSubmit;
      function signinSubmit (email, password) {
        var credentials = {
          email: email,
          password: password
        };
        userSigninService(credentials);
      }

      $scope.submitPayment = submitPayment;
      function submitPayment (amount, loanID) {
        if ($window.localStorage.token) {
          var details = {
            amount: amount,
            loan: loanID,
            donor: JSON.parse(window.atob($window.localStorage.token.split('.')[1])).id
          };
          newDonationService(details, function(response){
            console.log(response);
          });
        }
      }

      $scope.donate = donate;
      function donate () {
        // if user signed in
        // add expiration check
        if ($window.localStorage.token) {
          $scope.donationActive = true;
          $scope.signinActive = false;
        } else {
          $scope.donationActive = false;
          $scope.signinActive = true;
        }

        // else open donation

      }
    }
  };
}
