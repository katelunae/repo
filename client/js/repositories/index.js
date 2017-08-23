/*jslint node:true */
"use strict";

exports.createRepositories = function (options) {
    return {
        adder: require('./adder').createRepository(options),
        user: require('./user').createRepository(options)
    };
};
