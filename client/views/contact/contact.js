'use strict';

angular.module('framework0')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      });
  });
