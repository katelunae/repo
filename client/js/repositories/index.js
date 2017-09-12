/*jslint node:true */
"use strict";

exports.createRepositories = function (options) {
    return {
        adder: require('./adder').createRepository(options),
        user: require('./user').createRepository(options),
        campaign: require('./campaign').createRepository(options),
        task: require('./task').createRepository(options)
    };
};
