/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    //self.context.logged(true);
    self.tasks = ko.observableArray();
    //self.usernameError = ko.observable();
    self.id = ko.observable();
    self.type=ko.observable();

    self.context.repositories.task.readTask(self.context.repositories.token).then(function(result){
        self.tasks(result.tasks);
        self.id(result.id);
        self.type(result.type);
      //  var index=self.tasks().length
      //  for (index=0)
        //alert(index)
      //  self.context.repositories.urlTask=self.tasks()[index].id;
//myObservableArray()[0].price
      //  alert('The element is ' + self.context.repositories.urlTask);
        //self.context.repositories.task.taskInfo(self.context.repositories.token, self.context.repositories.urlTask).then(function(result){
          //self.tasks(result.tasks);
          //self.id(result.id);
          //self.type(result.type);
          //self.campaign(result.campaign);

    //    self.status(result.status);
  //      self.context.repositories.url=result.id; //to use the url everywhere in the app
    //});
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);

  //  self.fullname.subscribe(function () {
    //    self.fullnameError(undefined);
    });
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
        self.context.repositories.task.readTask(self.context.repositories.token).then(function(result){
          self.tasks(result.tasks);
          self.id(result.id);
          self.context.repositories.urlTask=self.tasks()[index].id;
  //myObservableArray()[0].price
          alert('The element is ' + self.context.repositories.urlTask);

      //  alert(index);

          //self.removePerson = function() {
            //     self.people.remove(this);
             //}

          window.location.href = "/#!/infotask";

    //      window.location.href = "/#!/infocampaign";
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
    ko.components.register('tasksuser', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
