var githubServices = angular.module('githubServices', ['ngResource']);

githubServices.factory('Profile', ['$resource',
  function($resource){
    return $resource('https://api.github.com/users/:login', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);