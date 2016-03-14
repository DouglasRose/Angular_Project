'use strict';

githubApp.controller('ProfileListCtrl', function($scope, $http) {
  var general_info, users, login_names, specific_info

  $scope.searchUser = function(search) {

    $http.get('https://api.github.com/search/users?q='+search).success(function(data) {

      general_info = [];
      users = [];
      login_names = [];
      specific_info = [];

      general_info.push(data.items);


      for (var i=0; i < general_info[0].length; i++) {
        users.push(general_info[0][i])
      }

      users.forEach(function(entry){
        login_names.push(entry.login)
      });

      login_names.forEach(function(entry){
        $http.get('https://api.github.com/users/'+entry).success(function(data) {
        specific_info.push(data);
        });


      });
      $scope.profiles = specific_info;
    });
  };
});
