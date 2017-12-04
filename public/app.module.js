(function() {
  angular.module('app', ['ui.router'])
    .component('home', {
      templateUrl: '/home.html',
      controller: 'HomeController'
    })
    .component('about', {
      templateUrl: '/about.html',
      controller: 'AboutController'
    })
}())
