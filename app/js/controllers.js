'use strict';

var githubControllers = angular.module('githubControllers',[]);

githubControllers.controller('ProfileListCtrl',['$scope', 'Profile', function($scope, Profile) {
  $scope.profiles = Profile.query();
}]);

githubControllers.controller('ProfileDetailCtrl', ['$scope', 'Profile', function($scope, Profile) {
  $scope.profile = Profile.get({login: login}, function(profile) {
      $scope.followers = profile.followers;
  });

}]);
