angular.module("app")
  .controller("page2Controller", page2Controller)

function page2Controller($http, $stateParams, $state) {
  const vm = this
  const apiUrl = 'localhost:3000/'

  vm.$onInit = function() {
    $http.get('http://localhost:3000/page-2').then(function(response) {
      vm.comments = response.data
    })
  }


}
