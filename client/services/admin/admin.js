'use strict';

angular.module('framework0')
  .service('Admin', function ($http) {
    return {
      getAll: function () {
        return $http.get('/api/users/');
      }
    }
  });
