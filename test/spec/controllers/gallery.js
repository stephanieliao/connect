(function () {
  'use strict';

  describe('Controller: GalleryCtrl', function () {

    var galleryCtrl,
      galleryScope;

    beforeEach(module('connectApp'));

    beforeEach(inject(function ($injector) {
      galleryScope = $injector.get('$rootScope');
      var $controller = $injector.get('$controller');
      galleryCtrl = function() {
         return $controller('GalleryCtrl', {'$scope' : galleryScope });
       };

    }));

    it('should attach a list of images to the scope', function() {
      galleryCtrl();
      expect(galleryScope.images.length).toBe(5);
    });

    it('should attach first images to the scope', function() {
      var firstImage = { src: 'snowdonia_1.JPG', index: 1 };
      galleryCtrl();
      expect(galleryScope.image).toEqual(firstImage);
    });

    it('should show image with image index', function() {
      var firstImage = { src: 'snowdonia_1.JPG', index: 1 },
          secondImage = { src: 'snowdonia_2.JPG', index: 2 },
          thirdImage = { src: 'snowdonia_3.JPG', index: 3 },
          forthImage = { src: 'snowdonia_4.JPG', index: 4 },
          fifthImage = { src: 'snowdonia_5.JPG', index: 5 };
      galleryCtrl();
      galleryScope.showImage(1);
      expect(galleryScope.image).toEqual(firstImage);
      galleryScope.showImage(2);
      expect(galleryScope.image).toEqual(secondImage);
      galleryScope.showImage(3);
      expect(galleryScope.image).toEqual(thirdImage);
      galleryScope.showImage(4);
      expect(galleryScope.image).toEqual(forthImage);
      galleryScope.showImage(5);
      expect(galleryScope.image).toEqual(fifthImage);
    });

  });
})();