(function () {
  'use strict';

  describe('Directive: draggable', function () {
    
    var draggableElement, draggableScope;

    beforeEach(module('connectApp'));
    
    beforeEach(inject(function($rootScope, $compile) {
      draggableScope = $rootScope.$new();

      draggableElement = '<div class="block" draggable>BLOCK</div>';

      draggableElement = $compile(draggableElement)(draggableScope);
      draggableScope.$digest();
    }));

    it('should have position absolute style', function() {
      expect(draggableElement.css('position')).toBe('absolute');
    });

    it('should have top style', function() {
      expect(draggableElement.css('top')).toBeDefined();
    });

    it('should have left style', function() {
      expect(draggableElement.css('left')).toBeDefined();
    });

    it('should have left style', function() {
      expect(draggableElement.attr('draggable')).toBeDefined();
    });

  });
})();