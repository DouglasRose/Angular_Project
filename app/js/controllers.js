'use strict';


githubApp.controller('ProfileListCtrl', function($scope, $http) {
  $http.get('https://api.github.com/users').success(function(data) {


    var arr = []
    for (var i = 0; i < data.length; i++){

      arr.push(data[i].login)
    }

    var arr2 = []
    arr.forEach(function(entry){
      $http.get('https://api.github.com/users/'+entry).success(function(data) {
        arr2.push(data);
    });
     $scope.profiles = arr2;

    });

  });

});
