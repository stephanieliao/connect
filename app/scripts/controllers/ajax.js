(function () {
  'use strict';

  angular.module('connectApp')
    .controller('AjaxCtrl', AjaxCtrl);

  function AjaxCtrl($scope,$http) {
    $scope.lists = ['red', 'blue', 'green', 'white', 'black'];

    $scope.ajaxSubmit = function(value){ 
      $http({
        url: 'https://blooming-brook-1744.herokuapp.com/colours/' + value + '/'
      }).success(function(data) {
        $scope.response = data;
      }).error(function() {
        $scope.response = 'Opps! Something went wrong.';
      });
    };
  }
})();
