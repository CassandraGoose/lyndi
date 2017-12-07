angular.module("app")
  .controller("page5Controller", page5Controller)

function page5Controller($http, $stateParams, $state) {
  const vm = this
  const apiUrl = 'localhost:3000/'

  vm.$onInit = function() {
    $http.get('http://localhost:3000/page-5').then(function(response) {
      vm.comments = response.data
    })
  }
}
