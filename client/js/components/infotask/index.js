/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.id = ko.observable();
    self.type =ko.observable();
    self.campaign = ko.observable();
    self.session = ko.observable();
    self.statistics = ko.observable();

    self.context.repositories.task.taskInfo(self.context.repositories.token, self.context.repositories.urlTask).then(function(result){

        self.id(result.id);
        self.type(result.type);
        self.campaign(result.campaign);
        self.session(result.session);
        self.statistics(result.statistics);
        self.context.repositories.session=self.session()
        self.context.repositories.statisTask=self.statistics()
        //self.context.repositories.execution=self.execution()
        //self.context.repositories.statistics=self.statistics()
    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);




    //self.fullname.subscribe(function () {
      //  self.fullnameError(undefined);
  //  });
    self.addImage= function () {
      alert("this is the "+ self.context.repositories.image);
      window.location.href = "/#!/image";
    };

    self.imageInfo= function () {
      alert("this is the "+ self.context.repositories.image);
      window.location.href = "/#!/infoimages";
    };

    self.Statistics= function () {
      alert("this is the "+ self.context.repositories.statistics);
      window.location.href = "/#!/statistics";
    };

    self.campaignWorkers= function () {
      alert("this is the "+ self.context.repositories.workers);
      window.location.href = "/#!/workers";
    };

    self.startWorkingSession= function () {
      self.context.repositories.task.startsession(self.context.repositories.token, self.context.repositories.session).then(function(result){
      alert("The session has started "+ self.context.repositories.session);
    })
      window.location.href = "/#!/tasksession";
    };

    self.terminateCampaign= function () {
      self.context.repositories.campaign.terminatecampaign(self.context.repositories.token, self.context.repositories.execution).then(function(result){
      alert("The campaign has started"+ self.context.repositories.execution);
    })
    };

    self.editcampaign = function () {
      var error=false;
        if (!self.name()){
          error=true;
          self.nameError("More than three characters");
        }
        if (typeof self.selectionW() != "number"){
          error=true;
          self.selectionError("Write a number");
        }
        if (typeof self.thresh() != "number"){
          error=true;
          self.thresholdError("Write a number");
        }
        if (typeof self.annotationW() != "number"){
          error=true;
          self.annotationError("Write a number");
        }
        if(typeof self.widthP() != "number"){
          error=true;
          self.sizeError("Write a number");
        }

      //esta parte es para poner la barra de tareas después del login
    //  self.logIn=function(){
      //    self.context.logged(true);
  //    var error=false;

    //    if (!self.fullname()){
      //    error=true;
        //  self.fullnameError("The full name must be different from the previous one");
//        }
        if(!error){
            var packet={
              "name":self.name(),
              "selection_replica":self.selectionW(),
              "threshold":self.thresh(),
              "annotation_replica":self.annotationW(),
              "annotation_size":self.widthP()
            };

          };
        //var type= self.type()
        //if(type == master){
          //self.context.master(true);
        //}

          //alert(self.context.repositories.token);
          self.context.repositories.campaign.editCampaign(self.context.repositories.token, self.context.repositories.url, packet).then(function(result){

            alert("Edited");


          }).catch(function(e){
            if(e.textStatus){
              alert(e.textStatus);
            }
            else {
              console.log(e);
            }
          })
        }

    //};
}


exports.register = function () {
    ko.components.register('infotask', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
