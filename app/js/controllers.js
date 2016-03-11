'use strict';

githubApp.controller('ProfileListCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.query = 'iryna';

  $http(
    {
      method : "GET",
      url : "https://api.github.com/search/users",
      params: {
        q: $scope.query,
        order: 'acs',
        client_id: '',
        client_secret: ''
      }
    }
  ).then(
    function(results) {
      $scope.profiles = results.data.items;
      $scope.profiles_found = results.data.total_count;
      console.log($scope.profiles);
      $scope.profiles.forEach(function(obj, index){
         $scope.searchUserDetails(obj, obj.login);
      });

    }
  );

  $scope.searchUserDetails = function(user,query){
    $http(
      {
        method : "GET",
        url : "https://api.github.com/users/"+query,
        params: {
          client_id: '',
          client_secret: ''
        }
      }
    ).then(
      function(userDetails){
        user.followers = userDetails.data.followers;
        user.public_repos = userDetails.data.public_repos;
      }
    );
  };

}]);

