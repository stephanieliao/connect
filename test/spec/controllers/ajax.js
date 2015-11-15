'use strict';

describe('Controller: AjaxCtrl', function () {

  beforeEach(module('connectApp'));

  var ajaxScope,
      //ajaxHttpBackend,
      ajaxCtrl;
      //authRequestHandler;

  beforeEach(inject(function ($injector) {
    ajaxScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    ajaxCtrl = function() {
       return $controller('AjaxCtrl', {'$scope' : ajaxScope });
     };

  }));

  // afterEach(function() {
  //   ajaxHttpBackend.verifyNoOutstandingExpectation();
  //   ajaxHttpBackend.verifyNoOutstandingRequest();
  // });

  it('should attach a list of colours to the scope', function() {
    var colour_list = ['red', 'blue', 'green', 'white', 'black'];
    ajaxCtrl();
    expect(ajaxScope.lists.length).toBe(5);
    expect(ajaxScope.lists).toEqual(colour_list);
  });

  // it('should submit ajax request and get response', function() {
  //   ajaxHttpBackend.expectGET("https://blooming-brook-1744.herokuapp.com/colours/red/");
  //   var controller = ajaxCtrl();
  //   controller.ajaxSubmit("red");
  //   ajaxHttpBackend.flush();
  // });

});