'use strict';

describe('githubApp controllers', function() {

  describe('ProfileList controller', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('githubApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.github.com/users').respond([{login:'mojombo' }, {login:'defunkt'}]);
      $httpBackend.expectGET('https://api.github.com/users/mojombo').respond([{login:'mojombo', followers: 19052}]);
      $httpBackend.expectGET('https://api.github.com/users/defunkt').respond([{login:'defunkt', followers: 15203}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProfileListCtrl', {$scope:scope});
    }));

    it('should create "profiles" model with 2 profiles',
    function() {
      expect(scope.profiles).toBeUndefined();
      $httpBackend.flush();

      expect(scope.profiles).toEqual([[{login:'mojombo', followers: 19052}], [{login:'defunkt', followers: 15203}]]);
    });
  });
});
