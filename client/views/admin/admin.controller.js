'use strict';

angular.module('framework0')
  .controller('AdminCtrl', function (Admin, Contact) {

    var vm = this;

    angular.extend(vm, {
      editedUser: null,
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
      getAllGroups: function() {
        Admin.getAllGroups().then(function (groups) {
          vm.groups = groups.data;
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
        if (!confirm("Are you sure?")) {
          return;
        }
        Contact.removeContact(contact).then(function () {
          _.remove(vm.contacts, contact);
        })
      },
      updateUser: function (user) {
        Admin.updateUser(user).then(function () {
          vm.editedUser = null;
        }).catch(function (err) {
          console.log(err);

        })
      },
      addGroup: function (newGroup) {
        Admin.addGroup(newGroup).then(function (res) {
          console.log(res);
          vm.groups.push(res.data);
          vm.newGroup = "";
        }).catch(function (err) {
          console.log(err);
        })
      },
      removeGroup: function (group) {
        if (!confirm("Are you sure?")) {
          return;
        }
        Admin.removeGroup(group).then(function () {
          _.remove(vm.groups, group);
        }).catch(function (err) {
          console.log(err);
        })
      }
    });


    vm.getAllUsers();
    vm.getAllContacts();
    vm.getAllGroups();
  });
