'use strict';

angular.module('framework0')
  .service('Admin', function ($http) {
    return {
      getAll: function () {
        return $http.get('/api/users/');
      },
      removeUser: function (user) {
        return $http.delete('/api/users/' + user._id);
      }
    }
  });
