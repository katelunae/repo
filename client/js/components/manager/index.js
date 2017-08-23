/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.context.logged(true);
    self.username = ko.observable();
    //self.usernameError = ko.observable();
    self.fullname = ko.observable();
    self.fullnameError = ko.observable();
    self.password = ko.observable();
    self.passwordError = ko.observable();

    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);

    self.fullname.subscribe(function () {
        self.fullnameError(undefined);
    });
    self.password.subscribe(function () {
        self.passwordError(undefined);
    });

    self.read = function () {


      //esta parte es para poner la barra de tareas después del login
    //  self.logIn=function(){
      //    self.context.logged(true);
      var error=false;

        if (!self.fullname()){
          error=true;
          self.fullnameError("The full name must be different from the previous one");
        }
        if(!error){
          var packet={
            "username":self.username(),
            "password":self.password(),

          };

          

          self.context.repositories.user.readUser().then(function(result){

            alert(result);
            var token = result;

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
    ko.components.register('manager', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
