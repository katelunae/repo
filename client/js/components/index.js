/*jslint node:true */
"use strict";

exports.register = function (options) {
    require('./registering').register(options);
    require('./login').register(options);
    require('./manager').register(options);
    require('./create').register(options);
    require('./campaign').register(options);
    require('./infocampaign').register(options);
    require('./image').register(options);
    require('./infoimages').register(options);
    require('./imgstatistics').register(options);
    require('./workers').register(options);
    require('./infoworker').register(options);
    require('./statistics').register(options);
    require('./tasksuser').register(options);
    require('./infotask').register(options);
    require('./tasksession').register(options);
    require('./home-page').register(options);
    require('./full-name').register(options);
    require('./crud-list').register(options);
    require('./local-sum').register(options);
    require('./remote-sum').register(options);
};
