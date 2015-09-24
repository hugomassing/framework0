'use strict';

angular.module('framework0')
  .controller('AdminCtrl', function (Admin) {

    var vm = this;

    angular.extend(vm, {
      getAll: function() {
        Admin.getAll().then(function (users) {
          vm.users = users.data;
          console.log("ok");
        }).catch(function (err) {
          console.log(err);
        })
      }
    });

    vm.getAll();
  });
