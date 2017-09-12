/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    //self.context.logged(true);
    self.campaigns = ko.observableArray();
    //self.usernameError = ko.observable();
    self.id = ko.observable();
    self.name=ko.observable();
    self.status = ko.observable();

    self.context.repositories.campaign.readCampaign(self.context.repositories.token).then(function(result){
        self.campaigns(result.campaigns);
        self.id(result.id);
        self.name(result.name);
        self.status(result.status);
  //      self.context.repositories.url=result.id; //to use the url everywhere in the app
    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);

  //  self.fullname.subscribe(function () {
    //    self.fullnameError(undefined);
    //});
    //self.password.subscribe(function () {
      //  self.passwordError(undefined);
    //});
    self.removePerson = function() {
           self.campaigns.remove(this);
       }

    self.info = function (index) {


      //esta parte es para poner la barra de tareas después del login
    //  self.logIn=function(){
      //    self.context.logged(true);
      //var error=false;

        //if (!self.fullname()){
          //error=true;
          //self.fullnameError("The full name must be different from the previous one");
        //}
        //if(!error){
          //var packet={
            //"fullname":self.fullname(),
            //"password":self.password(),

          //};
        //var type= self.type()
        //if(type == master){
          //self.context.master(true);
        //}
        self.context.repositories.campaign.readCampaign(self.context.repositories.token).then(function(result){
          self.campaigns(result.campaigns);
          self.id(result.id);
          self.name(result.name);
          self.status(result.status);
          self.context.repositories.url=self.campaigns()[index].id;
//myObservableArray()[0].price
          alert('The element is ' + self.context.repositories.url);

      //  alert(index);

          //self.removePerson = function() {
            //     self.people.remove(this);
             //}

          window.location.href = "/#!/infocampaign";
          //self.context.repositories.campaign.infoCampaign(self.context.repositories.token, self.context.repositories.url).then(function(result){

            //alert(self.campaigns(result.campaigns));


          }).catch(function(e){
            if(e.textStatus){
              alert(e.textStatus);
            }
            else {
              console.log(e);
            }
          })
        }

}


exports.register = function () {
    ko.components.register('campaign', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
