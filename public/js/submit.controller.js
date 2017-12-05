angular.module("app")
  .controller("SubmitController", SubmitController)

function SubmitController($http, $stateParams, $state) {
  const vm = this
  vm.submitComment = submitComment

  vm.$onInit = function() {
  }

  function submitComment() {
    console.log('hellooo');
    if(!vm.comment.name) {
      $http.post('http://localhost:3000', {
        comment: vm.comment.comment
      })
      .then(function(response) {
        $state.go('home')
      })
    } else {
      $http.post('http://localhost:3000', {
        name: vm.comment.name,
        comment: vm.comment.comment
      })
      .then(function(response) {
        $state.go('home')
      })
    }

  }
}
