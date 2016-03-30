angular.module('lendingApp')
  .controller('UserController', ['$window', 'editUserService', 'getLoanForDonorService', 'getUserProfileService', UserController]);

function UserController ($window, editUserService, getLoanForDonorService, getUserProfileService) {
  var vm = this;
  // check to see if user is logged in
  if ($window.localStorage.token) {
    // find current user ID
    vm.userInfo = JSON.parse(window.atob($window.localStorage.token.split('.')[1]));
    // get user info from server using ID
    getUserProfileService(vm.userInfo.id, showUser);
    vm.balance = 0;
    vm.totalFunded = 0;
    vm.amountOut = (vm.totalFunded - vm.balance);

  } else {
    $window.location.href('/#/');
  }

  // get loan info using donation info
  function showUser(userData) {
    vm.profile = userData;
    vm.balance = userData.balance;
    // loop through array of donations
    vm.profile.donations.forEach(function(val){
      val.amount = Math.round(val.amount / 3100);
      vm.totalFunded += val.amount;
      // get loan info from loan ID
      getLoanForDonorService(val.loan, vm.userInfo.id, function(loanData){
        val.loan = loanData;
        val.loan.amount = Math.round(val.loan.amount / 3100);
        var payment = Math.round(val.loan.paymentForDonor);
        vm.balance += payment;
        vm.amountOut = vm.totalFunded - vm.balance;
      });
    });
    // vm.totalFunded = (vm.totalFunded / 3100).toFixed();

  }

  vm.sortByTracker = 'group.start_date';
  vm.sort = [true, false, false];
  vm.selectSort = selectSort;

  function selectSort(num) {
    for (var i = 0; i < vm.sort.length; i++) {
      if (i === num) {
        vm.sort[i] = true;
      } else {
        vm.sort[i] = false;
      }
    }
    console.log(vm.sort);
  }



}
