/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.context.logged(true);
    self.context.masterLogged(false);
    self.username = ko.observable();
    //self.usernameError = ko.observable();
    self.fullname = ko.observable();
    self.type=ko.observable();
    self.fullnameError = ko.observable();
    self.password = ko.observable();
    self.passwordError = ko.observable();
    self.context.repositories.user.readUser(self.context.repositories.token).then(function(result){
        self.fullname(result.fullname);
        self.username(result.username);
        self.type(result.type);
        if (self.type()=="master"){
          alert("yes")
          self.context.masterLogged(true);
        }
      //  else{
        //  self.selector2("No")
      //  }
    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);

    self.fullname.subscribe(function () {
        self.fullnameError(undefined);
    });
    self.password.subscribe(function () {
        self.passwordError(undefined);
    });

    self.logout=function(){

      self.context.repositories.user.logOut(self.context.repositories.token).then(function(result){

        alert(self.context.repositories.token + "logout")

        window.location.href = "/#/login";

      });
    }

    self.edit = function () {


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
            "fullname":self.fullname(),
            "password":self.password(),

          };
        //var type= self.type()
        //if(type == master){
          //self.context.master(true);
        //}

          alert(self.context.repositories.token);
          self.context.repositories.user.changeUser(self.context.repositories.token, packet).then(function(result){

            alert("Registered");


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
