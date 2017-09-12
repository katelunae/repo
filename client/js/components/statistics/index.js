/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.images = ko.observable();
    self.accepted=ko.observable();
    self.rejected = ko.observable();
    self.annotation = ko.observable();

    self.context.repositories.campaign.campaignStatistics(self.context.repositories.token, self.context.repositories.statistics).then(function(result){


        self.images(result.images);
        self.accepted(result.accepted);
        self.rejected(result.rejected);
        self.annotation(result.annotation);



    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);





    //self.fullname.subscribe(function () {
      //  self.fullnameError(undefined);
  //  });



  }



exports.register = function () {
    ko.components.register('statistics', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
