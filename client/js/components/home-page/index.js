/*jslint node:true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    ko.components.register('home-page', {
        template: require('./template.html')
    });
};
