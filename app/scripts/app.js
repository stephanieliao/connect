'use strict';

/**
 * @ngdoc overview
 * @name connectApp
 * @description
 * # connectApp
 *
 * Main module of the application.
 */
angular.module('connectApp', [
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/one', {
        templateUrl: 'views/draggable.html'
      })
      .when('/two', {
        templateUrl: 'views/ajax.html',
        controller: 'AjaxCtrl'
      })
      .when('/three', {
        templateUrl: 'views/gallary.html',
        controller: 'GallaryCtrl'
      })
      .otherwise({
        redirectTo: '/one'
      });
  });