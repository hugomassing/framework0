'use strict';

angular.module('framework0')
  .service('Admin', function ($http) {
    return {
      getAll: function () {
        return $http.get('/api/users/');
      },
      updateUser: function (user) {
        return $http.put('/api/users/' + user._id, user);
      },
      removeUser: function (user) {
        return $http.delete('/api/users/' + user._id);
      }
    }
  });
