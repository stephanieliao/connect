(function () {
  'use strict';

  describe('Controller: AjaxCtrl', function () {

    var ajaxScope,
        ajaxHttpBackend,
        ajaxCtrl;
        //authRequestHandler;

    beforeEach(module('connectApp'));

    beforeEach(inject(function ($injector) {
      ajaxScope = $injector.get('$rootScope');
      var $controller = $injector.get('$controller');
      ajaxCtrl = function() {
         return $controller('AjaxCtrl', {'$scope' : ajaxScope });
      };
      ajaxHttpBackend = $injector.get('$httpBackend');

    }));

    afterEach(function() {
      ajaxHttpBackend.verifyNoOutstandingExpectation();
      ajaxHttpBackend.verifyNoOutstandingRequest();
    });

    it('should attach a list of colours to the scope', function() {
      var colourList = ['red', 'blue', 'green', 'white', 'black'];
      ajaxCtrl();
      expect(ajaxScope.lists.length).toBe(5);
      expect(ajaxScope.lists).toEqual(colourList);
    });

    it('should have a ajaxSubmit() function', function () {
      ajaxCtrl();
      expect(angular.isFunction(ajaxScope.ajaxSubmit)).toBe(true);
    });

    it('should submit ajax request with variable and get response', function() {
      var description = "none";
      ajaxHttpBackend.expectGET('https://blooming-brook-1744.herokuapp.com/colours/red/').respond('Red Colour Description');
      ajaxCtrl();
      ajaxScope.ajaxSubmit('red');
      ajaxHttpBackend.flush();
      expect(ajaxScope.response).toEqual('Red Colour Description');
    });

  });
})();