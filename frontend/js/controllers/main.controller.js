angular.module('lendingApp')
  .controller('MainController', [MainController]);

function MainController () {
  var vm = this;
  vm.title = 'Miray Development';
  vm.subtitle = 'Micro Loans With Massive Impact';
  vm.introParagraph = 'The primary purpose of the app would be as a fundraising tool. It would allow visitors to browse entrepreneurs currently in the pipeline and fund their loans. These loans are held for a maximum of 1 year, and many are paid back within months. So, this app would track repayment progress and allow "investors" to see their loan repaid with interest. Upon repayment the user would have anywhere from 100-130% of their original "investment" to re-invest in another entrepreneur (or multiple).';
}
