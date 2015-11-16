(function () {
  'use strict';
  /*jshint latedef: nofunc */

  angular.module('connectApp')
    .controller('GalleryCtrl', GalleryCtrl);
  
  function GalleryCtrl($scope) {
    $scope.images = [
      {
        src: 'snowdonia_1.JPG',
        index: 1
      },
      {
        src: 'snowdonia_2.JPG',
        index: 2
      },
      {
        src: 'snowdonia_3.JPG',
        index: 3
      },
      {
        src: 'snowdonia_4.JPG',
        index: 4
      },
      {
        src: 'snowdonia_5.JPG',
        index: 5
      }
    ];

    $scope.image = $scope.images[0];

    $scope.showImage = function( index ) {
      $scope.image = $scope.images[ index - 1 ];
    };
  }
  
})();