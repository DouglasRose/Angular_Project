'use strict';


githubApp.controller('ProfileListCtrl', function($scope, $http) {
  $http.get('users.json').success(function(data) {

  $scope.profiles = data;
  });
});
