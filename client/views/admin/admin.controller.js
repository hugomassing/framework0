'use strict';

angular.module('framework0')
  .controller('AdminCtrl', function (Admin, Contact) {

    var vm = this;

    angular.extend(vm, {
      getAllUsers: function() {
        Admin.getAll().then(function (users) {
          vm.users = users.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
      getAllContacts: function() {
        Contact.getAll().then(function (contacts) {
          vm.contacts = contacts.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
      removeUser: function (user) {
        if (!confirm("Are you sure?")) {
          return;
        }
        Admin.removeUser(user).then(function () {
          _.remove(vm.users, user);
        })
      },
      removeContact: function (contact) {
        /*if (!confirm("Are you sure?")) {
          return;
        }*/
        Contact.removeContact(contact).then(function () {
          _.remove(vm.contacts, contact);
        })
      }
    });


    vm.getAllUsers();
    vm.getAllContacts();
  });
