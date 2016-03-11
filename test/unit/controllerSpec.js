'use strict';

describe('githubApp controllers', function() {

  describe('ProfileList controller with empty search query', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/search/users?q=').respond({items:[{login:'mojombo' }, {login:'defunkt'}]});

      scope = $rootScope.$new();
      ctrl = $controller('ProfileListCtrl', {$scope:scope});
    }));

    it('should create "profiles" model with 2 profiles',
    function() {
      expect(scope.profiles).toBeUndefined();
      scope.searchUser("");
      $httpBackend.flush();

      expect(scope.profiles).toEqual([{login:'mojombo' }, {login:'defunkt'}]);
    });
  });



  describe('ProfileList controller with a search query', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/search/users?q=mojombo').respond({items:[{login:'mojombo' }]});

      scope = $rootScope.$new();
      ctrl = $controller('ProfileListCtrl', {$scope:scope});
    }));

    it('should have a search method', function() {

      expect(scope.searchUser).toBeDefined();

    });

    it('should return the result of the query', function() {

      scope.searchUser('mojombo');
      $httpBackend.flush();
      expect(scope.profiles).toEqual([{login:'mojombo' }]);
    });
  });
});
