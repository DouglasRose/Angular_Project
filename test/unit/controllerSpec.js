'use strict';

describe('githubApp controllers', function() {

  beforeEach(module('githubApp'));

  describe('ProfileList controller', function(){

    it('should create "profiles" model with 3 profiles', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ProfileListCtrl', {$scope:scope});
      expect(scope.profiles.length).toBe(3);
    }));

  });
});