angular.module("app")
  .controller("SubmitController", SubmitController)

function SubmitController($http, $stateParams, $state) {
  const vm = this


  vm.$onInit = function() {

    console.log('submitcontroller');

  }
}
