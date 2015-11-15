(function () {
  'use strict';

  angular.module('connectApp')
    .controller('GalleryCtrl', GalleryCtrl);
  
  function GalleryCtrl($scope) {
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
  }
  
})();