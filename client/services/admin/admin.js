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
      },
      getAllGroups: function () {
        return $http.get('/api/groups/');
      },
      addGroup: function (newGroupName) {
        return $http.post('/api/groups/', { name: newGroupName });
      },
      updateGroup: function (group) {
        return $http.put('/api/groups/' + group._id, group);
      },
      addUserToGroup: function (group, user) {
        return $http.put('/api/groups/' + group._id, user._id);
      },
      removeGroup: function (group) {
        return $http.delete('/api/groups/' + group._id);
      }
    }
  });
