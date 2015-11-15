(function () {
'use strict';

angular.module('connectApp').directive('draggable', function($document) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      var startX, startY, initialMouseX, initialMouseY;
      element.css({position: 'absolute'});
 
      element.bind('mousedown', function($event) {
        startX = element.prop('offsetLeft');
        startY = element.prop('offsetTop');
        initialMouseX = $event.clientX;
        initialMouseY = $event.clientY;
        $document.bind('mousemove', mousemove);
        $document.bind('mouseup', mouseup);
        return false;
      });
 
      function mousemove($event) {
        var dx = $event.clientX - initialMouseX;
        var dy = $event.clientY - initialMouseY;
        element.css({
          top:  startY + dy + 'px',
          left: startX + dx + 'px'
        });
        return false;
      }
 
      function mouseup() {
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
    }
  };
});
})();