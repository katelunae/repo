/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel() {
    var self = this;
    self.firstName = ko.observable('First');
    self.lastName = ko.observable('Last');
    self.fullName = ko.computed(function () {
        return self.firstName() + ' ' + self.lastName();
    });
}

exports.register = function () {
    ko.components.register('full-name', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
