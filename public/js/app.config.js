(function(){
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state({
        name: 'about',
        url: '/about',
        component: 'about'
      })
      $urlRouterProvider.otherwise('/')

  }
}())
