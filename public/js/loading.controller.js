angular.module("app")
  .controller("LoadingController", LoadingController)

function LoadingController($http, $stateParams, $state, $timeout) {
  const vm = this

  vm.$onInit = function() {
    $timeout( function(){
      $state.go('home')
    }, 8000 );
    }
  }
