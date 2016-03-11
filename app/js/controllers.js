'use strict';

// var githubApp = angular.module('githubApp', []);

githubApp.controller('ProfileListCtrl', function($scope, $http) {


  $scope.searchUser = function(search) {
    $http.get('https://api.github.com/search/users?q='+search).success(function(data) {
      $scope.profiles = data.items;
      console.log("first test")
      console.log($scope.profiles)
    });
  };
  // $scope.searchUser("");








  // $scope.searchUser = function() {
  //   $http.get('https://api.github.com/users/').success(function(data) {
  //     $scope.profiles = data;
  //   });
  // };
  // $scope.searchUser();
  //
  // $scope.test = function() {
  //   return "this is cool!"
});
