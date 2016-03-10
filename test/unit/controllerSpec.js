'use strict';

describe('githubApp controllers', function() {

  describe('ProfileList controller', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('users.json').respond([{login:'mojombo' }, {login:'defunkt'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProfileListCtrl', {$scope:scope});
    }));

    it('should create "profiles" model with 2 profiles',
    function() {
      expect(scope.profiles).toBeUndefined();
      $httpBackend.flush();

      expect(scope.profiles).toEqual([{login:'mojombo' }, {login:'defunkt'}]);
    });
  });
});
