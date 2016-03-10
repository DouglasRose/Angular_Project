'use strict';


githubApp.controller('ProfileListCtrl', function($scope) {
  $scope.profiles = [
    {'login': 'Iryna Howarth'},
    {'login': 'Douglas Rose'},
    {'login': 'John Doe'}
  ];
});