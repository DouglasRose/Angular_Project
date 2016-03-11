'use strict';

describe('githubApp controllers', function() {

  describe('ProfileList controller', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/users').respond([{login:'mojombo' }, {login:'defunkt'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProfileListCtrl', {$scope:scope});
    }));

    it('should create "profiles" model with 2 profiles',
    function() {
      expect(scope.profiles).toBeUndefined();
      scope.searchUser();
      $httpBackend.flush();

      expect(scope.profiles).toEqual([{login:'mojombo' }, {login:'defunkt'}]);
    });

    it('should have a search method', function() {

      expect(scope.searchUser).toBeDefined();

    })
  });
});
