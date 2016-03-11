'use strict';


githubApp.controller('ProfileListCtrl', function($scope, $http) {
  $http.get('https://api.github.com/users').success(function(data) {


    var arr = []
    for (var i = 0; i < data.length; i++){

      arr.push(data[i].login)
        //console.log(arr)
    }

    var arr2 = []
    arr.forEach(function(entry){
      $http.get('https://api.github.com/users/'+entry).success(function(data) {
        arr2.push(data);
      //console.log(arr2)
    });
     $scope.profiles = arr2;

    });

  });

});
