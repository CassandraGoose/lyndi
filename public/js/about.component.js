angular.module("app")
  .controller("AboutController", AboutController)

function AboutController($http, $stateParams, $state) {
  const vm = this
  //base urL?
  console.log('about controller');


  vm.$onInit = function() {

    console.log('about controller');

  }
}
