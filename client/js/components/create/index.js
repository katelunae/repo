/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.campaignName = ko.observable();
    self.nameError = ko.observable();
    self.selectionWorkers = ko.observable();
    self.selectionW = ko.computed(function() {
      return parseInt(self.selectionWorkers());
    });
    self.selectionWorkersError = ko.observable();
    self.threshold = ko.observable();
    self.thresh = ko.computed(function() {
      return parseInt(self.threshold());
    });
    self.thresholdError = ko.observable();
    self.annotationWorkers = ko.observable();
    self.annotationW = ko.computed(function() {
      return parseInt(self.annotationWorkers());
    });
    self.annotationWorkersError = ko.observable();
    self.widthPixel=ko.observable();
    self.widthP = ko.computed(function() {
      return parseInt(self.widthPixel());
    });
    self.widthError=ko.observable();
    //esta parte es para poner la barra de tareas después del login
  //  self.logIn=function(){
    //    self.context.logged(true);
  //  };
    self.campaignName.subscribe(function () {
        self.nameError(undefined);
    });
    self.selectionW.subscribe(function () {
        self.selectionWorkersError(undefined);
    });
    self.thresh.subscribe(function () {
        self.thresholdError(undefined);
    });
    self.annotationW.subscribe(function () {
        self.annotationWorkersError(undefined);
    });
    self.widthP.subscribe(function () {
        self.widthError(undefined);
    });
    self.create = function () {
      var error=false;
        if (!self.campaignName()){
          error=true;
          self.nameError("More than three characters");
        }
        if (typeof self.selectionW() != "number"){
          error=true;
          self.selectionWorkersError("Write a number");
        }
        if (typeof self.thresh() != "number"){
          error=true;
          self.thresholdError("Write a number");
        }
        if (typeof self.annotationW() != "number"){
          error=true;
          self.annotationWorkersError("Write a number");
        }
        if(typeof self.widthP() != "number"){
          error=true;
          self.widthError("Write a number" + typeof self.selectionW());
        }
        if(!error){
          var packet={
            "name":self.campaignName(),
            "selection_replica":self.selectionW(),
            "threshold":self.thresh(),
            "annotation_replica":self.annotationW(),
            "annotation_size":self.widthP()
          };

          self.context.repositories.campaign.createCampaign(self.context.repositories.token, packet).then(function(result){
            self.context.repositories.urlcampaign = result; //obtain the URL for an specific campaign
            alert("this is the"+ self.context.repositories.urlcampaign);
            window.location.href = "/#!/campaign";
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
    ko.components.register('create', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
