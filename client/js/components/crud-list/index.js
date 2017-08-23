/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel() {
    var self = this;
    self.firstName = ko.observable('First');
    self.lastName = ko.observable('Last');
    self.users = ko.observableArray();
    self.add = function () {
        self.users.push({
            first: self.firstName(),
            last: self.lastName(),
        });
    };
    self.remove = function () {
        // this is the user not the VM
        self.users.splice(self.users.indexOf(this), 1);
    };
}

exports.register = function () {
    ko.components.register('crud-list', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
