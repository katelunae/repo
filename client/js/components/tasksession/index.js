/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    //self.context.logged(true);
    //self.type = ko.observableArray();
    //self.usernameError = ko.observable();
    self.type = ko.observable();
  //  self.name=ko.observable();
    self.image = ko.observable();
  //  self.size = ko.observable();


    self.context.repositories.task.sessiontask(self.context.repositories.token, self.context.repositories.session).then(function(result){

        self.type(result.type);
      //  if(self.type()=="annotation"){
        //  self.size(result.size);
          //alert(self.size())
      //  }
        self.image(result.image);

        alert(self.image())
        alert('http://awt.ifmledit.org'+ self.image())

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
    self.accept = function() {

      var packet={
        "accepted":"true"
      };
      alert(packet)

      self.context.repositories.task.acceptImg(self.context.repositories.token, self.context.repositories.session, packet).then(function(result){
        alert("this" + packet)
      })
      alert("this" + packet)
    //  self.context.repositories.task.sessiontask(self.context.repositories.token, self.context.repositories.session).then(function(result){

      //    self.type(result.type);
        //  if(self.type()=="annotation"){
          //  self.size(result.size);
            //alert(self.size())
        //  }
      //    self.image(result.image);


      //    alert('http://awt.ifmledit.org'+ self.image())
    //})
  }

      self.reject = function() {
        var packet={
          "accepted":"false"
        }
        self.context.repositories.task.acceptImg(self.context.repositories.token, self.context.repositories.session, packet).then(function(result){
          alert(packet)
        })
        self.context.repositories.task.sessiontask(self.context.repositories.token, self.context.repositories.session).then(function(result){

            self.type(result.type);
            if(self.type()=="annotation"){
              self.size(result.size);
              alert(self.size())
            }
            self.image(result.image);


            alert('http://awt.ifmledit.org'+ self.image())

      })
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
          self.images(result.images);
          self.id(result.id);
          //self.name(result.name);
          self.canonical(result.canonical);
      //    self.context.repositories.url=self.campaigns()[index].id;
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
    ko.components.register('tasksession', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
