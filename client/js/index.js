/*jslint node:true */
"use strict";

var ko = require('knockout'),
    components = require('./components'),
    createRepositories = require('./repositories').createRepositories;

components.register();

var repositories = createRepositories();

function App() {
    this.loggedIn=ko.observable();
    this.routes = {
        '/': 'registering',
        '/login': 'login',
        '/fullname': 'full-name',
        '/manager': 'manager',
        '/crud': 'crud-list',
        '/local-sum': 'local-sum',
        '/remote-sum': 'remote-sum',
    };
    this.repositories = repositories;
}

ko.applyBindings(new App());
