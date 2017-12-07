angular.module("app")
  .controller("page3Controller", page3Controller)

function page3Controller($http, $stateParams, $state) {
  const vm = this
  const apiUrl = 'localhost:3000/'

  vm.$onInit = function() {
    $http.get('http://localhost:3000/page-3').then(function(response) {
      vm.comments = response.data
    })
  }


}
