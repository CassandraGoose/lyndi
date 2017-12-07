(function(){
  'use strict';
  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      })
      .state({
        name: 'about',
        url: '/about',
        component: 'about'
      })
      .state({
        name: 'submit',
        url: '/submit',
        component: 'submit'
      })
      .state({
        name: 'page2',
        url: '/page2',
        component: 'page2'
      })
      .state({
        name: 'page3',
        url: '/page3',
        component: 'page3'
      })
      .state({
        name: 'page4',
        url: '/page4',
        component: 'page4'
      })
      .state({
        name: 'page5',
        url: '/page5',
        component: 'page5'
      })
      $urlRouterProvider.otherwise('/')
  }
}())
