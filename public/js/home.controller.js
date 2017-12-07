angular.module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  const apiUrl = 'localhost:3000/'

  vm.$onInit = function() {
    $http.get('http://localhost:3000/').then(function(response) {
      vm.comments = response.data
    })
  }

  
}
