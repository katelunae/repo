/*jslint node:true */
"use strict";

var ko = require('knockout'),
    components = require('./components'),
    createRepositories = require('./repositories').createRepositories;

components.register();

var repositories = createRepositories();

function App() {
    this.loggedIn=ko.observable();
    this.masterLogged=ko.observable();
    this.routes = {
        '/': 'registering',
        '/login': 'login',
        '/create': 'create',
        '/campaign': 'campaign',
        '/infocampaign': 'infocampaign',
        '/image': 'image',
        '/infoimages': 'infoimages',
        '/imgstatistics': 'imgstatistics',
        '/workers': 'workers',
        '/infoworker': 'infoworker',
        '/statistics': 'statistics',
        '/tasksuser': 'tasksuser',
        '/infotask': 'infotask',
        '/tasksession': 'tasksession',
        '/fullname': 'full-name',
        '/edit': 'manager',
        '/crud': 'crud-list',
        '/local-sum': 'local-sum',
        '/remote-sum': 'remote-sum',
    };
    this.repositories = repositories;
}

ko.applyBindings(new App());
