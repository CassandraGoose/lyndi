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
    .component('submit', {
      templateUrl: '/submit.html',
      controller: 'SubmitController'
    })
    .component('page2', {
      templateUrl: '/page2.html',
      controller: 'page2Controller'
    })
    .component('page3', {
      templateUrl: '/page3.html',
      controller: 'page3Controller'
    })
    .component('page4', {
      templateUrl: '/page4.html',
      controller: 'page4Controller'
    })
    .component('page5', {
      templateUrl: '/page5.html',
      controller: 'page5Controller'
    })
}())
