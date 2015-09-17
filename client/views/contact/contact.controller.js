'use strict';

angular.module('framework0')
  .controller('ContactCtrl', function (Contact) {

    var vm = this;

    angular.extend(vm, {
      name: 'ContactCtrl',
      sendEmail: function (message) {
        Contact.sendEmail(message);
      }
    });

  });
