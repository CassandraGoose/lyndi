angular.module("app")
  .controller("SubmitController", SubmitController)

function SubmitController($http, $stateParams, $state, $timeout) {
  const vm = this
  vm.submitComment = submitComment

  vm.$onInit = function() {
  }

  function submitComment() {
    if(!vm.comment.name) {
      $http.post('https://limitless-springs-46707.herokuapp.com/', {
        comment: vm.comment.comment
      })
          $state.go('loading')
      } else {
      $http.post('https://limitless-springs-46707.herokuapp.com/', {
        name: vm.comment.name,
        comment: vm.comment.comment
      })
      .then(function(response) {
          $state.go('loading')
      })
    }
  }
}
