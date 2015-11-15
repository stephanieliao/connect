(function () {
'use strict';

/**
 * @ngdoc function
 * @name clickAndDragApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clickAndDragApp
 */
angular.module('connectApp')
  .controller('AjaxCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.lists = ['red', 'blue', 'green', 'white', 'black'];

    $scope.ajaxSubmit = function(value){ 
      $http({
        url: 'https://blooming-brook-1744.herokuapp.com/colours/' + value + '/'
      }).success(function(data) {
        $scope.response = data;
      }).error(function(error) {
  	    $scope.response = 'Opps! Something went wrong.';
      });
    };
  });
})();