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
      expect(galleryScope.images.length).toBe(4);
    });

    it('should attach first images to the scope', function() {
      var first_image = {
        src: 'spring.png',
        index: 1
      };
      galleryCtrl();
      expect(galleryScope.image).toEqual(first_image);
    });

    it('should show image with image index', function() {
      var first_image = { src: 'spring.png', index: 1},
          second_image ={ src: 'summer.png', index: 2},
          third_image = { src: 'autumn.png', index: 3},
          forth_image = { src: 'winter.png', index: 4};
      galleryCtrl();
      galleryScope.showImage(1);
      expect(galleryScope.image).toEqual(first_image);
      galleryScope.showImage(2);
      expect(galleryScope.image).toEqual(second_image);
      galleryScope.showImage(3);
      expect(galleryScope.image).toEqual(third_image);
      galleryScope.showImage(4);
      expect(galleryScope.image).toEqual(forth_image);
    });

  });
})();