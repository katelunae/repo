/*jslint node:true, nomen: true */
"use strict";

var $ = require('jquery'), //require is used for node js to load modules
    Promise = require('bluebird');  //promise is used to perform asynchronous computations

function Repository(server) {
    if (!(this instanceof Repository)) {
        return new Repository(server);
    }
    this._server = server || '';
}

Repository.prototype.registerUser = function (packet) { //put properties or methods(registerUser) for an existing class, adding them to the prototype
    var self = this;
    return new Promise(function (resolve, reject) { //immediatly resolve the promise or reject it
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/user',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(packet),
             headers: {
            "Authorization": "APIKey "+"89a5562a-9dc6-4114-9c9d-c0dfbf550fd4"
            },
        }).done(function () {
            resolve("User Registered");
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
  };
    Repository.prototype.loginUser = function (packet) {
        var self = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "http://awt.ifmledit.org" + '/api/auth',
                type: 'POST',
                dataType:"json", //type of the element that the URL returns. because returns smth
                contentType: "application/json", //type of the element we are sending to the server
                data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
                  //javascript value to a JSON string
                 headers: {
                "Authorization": "APIKey "+"89a5562a-9dc6-4114-9c9d-c0dfbf550fd4" //"authorization requested with ..."APIKEY"+...
                },
            }).done(function (token) {
                resolve(token.token);
            }).fail(function (err, textStatus, errorThrown) {
              var error=new Error(err);
                if (err.responseJSON)
                    error.textStatus=JSON.stringify(err.responseJSON.error);
                else if(err.responseText)
                    error.textStatus=err.responseText;
                else if (err.message)
                    error.textStatus=err.message;
                else
                    error.textStatus="Something Went Wrong in the request";
                reject(error);

            });
        });
};

Repository.prototype.readUser = function (token) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/user/me',
            type: 'GET',
            dataType:"json", //type of the element that the URL returns. because returns smth
          //  contentType: "application/json", //type of the element we are sending to the server
          //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function (data) {
            resolve(data);
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};

exports.Repository = Repository;
exports.createRepository = Repository;
