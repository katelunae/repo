/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.selection = ko.observableArray();
    self.accepted = ko.observable();
    self.rejected = ko.observable();
    self.annotation = ko.observableArray();

    self.context.repositories.campaign.infoImgStat(self.context.repositories.token, self.context.repositories.img).then(function(result){


        self.selection(result.selection);
        self.accepted(result.accepted);
        self.rejected(result.rejected);
        self.annotation(result.annotation);


    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);



    //self.fullname.subscribe(function () {
      //  self.fullnameError(undefined);
  //  });
    self.addImage= function () {
      self.context.repositories.campaign.infoImgStat(self.context.repositories.token, self.context.repositories.img).then(function(result){


          self.selection(result.selection);
          self.accepted(result.accepted);
          self.rejected(result.rejected);
          self.annotation(result.annotation);
      alert("this is the "+ self.context.repositories.image);
      });
    };

    self.imageInfo= function () {
      alert("this is the "+ self.context.repositories.image);
      window.location.href = "/#!/infoimages";
    };

    self.editcampaign = function () {
      var error=false;

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
    ko.components.register('imgstatistics', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
