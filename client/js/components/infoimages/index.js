/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    //self.context.logged(true);
    self.images = ko.observableArray();
    //self.usernameError = ko.observable();
    self.id = ko.observable();
  //  self.name=ko.observable();
    self.canonical = ko.observable();
    self.statistics = ko.observable();
    //self.can=ko.observable("http://awt.ifmledit.org/image/d25c778f-12c0-4634-8bc1-591676a4831a");

    self.context.repositories.campaign.infoImages(self.context.repositories.token, self.context.repositories.image).then(function(result){
        self.images(result.images);
        self.id(result.id);
      //  self.name(result.name);
        self.canonical(result.canonical);


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
    self.delete = function(index) {
      alert("Are you sure you want to delete?")
      self.context.repositories.img=self.images()[index].id
      self.context.repositories.campaign.deleteImages(self.context.repositories.token, self.context.repositories.img).then(function(result){})
      self.images.remove(this);
      }
    self.statimg = function(index) {
      //alert("Are you sure you want to delete?")
      self.context.repositories.img=self.images()[index].id
      self.context.repositories.campaign.infoImg(self.context.repositories.token, self.context.repositories.img).then(function(result){
        self.statistics(result.statistics);
        self.context.repositories.imgStatistics=self.statistics()
        alert("this is the"+ self.context.repositories.imgStatistics)
        window.location.href = "/#!/imgstatistics";

      })
      //self.images.remove(this);
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
    ko.components.register('infoimages', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
