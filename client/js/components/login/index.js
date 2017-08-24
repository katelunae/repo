/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.username = ko.observable();
    self.usernameError = ko.observable();
    self.password = ko.observable();
    self.passwordError = ko.observable();

    self.username.subscribe(function () {
        self.usernameError(undefined);
    });
    self.password.subscribe(function () {
        self.passwordError(undefined);
    });

    self.logIn = function () {


      //esta parte es para poner la barra de tareas después del login
    //  self.logIn=function(){
      //    self.context.logged(true);
      var error=false;

        if (!self.username()){
          error=true;
          self.usernameError("More than three characters");
        }
        if (!self.password()){
          error=true;
          self.passwordError("More than eight characters");
        }
        if(!error){
          var packet={
            "username":self.username(),
            "password":self.password(),

          };

          self.context.repositories.user.loginUser(packet).then(function(result){
            self.context.logged(true);
            window.location.href = "/#!/manager"
            self.context.repositories.token=result; // save the token to be used everywhere in the application

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
    ko.components.register('login', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
