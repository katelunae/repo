/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.id = ko.observable();
    self.name=ko.observable();
    self.nameError = ko.observable();
    self.status = ko.observable();
    self.selection = ko.observable();
    self.selectionW = ko.computed(function() {
      return parseInt(self.selection());
    });
    self.selectionError = ko.observable();
    self.threshold = ko.observable();
    self.thresh = ko.computed(function() {
      return parseInt(self.threshold());
    });
    self.thresholdError = ko.observable();
    self.annotation = ko.observable();
    self.annotationW = ko.computed(function() {
      return parseInt(self.annotation());
    });
    self.annotationError = ko.observable();
    self.size = ko.observable();
    self.widthP = ko.computed(function() {
      return parseInt(self.size());
    });
    self.sizeError=ko.observable();
    self.image = ko.observable();
    self.worker = ko.observable();
    self.execution = ko.observable();
    self.statistics = ko.observable();
    self.context.repositories.campaign.infoCampaign(self.context.repositories.token, self.context.repositories.url).then(function(result){


        self.id(result.id);
        self.name(result.name);
        self.status(result.status);
        self.selection(result.selection_replica);
        self.threshold(result.threshold);
        self.annotation(result.annotation_replica);
        self.size(result.annotation_size);
        self.image(result.image);
        self.worker(result.worker);
        self.execution(result.execution);
        self.statistics(result.statistics);
        self.context.repositories.image=self.image()
        self.context.repositories.workers=self.worker()
        self.context.repositories.execution=self.execution()
        self.context.repositories.statistics=self.statistics()
    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);


      self.name.subscribe(function () {
          self.nameError(undefined);
      });
      self.selectionW.subscribe(function () {
          self.selectionError(undefined);
      });
      self.thresh.subscribe(function () {
          self.thresholdError(undefined);
      });
      self.annotationW.subscribe(function () {
          self.annotationError(undefined);
      });
      self.widthP.subscribe(function () {
          self.sizeError(undefined);
      });


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

    self.startCampaign= function () {
      self.context.repositories.campaign.startcampaign(self.context.repositories.token, self.context.repositories.execution).then(function(result){
      alert("The campaign has started"+ self.context.repositories.execution);
    })
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
    ko.components.register('infocampaign', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
