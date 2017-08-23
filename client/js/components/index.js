/*jslint node:true */
"use strict";

exports.register = function (options) {
    require('./registering').register(options);
    require('./login').register(options);
    require('./manager').register(options);
    require('./home-page').register(options);
    require('./full-name').register(options);
    require('./crud-list').register(options);
    require('./local-sum').register(options);
    require('./remote-sum').register(options);
};
