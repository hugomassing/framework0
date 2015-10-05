'use strict';

angular.module('framework0')
  .service('Contact', function ($http) {
    return {
      getAll: function () {
        return $http.get('/api/contacts');
      },
      removeContact: function (contact) {
        return $http.delete('/api/contacts/' + contact._id);
      },
      sendEmail: function (message) {
         return $http.post('/api/contacts', message);
      }
    };
  });
