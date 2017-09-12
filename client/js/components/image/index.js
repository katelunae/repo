/*jslint node:true */
"use strict";

var ko = require('knockout');

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.imageName = ko.observable();
    self.imageError = ko.observable();

    self.imageName.subscribe(function () {
        self.imageError(undefined);
    });

    self.uploadImage = function () {
      var error=false;
      var file_input=document.getElementById('imageuploadform_field_0');
        if (file_input.files.length==0){ //check if the file is chosen
          alert("no files chosen");
          return;
          //self.imageError("More than three characters");
        }
        var file=file_input.files[0]

      //  if(!error){
        //  var packet={
          //  "name":self.imageName(),
          //};

          self.context.repositories.campaign.loadImage(self.context.repositories.token, self.context.repositories.image, file).then(function(result){
            self.context.repositories.urlimage = result; //obtain the URL for an specific campaign
            alert("this is the"+ self.context.repositories.urlimage);
            window.location.href = "/#!/infoimages";
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
    ko.components.register('image', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};
