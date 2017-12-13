angular.module("app")
  .controller("page5Controller", page5Controller)

function page5Controller($http, $stateParams, $state) {
  const vm = this
  const apiUrl = 'localhost:3000/'

  vm.$onInit = function() {
    $http.get('https://limitless-springs-46707.herokuapp.com/page-5').then(function(response) {
      vm.comments = response.data
    })
  }
}
