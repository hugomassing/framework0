'use strict';

angular.module('framework0')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'views/admin/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'vm'
      });
  });
