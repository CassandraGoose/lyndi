angular.module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  //base urL?
  console.log('home controller');


  vm.$onInit = function() {

    console.log('homecontroller');

  }
}
