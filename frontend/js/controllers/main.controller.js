angular.module('lendingApp')
  .controller('MainController', ['$document', 'getEntrepreneursService', MainController]);

function MainController ($document, getEntrepreneursService) {
  var vm = this;
  vm.title = 'Miray Development';
  vm.subtitle = 'Micro Loans With Massive Impact';

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
  vm.scrollToAbout = scrollToAbout;
  function scrollToAbout () {
    //Scroll to the exact position
    var duration = 800;
    var someElement = angular.element(document.getElementById('about'));
    $document.scrollToElement(someElement, 0, duration);
  }



}
