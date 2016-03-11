'use strict';


githubApp.controller('ProfileListCtrl', function($scope, $http) {


  $scope.searchUser = function() {
    $http.get('https://api.github.com/users').success(function(data) {
      $scope.profiles = data;
    });
  };
  // $scope.searchUser();
});
