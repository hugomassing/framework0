'use strict';

angular.module('framework0')
  .controller('ContactCtrl', function (Contact) {

    var vm = this;

    angular.extend(vm, {
      sendEmail: function (message) {
        Contact.sendEmail(message).then(function () {
          vm.message = {};
          vm.sent = true;
        });
      }
    });

  });
