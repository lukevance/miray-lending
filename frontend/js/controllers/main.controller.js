angular.module('lendingApp')
  .controller('MainController', ['getEntrepreneursService', MainController]);

function MainController (getEntrepreneursService) {
  var vm = this;
  vm.title = 'Miray Development';
  vm.subtitle = 'Micro Loans With Massive Impact';
  vm.introParagraph = 'The primary purpose of the app would be as a fundraising tool. It would allow visitors to browse entrepreneurs currently in the pipeline and fund their loans. These loans are held for a maximum of 1 year, and many are paid back within months. So, this app would track repayment progress and allow "investors" to see their loan repaid with interest. Upon repayment the user would have anywhere from 100-130% of their original "investment" to re-invest in another entrepreneur (or multiple).';

  getEntrepreneursService(saveEntrepreneurs);

  function saveEntrepreneurs (allEntrprns) {
    vm.entrepreneurs = allEntrprns.data;
    vm.featuredEnts = shufflePick3(allEntrprns.data);
  }
  // define function to pick 3 random entrepreneurs from main array;
  function shufflePick3(array) {
    var newArray = array;
    var currentIndex = newArray.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }
    var firstThree = [];
    for (var i = 0; i < 3; i++) {
      firstThree.push(array[i]);
    }

    return firstThree;
  }

  // get active loans service
    // .then get entrepreneurs service
      // .then get donations service
        // populate model with entrepreneur json.


}
