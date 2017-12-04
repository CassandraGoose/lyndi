(function() {
  angular.module('app', ['ui.router'])
    .component('index', {
      templateUrl: '/index.html',
      contorller: 'IndexController'
    })
    .component('about', {
      templateUrl: '/about.html',
      controller: 'AboutController'
    })
}())
