/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.fullname = ko.observable();
    self.fullnameError = ko.observable();
    self.username = ko.observable();
    self.usernameError = ko.observable();
    self.password = ko.observable();
    self.passwordError = ko.observable();
    self.password2 = ko.observable();
    self.passwordError2 = ko.observable();
    self.typeUser=ko.observable();
    self.typeUserError=ko.observable();

    self.fullname.subscribe(function () {
        self.fullnameError(undefined);
    });
    self.username.subscribe(function () {
        self.usernameError(undefined);
    });
    self.password.subscribe(function () {
        self.passwordError(undefined);
    });
    self.password2.subscribe(function () {
        self.passwordError2(undefined);
    });
    self.typeUser.subscribe(function () {
        self.typeUserError(undefined);
    });
    self.register = function () {
      var error=false;
        if (!self.fullname()){
          error=true;
          self.fullnameError("More than three characters");
        }
        if (!self.username()){
          error=true;
          self.usernameError("More than three characters");
        }
        if (!self.password()){
          error=true;
          self.passwordError("More than eight characters");
        }
        if (self.password()!=self.password2()){
          error=true;
          self.passwordError2("Doesn't match password");
        }
        if(!self.typeUser()){
          error=true;
          self.typeUserError("Select one of the options");
        }
        if(!error){
          var packet={
            "fullname":self.fullname(),
            "username":self.username(),
            "password":self.password(),
            "type":self.typeUser()
          };

          self.context.repositories.user.registerUser(packet).then(function(result){
          //  alert(result);
            window.location.href = "/#!/login"

          }).catch(function(e){
            if(e.textStatus){
              alert(e.textStatus);
            }
            else {
              console.log(e);
            }
          })
        }

    };
}


exports.register = function () {
    ko.components.register('registering', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
