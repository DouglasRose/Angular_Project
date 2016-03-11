'use strict';

describe('githubApp controllers', function() {

  describe('ProfileList controller with empty search query', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/search/users?q=').respond({items:[{login:'mojombo' }, {login:'defunkt'}]});
      $httpBackend.expectGET('https://api.github.com/users/mojombo').respond([{login:'mojombo', followers: 19052, avatar_url:'https://avatars.githubusercontent.com/u/1?v=3'}]);
      $httpBackend.expectGET('https://api.github.com/users/defunkt').respond([{login:'defunkt', followers: 15203, avatar_url:'https://avatars.githubusercontent.com/u/2?v=3'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProfileListCtrl', {$scope:scope});
    }));

    it('should create "profiles" model with 2 profiles',
    function() {
      expect(scope.profiles).toBeUndefined();
      scope.searchUser("");
      $httpBackend.flush();

      expect(scope.profiles).toEqual([[{login:'mojombo', followers: 19052, avatar_url:'https://avatars.githubusercontent.com/u/1?v=3'}], [{login:'defunkt', followers: 15203, avatar_url:'https://avatars.githubusercontent.com/u/2?v=3'}]]);

    });
  });



  describe('ProfileList controller with a search query', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/search/users?q=mojombo').respond({items:[{login:'mojombo' }]});
      $httpBackend.expectGET('https://api.github.com/users/mojombo').respond([{login:'mojombo', followers: 19052, avatar_url:'https://avatars.githubusercontent.com/u/1?v=3'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProfileListCtrl', {$scope:scope});
    }));

    it('should have a search method', function() {

      expect(scope.searchUser).toBeDefined();

    });

    it('should return the result of the query', function() {

      scope.searchUser('mojombo');
      $httpBackend.flush();
      expect(scope.profiles).toEqual([[{login:'mojombo', followers: 19052, avatar_url:'https://avatars.githubusercontent.com/u/1?v=3'}]]);
    });
  });
});
