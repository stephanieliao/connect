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
  .controller('GallaryCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.images = [
      {
      	src: 'spring.png',
		    index: 1
      },
      {
		    src: 'summer.png',
		    index: 2
      },
      {
		    src: 'autumn.png',
		    index: 3
      },
      {
		    src: 'winter.png',
		    index: 4
      }
    ];

    $scope.image = $scope.images[0];

    $scope.showImage = function( index ) {
      $scope.image = $scope.images[ index - 1 ];
    };

  });
})();