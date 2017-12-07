angular.module("app")
  .controller("SubmitController", SubmitController)

function SubmitController($http, $stateParams, $state, $timeout) {
  const vm = this
  vm.submitComment = submitComment

  vm.$onInit = function() {
  }

  function submitComment() {
    if(!vm.comment.name) {
      $http.post('http://localhost:3000', {
        comment: vm.comment.comment
      })
          $state.go('loading')
      } else {
      $http.post('http://localhost:3000', {
        name: vm.comment.name,
        comment: vm.comment.comment
      })
      .then(function(response) {
          $state.go('loading')
      })
    }
  }
}
