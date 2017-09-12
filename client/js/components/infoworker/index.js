/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.id = ko.observable();
    self.fullname=ko.observable();
    self.selector = ko.observable();
    self.annotator = ko.observable();
    self.selector2 = ko.observable();
    self.annotator2 = ko.observable();
    self.selection = ko.observable();
    self.annotation = ko.observable();

    self.context.repositories.campaign.infoWorker(self.context.repositories.token, self.context.repositories.worker).then(function(result){


        self.id(result.id);
        self.fullname(result.fullname);
        self.selector(result.selector);
        self.annotator(result.annotator);
        self.selection(result.selection);
        self.annotation(result.annotation);
        if (self.selector()==true){
          self.selector2("Yes")
        }
        else{
          self.selector2("No")
        }
        if (self.annotator()==true){
          self.annotator2("Yes")
        }
        else{
          self.annotator2("No")
        }

        self.context.repositories.workerSelection=self.selection()
        self.context.repositories.workerAnnotation=self.annotation()

    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);





    //self.fullname.subscribe(function () {
      //  self.fullnameError(undefined);
  //  });
    self.enableWorkerSelection = function () {
      self.context.repositories.campaign.enableWorkerSel(self.context.repositories.token, self.context.repositories.workerSelection).then(function(result){
      self.context.repositories.campaign.infoWorker(self.context.repositories.token, self.context.repositories.worker).then(function(result){
        self.selector(result.selector);
        if (self.selector()==true){
          self.selector2("Yes")
        }
        else{
          self.selector2("No")
        }
      })
      alert("enabled for selection "+ self.context.repositories.workerSelection);

      })  //window.location.href = "/#!/image";
    };

    self.disableWorkerSelection = function () {
      self.context.repositories.campaign.disableWorkerSel(self.context.repositories.token, self.context.repositories.workerSelection).then(function(result){
        self.context.repositories.campaign.infoWorker(self.context.repositories.token, self.context.repositories.worker).then(function(result){
          self.selector(result.selector);
          if (self.selector()==true){
            self.selector2("Yes")
          }
          else{
            self.selector2("No")
          }
        })
      alert("disabled for selection "+ self.context.repositories.workerSelection);

      }) //window.location.href = "/#!/image";
    };

    self.enableWorkerAnnotation= function () {
      self.context.repositories.campaign.enableWorkerAnn(self.context.repositories.token, self.context.repositories.workerAnnotation).then(function(result){
        self.context.repositories.campaign.infoWorker(self.context.repositories.token, self.context.repositories.worker).then(function(result){
          self.annotator(result.annotator);
          if (self.annotator()==true){
            self.annotator2("Yes")
          }
          else{
            self.annotator2("No")
          }
        })
      alert("enabled for annotation "+ self.context.repositories.workerAnnotation);

      })//window.location.href = "/#!/image";
    };

    self.disableWorkerAnnotation= function () {
      self.context.repositories.campaign.disableWorkerAnn(self.context.repositories.token, self.context.repositories.workerAnnotation).then(function(result){
        self.context.repositories.campaign.infoWorker(self.context.repositories.token, self.context.repositories.worker).then(function(result){
          self.annotator(result.annotator);
          if (self.annotator()==true){
            self.annotator2("Yes")
          }
          else{
            self.annotator2("No")
          }
        })
      alert("disabled for annotation "+ self.context.repositories.workerAnnotation);

    })  //window.location.href = "/#!/image";
  };



  }



exports.register = function () {
    ko.components.register('infoworker', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
