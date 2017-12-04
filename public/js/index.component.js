angular.module("app")
  .controller("IndexController", IndexController)

function IndexController($http, $stateParams, $state) {
  const vm = this
  //base urL?


  vm.$onInit = function() {
    console.log('index controller');
  }

  console.log('index controller');

}
