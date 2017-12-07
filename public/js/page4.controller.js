angular.module("app")
  .controller("page4Controller", page4Controller)

function page4Controller($http, $stateParams, $state) {
  const vm = this
  const apiUrl = 'localhost:3000/'

  vm.$onInit = function() {
    $http.get('http://localhost:3000/page-4').then(function(response) {
      vm.comments = response.data
    })
  }


}
