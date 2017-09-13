(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    //self.context.logged(true);
    self.campaigns = ko.observableArray();
    //self.usernameError = ko.observable();
    self.id = ko.observable();
    self.name=ko.observable();
    self.status = ko.observable();

    self.context.repositories.campaign.readCampaign(self.context.repositories.token).then(function(result){
        self.campaigns(result.campaigns);
        self.id(result.id);
        self.name(result.name);
        self.status(result.status);
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
        self.context.repositories.campaign.readCampaign(self.context.repositories.token).then(function(result){
          self.campaigns(result.campaigns);
          self.id(result.id);
          self.name(result.name);
          self.status(result.status);
          self.context.repositories.url=self.campaigns()[index].id;
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
    ko.components.register('campaign', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":2}],2:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Your campaigns</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can find your campaigns.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n            <table>\r\n              <thead><tr>\r\n                <th colspan=\"1\"> Id      </th><th colspan=\"1\">   Name of the Campaign   </th><th colspan=\"1\">  Status  </th><th></th>\r\n              </tr></thead>\r\n              <!-- Todo: Generate table body -->\r\n              <tbody data-bind= \"foreach: campaigns\">\r\n                <tr>\r\n                  <td><span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: name\" type='text' id=\"name\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: status\" type='text' id=\"status\" readonly=\"true\"></span></td>\r\n                  <td><a href=\"#\" data-bind=\"click: $parent.info.bind($data, $index())\">Campaign Information</a></td>\r\n                </tr>\r\n             </tbody>\r\n           </table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <button data-bind='click: info' type=\"button\" id=\"info\" class=\"btn btn-primary btn-lg btn-block login-button\">Check</button>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],3:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":4}],4:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Create your campaigns</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>campaign</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can create new campaigns.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n            <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"campaignName\" class=\"cols-sm-2 control-label\">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:nameError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: campaignName' class=\"form-control\" type=\"text\" id=\"campaignName\"  placeholder=\"Enter the name of the campaign\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"selectionWorkers\" class=\"cols-sm-2 control-label\">Number of workers for Image Selection</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:selectionWorkersError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: selectionWorkers'type=\"text\" class=\"form-control\"  id=\"selectionWorkers\"  placeholder=\"Enter the number of workers\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"threshold\" class=\"cols-sm-2 control-label\">Threshold for an image before annotation</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:thresholdError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind ='textinput: threshold'type=\"text\" class=\"form-control\" id=\"threshold\"  placeholder=\"Enter the threshold\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"annotationWorkers\" class=\"cols-sm-2 control-label\">Number of workers for image annotation</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:annotationWorkersError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: annotationWorkers' type=\"text\" class=\"form-control\" id=\"annotationWorkers\"  placeholder=\"Enter the number of workers\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"widthPixel\" class=\"cols-sm-2 control-label\">Width of the annotation line</label>\r\n               <div class=\"cols-sm-50\">\r\n                 <p style=\"color:red\" data-bind=\"text:widthError\"></p>\r\n                 <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user-plus \" aria-hidden=\"true\"></i></span>\r\n                  <input data-bind='textinput: widthPixel' type=\"text\" class=\"form-control\" id=\"widthPixel\"  placeholder=\"Enter the number of pixels\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: create' type=\"button\" id=\"create\" class=\"btn btn-primary btn-lg btn-block login-button\">Create Campaign</button>\r\n\r\n            <!--  <a class=\"navbar-brand\" href=\"#\">Ko Example</a> -->\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],5:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel() {
    var self = this;
    self.firstName = ko.observable('First');
    self.lastName = ko.observable('Last');
    self.users = ko.observableArray();
    self.add = function () {
        self.users.push({
            first: self.firstName(),
            last: self.lastName(),
        });
    };
    self.remove = function () {
        // this is the user not the VM
        self.users.splice(self.users.indexOf(this), 1);
    };
}

exports.register = function () {
    ko.components.register('crud-list', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":6}],6:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First Name</label>\r\n        <input data-bind='textinput: firstName' type='text' id=\"firstName\" class=\"form-control\" placeholder=\"First Name\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last Name</label>\r\n        <input data-bind='textinput: lastName' type='text' id=\"lastName\" class=\"form-control\" placeholder=\"Last Name\">\r\n    </div>\r\n\r\n    <button data-bind=\"click: add\" type=\"button\" class=\"btn btn-default\" aria-label=\"Add\">\r\n        Add\r\n    </button>\r\n\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Actions</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody data-bind=\"foreach: users\">\r\n            <tr>\r\n                <td data-bind=\"text: $data['first']\"></td>\r\n                <td data-bind=\"text: last\"></td>\r\n                <td>\r\n                    <button data-bind=\"click: $parent.remove\" type=\"button\" class=\"btn btn-default\" aria-label=\"Remove\">\r\n                        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n";

},{}],7:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel() {
    var self = this;
    self.firstName = ko.observable('First');
    self.lastName = ko.observable('Last');
    self.fullName = ko.computed(function () {
        return self.firstName() + ' ' + self.lastName();
    });
}

exports.register = function () {
    ko.components.register('full-name', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":8}],8:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First Name</label>\r\n        <input data-bind='textinput: firstName' type='text' id=\"firstName\" class=\"form-control\" placeholder=\"First Name\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last Name</label>\r\n        <input data-bind='textinput: lastName' type='text' id=\"lastName\" class=\"form-control\" placeholder=\"Last Name\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"fullName\">Full Name</label>\r\n        <input data-bind='textinput: fullName' type='text' id=\"fullName\" class=\"form-control\" readonly=\"true\">\r\n    </div>\r\n</div>\r\n";

},{}],9:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

exports.register = function () {
    ko.components.register('home-page', {
        template: require('./template.html')
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":10}],10:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>KO-Example</h1>\r\n    Here is a set of Knockout.js examples\r\n</div>\r\n";

},{}],11:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":12}],12:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Create your campaigns</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>campaign</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can create new campaigns.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n            <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"imageName\" class=\"cols-sm-2 control-label\">Image Name</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:imageError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<!--<input data-bind='textinput: imageName' class=\"form-control\" type=\"text\" id=\"imageName\"  placeholder=\"Enter the name of the campaign\" />\r\n-->\r\n                  <input type=\"file\" accept=\"jpeg\" id=\"imageuploadform_field_0\"/>\r\n                </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: uploadImage' type=\"button\" id=\"uploadImage\" class=\"btn btn-primary btn-lg btn-block login-button\">Upload Image</button>\r\n\r\n            <!--  <a class=\"navbar-brand\" href=\"#\">Ko Example</a> -->\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],13:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":14}],14:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t     <div><h5>Here you can see the information of the selected campaign. You can also modify the parameters you need and click edit.</h5></div>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"id\" class=\"cols-sm-2 control-label\">Selection: </label> <span data-bind = \"text: selection\" type='text' id=\"selection\" readonly=\"true\"></span>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">Accepted: </label> <span data-bind = \"text: accepted\" type='text' id=\"accepted\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"status\" class=\"cols-sm-2 control-label\">Rejected: </label> <span data-bind = \"text: rejected\" type='text' id=\"rejected\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"selection\" class=\"cols-sm-2 control-label\">Annotation: </label> <span data-bind = \"text: annotation\" type='text' id=\"annotation\" readonly=\"true\"></span>\r\n            </div>\r\n          \r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: editcampaign' type=\"button\" id=\"editcampaign\" class=\"btn btn-primary btn-lg btn-block read-button\">Edit</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: addImage' type=\"button\" id=\"addImage\" class=\"btn btn-primary btn-lg btn-block read-button\">Add images</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: imageInfo' type=\"button\" id=\"imageInfo\" class=\"btn btn-primary btn-lg btn-block read-button\">Images information</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],15:[function(require,module,exports){
/*jslint node:true */
"use strict";

exports.register = function (options) {
    require('./registering').register(options);
    require('./login').register(options);
    require('./manager').register(options);
    require('./create').register(options);
    require('./campaign').register(options);
    require('./infocampaign').register(options);
    require('./image').register(options);
    require('./infoimages').register(options);
    require('./imgstatistics').register(options);
    require('./workers').register(options);
    require('./infoworker').register(options);
    require('./statistics').register(options);
    require('./tasksuser').register(options);
    require('./infotask').register(options);
    require('./tasksession').register(options);
    require('./home-page').register(options);
    require('./full-name').register(options);
    require('./crud-list').register(options);
    require('./local-sum').register(options);
    require('./remote-sum').register(options);
};

},{"./campaign":1,"./create":3,"./crud-list":5,"./full-name":7,"./home-page":9,"./image":11,"./imgstatistics":13,"./infocampaign":16,"./infoimages":18,"./infotask":20,"./infoworker":22,"./local-sum":24,"./login":26,"./manager":28,"./registering":30,"./remote-sum":32,"./statistics":34,"./tasksession":36,"./tasksuser":38,"./workers":40}],16:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":17}],17:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t     <div><h5>Here you can see the information of the selected campaign. You can also modify the parameters you need and click edit.</h5></div>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"id\" class=\"cols-sm-2 control-label\">ID: </label> <span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">Name: </label> <span data-bind = \"text: name\" type='text' id=\"name\" readonly=\"true\"></span>\r\n              <input data-bind='textinput: name' class=\"form-control\" type=\"text\" id=\"campaignName\"  placeholder=\"Enter the name of the campaign\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"status\" class=\"cols-sm-2 control-label\">Status: </label> <span data-bind = \"text: status\" type='text' id=\"status\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"selection\" class=\"cols-sm-2 control-label\">Selection Workers: </label> <span data-bind = \"text: selection\" type='text' id=\"selection\" readonly=\"true\"></span>\r\n              <input data-bind='textinput: selection'type=\"text\" class=\"form-control\"  id=\"selectionWorkers\"  placeholder=\"Enter the number of workers\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"threshold\" class=\"cols-sm-2 control-label\">Threshold before annotation: </label> <span data-bind = \"text: threshold\" type='text' id=\"threshold\" readonly=\"true\"></span>\r\n              <input data-bind ='textinput: threshold'type=\"text\" class=\"form-control\" id=\"threshold\"  placeholder=\"Enter the threshold\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"annotation\" class=\"cols-sm-2 control-label\">Annotation Workers: </label> <span data-bind = \"text: annotation\" type='text' id=\"annotation\" readonly=\"true\"></span>\r\n              <input data-bind='textinput: annotation' type=\"text\" class=\"form-control\" id=\"annotationWorkers\"  placeholder=\"Enter the number of workers\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"size\" class=\"cols-sm-2 control-label\">Width of pixels for annotation: </label> <span data-bind = \"text: size\" type='text' id=\"size\" readonly=\"true\"></span>\r\n              <input data-bind='textinput: size' type=\"text\" class=\"form-control\" id=\"widthPixel\"  placeholder=\"Enter the number of pixels\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"image\" class=\"cols-sm-2 control-label\">Images: </label> <span data-bind = \"text: image\" type='text' id=\"image\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"worker\" class=\"cols-sm-2 control-label\">Workers: </label> <span data-bind = \"text: worker\" type='text' id=\"worker\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"execution\" class=\"cols-sm-2 control-label\">Execution URL: </label> <span data-bind = \"text: execution\" type='text' id=\"execution\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"statistics\" class=\"cols-sm-2 control-label\">Statistics: </label> <span data-bind = \"text: statistics\" type='text' id=\"statistics\" readonly=\"true\"></span>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: editcampaign' type=\"button\" id=\"editcampaign\" class=\"btn btn-primary btn-lg btn-block read-button\">Edit</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: addImage' type=\"button\" id=\"addImage\" class=\"btn btn-primary btn-lg btn-block read-button\">Add images</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: imageInfo' type=\"button\" id=\"imageInfo\" class=\"btn btn-primary btn-lg btn-block read-button\">Images information</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: campaignWorkers' type=\"button\" id=\"campaignWorkers\" class=\"btn btn-primary btn-lg btn-block read-button\">Campaign Workers</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: startCampaign' type=\"button\" id=\"startCampaign\" class=\"btn btn-primary btn-lg btn-block read-button\">Start Campaign</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: terminateCampaign' type=\"button\" id=\"terminateCampaign\" class=\"btn btn-primary btn-lg btn-block read-button\">Terminate Campaign</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: Statistics' type=\"button\" id=\"Statistics\" class=\"btn btn-primary btn-lg btn-block read-button\">Statistics</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],18:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":19}],19:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Information of the images</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can find your campaigns.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n            <table>\r\n              <thead><tr>\r\n                <th colspan=\"1\"> Id      </th><th colspan=\"1\">   Name of the Campaign   </th><th colspan=\"1\">  Status  </th><th></th>\r\n              </tr></thead>\r\n              <!-- Todo: Generate table body -->\r\n              <tbody data-bind= \"foreach: images\">\r\n                <tr>\r\n                  <td><span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span></td>\r\n              <!--    <td><span data-bind = \"text: canonical\" type='text' id=\"name\" readonly=\"true\"></span></td> -->\r\n                  <td><span data-bind = \"text: canonical\" type='text' id=\"canonical\" readonly=\"true\"></span></td>\r\n                  <td><a href=\"#\" data-bind=\"click: $parent.info.bind($data, $index())\">Image Information</a></td>\r\n                </tr>\r\n             </tbody>\r\n           </table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div data-bind= \"foreach: images\">\r\n\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\">\r\n            <a href=\"#\" data-bind=\"click: $parent.delete.bind($data, $index())\"type=\"button\">x</a>\r\n            <a href=\"#\" data-bind=\"click: $parent.statimg.bind($data, $index()) \"type=\"button\">Statistics</a>\r\n            <a title=\"Image 1\" href=\"#\" >\r\n              <img data-bind=\"attr:{src: 'http://awt.ifmledit.org'+ canonical}\" class=\"thumbnail img-responsive\">\r\n            </a>\r\n          </div>\r\n      <!--    <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 2\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/2255EE\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 3\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/449955/FFF\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 4\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/992233\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 5\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/2255EE\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 6\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/449955/FFF\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 8\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/777\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 9\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/992233\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 10\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/EEE\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 11\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/449955/FFF\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 12\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/DDD\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 13\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/992233\"></a></div> -->\r\n        </div>\r\n        <hr>\r\n\r\n        <hr>\r\n      </div>\r\n    </div>\r\n    <div tabindex=\"-1\" class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n    \t\t<button class=\"close\" type=\"button\" data-dismiss=\"modal\">×</button>\r\n    \t\t<h3 class=\"modal-title\">Heading</h3>\r\n    \t</div>\r\n    \t<div class=\"modal-body\">\r\n\r\n    \t</div>\r\n    \t<div class=\"modal-footer\">\r\n    \t\t<button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n    \t</div>\r\n       </div>\r\n      </div>\r\n    </div>\r\n    <button data-bind='click: info' type=\"button\" id=\"info\" class=\"btn btn-primary btn-lg btn-block login-button\">Check</button>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],20:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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
      window.location.href = "/#!/tasksession";
    }).catch(function(e){
      if(e.textStatus==404 || e.textStatus==410)
        alert("No Work Available");
      else
        alert(e.textStatus);
        
    });
      
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":21}],21:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t     <div><h5>Here you can see the information of the selected campaign. You can also modify the parameters you need and click edit.</h5></div>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"id\" class=\"cols-sm-2 control-label\">ID: </label> <span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"type\" class=\"cols-sm-2 control-label\">Type: </label> <span data-bind = \"text: type\" type='text' id=\"type\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"campaign\" class=\"cols-sm-2 control-label\">Campaign: </label> <span data-bind = \"text: campaign\" type='text' id=\"campaign\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"session\" class=\"cols-sm-2 control-label\">Session: </label> <span data-bind = \"text: session\" type='text' id=\"session\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"statistics\" class=\"cols-sm-2 control-label\">Statistics: </label> <span data-bind = \"text: statistics\" type='text' id=\"statistics\" readonly=\"true\"></span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group \">\r\n              <button data-bind='click: startWorkingSession' type=\"button\" id=\"startWorkingSession\" class=\"btn btn-primary btn-lg btn-block read-button\">Start Working Session</button>\r\n            </div>\r\n\r\n\t\t\t\t<!--\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: editcampaign' type=\"button\" id=\"editcampaign\" class=\"btn btn-primary btn-lg btn-block read-button\">Edit</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: addImage' type=\"button\" id=\"addImage\" class=\"btn btn-primary btn-lg btn-block read-button\">Add images</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: imageInfo' type=\"button\" id=\"imageInfo\" class=\"btn btn-primary btn-lg btn-block read-button\">Images information</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: campaignWorkers' type=\"button\" id=\"campaignWorkers\" class=\"btn btn-primary btn-lg btn-block read-button\">Campaign Workers</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: startWorkingSession' type=\"button\" id=\"startWorkingSession\" class=\"btn btn-primary btn-lg btn-block read-button\">Start Working Session</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: terminateCampaign' type=\"button\" id=\"terminateCampaign\" class=\"btn btn-primary btn-lg btn-block read-button\">Terminate Campaign</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: Statistics' type=\"button\" id=\"Statistics\" class=\"btn btn-primary btn-lg btn-block read-button\">Statistics</button>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],22:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":23}],23:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t     <div><h5>Here you can see the information of the selected campaign. You can also modify the parameters you need and click edit.</h5></div>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"id\" class=\"cols-sm-2 control-label\">ID: </label> <span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group\">\r\n              <label for=\"fullname\" class=\"cols-sm-2 control-label\">Full Name: </label> <span data-bind = \"text: fullname\" type='text' id=\"fullname\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"selector\" class=\"cols-sm-2 control-label\">Selector: </label> <span data-bind = \"text: selector2\" type='text' id=\"selector\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"annotator\" class=\"cols-sm-2 control-label\">Annotator: </label> <span data-bind = \"text: annotator2\" type='text' id=\"annotator\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"selection\" class=\"cols-sm-2 control-label\">Selection: </label> <span data-bind = \"text: selection\" type='text' id=\"selection\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"annotation\" class=\"cols-sm-2 control-label\">Annotation: </label> <span data-bind = \"text: annotation\" type='text' id=\"annotation\" readonly=\"true\"></span>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: enableWorkerSelection' type=\"button\" id=\"enableWorkerSelection\" class=\"btn btn-primary btn-lg btn-block read-button\">Enable for Selection</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: disableWorkerSelection' type=\"button\" id=\"disableWorkerSelection\" class=\"btn btn-primary btn-lg btn-block read-button\">Disable for selection</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: enableWorkerAnnotation' type=\"button\" id=\"enableWorkerAnnotation\" class=\"btn btn-primary btn-lg btn-block read-button\">Enable for Annotation</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: disableWorkerAnnotation' type=\"button\" id=\"disableWorkerAnnotation\" class=\"btn btn-primary btn-lg btn-block read-button\">Disable for Annotation</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],24:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel() {
    var self = this;
    self.a = ko.observable('1');
    self.aError = ko.observable();
    self.b = ko.observable('2');
    self.bError = ko.observable();
    self.result = ko.observable('');
    self.a.subscribe(function () {
        self.aError(undefined);
    });
    self.b.subscribe(function () {
        self.bError(undefined);
    });
    self.add = function () {
        var a = parseInt(self.a(), 10),
            b = parseInt(self.b(), 10);
        self.result('');
        if (isNaN(a)) {
            self.aError('Invalid Data');
        } else if (isNaN(b)) {
            self.bError('Invalid Data');
        } else {
            self.result(a + b);
        }
    };
}

exports.register = function () {
    ko.components.register('local-sum', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":25}],25:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <div class=\"form-group\" data-bind=\"css: {'has-error': aError}\">\r\n        <label for=\"a\">A</label>\r\n        <input data-bind='value: a' type='text' id=\"a\" class=\"form-control\" placeholder=\"A\">\r\n        <p data-bind=\"text: aError\" class=\"help-block\"></p>\r\n    </div>\r\n\r\n    <div class=\"form-group\" data-bind=\"css: {'has-error': bError}\">\r\n        <label for=\"b\">B</label>\r\n        <input data-bind='textinput: b' type='text' id=\"b\" class=\"form-control\" placeholder=\"B\">\r\n        <p data-bind=\"text: bError\" class=\"help-block\"></p>\r\n    </div>\r\n\r\n    <button data-bind=\"click: add\" type=\"button\" class=\"btn btn-default\" aria-label=\"Add\">\r\n        Add\r\n    </button>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"result\">A + B</label>\r\n        <input data-bind='textinput: result' type='text' id=\"result\" class=\"form-control\" readonly=\"true\">\r\n    </div>\r\n</div>\r\n";

},{}],26:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.username = ko.observable();
    self.usernameError = ko.observable();
    self.password = ko.observable();
    self.passwordError = ko.observable();

    self.username.subscribe(function () {
        self.usernameError(undefined);
    });
    self.password.subscribe(function () {
        self.passwordError(undefined);
    });

    self.logIn = function () {


      //esta parte es para poner la barra de tareas después del login
    //  self.logIn=function(){
      //    self.context.logged(true);
      var error=false;

        if (!self.username()){
          error=true;
          self.usernameError("More than three characters");
        }
        if (!self.password()){
          error=true;
          self.passwordError("More than eight characters");
        }
        if(!error){
          var packet={
            "username":self.username(),
            "password":self.password(),

          };

          self.context.repositories.user.loginUser(packet).then(function(result){
            self.context.logged(true);
          //  self.context.masterLogged(false);
            window.location.href = "/#!/edit"
            self.context.repositories.token=result; // save the token to be used everywhere in the application
            alert("this is the" + self.context.repositories.token)
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
    ko.components.register('login', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":27}],27:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Log In</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Please log in.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:usernameError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: username'type=\"text\" class=\"form-control\"  id=\"username\"  placeholder=\"Enter your Username\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:passwordError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind ='textinput: password'type=\"password\" class=\"form-control\" id=\"password\"  placeholder=\"Enter your Password\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: logIn' type=\"button\" id=\"logIn\" class=\"btn btn-primary btn-lg btn-block login-button\">Log In</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],28:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.context.logged(true);
    self.context.masterLogged(false);
    self.username = ko.observable();
    //self.usernameError = ko.observable();
    self.fullname = ko.observable();
    self.type=ko.observable();
    self.fullnameError = ko.observable();
    self.password = ko.observable();
    self.passwordError = ko.observable();
    self.context.repositories.user.readUser(self.context.repositories.token).then(function(result){
        self.fullname(result.fullname);
        self.username(result.username);
        self.type(result.type);
        if (self.type()=="master"){
          alert("yes")
          self.context.masterLogged(true);
        }
      //  else{
        //  self.selector2("No")
      //  }
    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);

    self.fullname.subscribe(function () {
        self.fullnameError(undefined);
    });
    self.password.subscribe(function () {
        self.passwordError(undefined);
    });

    self.logout=function(){

      self.context.repositories.user.logOut(self.context.repositories.token).then(function(result){

        alert(self.context.repositories.token + "logout")

        window.location.href = "/#/login";

      });
    }

    self.edit = function () {


      //esta parte es para poner la barra de tareas después del login
    //  self.logIn=function(){
      //    self.context.logged(true);
      var error=false;

        if (!self.fullname()){
          error=true;
          self.fullnameError("The full name must be different from the previous one");
        }
        if(!error){
          var packet={
            "fullname":self.fullname(),
            "password":self.password(),

          };
        //var type= self.type()
        //if(type == master){
          //self.context.master(true);
        //}

          alert(self.context.repositories.token);
          self.context.repositories.user.changeUser(self.context.repositories.token, packet).then(function(result){

            alert("Registered");


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
    ko.components.register('manager', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":29}],29:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Hello <span data-bind = \"text: username\" type='text' id=\"username\" readonly=\"true\"></span></h1>\r\n    <h3> <span data-bind = \"text: type\" type='text' id=\"type\" readonly=\"true\"></span></h3>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can modify your name and your password.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"fullname\" class=\"cols-sm-2 control-label\">Full Name: </label> <span data-bind = \"text: fullname\" type='text' id=\"fullname\" readonly=\"true\"></span>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:fullnameError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: fullname'type=\"text\" class=\"form-control\"  id=\"fullname\"  placeholder=\"Enter your full name\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:passwordError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind ='textinput: password'type=\"password\" class=\"form-control\" id=\"password\"  placeholder=\"Enter your Password\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: edit' type=\"button\" id=\"edit\" class=\"btn btn-primary btn-lg btn-block read-button\">Edit</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n              <button data-bind='click: logout' type=\"button\" id=\"logout\" class=\"btn btn-primary btn-lg btn-block read-button\">Log Out</button>\r\n            </div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],30:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    self.fullname = ko.observable();
    self.fullnameError = ko.observable();
    self.username = ko.observable();
    self.usernameError = ko.observable();
    self.password = ko.observable();
    self.passwordError = ko.observable();
    self.password2 = ko.observable();
    self.passwordError2 = ko.observable();
    self.typeUser=ko.observable();
    self.typeUserError=ko.observable();

    self.fullname.subscribe(function () {
        self.fullnameError(undefined);
    });
    self.username.subscribe(function () {
        self.usernameError(undefined);
    });
    self.password.subscribe(function () {
        self.passwordError(undefined);
    });
    self.password2.subscribe(function () {
        self.passwordError2(undefined);
    });
    self.typeUser.subscribe(function () {
        self.typeUserError(undefined);
    });
    self.register = function () {
      var error=false;
        if (!self.fullname()){
          error=true;
          self.fullnameError("More than three characters");
        }
        if (!self.username()){
          error=true;
          self.usernameError("More than three characters");
        }
        if (!self.password()){
          error=true;
          self.passwordError("More than eight characters");
        }
        if (self.password()!=self.password2()){
          error=true;
          self.passwordError2("Doesn't match password");
        }
        if(!self.typeUser()){
          error=true;
          self.typeUserError("Select one of the options");
        }
        if(!error){
          var packet={
            "fullname":self.fullname(),
            "username":self.username(),
            "password":self.password(),
            "type":self.typeUser()
          };

          self.context.repositories.user.registerUser(packet).then(function(result){
          //  alert(result);
            window.location.href = "/#!/login"

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
    ko.components.register('registering', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":31}],31:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Register</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Register</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Please sign up.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n            <div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"fullname\" class=\"cols-sm-2 control-label\">Full Name</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:fullnameError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: fullname' class=\"form-control\" type=\"text\" id=\"fullname\"  placeholder=\"Enter your Name\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:usernameError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: username'type=\"text\" class=\"form-control\"  id=\"username\"  placeholder=\"Enter your Username\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:passwordError\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind ='textinput: password'type=\"password\" class=\"form-control\" id=\"password\"  placeholder=\"Enter your Password\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"password2\" class=\"cols-sm-2 control-label\">Confirm Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n                <p style=\"color:red\" data-bind=\"text:passwordError2\"></p>\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<input data-bind='textinput: password2' type=\"password\" class=\"form-control\" id=\"password2\"  placeholder=\"Confirm your Password\"/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"typeUser\" class=\"cols-sm-2 control-label\">Type of account</label>\r\n               <div class=\"cols-sm-50\">\r\n                 <p style=\"color:red\" data-bind=\"text:typeUserError\"></p>\r\n                 <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\"><i class=\"fa fa-user-plus \" aria-hidden=\"true\"></i></span>\r\n                   <div class=\"radio-inline\">\r\n                    <label><input data-bind='checked:typeUser' type=\"radio\" value=\"worker\" > Worker </label>\r\n                  </div>\r\n                   <span class=\"input-group-addon\"><i class=\"fa fa-user-secret \" aria-hidden=\"true\"></i></span>\r\n                   <div class=\"radio-inline\">\r\n                    <label><input data-bind='checked:typeUser' type=\"radio\" value=\"master\" > Manager </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: register' type=\"button\" id=\"register\" class=\"btn btn-primary btn-lg btn-block login-button\">Register</button>\r\n              <h5>Do you have already an account? Please log in</h5>\r\n              <button onclick=\"window.location.href='/#!/login'\" data-bind=\"click: login\" type=\"button\" id=\"login\" class=\"btn btn-primary btn-lg btn-block login-button\">Log In</button>\r\n            <!--  <a class=\"navbar-brand\" href=\"#\">Ko Example</a> -->\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],32:[function(require,module,exports){
(function (global){
/*jslint node:true */
/*globals alert*/
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel(ctx) {
    var self = this;
    self.a = ko.observable('1');
    self.aError = ko.observable();
    self.b = ko.observable('2');
    self.bError = ko.observable();
    self.result = ko.observable('');
    self.a.subscribe(function () {
        self.aError(undefined);
    });
    self.b.subscribe(function () {
        self.bError(undefined);
    });
    self.add = function () {
        ctx.repositories.adder.add(
            parseInt(self.a(), 10),
            parseInt(self.b(), 10)
        ).then(function (result) {
            self.result(result);
        }).catch(function (e) {
            if (e.errors) {
                self.aError(e.errors.a);
                self.bError(e.errors.b);
            } else {
                alert(e.message);
            }
        });
    };
}

exports.register = function () {
    ko.components.register('remote-sum', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":33}],33:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],34:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":35}],35:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t     <div><h5>Here you can see the information of the selected campaign. You can also modify the parameters you need and click edit.</h5></div>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"images\" class=\"cols-sm-2 control-label\">Images: </label> <span data-bind = \"text: images\" type='text' id=\"images\" readonly=\"true\"></span>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group\">\r\n              <label for=\"accepted\" class=\"cols-sm-2 control-label\">Accepted: </label> <span data-bind = \"text: accepted\" type='text' id=\"accepted\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"rejected\" class=\"cols-sm-2 control-label\">Rejected: </label> <span data-bind = \"text: rejected\" type='text' id=\"rejected\" readonly=\"true\"></span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"annotation\" class=\"cols-sm-2 control-label\">Annotation: </label> <span data-bind = \"text: annotation\" type='text' id=\"annotation\" readonly=\"true\"></span>\r\n            </div>\r\n\r\n\r\n\r\n        <!--    <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: enableWorkerSelection' type=\"button\" id=\"enableWorkerSelection\" class=\"btn btn-primary btn-lg btn-block read-button\">Enable for Selection</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: disableWorkerSelection' type=\"button\" id=\"disableWorkerSelection\" class=\"btn btn-primary btn-lg btn-block read-button\">Disable for selection</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: enableWorkerAnnotation' type=\"button\" id=\"enableWorkerAnnotation\" class=\"btn btn-primary btn-lg btn-block read-button\">Enable for Annotation</button>\r\n\t\t\t\t\t\t</div>\r\n            <div class=\"form-group \">\r\n\t\t\t\t\t\t\t<button data-bind='click: disableWorkerAnnotation' type=\"button\" id=\"disableWorkerAnnotation\" class=\"btn btn-primary btn-lg btn-block read-button\">Disable for Annotation</button>\r\n\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],36:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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


  //      self.context.repositories.url=result.id; //to use the url everywhere in the app
    }).catch(function(e){
        if(e.textStatus==404 || e.textStatus==410)
        {
            alert("No Work Available");
            window.location.href = "/#!/infotask";
        } 
      else
        alert(e.textStatus);
    });
    //self.username.subscribe(function () {
      //  self.fullnameError(undefined);

  //  self.fullname.subscribe(function () {
    //    self.fullnameError(undefined);
    //});
    //self.password.subscribe(function () {
      //  self.passwordError(undefined);
    //});
    self.accept = function(packet) {
      
      var message="Rejected";
      if(packet.accepted!=false){
        alert("Accepting");
       packet={
        "accepted":true
      };
      message="Accepted";
      }
      self.context.repositories.task.acceptImg(self.context.repositories.token, self.context.repositories.session, packet).then(function(result){
        alert(message);
        self.context.repositories.task.sessiontask(self.context.repositories.token, self.context.repositories.session).then(function(result){

        self.type(result.type);
      //  if(self.type()=="annotation"){
        //  self.size(result.size);
          //alert(self.size())
      //  }
        self.image(result.image);

       
  //      self.context.repositories.url=result.id; //to use the url everywhere in the app
    }).catch(function(e){
        if(e.textStatus==404 || e.textStatus==410)
        {
            alert("No Work Available");
            window.location.href = "/#!/tasksuser";
        } 
      else
        alert(e.textStatus+"asdads");
    });
      }).catch(function(e){
        alert("Something went wrong");
    });
      
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
          "accepted":false
        };
       self.accept(packet)
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":37}],37:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Information of the images</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can find your campaigns.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n            <table>\r\n              <thead><tr>\r\n                <th colspan=\"1\"> Id      </th><th colspan=\"1\">   Name of the Campaign   </th><th colspan=\"1\">  Status  </th><th></th>\r\n              </tr></thead>\r\n              <!-- Todo: Generate table body -->\r\n              <tbody>\r\n                <tr>\r\n                  <td><span data-bind = \"text: type\" type='text' id=\"type\" readonly=\"true\"></span></td>\r\n              <!--    <td><span data-bind = \"text: canonical\" type='text' id=\"name\" readonly=\"true\"></span></td> -->\r\n                  <td><span data-bind = \"text: image\" type='text' id=\"image\" readonly=\"true\"></span></td>\r\n              <!--    <td><span data-bind = \"text: size\" type='text' id=\"size\" readonly=\"true\"></span></td>-->\r\n                </tr>\r\n             </tbody>\r\n           </table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div>\r\n\r\n      <!--    <div class=\"col-lg-3 col-sm-4 col-xs-6\">\r\n            <a href=\"#\" data-bind=\"click: $parent.delete.bind($data, $index())\"type=\"button\">x</a>\r\n            <a href=\"#\" data-bind=\"click: $parent.statimg.bind($data, $index()) \"type=\"button\">Statistics</a> -->\r\n            <a title=\"Image 1\" href=\"#\" >\r\n              <img data-bind=\"attr:{src: 'http://awt.ifmledit.org'+ image()}\" class=\"thumbnail img-responsive\">\r\n            </a>\r\n      <!--     </div>\r\n         <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 2\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/2255EE\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 3\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/449955/FFF\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 4\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/992233\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 5\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/2255EE\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 6\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/449955/FFF\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 8\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/777\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 9\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/992233\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 10\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/EEE\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 11\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/449955/FFF\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 12\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/DDD\"></a></div>\r\n          <div class=\"col-lg-3 col-sm-4 col-xs-6\"><a title=\"Image 13\" href=\"#\"><img class=\"thumbnail img-responsive\" src=\"//placehold.it/600x350/992233\"></a></div> -->\r\n        </div>\r\n        <hr>\r\n\r\n        <hr>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <button data-bind='click: accept' type=\"button\" id=\"accept\" class=\"btn btn-primary btn-lg btn-block login-button\">Accepted</button>\r\n    </div>\r\n    <div>\r\n      <button data-bind='click: reject' type=\"button\" id=\"reject\" class=\"btn btn-primary btn-lg btn-block login-button\">Rejected</button>\r\n    </div>\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],38:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":39}],39:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Your Tasks</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can find your campaigns.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n            <table>\r\n              <thead><tr>\r\n                <th colspan=\"1\"> Id      </th><th colspan=\"1\">   Campaign   </th><th colspan=\"1\">  Status  </th><th></th>\r\n              </tr></thead>\r\n              <!-- Todo: Generate table body -->\r\n              <tbody data-bind= \"foreach: tasks\">\r\n                <tr>\r\n                  <td><span data-bind = \"text: $index \"></span></td>\r\n                  <td><span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: type\" type='text' id=\"type\" readonly=\"true\"></span></td>\r\n              <!--      <td><span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: type\" type='text' id=\"type\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: campaign\" type='text' id=\"campaign\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: session\" type='text' id=\"session\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: statistics\" type='text' id=\"statistics\" readonly=\"true\"></span></td>\r\n\r\n                  <td><span data-bind = \"text: status\" type='text' id=\"status\" readonly=\"true\"></span></td> -->\r\n                  <td><a href=\"#\" data-bind=\"click: $parent.info.bind($data, $index())\">Task Information</a></td>\r\n                </tr>\r\n             </tbody>\r\n           </table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <button data-bind='click: info' type=\"button\" id=\"info\" class=\"btn btn-primary btn-lg btn-block login-button\">Check</button>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],40:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null);

function ViewModel(ctx) {
    var self = this;
    self.context=ctx;
    //self.context.logged(true);
    self.workers = ko.observableArray();
    self.id = ko.observable();
    self.fullname=ko.observable();
    self.selector = ko.observable();
    self.annotator = ko.observable();


    self.context.repositories.campaign.infoCampaignWorkers(self.context.repositories.token, self.context.repositories.workers).then(function(result){
        self.workers(result.workers);
        self.id(result.id);
        self.fullname(result.fullname);
        self.selector(result.selector);
        self.annotator(result.annotator);
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
        self.context.repositories.campaign.infoCampaignWorkers(self.context.repositories.token, self.context.repositories.workers).then(function(result){
          self.id(result.id);
          self.workers(result.workers);
          self.context.repositories.worker=self.workers()[index].id;
//myObservableArray()[0].price
          alert('The element is ' + self.context.repositories.worker);

      //  alert(index);

          //self.removePerson = function() {
            //     self.people.remove(this);
             //}

          window.location.href = "/#!/infoworker";
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
    ko.components.register('workers', {
        template: require('./template.html'),
        viewModel: ViewModel
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./template.html":41}],41:[function(require,module,exports){
module.exports = "<div class=\"container\">\r\n    <h1>Your campaigns</h1>\r\n</div>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n\r\n\t\t<!-- Website CSS style\r\n\t\t<link href=\"css/bootstrap.min.css\" rel=\"stylesheet\"> -->\r\n\r\n\t\t<!-- Website Font style -->\r\n\t    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\t\t<!--<link rel=\"stylesheet\" href=\"style.css\">-->\r\n\t\t<!-- Google Fonts -->\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Passion+One' rel='stylesheet' type='text/css'>\r\n\t\t<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>\r\n\r\n\t\t<title>Admin</title>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"main-login main-center\">\r\n\t\t\t\t<h5>Here you can find your campaigns.</h5>\r\n\t\t\t\t\t<form class=\"\" method=\"post\" action=\"#\">\r\n\r\n            <table>\r\n              <thead><tr>\r\n                <th colspan=\"1\"> Id      </th><th colspan=\"1\">   Worker's Name   </th><th colspan=\"1\">  Selector  </th><th colspan=\"1\">  Annotator  </th><th></th>\r\n              </tr></thead>\r\n              <!-- Todo: Generate table body -->\r\n              <tbody data-bind= \"foreach: workers\">\r\n                <tr>\r\n                  <td><span data-bind = \"text: id\" type='text' id=\"id\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: fullname\" type='text' id=\"fullname\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: selector\" type='text' id=\"selector\" readonly=\"true\"></span></td>\r\n                  <td><span data-bind = \"text: annotator\" type='text' id=\"annotator\" readonly=\"true\"></span></td>\r\n                  <td><a href=\"#\" data-bind=\"click: $parent.info.bind($data, $index())\">Worker Information</a></td>\r\n                </tr>\r\n             </tbody>\r\n           </table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <button data-bind='click: info' type=\"button\" id=\"info\" class=\"btn btn-primary btn-lg btn-block login-button\">Check</button>\r\n\r\n\t\t <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\r\n";

},{}],42:[function(require,module,exports){
(function (global){
/*jslint node:true */
"use strict";

var ko = (typeof window !== "undefined" ? window['ko'] : typeof global !== "undefined" ? global['ko'] : null),
    components = require('./components'),
    createRepositories = require('./repositories').createRepositories;

components.register();

var repositories = createRepositories();

function App() {
    this.loggedIn=ko.observable();
    this.masterLogged=ko.observable();
    this.routes = {
        '/': 'registering',
        '/login': 'login',
        '/create': 'create',
        '/campaign': 'campaign',
        '/infocampaign': 'infocampaign',
        '/image': 'image',
        '/infoimages': 'infoimages',
        '/imgstatistics': 'imgstatistics',
        '/workers': 'workers',
        '/infoworker': 'infoworker',
        '/statistics': 'statistics',
        '/tasksuser': 'tasksuser',
        '/infotask': 'infotask',
        '/tasksession': 'tasksession',
        '/fullname': 'full-name',
        '/edit': 'manager',
        '/crud': 'crud-list',
        '/local-sum': 'local-sum',
        '/remote-sum': 'remote-sum',
    };
    this.repositories = repositories;
}

ko.applyBindings(new App());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components":15,"./repositories":45}],43:[function(require,module,exports){
(function (global){
/*jslint node:true, nomen: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null),
    Promise = require('bluebird');

function Repository(server) {
    if (!(this instanceof Repository)) {
        return new Repository(server);
    }
    this._server = server || '';
}

Repository.prototype.add = function (a, b) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: self._server + '/api/add',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                a: a,
                b: b
            })
        }).done(function (result) {
            resolve(result.result);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            var error = new Error(errorThrown);
            error.textStatus = textStatus;
            error.jqXHR = jqXHR;
            error.errors = jqXHR.responseJSON.errors;
            reject(error);
        });
    });
};

exports.Repository = Repository;
exports.createRepository = Repository;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"bluebird":48}],44:[function(require,module,exports){
(function (global){
/*jslint node:true, nomen: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null), //require is used for node js to load modules
    Promise = require('bluebird');  //promise is used to perform asynchronous computations

function Repository(server) {
    if (!(this instanceof Repository)) {
        return new Repository(server);
    }
    this._server = server || '';
}

Repository.prototype.createCampaign = function (token, packet) { //put properties or methods(registerUser) for an existing class, adding them to the prototype
    var self = this;
    return new Promise(function (resolve, reject) { //immediatly resolve the promise or reject it
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/campaign',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(packet),
             headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (output, status, xhr) {
            resolve(xhr.getResponseHeader("Location"));

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
  };

  Repository.prototype.readCampaign = function (token) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/campaign',
            type: 'GET',
            dataType:"json", //type of the element that the URL returns. because returns smth
          //  contentType: "application/json", //type of the element we are sending to the server
          //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function (data) {
            resolve(data);
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};

Repository.prototype.infoCampaign = function (token, url) {
  var self = this;
  return new Promise(function (resolve, reject) {
      $.ajax({
          url: "http://awt.ifmledit.org" + url,
          type: 'GET',
          dataType:"json", //type of the element that the URL returns. because returns smth
        //  contentType: "application/json", //type of the element we are sending to the server
        //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
          //javascript value to a JSON string
           headers: {
          "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
          },
      }).done(function (data) {
          resolve(data);
      }).fail(function (err, textStatus, errorThrown) {
        var error=new Error(err);
          if (err.responseJSON)
              error.textStatus=JSON.stringify(err.responseJSON.error);
          else if(err.responseText)
              error.textStatus=err.responseText;
          else if (err.message)
              error.textStatus=err.message;
          else
              error.textStatus="Something Went Wrong in the request";
          reject(error);

      });
  });
};

Repository.prototype.editCampaign = function (token, url, packet) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + url,
            type: 'PUT',
             //type of the element that the URL returns. because returns smth
            contentType: "application/json", //type of the element we are sending to the server
            //data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             data: JSON.stringify(packet),
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function () {
            resolve();
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.loadImage = function (token, urlImage, image) {
    var self = this;
    var fd = new FormData();
        fd.append("image", image) //append the file
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImage,
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (output, status, xhr) {
            resolve(xhr.getResponseHeader("Location"));

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoImages = function (token, urlImage) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImage,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.deleteImages = function (token, urlImg) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImg,
            type: 'DELETE',
        //    contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve("deleted");

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoImg = function (token, urlImg) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImg,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoImgStat = function (token, urlImgStat) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImgStat,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoCampaignWorkers = function (token, urlWorkers) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlWorkers,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoWorker = function (token, urlWorker) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlWorker,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.enableWorkerSel = function (token, urlSel) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlSel,
            type: 'POST',
            contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.disableWorkerSel = function (token, urlSel) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlSel,
            type: 'DELETE',
        //    contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve("deleted");

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};

Repository.prototype.enableWorkerAnn = function (token, urlAnn) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlAnn,
            type: 'POST',
            contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve();

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.disableWorkerAnn = function (token, urlAnn) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlAnn,
            type: 'DELETE',
        //    contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve("deleted");

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.startcampaign = function (token, urlexe) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlexe,
            type: 'POST',
            contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve();

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.terminatecampaign = function (token, urlexe) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlexe,
            type: 'DELETE',
          //  contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve();

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.campaignStatistics = function (token, urlStat) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlStat,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.readTask = function (token) {
  var self = this;
  return new Promise(function (resolve, reject) {
      $.ajax({
          url: "http://awt.ifmledit.org" + '/api/task',
          type: 'GET',
          dataType:"json", //type of the element that the URL returns. because returns smth
          contentType: "application/json", //type of the element we are sending to the server
        //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
          //javascript value to a JSON string
           headers: {
          "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
          },
      }).done(function (data) {
          resolve(data);
      }).fail(function (err, textStatus, errorThrown) {
        var error=new Error(err);
          if (err.responseJSON)
              error.textStatus=JSON.stringify(err.responseJSON.error);
          else if(err.responseText)
              error.textStatus=err.responseText;
          else if (err.message)
              error.textStatus=err.message;
          else
              error.textStatus="Something Went Wrong in the request";
          reject(error);

      });
  });
};

exports.Repository = Repository;
exports.createRepository = Repository;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"bluebird":48}],45:[function(require,module,exports){
/*jslint node:true */
"use strict";

exports.createRepositories = function (options) {
    return {
        adder: require('./adder').createRepository(options),
        user: require('./user').createRepository(options),
        campaign: require('./campaign').createRepository(options),
        task: require('./task').createRepository(options)
    };
};

},{"./adder":43,"./campaign":44,"./task":46,"./user":47}],46:[function(require,module,exports){
(function (global){
/*jslint node:true, nomen: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null), //require is used for node js to load modules
    Promise = require('bluebird');  //promise is used to perform asynchronous computations

function Repository(server) {
    if (!(this instanceof Repository)) {
        return new Repository(server);
    }
    this._server = server || '';
}

Repository.prototype.readTask = function (token) {
  var self = this;
  return new Promise(function (resolve, reject) {
      $.ajax({
          url: "http://awt.ifmledit.org" + '/api/task',
          type: 'GET',
          dataType:"json", //type of the element that the URL returns. because returns smth
      //    contentType: "application/json", //type of the element we are sending to the server
        //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
          //javascript value to a JSON string
           headers: {
          "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
          },
      }).done(function (data,index) {
          resolve(data,index);
      }).fail(function (err, textStatus, errorThrown) {
        var error=new Error(err);
          if (err.responseJSON)
              error.textStatus=JSON.stringify(err.responseJSON.error);
          else if(err.responseText)
              error.textStatus=err.responseText;
          else if (err.message)
              error.textStatus=err.message;
          else
              error.textStatus="Something Went Wrong in the request";
          reject(error);

      });
  });
};


  Repository.prototype.taskInfo = function (token, urlTask) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlTask,
            type: 'GET',
            //dataType:"json", //type of the element that the URL returns. because returns smth
            contentType: "application/json", //type of the element we are sending to the server
          //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function (data) {
            resolve(data);
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};

Repository.prototype.startsession = function (token, urlses) {
    alert("Session id is "+urlses);
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlses,
            type: 'POST',
            contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
            error: function(err, textStatus, errorThrown) { 
            if(err.status == 404 || err.status == 410 || errorThrown == 'Not Found'|| errorThrown == 'Gone') 
            { 
				
                var e=new Error(err);
                e.textStatus=err.status;
                reject(e);
                
             }
             var error=new Error(err);
            if(err.status)
                error.status=err.status;
            else if(err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Couldn't get new task";    
            reject(error);
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        });
    });
};

Repository.prototype.sessiontask = function (token, urlses) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlses,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
            error: function(err, textStatus, errorThrown) { 
            if(err.status == 404 || err.status == 410 || errorThrown == 'Not Found'|| errorThrown == 'Gone') 
            { 
				
                var e=new Error(err);
                e.textStatus=err.status;
                reject(e);
                
             }
             var error=new Error(err);
            if(err.status)
                error.status=err.status;
            else if(err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Couldn't get new task";    
            reject(error);
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        });
    });
};

Repository.prototype.acceptImg = function (token, urlses, packet) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlses,
            type: 'PUT',
             //type of the element that the URL returns. because returns smth
            contentType: "application/json", //type of the element we are sending to the server
            data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function () {
            resolve();
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.loadImage = function (token, urlImage, image) {
    var self = this;
    var fd = new FormData();
        fd.append("image", image) //append the file
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImage,
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (output, status, xhr) {
            resolve(xhr.getResponseHeader("Location"));

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoImages = function (token, urlImage) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImage,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.deleteImages = function (token, urlImg) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImg,
            type: 'DELETE',
        //    contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve("deleted");

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoImg = function (token, urlImg) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImg,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoImgStat = function (token, urlImgStat) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlImgStat,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoCampaignWorkers = function (token, urlWorkers) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlWorkers,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.infoWorker = function (token, urlWorker) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlWorker,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.enableWorkerSel = function (token, urlSel) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlSel,
            type: 'POST',
            contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.disableWorkerSel = function (token, urlSel) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlSel,
            type: 'DELETE',
        //    contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve("deleted");

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};

Repository.prototype.enableWorkerAnn = function (token, urlAnn) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlAnn,
            type: 'POST',
            contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve();

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.disableWorkerAnn = function (token, urlAnn) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlAnn,
            type: 'DELETE',
        //    contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve("deleted");

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.startcampaign = function (token, urlexe) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlexe,
            type: 'POST',
            contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve();

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.terminatecampaign = function (token, urlexe) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlexe,
            type: 'DELETE',
          //  contentType: "application/json",
          //  data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function () {
            resolve();

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.campaignStatistics = function (token, urlStat) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + urlStat,
            type: 'GET',
            contentType: "application/json",
        //    data: JSON.stringify(packet),
            headers: {
            "Authorization": "APIToken "+ token,
            },
        }).done(function (data) {
            resolve(data);

          //  success: function(data, status, xhr) {
        //console.log(xhr.getResponseHeader('Location'));
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
exports.Repository = Repository;
exports.createRepository = Repository;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"bluebird":48}],47:[function(require,module,exports){
(function (global){
/*jslint node:true, nomen: true */
"use strict";

var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null), //require is used for node js to load modules
    Promise = require('bluebird');  //promise is used to perform asynchronous computations

function Repository(server) {
    if (!(this instanceof Repository)) {
        return new Repository(server);
    }
    this._server = server || '';
}

Repository.prototype.registerUser = function (packet) { //put properties or methods(registerUser) for an existing class, adding them to the prototype
    var self = this;
    return new Promise(function (resolve, reject) { //immediatly resolve the promise or reject it
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/user',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(packet),
             headers: {
            "Authorization": "APIKey "+"89a5562a-9dc6-4114-9c9d-c0dfbf550fd4"
            },
        }).done(function () {
            resolve("User Registered");
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
  };
    Repository.prototype.loginUser = function (packet) {
        var self = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "http://awt.ifmledit.org" + '/api/auth',
                type: 'POST',
                dataType:"json", //type of the element that the URL returns. because returns smth
                contentType: "application/json", //type of the element we are sending to the server
                data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
                  //javascript value to a JSON string
                 headers: {
                "Authorization": "APIKey "+"89a5562a-9dc6-4114-9c9d-c0dfbf550fd4" //"authorization requested with ..."APIKEY"+...
                },
            }).done(function (token) {
                resolve(token.token);
            }).fail(function (err, textStatus, errorThrown) {
              var error=new Error(err);
                if (err.responseJSON)
                    error.textStatus=JSON.stringify(err.responseJSON.error);
                else if(err.responseText)
                    error.textStatus=err.responseText;
                else if (err.message)
                    error.textStatus=err.message;
                else
                    error.textStatus="Something Went Wrong in the request";
                reject(error);

            });
        });
};

Repository.prototype.readUser = function (token) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/user/me',
            type: 'GET',
            dataType:"json", //type of the element that the URL returns. because returns smth
          //  contentType: "application/json", //type of the element we are sending to the server
          //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function (data) {
            resolve(data);
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.changeUser = function (token,packet) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/user/me',
            type: 'PUT',
             //type of the element that the URL returns. because returns smth
            contentType: "application/json", //type of the element we are sending to the server
          //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             data: JSON.stringify(packet),
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function () {
            resolve();
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
Repository.prototype.logOut = function (token) {
    var self = this;
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://awt.ifmledit.org" + '/api/auth',
            type: 'DELETE',
          //  dataType:"json", //type of the element that the URL returns. because returns smth
          //  contentType: "application/json", //type of the element we are sending to the server
          //  data: JSON.stringify(packet), //the packet with the data we are sending to the server in json format. stringify converts
            //javascript value to a JSON string
             headers: {
            "Authorization": "APIToken "+ token //"authorization requested with ..."APIToken"+...
            },
        }).done(function () {
            resolve();
        }).fail(function (err, textStatus, errorThrown) {
          var error=new Error(err);
            if (err.responseJSON)
                error.textStatus=JSON.stringify(err.responseJSON.error);
            else if(err.responseText)
                error.textStatus=err.responseText;
            else if (err.message)
                error.textStatus=err.message;
            else
                error.textStatus="Something Went Wrong in the request";
            reject(error);

        });
    });
};
exports.Repository = Repository;
exports.createRepository = Repository;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"bluebird":48}],48:[function(require,module,exports){
(function (process,global){
/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.5.0
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");
var util = _dereq_("./util");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.enableTrampoline = function() {
    this._trampolineEnabled = true;
};

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (!true) {
var makeMethodCaller = function (methodName) {
    return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
};

var makeGetter = function (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
};

var getCompiled = function(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
};

getMethodCaller = function(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
};

getGetter = function(name) {
    return getCompiled(name, makeGetter, getterCache);
};
}

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (!true) {
        if (canEvaluate) {
            var maybeCaller = getMethodCaller(methodName);
            if (maybeCaller !== null) {
                return this._then(
                    maybeCaller, undefined, undefined, args, undefined);
            }
        }
    }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context) {
var getDomain = Promise._getDomain;
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Context.deactivateLongStackTraces();
            async.enableTrampoline();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Context.activateLongStackTraces();
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};

var fireDomEvent = (function() {
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new CustomEvent(name.toLowerCase(), {
                    detail: event,
                    cancelable: true
                });
                return !util.global.dispatchEvent(domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new Event(name.toLowerCase(), {
                    cancelable: true
                });
                domEvent.detail = event;
                return !util.global.dispatchEvent(domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name.toLowerCase(), false, true,
                    event);
                return !util.global.dispatchEvent(domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
         getDomain) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (!true) {
if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var promiseSetter = function(i) {
        return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
    };

    var generateHolderClass = function(total) {
        var props = new Array(total);
        for (var i = 0; i < props.length; ++i) {
            props[i] = "this.p" + (i+1);
        }
        var assignment = props.join(" = ") + " = null;";
        var cancellationCode= "var promise;\n" + props.map(function(prop) {
            return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
        }).join("\n");
        var passedArguments = props.join(", ");
        var name = "Holder$" + total;


        var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

        code = code.replace(/\[TheName\]/g, name)
            .replace(/\[TheTotal\]/g, total)
            .replace(/\[ThePassedArguments\]/g, passedArguments)
            .replace(/\[TheProperties\]/g, assignment)
            .replace(/\[CancellationCode\]/g, cancellationCode);

        return new Function("tryCatch", "errorObj", "Promise", "async", code)
                           (tryCatch, errorObj, Promise, async);
    };

    var holderClasses = [];
    var thenCallbacks = [];
    var promiseSetters = [];

    for (var i = 0; i < 8; ++i) {
        holderClasses.push(generateHolderClass(i + 1));
        thenCallbacks.push(thenCallback(i + 1));
        promiseSetters.push(promiseSetter(i + 1));
    }

    reject = function (reason) {
        this._reject(reason);
    };
}}

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (!true) {
            if (last <= 8 && canEvaluate) {
                var ret = new Promise(INTERNAL);
                ret._captureStackTrace();
                var HolderClass = holderClasses[last - 1];
                var holder = new HolderClass(fn);
                var callbacks = thenCallbacks;

                for (var i = 0; i < last; ++i) {
                    var maybePromise = tryConvertToPromise(arguments[i], ret);
                    if (maybePromise instanceof Promise) {
                        maybePromise = maybePromise._target();
                        var bitField = maybePromise._bitField;
                        ;
                        if (((bitField & 50397184) === 0)) {
                            maybePromise._then(callbacks[i], reject,
                                               undefined, ret, holder);
                            promiseSetters[i](maybePromise, holder);
                            holder.asyncNeeded = false;
                        } else if (((bitField & 33554432) !== 0)) {
                            callbacks[i].call(ret,
                                              maybePromise._value(), holder);
                        } else if (((bitField & 16777216) !== 0)) {
                            ret._reject(maybePromise._reason());
                        } else {
                            ret._cancel();
                        }
                    } else {
                        callbacks[i].call(ret, maybePromise, holder);
                    }
                }

                if (!ret._isFateSealed()) {
                    if (holder.asyncNeeded) {
                        var domain = getDomain();
                        if (domain !== null) {
                            holder.fn = util.domainBind(domain, holder.fn);
                        }
                    }
                    ret._setAsyncGuaranteed();
                    ret._setOnCancel(holder);
                }
                return ret;
            }
        }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var domain = getDomain();
    this._callback = domain === null ? fn : util.domainBind(domain, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;
var debug = _dereq_("./debuggability")(Promise, Context);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var domain = getDomain();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: domain === null ? handler
                : (typeof handler === "function" &&
                    util.domainBind(domain, handler)),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);

    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
Promise.Promise = Promise;
Promise.version = "3.5.0";
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./call_get.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./filter.js')(Promise, INTERNAL);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (!true) {
var switchCaseArgumentOrder = function(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 3);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
        ret.push(i);
    }
    return ret;
};

var argumentSequence = function(argumentCount) {
    return util.filledRange(argumentCount, "_arg", "");
};

var parameterDeclaration = function(parameterCount) {
    return util.filledRange(
        Math.max(parameterCount, 3), "_arg", "");
};

var parameterCount = function(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
};

makeNodePromisifiedEval =
function(callback, receiver, originalName, fn, _, multiArgs) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (shouldProxyThis) {
            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
        } else {
            ret = receiver === undefined
                ? "ret = callback({{args}}, nodeback); break;\n"
                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
        }
        return ret.replace("{{args}}", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for (var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", (shouldProxyThis
                                ? "ret = callback.apply(this, args);\n"
                                : "ret = callback.apply(receiver, args);\n"));
        return ret;
    }

    var getFunctionCode = typeof callback === "string"
                                ? ("this != null ? this['"+callback+"'] : fn")
                                : "fn";
    var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
        .replace("[GetFunctionCode]", getFunctionCode);
    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
    return new Function("Promise",
                        "fn",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "tryCatch",
                        "errorObj",
                        "notEnumerableProp",
                        "INTERNAL",
                        body)(
                    Promise,
                    fn,
                    receiver,
                    withAppended,
                    maybeWrapAsError,
                    nodebackForPromise,
                    util.tryCatch,
                    util.errorObj,
                    util.notEnumerableProp,
                    INTERNAL);
};
}

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var domain = getDomain();
    this._fn = domain === null ? fn : util.domainBind(domain, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined && 
        this._eachValues !== null && 
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };
            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova))) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var l = 8;
    while (l--) new FakeConstructor();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string";
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if ({}.toString.call(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

function domainBind(self, cb) {
    return self.bind(cb);
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    domainBind: domainBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":49}],49:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[42])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvanMvY29tcG9uZW50cy9jYW1wYWlnbi9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL2NhbXBhaWduL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvanMvY29tcG9uZW50cy9jcmVhdGUvaW5kZXguanMiLCJjbGllbnQvanMvY29tcG9uZW50cy9jcmVhdGUvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL2NydWQtbGlzdC9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL2NydWQtbGlzdC90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvZnVsbC1uYW1lL2luZGV4LmpzIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvZnVsbC1uYW1lL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvanMvY29tcG9uZW50cy9ob21lLXBhZ2UvaW5kZXguanMiLCJjbGllbnQvanMvY29tcG9uZW50cy9ob21lLXBhZ2UvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL2ltYWdlL2luZGV4LmpzIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvaW1hZ2UvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL2ltZ3N0YXRpc3RpY3MvaW5kZXguanMiLCJjbGllbnQvanMvY29tcG9uZW50cy9pbWdzdGF0aXN0aWNzL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvanMvY29tcG9uZW50cy9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL2luZm9jYW1wYWlnbi9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL2luZm9jYW1wYWlnbi90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvaW5mb2ltYWdlcy9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL2luZm9pbWFnZXMvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL2luZm90YXNrL2luZGV4LmpzIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvaW5mb3Rhc2svdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL2luZm93b3JrZXIvaW5kZXguanMiLCJjbGllbnQvanMvY29tcG9uZW50cy9pbmZvd29ya2VyL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvanMvY29tcG9uZW50cy9sb2NhbC1zdW0vaW5kZXguanMiLCJjbGllbnQvanMvY29tcG9uZW50cy9sb2NhbC1zdW0vdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL2xvZ2luL2luZGV4LmpzIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvbG9naW4vdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL21hbmFnZXIvaW5kZXguanMiLCJjbGllbnQvanMvY29tcG9uZW50cy9tYW5hZ2VyL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvanMvY29tcG9uZW50cy9yZWdpc3RlcmluZy9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL3JlZ2lzdGVyaW5nL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvanMvY29tcG9uZW50cy9yZW1vdGUtc3VtL2luZGV4LmpzIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvc3RhdGlzdGljcy9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL3N0YXRpc3RpY3MvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL3Rhc2tzZXNzaW9uL2luZGV4LmpzIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvdGFza3Nlc3Npb24vdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9jb21wb25lbnRzL3Rhc2tzdXNlci9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL3Rhc2tzdXNlci90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2pzL2NvbXBvbmVudHMvd29ya2Vycy9pbmRleC5qcyIsImNsaWVudC9qcy9jb21wb25lbnRzL3dvcmtlcnMvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9qcy9pbmRleC5qcyIsImNsaWVudC9qcy9yZXBvc2l0b3JpZXMvYWRkZXIuanMiLCJjbGllbnQvanMvcmVwb3NpdG9yaWVzL2NhbXBhaWduLmpzIiwiY2xpZW50L2pzL3JlcG9zaXRvcmllcy9pbmRleC5qcyIsImNsaWVudC9qcy9yZXBvc2l0b3JpZXMvdGFzay5qcyIsImNsaWVudC9qcy9yZXBvc2l0b3JpZXMvdXNlci5qcyIsIm5vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9icm93c2VyL2JsdWViaXJkLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDakdBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hHQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUJBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BCQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVkE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0REE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2xGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeExBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BIQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcEpBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaklBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RDQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JFQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25HQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeEZBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy9DQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEtBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUdBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqR0E7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2bkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBWaWV3TW9kZWwoY3R4KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmNvbnRleHQ9Y3R4O1xyXG4gICAgLy9zZWxmLmNvbnRleHQubG9nZ2VkKHRydWUpO1xyXG4gICAgc2VsZi5jYW1wYWlnbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgIC8vc2VsZi51c2VybmFtZUVycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5pZCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYubmFtZT1rby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnN0YXR1cyA9IGtvLm9ic2VydmFibGUoKTtcclxuXHJcbiAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLnJlYWRDYW1wYWlnbihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgc2VsZi5jYW1wYWlnbnMocmVzdWx0LmNhbXBhaWducyk7XHJcbiAgICAgICAgc2VsZi5pZChyZXN1bHQuaWQpO1xyXG4gICAgICAgIHNlbGYubmFtZShyZXN1bHQubmFtZSk7XHJcbiAgICAgICAgc2VsZi5zdGF0dXMocmVzdWx0LnN0YXR1cyk7XHJcbiAgLy8gICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybD1yZXN1bHQuaWQ7IC8vdG8gdXNlIHRoZSB1cmwgZXZlcnl3aGVyZSBpbiB0aGUgYXBwXHJcbiAgICB9KTtcclxuICAgIC8vc2VsZi51c2VybmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vICBzZWxmLmZ1bGxuYW1lLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICBzZWxmLmZ1bGxuYW1lRXJyb3IodW5kZWZpbmVkKTtcclxuICAgIC8vfSk7XHJcbiAgICAvL3NlbGYucGFzc3dvcmQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gIHNlbGYucGFzc3dvcmRFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgLy99KTtcclxuICAgIHNlbGYucmVtb3ZlUGVyc29uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgc2VsZi5jYW1wYWlnbnMucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgfVxyXG5cclxuICAgIHNlbGYuaW5mbyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cclxuXHJcbiAgICAgIC8vZXN0YSBwYXJ0ZSBlcyBwYXJhIHBvbmVyIGxhIGJhcnJhIGRlIHRhcmVhcyBkZXNwdcOpcyBkZWwgbG9naW5cclxuICAgIC8vICBzZWxmLmxvZ0luPWZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vICAgIHNlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgICAgIC8vdmFyIGVycm9yPWZhbHNlO1xyXG5cclxuICAgICAgICAvL2lmICghc2VsZi5mdWxsbmFtZSgpKXtcclxuICAgICAgICAgIC8vZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIC8vc2VsZi5mdWxsbmFtZUVycm9yKFwiVGhlIGZ1bGwgbmFtZSBtdXN0IGJlIGRpZmZlcmVudCBmcm9tIHRoZSBwcmV2aW91cyBvbmVcIik7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9pZighZXJyb3Ipe1xyXG4gICAgICAgICAgLy92YXIgcGFja2V0PXtcclxuICAgICAgICAgICAgLy9cImZ1bGxuYW1lXCI6c2VsZi5mdWxsbmFtZSgpLFxyXG4gICAgICAgICAgICAvL1wicGFzc3dvcmRcIjpzZWxmLnBhc3N3b3JkKCksXHJcblxyXG4gICAgICAgICAgLy99O1xyXG4gICAgICAgIC8vdmFyIHR5cGU9IHNlbGYudHlwZSgpXHJcbiAgICAgICAgLy9pZih0eXBlID09IG1hc3Rlcil7XHJcbiAgICAgICAgICAvL3NlbGYuY29udGV4dC5tYXN0ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5yZWFkQ2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgc2VsZi5jYW1wYWlnbnMocmVzdWx0LmNhbXBhaWducyk7XHJcbiAgICAgICAgICBzZWxmLmlkKHJlc3VsdC5pZCk7XHJcbiAgICAgICAgICBzZWxmLm5hbWUocmVzdWx0Lm5hbWUpO1xyXG4gICAgICAgICAgc2VsZi5zdGF0dXMocmVzdWx0LnN0YXR1cyk7XHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybD1zZWxmLmNhbXBhaWducygpW2luZGV4XS5pZDtcclxuLy9teU9ic2VydmFibGVBcnJheSgpWzBdLnByaWNlXHJcbiAgICAgICAgICBhbGVydCgnVGhlIGVsZW1lbnQgaXMgJyArIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsKTtcclxuXHJcbiAgICAgIC8vICBhbGVydChpbmRleCk7XHJcblxyXG4gICAgICAgICAgLy9zZWxmLnJlbW92ZVBlcnNvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2VsZi5wZW9wbGUucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbmZvY2FtcGFpZ25cIjtcclxuICAgICAgICAgIC8vc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5pbmZvQ2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmwpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHJcbiAgICAgICAgICAgIC8vYWxlcnQoc2VsZi5jYW1wYWlnbnMocmVzdWx0LmNhbXBhaWducykpO1xyXG5cclxuXHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50ZXh0U3RhdHVzKXtcclxuICAgICAgICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnRzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAga28uY29tcG9uZW50cy5yZWdpc3RlcignY2FtcGFpZ24nLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxoMT5Zb3VyIGNhbXBhaWduczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgICA8aGVhZD5cXHJcXG5cXHRcXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcclxcblxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBDU1Mgc3R5bGVcXHJcXG5cXHRcXHQ8bGluayBocmVmPVxcXCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCI+IC0tPlxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBGb250IHN0eWxlIC0tPlxcclxcblxcdCAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxyXFxuXFx0XFx0PCEtLTxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj4tLT5cXHJcXG5cXHRcXHQ8IS0tIEdvb2dsZSBGb250cyAtLT5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmUnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PeHlnZW4nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcclxcblxcdFxcdDx0aXRsZT5BZG1pbjwvdGl0bGU+XFxyXFxuXFx0PC9oZWFkPlxcclxcblxcdDxib2R5PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93IG1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1haW4tbG9naW4gbWFpbi1jZW50ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxoNT5IZXJlIHlvdSBjYW4gZmluZCB5b3VyIGNhbXBhaWducy48L2g1PlxcclxcblxcdFxcdFxcdFxcdFxcdDxmb3JtIGNsYXNzPVxcXCJcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCIgYWN0aW9uPVxcXCIjXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGFibGU+XFxyXFxuICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cXFwiMVxcXCI+IElkICAgICAgPC90aD48dGggY29sc3Bhbj1cXFwiMVxcXCI+ICAgTmFtZSBvZiB0aGUgQ2FtcGFpZ24gICA8L3RoPjx0aCBjb2xzcGFuPVxcXCIxXFxcIj4gIFN0YXR1cyAgPC90aD48dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgIDwvdHI+PC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gVG9kbzogR2VuZXJhdGUgdGFibGUgYm9keSAtLT5cXHJcXG4gICAgICAgICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9IFxcXCJmb3JlYWNoOiBjYW1wYWlnbnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBpZFxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcImlkXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBuYW1lXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwibmFtZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogc3RhdHVzXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwic3RhdHVzXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuaW5mby5iaW5kKCRkYXRhLCAkaW5kZXgoKSlcXFwiPkNhbXBhaWduIEluZm9ybWF0aW9uPC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICA8L3RhYmxlPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcclxcbiAgICA8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IGluZm8nIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImluZm9cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBsb2dpbi1idXR0b25cXFwiPkNoZWNrPC9idXR0b24+XFxyXFxuXFxyXFxuXFx0XFx0IDwhLS0galF1ZXJ5IChuZWNlc3NhcnkgZm9yIEJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcGx1Z2lucykgLS0+XFxyXFxuICAgIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxyXFxuXCI7XG4iLCIvKmpzbGludCBub2RlOnRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIga28gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1sna28nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2tvJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIFZpZXdNb2RlbChjdHgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuY29udGV4dD1jdHg7XHJcbiAgICBzZWxmLmNhbXBhaWduTmFtZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYubmFtZUVycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5zZWxlY3Rpb25Xb3JrZXJzID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5zZWxlY3Rpb25XID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWxmLnNlbGVjdGlvbldvcmtlcnMoKSk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYuc2VsZWN0aW9uV29ya2Vyc0Vycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi50aHJlc2hvbGQgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnRocmVzaCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VsZi50aHJlc2hvbGQoKSk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYudGhyZXNob2xkRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLmFubm90YXRpb25Xb3JrZXJzID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5hbm5vdGF0aW9uVyA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VsZi5hbm5vdGF0aW9uV29ya2VycygpKTtcclxuICAgIH0pO1xyXG4gICAgc2VsZi5hbm5vdGF0aW9uV29ya2Vyc0Vycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi53aWR0aFBpeGVsPWtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYud2lkdGhQID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWxmLndpZHRoUGl4ZWwoKSk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYud2lkdGhFcnJvcj1rby5vYnNlcnZhYmxlKCk7XHJcbiAgICAvL2VzdGEgcGFydGUgZXMgcGFyYSBwb25lciBsYSBiYXJyYSBkZSB0YXJlYXMgZGVzcHXDqXMgZGVsIGxvZ2luXHJcbiAgLy8gIHNlbGYubG9nSW49ZnVuY3Rpb24oKXtcclxuICAgIC8vICAgIHNlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgLy8gIH07XHJcbiAgICBzZWxmLmNhbXBhaWduTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYubmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYuc2VsZWN0aW9uVy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuc2VsZWN0aW9uV29ya2Vyc0Vycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYudGhyZXNoLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi50aHJlc2hvbGRFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLmFubm90YXRpb25XLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5hbm5vdGF0aW9uV29ya2Vyc0Vycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYud2lkdGhQLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi53aWR0aEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZXJyb3I9ZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNhbXBhaWduTmFtZSgpKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLm5hbWVFcnJvcihcIk1vcmUgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuc2VsZWN0aW9uVygpICE9IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0aW9uV29ya2Vyc0Vycm9yKFwiV3JpdGUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi50aHJlc2goKSAhPSBcIm51bWJlclwiKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLnRocmVzaG9sZEVycm9yKFwiV3JpdGUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5hbm5vdGF0aW9uVygpICE9IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYuYW5ub3RhdGlvbldvcmtlcnNFcnJvcihcIldyaXRlIGEgbnVtYmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2Ygc2VsZi53aWR0aFAoKSAhPSBcIm51bWJlclwiKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLndpZHRoRXJyb3IoXCJXcml0ZSBhIG51bWJlclwiICsgdHlwZW9mIHNlbGYuc2VsZWN0aW9uVygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWVycm9yKXtcclxuICAgICAgICAgIHZhciBwYWNrZXQ9e1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpzZWxmLmNhbXBhaWduTmFtZSgpLFxyXG4gICAgICAgICAgICBcInNlbGVjdGlvbl9yZXBsaWNhXCI6c2VsZi5zZWxlY3Rpb25XKCksXHJcbiAgICAgICAgICAgIFwidGhyZXNob2xkXCI6c2VsZi50aHJlc2goKSxcclxuICAgICAgICAgICAgXCJhbm5vdGF0aW9uX3JlcGxpY2FcIjpzZWxmLmFubm90YXRpb25XKCksXHJcbiAgICAgICAgICAgIFwiYW5ub3RhdGlvbl9zaXplXCI6c2VsZi53aWR0aFAoKVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLmNyZWF0ZUNhbXBhaWduKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHBhY2tldCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybGNhbXBhaWduID0gcmVzdWx0OyAvL29idGFpbiB0aGUgVVJMIGZvciBhbiBzcGVjaWZpYyBjYW1wYWlnblxyXG4gICAgICAgICAgICBhbGVydChcInRoaXMgaXMgdGhlXCIrIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsY2FtcGFpZ24pO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLyMhL2NhbXBhaWduXCI7XHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50ZXh0U3RhdHVzKXtcclxuICAgICAgICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2NyZWF0ZScsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJyksXHJcbiAgICAgICAgdmlld01vZGVsOiBWaWV3TW9kZWxcclxuICAgIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGgxPkNyZWF0ZSB5b3VyIGNhbXBhaWduczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgICA8aGVhZD5cXHJcXG5cXHRcXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcclxcblxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBDU1Mgc3R5bGVcXHJcXG5cXHRcXHQ8bGluayBocmVmPVxcXCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCI+IC0tPlxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBGb250IHN0eWxlIC0tPlxcclxcblxcdCAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxyXFxuXFx0XFx0PCEtLTxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj4tLT5cXHJcXG5cXHRcXHQ8IS0tIEdvb2dsZSBGb250cyAtLT5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmUnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PeHlnZW4nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcclxcblxcdFxcdDx0aXRsZT5jYW1wYWlnbjwvdGl0bGU+XFxyXFxuXFx0PC9oZWFkPlxcclxcblxcdDxib2R5PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93IG1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1haW4tbG9naW4gbWFpbi1jZW50ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxoNT5IZXJlIHlvdSBjYW4gY3JlYXRlIG5ldyBjYW1wYWlnbnMuPC9oNT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiXFxcIiBtZXRob2Q9XFxcInBvc3RcXFwiIGFjdGlvbj1cXFwiI1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiY2FtcGFpZ25OYW1lXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk5hbWU8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6bmFtZUVycm9yXFxcIj48L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmFcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogY2FtcGFpZ25OYW1lJyBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiY2FtcGFpZ25OYW1lXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRoZSBuYW1lIG9mIHRoZSBjYW1wYWlnblxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJzZWxlY3Rpb25Xb3JrZXJzXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk51bWJlciBvZiB3b3JrZXJzIGZvciBJbWFnZSBTZWxlY3Rpb248L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6c2VsZWN0aW9uV29ya2Vyc0Vycm9yXFxcIj48L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVzZXJzIGZhXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgZGF0YS1iaW5kPSd0ZXh0aW5wdXQ6IHNlbGVjdGlvbldvcmtlcnMndHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgIGlkPVxcXCJzZWxlY3Rpb25Xb3JrZXJzXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRoZSBudW1iZXIgb2Ygd29ya2Vyc1xcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJ0aHJlc2hvbGRcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+VGhyZXNob2xkIGZvciBhbiBpbWFnZSBiZWZvcmUgYW5ub3RhdGlvbjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29scy1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVxcXCJjb2xvcjpyZWRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDp0aHJlc2hvbGRFcnJvclxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWxnXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgZGF0YS1iaW5kID0ndGV4dGlucHV0OiB0aHJlc2hvbGQndHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRocmVzaG9sZFxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aGUgdGhyZXNob2xkXFxcIi8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiYW5ub3RhdGlvbldvcmtlcnNcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+TnVtYmVyIG9mIHdvcmtlcnMgZm9yIGltYWdlIGFubm90YXRpb248L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6YW5ub3RhdGlvbldvcmtlcnNFcnJvclxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWxnXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgZGF0YS1iaW5kPSd0ZXh0aW5wdXQ6IGFubm90YXRpb25Xb3JrZXJzJyB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiYW5ub3RhdGlvbldvcmtlcnNcXFwiICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGhlIG51bWJlciBvZiB3b3JrZXJzXFxcIi8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ3aWR0aFBpeGVsXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPldpZHRoIG9mIHRoZSBhbm5vdGF0aW9uIGxpbmU8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHMtc20tNTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XFxcImNvbG9yOnJlZFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OndpZHRoRXJyb3JcXFwiPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyLXBsdXMgXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1iaW5kPSd0ZXh0aW5wdXQ6IHdpZHRoUGl4ZWwnIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJ3aWR0aFBpeGVsXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRoZSBudW1iZXIgb2YgcGl4ZWxzXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogY3JlYXRlJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJjcmVhdGVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBsb2dpbi1idXR0b25cXFwiPkNyZWF0ZSBDYW1wYWlnbjwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS0gIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPktvIEV4YW1wbGU8L2E+IC0tPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHQgPCEtLSBqUXVlcnkgKG5lY2Vzc2FyeSBmb3IgQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCBwbHVnaW5zKSAtLT5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG5cIjtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gVmlld01vZGVsKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5maXJzdE5hbWUgPSBrby5vYnNlcnZhYmxlKCdGaXJzdCcpO1xyXG4gICAgc2VsZi5sYXN0TmFtZSA9IGtvLm9ic2VydmFibGUoJ0xhc3QnKTtcclxuICAgIHNlbGYudXNlcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgIHNlbGYuYWRkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYudXNlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIGZpcnN0OiBzZWxmLmZpcnN0TmFtZSgpLFxyXG4gICAgICAgICAgICBsYXN0OiBzZWxmLmxhc3ROYW1lKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc2VsZi5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdXNlciBub3QgdGhlIFZNXHJcbiAgICAgICAgc2VsZi51c2Vycy5zcGxpY2Uoc2VsZi51c2Vycy5pbmRleE9mKHRoaXMpLCAxKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdjcnVkLWxpc3QnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogZmlyc3ROYW1lJyB0eXBlPSd0ZXh0JyBpZD1cXFwiZmlyc3ROYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRmlyc3QgTmFtZVxcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiBsYXN0TmFtZScgdHlwZT0ndGV4dCcgaWQ9XFxcImxhc3ROYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBOYW1lXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxidXR0b24gZGF0YS1iaW5kPVxcXCJjbGljazogYWRkXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGFyaWEtbGFiZWw9XFxcIkFkZFxcXCI+XFxyXFxuICAgICAgICBBZGRcXHJcXG4gICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcclxcbiAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPHRib2R5IGRhdGEtYmluZD1cXFwiZm9yZWFjaDogdXNlcnNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkIGRhdGEtYmluZD1cXFwidGV4dDogJGRhdGFbJ2ZpcnN0J11cXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XFxcInRleHQ6IGxhc3RcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5yZW1vdmVcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgYXJpYS1sYWJlbD1cXFwiUmVtb3ZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgPC90YWJsZT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gVmlld01vZGVsKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5maXJzdE5hbWUgPSBrby5vYnNlcnZhYmxlKCdGaXJzdCcpO1xyXG4gICAgc2VsZi5sYXN0TmFtZSA9IGtvLm9ic2VydmFibGUoJ0xhc3QnKTtcclxuICAgIHNlbGYuZnVsbE5hbWUgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuZmlyc3ROYW1lKCkgKyAnICcgKyBzZWxmLmxhc3ROYW1lKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2Z1bGwtbmFtZScsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJyksXHJcbiAgICAgICAgdmlld01vZGVsOiBWaWV3TW9kZWxcclxuICAgIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiBmaXJzdE5hbWUnIHR5cGU9J3RleHQnIGlkPVxcXCJmaXJzdE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBOYW1lXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwibGFzdE5hbWVcXFwiPkxhc3QgTmFtZTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgZGF0YS1iaW5kPSd0ZXh0aW5wdXQ6IGxhc3ROYW1lJyB0eXBlPSd0ZXh0JyBpZD1cXFwibGFzdE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXN0IE5hbWVcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJmdWxsTmFtZVxcXCI+RnVsbCBOYW1lPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogZnVsbE5hbWUnIHR5cGU9J3RleHQnIGlkPVxcXCJmdWxsTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2hvbWUtcGFnZScsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJylcclxuICAgIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGgxPktPLUV4YW1wbGU8L2gxPlxcclxcbiAgICBIZXJlIGlzIGEgc2V0IG9mIEtub2Nrb3V0LmpzIGV4YW1wbGVzXFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4iLCIvKmpzbGludCBub2RlOnRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIga28gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1sna28nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2tvJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIFZpZXdNb2RlbChjdHgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuY29udGV4dD1jdHg7XHJcbiAgICBzZWxmLmltYWdlTmFtZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuaW1hZ2VFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuXHJcbiAgICBzZWxmLmltYWdlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuaW1hZ2VFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VsZi51cGxvYWRJbWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGVycm9yPWZhbHNlO1xyXG4gICAgICB2YXIgZmlsZV9pbnB1dD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2V1cGxvYWRmb3JtX2ZpZWxkXzAnKTtcclxuICAgICAgICBpZiAoZmlsZV9pbnB1dC5maWxlcy5sZW5ndGg9PTApeyAvL2NoZWNrIGlmIHRoZSBmaWxlIGlzIGNob3NlblxyXG4gICAgICAgICAgYWxlcnQoXCJubyBmaWxlcyBjaG9zZW5cIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAvL3NlbGYuaW1hZ2VFcnJvcihcIk1vcmUgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZmlsZT1maWxlX2lucHV0LmZpbGVzWzBdXHJcblxyXG4gICAgICAvLyAgaWYoIWVycm9yKXtcclxuICAgICAgICAvLyAgdmFyIHBhY2tldD17XHJcbiAgICAgICAgICAvLyAgXCJuYW1lXCI6c2VsZi5pbWFnZU5hbWUoKSxcclxuICAgICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLmxvYWRJbWFnZShzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltYWdlLCBmaWxlKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsaW1hZ2UgPSByZXN1bHQ7IC8vb2J0YWluIHRoZSBVUkwgZm9yIGFuIHNwZWNpZmljIGNhbXBhaWduXHJcbiAgICAgICAgICAgIGFsZXJ0KFwidGhpcyBpcyB0aGVcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmxpbWFnZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvaW5mb2ltYWdlc1wiO1xyXG4gICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGUudGV4dFN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZS50ZXh0U3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdpbWFnZScsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJyksXHJcbiAgICAgICAgdmlld01vZGVsOiBWaWV3TW9kZWxcclxuICAgIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGgxPkNyZWF0ZSB5b3VyIGNhbXBhaWduczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgICA8aGVhZD5cXHJcXG5cXHRcXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcclxcblxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBDU1Mgc3R5bGVcXHJcXG5cXHRcXHQ8bGluayBocmVmPVxcXCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCI+IC0tPlxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBGb250IHN0eWxlIC0tPlxcclxcblxcdCAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxyXFxuXFx0XFx0PCEtLTxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj4tLT5cXHJcXG5cXHRcXHQ8IS0tIEdvb2dsZSBGb250cyAtLT5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmUnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PeHlnZW4nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcclxcblxcdFxcdDx0aXRsZT5jYW1wYWlnbjwvdGl0bGU+XFxyXFxuXFx0PC9oZWFkPlxcclxcblxcdDxib2R5PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93IG1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1haW4tbG9naW4gbWFpbi1jZW50ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxoNT5IZXJlIHlvdSBjYW4gY3JlYXRlIG5ldyBjYW1wYWlnbnMuPC9oNT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiXFxcIiBtZXRob2Q9XFxcInBvc3RcXFwiIGFjdGlvbj1cXFwiI1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1hZ2VOYW1lXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkltYWdlIE5hbWU8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6aW1hZ2VFcnJvclxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyIGZhXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8IS0tPGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiBpbWFnZU5hbWUnIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJpbWFnZU5hbWVcXFwiICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGhlIG5hbWUgb2YgdGhlIGNhbXBhaWduXFxcIiAvPlxcclxcbi0tPlxcclxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBhY2NlcHQ9XFxcImpwZWdcXFwiIGlkPVxcXCJpbWFnZXVwbG9hZGZvcm1fZmllbGRfMFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiB1cGxvYWRJbWFnZScgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwidXBsb2FkSW1hZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBsb2dpbi1idXR0b25cXFwiPlVwbG9hZCBJbWFnZTwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS0gIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPktvIEV4YW1wbGU8L2E+IC0tPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHQgPCEtLSBqUXVlcnkgKG5lY2Vzc2FyeSBmb3IgQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCBwbHVnaW5zKSAtLT5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG5cIjtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gVmlld01vZGVsKGN0eCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5jb250ZXh0PWN0eDtcclxuICAgIHNlbGYuc2VsZWN0aW9uID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICBzZWxmLmFjY2VwdGVkID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5yZWplY3RlZCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuYW5ub3RhdGlvbiA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xyXG5cclxuICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb0ltZ1N0YXQoc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5pbWcpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHJcblxyXG4gICAgICAgIHNlbGYuc2VsZWN0aW9uKHJlc3VsdC5zZWxlY3Rpb24pO1xyXG4gICAgICAgIHNlbGYuYWNjZXB0ZWQocmVzdWx0LmFjY2VwdGVkKTtcclxuICAgICAgICBzZWxmLnJlamVjdGVkKHJlc3VsdC5yZWplY3RlZCk7XHJcbiAgICAgICAgc2VsZi5hbm5vdGF0aW9uKHJlc3VsdC5hbm5vdGF0aW9uKTtcclxuXHJcblxyXG4gICAgfSk7XHJcbiAgICAvL3NlbGYudXNlcm5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gIHNlbGYuZnVsbG5hbWVFcnJvcih1bmRlZmluZWQpO1xyXG5cclxuXHJcblxyXG4gICAgLy9zZWxmLmZ1bGxuYW1lLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vICBzZWxmLmZ1bGxuYW1lRXJyb3IodW5kZWZpbmVkKTtcclxuICAvLyAgfSk7XHJcbiAgICBzZWxmLmFkZEltYWdlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb0ltZ1N0YXQoc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5pbWcpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHJcblxyXG4gICAgICAgICAgc2VsZi5zZWxlY3Rpb24ocmVzdWx0LnNlbGVjdGlvbik7XHJcbiAgICAgICAgICBzZWxmLmFjY2VwdGVkKHJlc3VsdC5hY2NlcHRlZCk7XHJcbiAgICAgICAgICBzZWxmLnJlamVjdGVkKHJlc3VsdC5yZWplY3RlZCk7XHJcbiAgICAgICAgICBzZWxmLmFubm90YXRpb24ocmVzdWx0LmFubm90YXRpb24pO1xyXG4gICAgICBhbGVydChcInRoaXMgaXMgdGhlIFwiKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltYWdlKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuaW1hZ2VJbmZvPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFsZXJ0KFwidGhpcyBpcyB0aGUgXCIrIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuaW1hZ2UpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLyMhL2luZm9pbWFnZXNcIjtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5lZGl0Y2FtcGFpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBlcnJvcj1mYWxzZTtcclxuXHJcbiAgICAgICAgLy92YXIgdHlwZT0gc2VsZi50eXBlKClcclxuICAgICAgICAvL2lmKHR5cGUgPT0gbWFzdGVyKXtcclxuICAgICAgICAgIC8vc2VsZi5jb250ZXh0Lm1hc3Rlcih0cnVlKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAvL2FsZXJ0KHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4pO1xyXG4gICAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5lZGl0Q2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmwsIHBhY2tldCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cclxuICAgICAgICAgICAgYWxlcnQoXCJFZGl0ZWRcIik7XHJcblxyXG5cclxuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLnRleHRTdGF0dXMpe1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGUudGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdpbWdzdGF0aXN0aWNzJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcclxuICAgICAgICB2aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbjwvZGl2PlxcclxcbjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG4gICAgPGhlYWQ+XFxyXFxuXFx0XFx0PG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgQ1NTIHN0eWxlXFxyXFxuXFx0XFx0PGxpbmsgaHJlZj1cXFwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPiAtLT5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgRm9udCBzdHlsZSAtLT5cXHJcXG5cXHQgICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcXFwiPlxcclxcblxcdFxcdDwhLS08bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcInN0eWxlLmNzc1xcXCI+LS0+XFxyXFxuXFx0XFx0PCEtLSBHb29nbGUgRm9udHMgLS0+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhc3Npb24rT25lJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3h5Z2VuJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHJcXG5cXHRcXHQ8dGl0bGU+QWRtaW48L3RpdGxlPlxcclxcblxcdDwvaGVhZD5cXHJcXG5cXHQ8Ym9keT5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvdyBtYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJtYWluLWxvZ2luIG1haW4tY2VudGVyXFxcIj5cXHJcXG5cXHRcXHRcXHQgICAgIDxkaXY+PGg1PkhlcmUgeW91IGNhbiBzZWUgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBzZWxlY3RlZCBjYW1wYWlnbi4gWW91IGNhbiBhbHNvIG1vZGlmeSB0aGUgcGFyYW1ldGVycyB5b3UgbmVlZCBhbmQgY2xpY2sgZWRpdC48L2g1PjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDxmb3JtIGNsYXNzPVxcXCJcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCIgYWN0aW9uPVxcXCIjXFxcIj5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpZFxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5TZWxlY3Rpb246IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBzZWxlY3Rpb25cXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJzZWxlY3Rpb25cXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwibmFtZVxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5BY2NlcHRlZDogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGFjY2VwdGVkXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiYWNjZXB0ZWRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdGF0dXNcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+UmVqZWN0ZWQ6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiByZWplY3RlZFxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcInJlamVjdGVkXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic2VsZWN0aW9uXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkFubm90YXRpb246IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBhbm5vdGF0aW9uXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiYW5ub3RhdGlvblxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogZWRpdGNhbXBhaWduJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJlZGl0Y2FtcGFpZ25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+RWRpdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IGFkZEltYWdlJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJhZGRJbWFnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5BZGQgaW1hZ2VzPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogaW1hZ2VJbmZvJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJpbWFnZUluZm9cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+SW1hZ2VzIGluZm9ybWF0aW9uPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdCA8IS0tIGpRdWVyeSAobmVjZXNzYXJ5IGZvciBCb290c3RyYXAncyBKYXZhU2NyaXB0IHBsdWdpbnMpIC0tPlxcclxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcblwiO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICByZXF1aXJlKCcuL3JlZ2lzdGVyaW5nJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL2xvZ2luJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL21hbmFnZXInKS5yZWdpc3RlcihvcHRpb25zKTtcclxuICAgIHJlcXVpcmUoJy4vY3JlYXRlJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL2NhbXBhaWduJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL2luZm9jYW1wYWlnbicpLnJlZ2lzdGVyKG9wdGlvbnMpO1xyXG4gICAgcmVxdWlyZSgnLi9pbWFnZScpLnJlZ2lzdGVyKG9wdGlvbnMpO1xyXG4gICAgcmVxdWlyZSgnLi9pbmZvaW1hZ2VzJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL2ltZ3N0YXRpc3RpY3MnKS5yZWdpc3RlcihvcHRpb25zKTtcclxuICAgIHJlcXVpcmUoJy4vd29ya2VycycpLnJlZ2lzdGVyKG9wdGlvbnMpO1xyXG4gICAgcmVxdWlyZSgnLi9pbmZvd29ya2VyJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL3N0YXRpc3RpY3MnKS5yZWdpc3RlcihvcHRpb25zKTtcclxuICAgIHJlcXVpcmUoJy4vdGFza3N1c2VyJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL2luZm90YXNrJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL3Rhc2tzZXNzaW9uJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL2hvbWUtcGFnZScpLnJlZ2lzdGVyKG9wdGlvbnMpO1xyXG4gICAgcmVxdWlyZSgnLi9mdWxsLW5hbWUnKS5yZWdpc3RlcihvcHRpb25zKTtcclxuICAgIHJlcXVpcmUoJy4vY3J1ZC1saXN0JykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbiAgICByZXF1aXJlKCcuL2xvY2FsLXN1bScpLnJlZ2lzdGVyKG9wdGlvbnMpO1xyXG4gICAgcmVxdWlyZSgnLi9yZW1vdGUtc3VtJykucmVnaXN0ZXIob3B0aW9ucyk7XHJcbn07XHJcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gVmlld01vZGVsKGN0eCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5jb250ZXh0PWN0eDtcclxuICAgIHNlbGYuaWQgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLm5hbWU9a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5uYW1lRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnN0YXR1cyA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuc2VsZWN0aW9uID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5zZWxlY3Rpb25XID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWxmLnNlbGVjdGlvbigpKTtcclxuICAgIH0pO1xyXG4gICAgc2VsZi5zZWxlY3Rpb25FcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYudGhyZXNob2xkID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi50aHJlc2ggPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlbGYudGhyZXNob2xkKCkpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLnRocmVzaG9sZEVycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5hbm5vdGF0aW9uID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5hbm5vdGF0aW9uVyA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VsZi5hbm5vdGF0aW9uKCkpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLmFubm90YXRpb25FcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuc2l6ZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYud2lkdGhQID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWxmLnNpemUoKSk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYuc2l6ZUVycm9yPWtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuaW1hZ2UgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLndvcmtlciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuZXhlY3V0aW9uID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5zdGF0aXN0aWNzID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5pbmZvQ2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmwpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHJcblxyXG4gICAgICAgIHNlbGYuaWQocmVzdWx0LmlkKTtcclxuICAgICAgICBzZWxmLm5hbWUocmVzdWx0Lm5hbWUpO1xyXG4gICAgICAgIHNlbGYuc3RhdHVzKHJlc3VsdC5zdGF0dXMpO1xyXG4gICAgICAgIHNlbGYuc2VsZWN0aW9uKHJlc3VsdC5zZWxlY3Rpb25fcmVwbGljYSk7XHJcbiAgICAgICAgc2VsZi50aHJlc2hvbGQocmVzdWx0LnRocmVzaG9sZCk7XHJcbiAgICAgICAgc2VsZi5hbm5vdGF0aW9uKHJlc3VsdC5hbm5vdGF0aW9uX3JlcGxpY2EpO1xyXG4gICAgICAgIHNlbGYuc2l6ZShyZXN1bHQuYW5ub3RhdGlvbl9zaXplKTtcclxuICAgICAgICBzZWxmLmltYWdlKHJlc3VsdC5pbWFnZSk7XHJcbiAgICAgICAgc2VsZi53b3JrZXIocmVzdWx0Lndvcmtlcik7XHJcbiAgICAgICAgc2VsZi5leGVjdXRpb24ocmVzdWx0LmV4ZWN1dGlvbik7XHJcbiAgICAgICAgc2VsZi5zdGF0aXN0aWNzKHJlc3VsdC5zdGF0aXN0aWNzKTtcclxuICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltYWdlPXNlbGYuaW1hZ2UoKVxyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMud29ya2Vycz1zZWxmLndvcmtlcigpXHJcbiAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5leGVjdXRpb249c2VsZi5leGVjdXRpb24oKVxyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuc3RhdGlzdGljcz1zZWxmLnN0YXRpc3RpY3MoKVxyXG4gICAgfSk7XHJcbiAgICAvL3NlbGYudXNlcm5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gIHNlbGYuZnVsbG5hbWVFcnJvcih1bmRlZmluZWQpO1xyXG5cclxuXHJcbiAgICAgIHNlbGYubmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi5uYW1lRXJyb3IodW5kZWZpbmVkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGYuc2VsZWN0aW9uVy5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi5zZWxlY3Rpb25FcnJvcih1bmRlZmluZWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2VsZi50aHJlc2guc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNlbGYudGhyZXNob2xkRXJyb3IodW5kZWZpbmVkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGYuYW5ub3RhdGlvblcuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNlbGYuYW5ub3RhdGlvbkVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxmLndpZHRoUC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi5zaXplRXJyb3IodW5kZWZpbmVkKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIC8vc2VsZi5mdWxsbmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgLy8gIH0pO1xyXG4gICAgc2VsZi5hZGRJbWFnZT0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBhbGVydChcInRoaXMgaXMgdGhlIFwiKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltYWdlKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbWFnZVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmltYWdlSW5mbz0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBhbGVydChcInRoaXMgaXMgdGhlIFwiKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltYWdlKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbmZvaW1hZ2VzXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuU3RhdGlzdGljcz0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBhbGVydChcInRoaXMgaXMgdGhlIFwiKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnN0YXRpc3RpY3MpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLyMhL3N0YXRpc3RpY3NcIjtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5jYW1wYWlnbldvcmtlcnM9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYWxlcnQoXCJ0aGlzIGlzIHRoZSBcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy53b3JrZXJzKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS93b3JrZXJzXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuc3RhcnRDYW1wYWlnbj0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLnN0YXJ0Y2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5leGVjdXRpb24pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgYWxlcnQoXCJUaGUgY2FtcGFpZ24gaGFzIHN0YXJ0ZWRcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5leGVjdXRpb24pO1xyXG4gICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi50ZXJtaW5hdGVDYW1wYWlnbj0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLnRlcm1pbmF0ZWNhbXBhaWduKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuZXhlY3V0aW9uKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgIGFsZXJ0KFwiVGhlIGNhbXBhaWduIGhhcyBzdGFydGVkXCIrIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuZXhlY3V0aW9uKTtcclxuICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuZWRpdGNhbXBhaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZXJyb3I9ZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzZWxmLm5hbWUoKSl7XHJcbiAgICAgICAgICBlcnJvcj10cnVlO1xyXG4gICAgICAgICAgc2VsZi5uYW1lRXJyb3IoXCJNb3JlIHRoYW4gdGhyZWUgY2hhcmFjdGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLnNlbGVjdGlvblcoKSAhPSBcIm51bWJlclwiKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLnNlbGVjdGlvbkVycm9yKFwiV3JpdGUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi50aHJlc2goKSAhPSBcIm51bWJlclwiKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLnRocmVzaG9sZEVycm9yKFwiV3JpdGUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5hbm5vdGF0aW9uVygpICE9IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYuYW5ub3RhdGlvbkVycm9yKFwiV3JpdGUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBzZWxmLndpZHRoUCgpICE9IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYuc2l6ZUVycm9yKFwiV3JpdGUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLy9lc3RhIHBhcnRlIGVzIHBhcmEgcG9uZXIgbGEgYmFycmEgZGUgdGFyZWFzIGRlc3B1w6lzIGRlbCBsb2dpblxyXG4gICAgLy8gIHNlbGYubG9nSW49ZnVuY3Rpb24oKXtcclxuICAgICAgLy8gICAgc2VsZi5jb250ZXh0LmxvZ2dlZCh0cnVlKTtcclxuICAvLyAgICB2YXIgZXJyb3I9ZmFsc2U7XHJcblxyXG4gICAgLy8gICAgaWYgKCFzZWxmLmZ1bGxuYW1lKCkpe1xyXG4gICAgICAvLyAgICBlcnJvcj10cnVlO1xyXG4gICAgICAgIC8vICBzZWxmLmZ1bGxuYW1lRXJyb3IoXCJUaGUgZnVsbCBuYW1lIG11c3QgYmUgZGlmZmVyZW50IGZyb20gdGhlIHByZXZpb3VzIG9uZVwiKTtcclxuLy8gICAgICAgIH1cclxuICAgICAgICBpZighZXJyb3Ipe1xyXG4gICAgICAgICAgICB2YXIgcGFja2V0PXtcclxuICAgICAgICAgICAgICBcIm5hbWVcIjpzZWxmLm5hbWUoKSxcclxuICAgICAgICAgICAgICBcInNlbGVjdGlvbl9yZXBsaWNhXCI6c2VsZi5zZWxlY3Rpb25XKCksXHJcbiAgICAgICAgICAgICAgXCJ0aHJlc2hvbGRcIjpzZWxmLnRocmVzaCgpLFxyXG4gICAgICAgICAgICAgIFwiYW5ub3RhdGlvbl9yZXBsaWNhXCI6c2VsZi5hbm5vdGF0aW9uVygpLFxyXG4gICAgICAgICAgICAgIFwiYW5ub3RhdGlvbl9zaXplXCI6c2VsZi53aWR0aFAoKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgLy92YXIgdHlwZT0gc2VsZi50eXBlKClcclxuICAgICAgICAvL2lmKHR5cGUgPT0gbWFzdGVyKXtcclxuICAgICAgICAgIC8vc2VsZi5jb250ZXh0Lm1hc3Rlcih0cnVlKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAvL2FsZXJ0KHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4pO1xyXG4gICAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5lZGl0Q2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmwsIHBhY2tldCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cclxuICAgICAgICAgICAgYWxlcnQoXCJFZGl0ZWRcIik7XHJcblxyXG5cclxuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLnRleHRTdGF0dXMpe1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGUudGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdpbmZvY2FtcGFpZ24nLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgICA8aGVhZD5cXHJcXG5cXHRcXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcclxcblxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBDU1Mgc3R5bGVcXHJcXG5cXHRcXHQ8bGluayBocmVmPVxcXCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCI+IC0tPlxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBGb250IHN0eWxlIC0tPlxcclxcblxcdCAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxyXFxuXFx0XFx0PCEtLTxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj4tLT5cXHJcXG5cXHRcXHQ8IS0tIEdvb2dsZSBGb250cyAtLT5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmUnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PeHlnZW4nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcclxcblxcdFxcdDx0aXRsZT5BZG1pbjwvdGl0bGU+XFxyXFxuXFx0PC9oZWFkPlxcclxcblxcdDxib2R5PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93IG1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1haW4tbG9naW4gbWFpbi1jZW50ZXJcXFwiPlxcclxcblxcdFxcdFxcdCAgICAgPGRpdj48aDU+SGVyZSB5b3UgY2FuIHNlZSB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIHNlbGVjdGVkIGNhbXBhaWduLiBZb3UgY2FuIGFsc28gbW9kaWZ5IHRoZSBwYXJhbWV0ZXJzIHlvdSBuZWVkIGFuZCBjbGljayBlZGl0LjwvaDU+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGZvcm0gY2xhc3M9XFxcIlxcXCIgbWV0aG9kPVxcXCJwb3N0XFxcIiBhY3Rpb249XFxcIiNcXFwiPlxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImlkXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPklEOiA8L2xhYmVsPiA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogaWRcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJpZFxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJuYW1lXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPk5hbWU6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBuYW1lXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwibmFtZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgIDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogbmFtZScgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcImNhbXBhaWduTmFtZVxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aGUgbmFtZSBvZiB0aGUgY2FtcGFpZ25cXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdGF0dXNcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+U3RhdHVzOiA8L2xhYmVsPiA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogc3RhdHVzXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwic3RhdHVzXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic2VsZWN0aW9uXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPlNlbGVjdGlvbiBXb3JrZXJzOiA8L2xhYmVsPiA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogc2VsZWN0aW9uXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwic2VsZWN0aW9uXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiBzZWxlY3Rpb24ndHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgIGlkPVxcXCJzZWxlY3Rpb25Xb3JrZXJzXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRoZSBudW1iZXIgb2Ygd29ya2Vyc1xcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRocmVzaG9sZFxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5UaHJlc2hvbGQgYmVmb3JlIGFubm90YXRpb246IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiB0aHJlc2hvbGRcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJ0aHJlc2hvbGRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1iaW5kID0ndGV4dGlucHV0OiB0aHJlc2hvbGQndHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInRocmVzaG9sZFxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aGUgdGhyZXNob2xkXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhbm5vdGF0aW9uXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkFubm90YXRpb24gV29ya2VyczogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGFubm90YXRpb25cXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJhbm5vdGF0aW9uXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiBhbm5vdGF0aW9uJyB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiYW5ub3RhdGlvbldvcmtlcnNcXFwiICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGhlIG51bWJlciBvZiB3b3JrZXJzXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzaXplXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPldpZHRoIG9mIHBpeGVscyBmb3IgYW5ub3RhdGlvbjogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IHNpemVcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJzaXplXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiBzaXplJyB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwid2lkdGhQaXhlbFxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aGUgbnVtYmVyIG9mIHBpeGVsc1xcXCIvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1hZ2VcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+SW1hZ2VzOiA8L2xhYmVsPiA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogaW1hZ2VcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJpbWFnZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIndvcmtlclxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5Xb3JrZXJzOiA8L2xhYmVsPiA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogd29ya2VyXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwid29ya2VyXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZXhlY3V0aW9uXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkV4ZWN1dGlvbiBVUkw6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBleGVjdXRpb25cXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJleGVjdXRpb25cXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzdGF0aXN0aWNzXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPlN0YXRpc3RpY3M6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBzdGF0aXN0aWNzXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwic3RhdGlzdGljc1xcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBlZGl0Y2FtcGFpZ24nIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImVkaXRjYW1wYWlnblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5FZGl0PC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogYWRkSW1hZ2UnIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImFkZEltYWdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgcmVhZC1idXR0b25cXFwiPkFkZCBpbWFnZXM8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBpbWFnZUluZm8nIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImltYWdlSW5mb1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5JbWFnZXMgaW5mb3JtYXRpb248L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBjYW1wYWlnbldvcmtlcnMnIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImNhbXBhaWduV29ya2Vyc1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5DYW1wYWlnbiBXb3JrZXJzPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogc3RhcnRDYW1wYWlnbicgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic3RhcnRDYW1wYWlnblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5TdGFydCBDYW1wYWlnbjwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IHRlcm1pbmF0ZUNhbXBhaWduJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJ0ZXJtaW5hdGVDYW1wYWlnblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5UZXJtaW5hdGUgQ2FtcGFpZ248L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBTdGF0aXN0aWNzJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJTdGF0aXN0aWNzXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgcmVhZC1idXR0b25cXFwiPlN0YXRpc3RpY3M8L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2Zvcm0+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0IDwhLS0galF1ZXJ5IChuZWNlc3NhcnkgZm9yIEJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcGx1Z2lucykgLS0+XFxyXFxuICAgIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxyXFxuXCI7XG4iLCIvKmpzbGludCBub2RlOnRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIga28gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1sna28nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2tvJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIFZpZXdNb2RlbChjdHgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuY29udGV4dD1jdHg7XHJcbiAgICAvL3NlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgICBzZWxmLmltYWdlcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xyXG4gICAgLy9zZWxmLnVzZXJuYW1lRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLmlkID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gIC8vICBzZWxmLm5hbWU9a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5jYW5vbmljYWwgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnN0YXRpc3RpY3MgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAvL3NlbGYuY2FuPWtvLm9ic2VydmFibGUoXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZy9pbWFnZS9kMjVjNzc4Zi0xMmMwLTQ2MzQtOGJjMS01OTE2NzZhNDgzMWFcIik7XHJcblxyXG4gICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5pbmZvSW1hZ2VzKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuaW1hZ2UpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICBzZWxmLmltYWdlcyhyZXN1bHQuaW1hZ2VzKTtcclxuICAgICAgICBzZWxmLmlkKHJlc3VsdC5pZCk7XHJcbiAgICAgIC8vICBzZWxmLm5hbWUocmVzdWx0Lm5hbWUpO1xyXG4gICAgICAgIHNlbGYuY2Fub25pY2FsKHJlc3VsdC5jYW5vbmljYWwpO1xyXG5cclxuXHJcbiAgLy8gICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybD1yZXN1bHQuaWQ7IC8vdG8gdXNlIHRoZSB1cmwgZXZlcnl3aGVyZSBpbiB0aGUgYXBwXHJcbiAgICB9KTtcclxuICAgIC8vc2VsZi51c2VybmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vICBzZWxmLmZ1bGxuYW1lLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICBzZWxmLmZ1bGxuYW1lRXJyb3IodW5kZWZpbmVkKTtcclxuICAgIC8vfSk7XHJcbiAgICAvL3NlbGYucGFzc3dvcmQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gIHNlbGYucGFzc3dvcmRFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgLy99KTtcclxuICAgIHNlbGYuZGVsZXRlID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgYWxlcnQoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlP1wiKVxyXG4gICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltZz1zZWxmLmltYWdlcygpW2luZGV4XS5pZFxyXG4gICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLmRlbGV0ZUltYWdlcyhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltZykudGhlbihmdW5jdGlvbihyZXN1bHQpe30pXHJcbiAgICAgIHNlbGYuaW1hZ2VzLnJlbW92ZSh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgc2VsZi5zdGF0aW1nID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgLy9hbGVydChcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/XCIpXHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuaW1nPXNlbGYuaW1hZ2VzKClbaW5kZXhdLmlkXHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb0ltZyhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltZykudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHNlbGYuc3RhdGlzdGljcyhyZXN1bHQuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5pbWdTdGF0aXN0aWNzPXNlbGYuc3RhdGlzdGljcygpXHJcbiAgICAgICAgYWxlcnQoXCJ0aGlzIGlzIHRoZVwiKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmltZ1N0YXRpc3RpY3MpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbWdzdGF0aXN0aWNzXCI7XHJcblxyXG4gICAgICB9KVxyXG4gICAgICAvL3NlbGYuaW1hZ2VzLnJlbW92ZSh0aGlzKTtcclxuICAgICAgfVxyXG5cclxuICAgIHNlbGYuaW5mbyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cclxuXHJcbiAgICAgIC8vZXN0YSBwYXJ0ZSBlcyBwYXJhIHBvbmVyIGxhIGJhcnJhIGRlIHRhcmVhcyBkZXNwdcOpcyBkZWwgbG9naW5cclxuICAgIC8vICBzZWxmLmxvZ0luPWZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vICAgIHNlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgICAgIC8vdmFyIGVycm9yPWZhbHNlO1xyXG5cclxuICAgICAgICAvL2lmICghc2VsZi5mdWxsbmFtZSgpKXtcclxuICAgICAgICAgIC8vZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIC8vc2VsZi5mdWxsbmFtZUVycm9yKFwiVGhlIGZ1bGwgbmFtZSBtdXN0IGJlIGRpZmZlcmVudCBmcm9tIHRoZSBwcmV2aW91cyBvbmVcIik7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9pZighZXJyb3Ipe1xyXG4gICAgICAgICAgLy92YXIgcGFja2V0PXtcclxuICAgICAgICAgICAgLy9cImZ1bGxuYW1lXCI6c2VsZi5mdWxsbmFtZSgpLFxyXG4gICAgICAgICAgICAvL1wicGFzc3dvcmRcIjpzZWxmLnBhc3N3b3JkKCksXHJcblxyXG4gICAgICAgICAgLy99O1xyXG4gICAgICAgIC8vdmFyIHR5cGU9IHNlbGYudHlwZSgpXHJcbiAgICAgICAgLy9pZih0eXBlID09IG1hc3Rlcil7XHJcbiAgICAgICAgICAvL3NlbGYuY29udGV4dC5tYXN0ZXIodHJ1ZSk7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5yZWFkQ2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgc2VsZi5pbWFnZXMocmVzdWx0LmltYWdlcyk7XHJcbiAgICAgICAgICBzZWxmLmlkKHJlc3VsdC5pZCk7XHJcbiAgICAgICAgICAvL3NlbGYubmFtZShyZXN1bHQubmFtZSk7XHJcbiAgICAgICAgICBzZWxmLmNhbm9uaWNhbChyZXN1bHQuY2Fub25pY2FsKTtcclxuICAgICAgLy8gICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmw9c2VsZi5jYW1wYWlnbnMoKVtpbmRleF0uaWQ7XHJcbi8vbXlPYnNlcnZhYmxlQXJyYXkoKVswXS5wcmljZVxyXG4gICAgICAgICAgYWxlcnQoJ1RoZSBlbGVtZW50IGlzICcgKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybCk7XHJcblxyXG4gICAgICAvLyAgYWxlcnQoaW5kZXgpO1xyXG5cclxuICAgICAgICAgIC8vc2VsZi5yZW1vdmVQZXJzb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHNlbGYucGVvcGxlLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvaW5mb2NhbXBhaWduXCI7XHJcbiAgICAgICAgICAvL3NlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb0NhbXBhaWduKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblxyXG4gICAgICAgICAgICAvL2FsZXJ0KHNlbGYuY2FtcGFpZ25zKHJlc3VsdC5jYW1wYWlnbnMpKTtcclxuXHJcblxyXG4gICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGUudGV4dFN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZS50ZXh0U3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2luZm9pbWFnZXMnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxoMT5JbmZvcm1hdGlvbiBvZiB0aGUgaW1hZ2VzPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICAgIDxoZWFkPlxcclxcblxcdFxcdDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0PCEtLSBXZWJzaXRlIENTUyBzdHlsZVxcclxcblxcdFxcdDxsaW5rIGhyZWY9XFxcImNzcy9ib290c3RyYXAubWluLmNzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj4gLS0+XFxyXFxuXFxyXFxuXFx0XFx0PCEtLSBXZWJzaXRlIEZvbnQgc3R5bGUgLS0+XFxyXFxuXFx0ICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjEvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXFxcIj5cXHJcXG5cXHRcXHQ8IS0tPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJzdHlsZS5jc3NcXFwiPi0tPlxcclxcblxcdFxcdDwhLS0gR29vZ2xlIEZvbnRzIC0tPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QYXNzaW9uK09uZScgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU94eWdlbicgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+XFxyXFxuXFxyXFxuXFx0XFx0PHRpdGxlPkFkbWluPC90aXRsZT5cXHJcXG5cXHQ8L2hlYWQ+XFxyXFxuXFx0PGJvZHk+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3cgbWFpblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwibWFpbi1sb2dpbiBtYWluLWNlbnRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGg1PkhlcmUgeW91IGNhbiBmaW5kIHlvdXIgY2FtcGFpZ25zLjwvaDU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGZvcm0gY2xhc3M9XFxcIlxcXCIgbWV0aG9kPVxcXCJwb3N0XFxcIiBhY3Rpb249XFxcIiNcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDx0YWJsZT5cXHJcXG4gICAgICAgICAgICAgIDx0aGVhZD48dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVxcXCIxXFxcIj4gSWQgICAgICA8L3RoPjx0aCBjb2xzcGFuPVxcXCIxXFxcIj4gICBOYW1lIG9mIHRoZSBDYW1wYWlnbiAgIDwvdGg+PHRoIGNvbHNwYW49XFxcIjFcXFwiPiAgU3RhdHVzICA8L3RoPjx0aD48L3RoPlxcclxcbiAgICAgICAgICAgICAgPC90cj48L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgPCEtLSBUb2RvOiBHZW5lcmF0ZSB0YWJsZSBib2R5IC0tPlxcclxcbiAgICAgICAgICAgICAgPHRib2R5IGRhdGEtYmluZD0gXFxcImZvcmVhY2g6IGltYWdlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGlkXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiaWRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gICAgPHRkPjxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBjYW5vbmljYWxcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJuYW1lXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+IC0tPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogY2Fub25pY2FsXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiY2Fub25pY2FsXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuaW5mby5iaW5kKCRkYXRhLCAkaW5kZXgoKSlcXFwiPkltYWdlIEluZm9ybWF0aW9uPC9hPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICA8L3RhYmxlPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGRhdGEtYmluZD0gXFxcImZvcmVhY2g6IGltYWdlc1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmRlbGV0ZS5iaW5kKCRkYXRhLCAkaW5kZXgoKSlcXFwidHlwZT1cXFwiYnV0dG9uXFxcIj54PC9hPlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuc3RhdGltZy5iaW5kKCRkYXRhLCAkaW5kZXgoKSkgXFxcInR5cGU9XFxcImJ1dHRvblxcXCI+U3RhdGlzdGljczwvYT5cXHJcXG4gICAgICAgICAgICA8YSB0aXRsZT1cXFwiSW1hZ2UgMVxcXCIgaHJlZj1cXFwiI1xcXCIgPlxcclxcbiAgICAgICAgICAgICAgPGltZyBkYXRhLWJpbmQ9XFxcImF0dHI6e3NyYzogJ2h0dHA6Ly9hd3QuaWZtbGVkaXQub3JnJysgY2Fub25pY2FsfVxcXCIgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8IS0tICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgMlxcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwidGh1bWJuYWlsIGltZy1yZXNwb25zaXZlXFxcIiBzcmM9XFxcIi8vcGxhY2Vob2xkLml0LzYwMHgzNTAvMjI1NUVFXFxcIj48L2E+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgM1xcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwidGh1bWJuYWlsIGltZy1yZXNwb25zaXZlXFxcIiBzcmM9XFxcIi8vcGxhY2Vob2xkLml0LzYwMHgzNTAvNDQ5OTU1L0ZGRlxcXCI+PC9hPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtc20tNCBjb2wteHMtNlxcXCI+PGEgdGl0bGU9XFxcIkltYWdlIDRcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwLzk5MjIzM1xcXCI+PC9hPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtc20tNCBjb2wteHMtNlxcXCI+PGEgdGl0bGU9XFxcIkltYWdlIDVcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwLzIyNTVFRVxcXCI+PC9hPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtc20tNCBjb2wteHMtNlxcXCI+PGEgdGl0bGU9XFxcIkltYWdlIDZcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwLzQ0OTk1NS9GRkZcXFwiPjwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPjxhIHRpdGxlPVxcXCJJbWFnZSA4XFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiIHNyYz1cXFwiLy9wbGFjZWhvbGQuaXQvNjAweDM1MC83NzdcXFwiPjwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPjxhIHRpdGxlPVxcXCJJbWFnZSA5XFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiIHNyYz1cXFwiLy9wbGFjZWhvbGQuaXQvNjAweDM1MC85OTIyMzNcXFwiPjwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPjxhIHRpdGxlPVxcXCJJbWFnZSAxMFxcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwidGh1bWJuYWlsIGltZy1yZXNwb25zaXZlXFxcIiBzcmM9XFxcIi8vcGxhY2Vob2xkLml0LzYwMHgzNTAvRUVFXFxcIj48L2E+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgMTFcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwLzQ0OTk1NS9GRkZcXFwiPjwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPjxhIHRpdGxlPVxcXCJJbWFnZSAxMlxcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwidGh1bWJuYWlsIGltZy1yZXNwb25zaXZlXFxcIiBzcmM9XFxcIi8vcGxhY2Vob2xkLml0LzYwMHgzNTAvREREXFxcIj48L2E+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgMTNcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwLzk5MjIzM1xcXCI+PC9hPjwvZGl2PiAtLT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGhyPlxcclxcblxcclxcbiAgICAgICAgPGhyPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiB0YWJpbmRleD1cXFwiLTFcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1cXFwibXlNb2RhbFxcXCIgcm9sZT1cXFwiZGlhbG9nXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXHJcXG4gICAgXFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwiY2xvc2VcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+w5c8L2J1dHRvbj5cXHJcXG4gICAgXFx0XFx0PGgzIGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+SGVhZGluZzwvaDM+XFxyXFxuICAgIFxcdDwvZGl2PlxcclxcbiAgICBcXHQ8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj5cXHJcXG5cXHJcXG4gICAgXFx0PC9kaXY+XFxyXFxuICAgIFxcdDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxyXFxuICAgIFxcdFxcdDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCI+Q2xvc2U8L2J1dHRvbj5cXHJcXG4gICAgXFx0PC9kaXY+XFxyXFxuICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBpbmZvJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJpbmZvXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgbG9naW4tYnV0dG9uXFxcIj5DaGVjazwvYnV0dG9uPlxcclxcblxcclxcblxcdFxcdCA8IS0tIGpRdWVyeSAobmVjZXNzYXJ5IGZvciBCb290c3RyYXAncyBKYXZhU2NyaXB0IHBsdWdpbnMpIC0tPlxcclxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcblwiO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBWaWV3TW9kZWwoY3R4KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmNvbnRleHQ9Y3R4O1xyXG4gICAgc2VsZi5pZCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYudHlwZSA9a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5jYW1wYWlnbiA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuc2Vzc2lvbiA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuc3RhdGlzdGljcyA9IGtvLm9ic2VydmFibGUoKTtcclxuXHJcbiAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRhc2sudGFza0luZm8oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmxUYXNrKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblxyXG4gICAgICAgIHNlbGYuaWQocmVzdWx0LmlkKTtcclxuICAgICAgICBzZWxmLnR5cGUocmVzdWx0LnR5cGUpO1xyXG4gICAgICAgIHNlbGYuY2FtcGFpZ24ocmVzdWx0LmNhbXBhaWduKTtcclxuICAgICAgICBzZWxmLnNlc3Npb24ocmVzdWx0LnNlc3Npb24pO1xyXG4gICAgICAgIHNlbGYuc3RhdGlzdGljcyhyZXN1bHQuc3RhdGlzdGljcyk7XHJcbiAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5zZXNzaW9uPXNlbGYuc2Vzc2lvbigpXHJcbiAgICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5zdGF0aXNUYXNrPXNlbGYuc3RhdGlzdGljcygpXHJcbiAgICAgICAgLy9zZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmV4ZWN1dGlvbj1zZWxmLmV4ZWN1dGlvbigpXHJcbiAgICAgICAgLy9zZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnN0YXRpc3RpY3M9c2VsZi5zdGF0aXN0aWNzKClcclxuICAgIH0pO1xyXG4gICAgLy9zZWxmLnVzZXJuYW1lLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vICBzZWxmLmZ1bGxuYW1lRXJyb3IodW5kZWZpbmVkKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvL3NlbGYuZnVsbG5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gIHNlbGYuZnVsbG5hbWVFcnJvcih1bmRlZmluZWQpO1xyXG4gIC8vICB9KTtcclxuICAgIHNlbGYuYWRkSW1hZ2U9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYWxlcnQoXCJ0aGlzIGlzIHRoZSBcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5pbWFnZSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvaW1hZ2VcIjtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5pbWFnZUluZm89IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYWxlcnQoXCJ0aGlzIGlzIHRoZSBcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5pbWFnZSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvaW5mb2ltYWdlc1wiO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLlN0YXRpc3RpY3M9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYWxlcnQoXCJ0aGlzIGlzIHRoZSBcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5zdGF0aXN0aWNzKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9zdGF0aXN0aWNzXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGYuY2FtcGFpZ25Xb3JrZXJzPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFsZXJ0KFwidGhpcyBpcyB0aGUgXCIrIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMud29ya2Vycyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvd29ya2Vyc1wiO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnN0YXJ0V29ya2luZ1Nlc3Npb249IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50YXNrLnN0YXJ0c2Vzc2lvbihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnNlc3Npb24pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgYWxlcnQoXCJUaGUgc2Vzc2lvbiBoYXMgc3RhcnRlZCBcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5zZXNzaW9uKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS90YXNrc2Vzc2lvblwiO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUudGV4dFN0YXR1cz09NDA0IHx8IGUudGV4dFN0YXR1cz09NDEwKVxyXG4gICAgICAgIGFsZXJ0KFwiTm8gV29yayBBdmFpbGFibGVcIik7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLnRlcm1pbmF0ZUNhbXBhaWduPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24udGVybWluYXRlY2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5leGVjdXRpb24pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgYWxlcnQoXCJUaGUgY2FtcGFpZ24gaGFzIHN0YXJ0ZWRcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5leGVjdXRpb24pO1xyXG4gICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5lZGl0Y2FtcGFpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBlcnJvcj1mYWxzZTtcclxuICAgICAgICBpZiAoIXNlbGYubmFtZSgpKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLm5hbWVFcnJvcihcIk1vcmUgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuc2VsZWN0aW9uVygpICE9IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0aW9uRXJyb3IoXCJXcml0ZSBhIG51bWJlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLnRocmVzaCgpICE9IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYudGhyZXNob2xkRXJyb3IoXCJXcml0ZSBhIG51bWJlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmFubm90YXRpb25XKCkgIT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICBlcnJvcj10cnVlO1xyXG4gICAgICAgICAgc2VsZi5hbm5vdGF0aW9uRXJyb3IoXCJXcml0ZSBhIG51bWJlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIHNlbGYud2lkdGhQKCkgIT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICBlcnJvcj10cnVlO1xyXG4gICAgICAgICAgc2VsZi5zaXplRXJyb3IoXCJXcml0ZSBhIG51bWJlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAvL2VzdGEgcGFydGUgZXMgcGFyYSBwb25lciBsYSBiYXJyYSBkZSB0YXJlYXMgZGVzcHXDqXMgZGVsIGxvZ2luXHJcbiAgICAvLyAgc2VsZi5sb2dJbj1mdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICBzZWxmLmNvbnRleHQubG9nZ2VkKHRydWUpO1xyXG4gIC8vICAgIHZhciBlcnJvcj1mYWxzZTtcclxuXHJcbiAgICAvLyAgICBpZiAoIXNlbGYuZnVsbG5hbWUoKSl7XHJcbiAgICAgIC8vICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgLy8gIHNlbGYuZnVsbG5hbWVFcnJvcihcIlRoZSBmdWxsIG5hbWUgbXVzdCBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgcHJldmlvdXMgb25lXCIpO1xyXG4vLyAgICAgICAgfVxyXG4gICAgICAgIGlmKCFlcnJvcil7XHJcbiAgICAgICAgICAgIHZhciBwYWNrZXQ9e1xyXG4gICAgICAgICAgICAgIFwibmFtZVwiOnNlbGYubmFtZSgpLFxyXG4gICAgICAgICAgICAgIFwic2VsZWN0aW9uX3JlcGxpY2FcIjpzZWxmLnNlbGVjdGlvblcoKSxcclxuICAgICAgICAgICAgICBcInRocmVzaG9sZFwiOnNlbGYudGhyZXNoKCksXHJcbiAgICAgICAgICAgICAgXCJhbm5vdGF0aW9uX3JlcGxpY2FcIjpzZWxmLmFubm90YXRpb25XKCksXHJcbiAgICAgICAgICAgICAgXCJhbm5vdGF0aW9uX3NpemVcIjpzZWxmLndpZHRoUCgpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAvL3ZhciB0eXBlPSBzZWxmLnR5cGUoKVxyXG4gICAgICAgIC8vaWYodHlwZSA9PSBtYXN0ZXIpe1xyXG4gICAgICAgICAgLy9zZWxmLmNvbnRleHQubWFzdGVyKHRydWUpO1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgIC8vYWxlcnQoc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbik7XHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLmVkaXRDYW1wYWlnbihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybCwgcGFja2V0KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblxyXG4gICAgICAgICAgICBhbGVydChcIkVkaXRlZFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGUudGV4dFN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZS50ZXh0U3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgLy99O1xyXG59XHJcblxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2luZm90YXNrJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcclxuICAgICAgICB2aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbjwvZGl2PlxcclxcbjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG4gICAgPGhlYWQ+XFxyXFxuXFx0XFx0PG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgQ1NTIHN0eWxlXFxyXFxuXFx0XFx0PGxpbmsgaHJlZj1cXFwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPiAtLT5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgRm9udCBzdHlsZSAtLT5cXHJcXG5cXHQgICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcXFwiPlxcclxcblxcdFxcdDwhLS08bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcInN0eWxlLmNzc1xcXCI+LS0+XFxyXFxuXFx0XFx0PCEtLSBHb29nbGUgRm9udHMgLS0+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhc3Npb24rT25lJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3h5Z2VuJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHJcXG5cXHRcXHQ8dGl0bGU+QWRtaW48L3RpdGxlPlxcclxcblxcdDwvaGVhZD5cXHJcXG5cXHQ8Ym9keT5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvdyBtYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJtYWluLWxvZ2luIG1haW4tY2VudGVyXFxcIj5cXHJcXG5cXHRcXHRcXHQgICAgIDxkaXY+PGg1PkhlcmUgeW91IGNhbiBzZWUgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBzZWxlY3RlZCBjYW1wYWlnbi4gWW91IGNhbiBhbHNvIG1vZGlmeSB0aGUgcGFyYW1ldGVycyB5b3UgbmVlZCBhbmQgY2xpY2sgZWRpdC48L2g1PjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDxmb3JtIGNsYXNzPVxcXCJcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCIgYWN0aW9uPVxcXCIjXFxcIj5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpZFxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5JRDogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGlkXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiaWRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwidHlwZVxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5UeXBlOiA8L2xhYmVsPiA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogdHlwZVxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcInR5cGVcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJjYW1wYWlnblxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5DYW1wYWlnbjogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGNhbXBhaWduXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiY2FtcGFpZ25cXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzZXNzaW9uXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPlNlc3Npb246IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBzZXNzaW9uXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwic2Vzc2lvblxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN0YXRpc3RpY3NcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+U3RhdGlzdGljczogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IHN0YXRpc3RpY3NcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJzdGF0aXN0aWNzXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogc3RhcnRXb3JraW5nU2Vzc2lvbicgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic3RhcnRXb3JraW5nU2Vzc2lvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5TdGFydCBXb3JraW5nIFNlc3Npb248L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQ8IS0tXFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogZWRpdGNhbXBhaWduJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJlZGl0Y2FtcGFpZ25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+RWRpdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IGFkZEltYWdlJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJhZGRJbWFnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5BZGQgaW1hZ2VzPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogaW1hZ2VJbmZvJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJpbWFnZUluZm9cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+SW1hZ2VzIGluZm9ybWF0aW9uPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogY2FtcGFpZ25Xb3JrZXJzJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJjYW1wYWlnbldvcmtlcnNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+Q2FtcGFpZ24gV29ya2VyczwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IHN0YXJ0V29ya2luZ1Nlc3Npb24nIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInN0YXJ0V29ya2luZ1Nlc3Npb25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+U3RhcnQgV29ya2luZyBTZXNzaW9uPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogdGVybWluYXRlQ2FtcGFpZ24nIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInRlcm1pbmF0ZUNhbXBhaWduXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgcmVhZC1idXR0b25cXFwiPlRlcm1pbmF0ZSBDYW1wYWlnbjwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IFN0YXRpc3RpY3MnIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcIlN0YXRpc3RpY3NcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+U3RhdGlzdGljczwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PiAtLT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2Zvcm0+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0IDwhLS0galF1ZXJ5IChuZWNlc3NhcnkgZm9yIEJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcGx1Z2lucykgLS0+XFxyXFxuICAgIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxyXFxuXCI7XG4iLCIvKmpzbGludCBub2RlOnRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIga28gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1sna28nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2tvJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIFZpZXdNb2RlbChjdHgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuY29udGV4dD1jdHg7XHJcbiAgICBzZWxmLmlkID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5mdWxsbmFtZT1rby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnNlbGVjdG9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5hbm5vdGF0b3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnNlbGVjdG9yMiA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuYW5ub3RhdG9yMiA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuc2VsZWN0aW9uID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5hbm5vdGF0aW9uID0ga28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb1dvcmtlcihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cclxuXHJcbiAgICAgICAgc2VsZi5pZChyZXN1bHQuaWQpO1xyXG4gICAgICAgIHNlbGYuZnVsbG5hbWUocmVzdWx0LmZ1bGxuYW1lKTtcclxuICAgICAgICBzZWxmLnNlbGVjdG9yKHJlc3VsdC5zZWxlY3Rvcik7XHJcbiAgICAgICAgc2VsZi5hbm5vdGF0b3IocmVzdWx0LmFubm90YXRvcik7XHJcbiAgICAgICAgc2VsZi5zZWxlY3Rpb24ocmVzdWx0LnNlbGVjdGlvbik7XHJcbiAgICAgICAgc2VsZi5hbm5vdGF0aW9uKHJlc3VsdC5hbm5vdGF0aW9uKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RvcigpPT10cnVlKXtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0b3IyKFwiWWVzXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBzZWxmLnNlbGVjdG9yMihcIk5vXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmFubm90YXRvcigpPT10cnVlKXtcclxuICAgICAgICAgIHNlbGYuYW5ub3RhdG9yMihcIlllc1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgc2VsZi5hbm5vdGF0b3IyKFwiTm9cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMud29ya2VyU2VsZWN0aW9uPXNlbGYuc2VsZWN0aW9uKClcclxuICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlckFubm90YXRpb249c2VsZi5hbm5vdGF0aW9uKClcclxuXHJcbiAgICB9KTtcclxuICAgIC8vc2VsZi51c2VybmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vc2VsZi5mdWxsbmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgLy8gIH0pO1xyXG4gICAgc2VsZi5lbmFibGVXb3JrZXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uZW5hYmxlV29ya2VyU2VsKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMud29ya2VyU2VsZWN0aW9uKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb1dvcmtlcihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHNlbGYuc2VsZWN0b3IocmVzdWx0LnNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RvcigpPT10cnVlKXtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0b3IyKFwiWWVzXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBzZWxmLnNlbGVjdG9yMihcIk5vXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBhbGVydChcImVuYWJsZWQgZm9yIHNlbGVjdGlvbiBcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy53b3JrZXJTZWxlY3Rpb24pO1xyXG5cclxuICAgICAgfSkgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbWFnZVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmRpc2FibGVXb3JrZXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uZGlzYWJsZVdvcmtlclNlbChzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlclNlbGVjdGlvbikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb1dvcmtlcihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgc2VsZi5zZWxlY3RvcihyZXN1bHQuc2VsZWN0b3IpO1xyXG4gICAgICAgICAgaWYgKHNlbGYuc2VsZWN0b3IoKT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0b3IyKFwiWWVzXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdG9yMihcIk5vXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgYWxlcnQoXCJkaXNhYmxlZCBmb3Igc2VsZWN0aW9uIFwiKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlclNlbGVjdGlvbik7XHJcblxyXG4gICAgICB9KSAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvaW1hZ2VcIjtcclxuICAgIH07XHJcblxyXG4gICAgc2VsZi5lbmFibGVXb3JrZXJBbm5vdGF0aW9uPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uZW5hYmxlV29ya2VyQW5uKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMud29ya2VyQW5ub3RhdGlvbikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb1dvcmtlcihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgc2VsZi5hbm5vdGF0b3IocmVzdWx0LmFubm90YXRvcik7XHJcbiAgICAgICAgICBpZiAoc2VsZi5hbm5vdGF0b3IoKT09dHJ1ZSl7XHJcbiAgICAgICAgICAgIHNlbGYuYW5ub3RhdG9yMihcIlllc1wiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2VsZi5hbm5vdGF0b3IyKFwiTm9cIilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICBhbGVydChcImVuYWJsZWQgZm9yIGFubm90YXRpb24gXCIrIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMud29ya2VyQW5ub3RhdGlvbik7XHJcblxyXG4gICAgICB9KS8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbWFnZVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWxmLmRpc2FibGVXb3JrZXJBbm5vdGF0aW9uPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uZGlzYWJsZVdvcmtlckFubihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlckFubm90YXRpb24pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLmluZm9Xb3JrZXIoc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy53b3JrZXIpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICAgIHNlbGYuYW5ub3RhdG9yKHJlc3VsdC5hbm5vdGF0b3IpO1xyXG4gICAgICAgICAgaWYgKHNlbGYuYW5ub3RhdG9yKCk9PXRydWUpe1xyXG4gICAgICAgICAgICBzZWxmLmFubm90YXRvcjIoXCJZZXNcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNlbGYuYW5ub3RhdG9yMihcIk5vXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgYWxlcnQoXCJkaXNhYmxlZCBmb3IgYW5ub3RhdGlvbiBcIisgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy53b3JrZXJBbm5vdGF0aW9uKTtcclxuXHJcbiAgICB9KSAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLyMhL2ltYWdlXCI7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdpbmZvd29ya2VyJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcclxuICAgICAgICB2aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcclxcbjwvZGl2PlxcclxcbjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG4gICAgPGhlYWQ+XFxyXFxuXFx0XFx0PG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgQ1NTIHN0eWxlXFxyXFxuXFx0XFx0PGxpbmsgaHJlZj1cXFwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPiAtLT5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgRm9udCBzdHlsZSAtLT5cXHJcXG5cXHQgICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcXFwiPlxcclxcblxcdFxcdDwhLS08bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcInN0eWxlLmNzc1xcXCI+LS0+XFxyXFxuXFx0XFx0PCEtLSBHb29nbGUgRm9udHMgLS0+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhc3Npb24rT25lJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3h5Z2VuJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHJcXG5cXHRcXHQ8dGl0bGU+QWRtaW48L3RpdGxlPlxcclxcblxcdDwvaGVhZD5cXHJcXG5cXHQ8Ym9keT5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvdyBtYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJtYWluLWxvZ2luIG1haW4tY2VudGVyXFxcIj5cXHJcXG5cXHRcXHRcXHQgICAgIDxkaXY+PGg1PkhlcmUgeW91IGNhbiBzZWUgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBzZWxlY3RlZCBjYW1wYWlnbi4gWW91IGNhbiBhbHNvIG1vZGlmeSB0aGUgcGFyYW1ldGVycyB5b3UgbmVlZCBhbmQgY2xpY2sgZWRpdC48L2g1PjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDxmb3JtIGNsYXNzPVxcXCJcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCIgYWN0aW9uPVxcXCIjXFxcIj5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpZFxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5JRDogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGlkXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiaWRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJmdWxsbmFtZVxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5GdWxsIE5hbWU6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBmdWxsbmFtZVxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcImZ1bGxuYW1lXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic2VsZWN0b3JcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+U2VsZWN0b3I6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBzZWxlY3RvcjJcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJzZWxlY3RvclxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFubm90YXRvclxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5Bbm5vdGF0b3I6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBhbm5vdGF0b3IyXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiYW5ub3RhdG9yXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwic2VsZWN0aW9uXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPlNlbGVjdGlvbjogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IHNlbGVjdGlvblxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcInNlbGVjdGlvblxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFubm90YXRpb25cXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+QW5ub3RhdGlvbjogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGFubm90YXRpb25cXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJhbm5vdGF0aW9uXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IGVuYWJsZVdvcmtlclNlbGVjdGlvbicgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiZW5hYmxlV29ya2VyU2VsZWN0aW9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgcmVhZC1idXR0b25cXFwiPkVuYWJsZSBmb3IgU2VsZWN0aW9uPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogZGlzYWJsZVdvcmtlclNlbGVjdGlvbicgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiZGlzYWJsZVdvcmtlclNlbGVjdGlvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5EaXNhYmxlIGZvciBzZWxlY3Rpb248L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBlbmFibGVXb3JrZXJBbm5vdGF0aW9uJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJlbmFibGVXb3JrZXJBbm5vdGF0aW9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgcmVhZC1idXR0b25cXFwiPkVuYWJsZSBmb3IgQW5ub3RhdGlvbjwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IGRpc2FibGVXb3JrZXJBbm5vdGF0aW9uJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJkaXNhYmxlV29ya2VyQW5ub3RhdGlvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIHJlYWQtYnV0dG9uXFxcIj5EaXNhYmxlIGZvciBBbm5vdGF0aW9uPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdCA8IS0tIGpRdWVyeSAobmVjZXNzYXJ5IGZvciBCb290c3RyYXAncyBKYXZhU2NyaXB0IHBsdWdpbnMpIC0tPlxcclxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcblwiO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBWaWV3TW9kZWwoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmEgPSBrby5vYnNlcnZhYmxlKCcxJyk7XHJcbiAgICBzZWxmLmFFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuYiA9IGtvLm9ic2VydmFibGUoJzInKTtcclxuICAgIHNlbGYuYkVycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5yZXN1bHQgPSBrby5vYnNlcnZhYmxlKCcnKTtcclxuICAgIHNlbGYuYS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuYUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYuYi5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuYkVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYuYWRkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gcGFyc2VJbnQoc2VsZi5hKCksIDEwKSxcclxuICAgICAgICAgICAgYiA9IHBhcnNlSW50KHNlbGYuYigpLCAxMCk7XHJcbiAgICAgICAgc2VsZi5yZXN1bHQoJycpO1xyXG4gICAgICAgIGlmIChpc05hTihhKSkge1xyXG4gICAgICAgICAgICBzZWxmLmFFcnJvcignSW52YWxpZCBEYXRhJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc05hTihiKSkge1xyXG4gICAgICAgICAgICBzZWxmLmJFcnJvcignSW52YWxpZCBEYXRhJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5yZXN1bHQoYSArIGIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdsb2NhbC1zdW0nLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7J2hhcy1lcnJvcic6IGFFcnJvcn1cXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYVxcXCI+QTwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgZGF0YS1iaW5kPSd2YWx1ZTogYScgdHlwZT0ndGV4dCcgaWQ9XFxcImFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJBXFxcIj5cXHJcXG4gICAgICAgIDxwIGRhdGEtYmluZD1cXFwidGV4dDogYUVycm9yXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsnaGFzLWVycm9yJzogYkVycm9yfVxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJiXFxcIj5CPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogYicgdHlwZT0ndGV4dCcgaWQ9XFxcImJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJCXFxcIj5cXHJcXG4gICAgICAgIDxwIGRhdGEtYmluZD1cXFwidGV4dDogYkVycm9yXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+PC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBhZGRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgYXJpYS1sYWJlbD1cXFwiQWRkXFxcIj5cXHJcXG4gICAgICAgIEFkZFxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJyZXN1bHRcXFwiPkEgKyBCPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogcmVzdWx0JyB0eXBlPSd0ZXh0JyBpZD1cXFwicmVzdWx0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBWaWV3TW9kZWwoY3R4KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmNvbnRleHQ9Y3R4O1xyXG4gICAgc2VsZi51c2VybmFtZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYudXNlcm5hbWVFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYucGFzc3dvcmQgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnBhc3N3b3JkRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgc2VsZi51c2VybmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYudXNlcm5hbWVFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLnBhc3N3b3JkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5wYXNzd29yZEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWxmLmxvZ0luID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgIC8vZXN0YSBwYXJ0ZSBlcyBwYXJhIHBvbmVyIGxhIGJhcnJhIGRlIHRhcmVhcyBkZXNwdcOpcyBkZWwgbG9naW5cclxuICAgIC8vICBzZWxmLmxvZ0luPWZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vICAgIHNlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgICAgIHZhciBlcnJvcj1mYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCFzZWxmLnVzZXJuYW1lKCkpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYudXNlcm5hbWVFcnJvcihcIk1vcmUgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYucGFzc3dvcmQoKSl7XHJcbiAgICAgICAgICBlcnJvcj10cnVlO1xyXG4gICAgICAgICAgc2VsZi5wYXNzd29yZEVycm9yKFwiTW9yZSB0aGFuIGVpZ2h0IGNoYXJhY3RlcnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFlcnJvcil7XHJcbiAgICAgICAgICB2YXIgcGFja2V0PXtcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOnNlbGYudXNlcm5hbWUoKSxcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOnNlbGYucGFzc3dvcmQoKSxcclxuXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXNlci5sb2dpblVzZXIocGFja2V0KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgICAvLyAgc2VsZi5jb250ZXh0Lm1hc3RlckxvZ2dlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvZWRpdFwiXHJcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW49cmVzdWx0OyAvLyBzYXZlIHRoZSB0b2tlbiB0byBiZSB1c2VkIGV2ZXJ5d2hlcmUgaW4gdGhlIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGFsZXJ0KFwidGhpcyBpcyB0aGVcIiArIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4pXHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50ZXh0U3RhdHVzKXtcclxuICAgICAgICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2xvZ2luJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcclxuICAgICAgICB2aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8aDE+TG9nIEluPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICAgIDxoZWFkPlxcclxcblxcdFxcdDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0PCEtLSBXZWJzaXRlIENTUyBzdHlsZVxcclxcblxcdFxcdDxsaW5rIGhyZWY9XFxcImNzcy9ib290c3RyYXAubWluLmNzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj4gLS0+XFxyXFxuXFxyXFxuXFx0XFx0PCEtLSBXZWJzaXRlIEZvbnQgc3R5bGUgLS0+XFxyXFxuXFx0ICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjEvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXFxcIj5cXHJcXG5cXHRcXHQ8IS0tPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJzdHlsZS5jc3NcXFwiPi0tPlxcclxcblxcdFxcdDwhLS0gR29vZ2xlIEZvbnRzIC0tPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QYXNzaW9uK09uZScgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU94eWdlbicgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+XFxyXFxuXFxyXFxuXFx0XFx0PHRpdGxlPkFkbWluPC90aXRsZT5cXHJcXG5cXHQ8L2hlYWQ+XFxyXFxuXFx0PGJvZHk+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3cgbWFpblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwibWFpbi1sb2dpbiBtYWluLWNlbnRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGg1PlBsZWFzZSBsb2cgaW4uPC9oNT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiXFxcIiBtZXRob2Q9XFxcInBvc3RcXFwiIGFjdGlvbj1cXFwiI1xcXCI+XFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+VXNlcm5hbWU8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6dXNlcm5hbWVFcnJvclxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VycyBmYVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiB1c2VybmFtZSd0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAgaWQ9XFxcInVzZXJuYW1lXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdXIgVXNlcm5hbWVcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6cGFzc3dvcmRFcnJvclxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWxnXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgZGF0YS1iaW5kID0ndGV4dGlucHV0OiBwYXNzd29yZCd0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdXIgUGFzc3dvcmRcXFwiLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBsb2dJbicgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwibG9nSW5cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBsb2dpbi1idXR0b25cXFwiPkxvZyBJbjwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHQgPCEtLSBqUXVlcnkgKG5lY2Vzc2FyeSBmb3IgQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCBwbHVnaW5zKSAtLT5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG5cIjtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gVmlld01vZGVsKGN0eCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5jb250ZXh0PWN0eDtcclxuICAgIHNlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgICBzZWxmLmNvbnRleHQubWFzdGVyTG9nZ2VkKGZhbHNlKTtcclxuICAgIHNlbGYudXNlcm5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAvL3NlbGYudXNlcm5hbWVFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuZnVsbG5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnR5cGU9a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5mdWxsbmFtZUVycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5wYXNzd29yZCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYucGFzc3dvcmRFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXNlci5yZWFkVXNlcihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgc2VsZi5mdWxsbmFtZShyZXN1bHQuZnVsbG5hbWUpO1xyXG4gICAgICAgIHNlbGYudXNlcm5hbWUocmVzdWx0LnVzZXJuYW1lKTtcclxuICAgICAgICBzZWxmLnR5cGUocmVzdWx0LnR5cGUpO1xyXG4gICAgICAgIGlmIChzZWxmLnR5cGUoKT09XCJtYXN0ZXJcIil7XHJcbiAgICAgICAgICBhbGVydChcInllc1wiKVxyXG4gICAgICAgICAgc2VsZi5jb250ZXh0Lm1hc3RlckxvZ2dlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIC8vICBlbHNle1xyXG4gICAgICAgIC8vICBzZWxmLnNlbGVjdG9yMihcIk5vXCIpXHJcbiAgICAgIC8vICB9XHJcbiAgICB9KTtcclxuICAgIC8vc2VsZi51c2VybmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcblxyXG4gICAgc2VsZi5mdWxsbmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuZnVsbG5hbWVFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLnBhc3N3b3JkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5wYXNzd29yZEVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWxmLmxvZ291dD1mdW5jdGlvbigpe1xyXG5cclxuICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51c2VyLmxvZ091dChzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblxyXG4gICAgICAgIGFsZXJ0KHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4gKyBcImxvZ291dFwiKVxyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLyMvbG9naW5cIjtcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuZWRpdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAvL2VzdGEgcGFydGUgZXMgcGFyYSBwb25lciBsYSBiYXJyYSBkZSB0YXJlYXMgZGVzcHXDqXMgZGVsIGxvZ2luXHJcbiAgICAvLyAgc2VsZi5sb2dJbj1mdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICBzZWxmLmNvbnRleHQubG9nZ2VkKHRydWUpO1xyXG4gICAgICB2YXIgZXJyb3I9ZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghc2VsZi5mdWxsbmFtZSgpKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLmZ1bGxuYW1lRXJyb3IoXCJUaGUgZnVsbCBuYW1lIG11c3QgYmUgZGlmZmVyZW50IGZyb20gdGhlIHByZXZpb3VzIG9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWVycm9yKXtcclxuICAgICAgICAgIHZhciBwYWNrZXQ9e1xyXG4gICAgICAgICAgICBcImZ1bGxuYW1lXCI6c2VsZi5mdWxsbmFtZSgpLFxyXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6c2VsZi5wYXNzd29yZCgpLFxyXG5cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgLy92YXIgdHlwZT0gc2VsZi50eXBlKClcclxuICAgICAgICAvL2lmKHR5cGUgPT0gbWFzdGVyKXtcclxuICAgICAgICAgIC8vc2VsZi5jb250ZXh0Lm1hc3Rlcih0cnVlKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICBhbGVydChzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuKTtcclxuICAgICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXNlci5jaGFuZ2VVc2VyKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHBhY2tldCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cclxuICAgICAgICAgICAgYWxlcnQoXCJSZWdpc3RlcmVkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50ZXh0U3RhdHVzKXtcclxuICAgICAgICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ21hbmFnZXInLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxoMT5IZWxsbyA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogdXNlcm5hbWVcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJ1c2VybmFtZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L2gxPlxcclxcbiAgICA8aDM+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiB0eXBlXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwidHlwZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L2gzPlxcclxcbjwvZGl2PlxcclxcbjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG4gICAgPGhlYWQ+XFxyXFxuXFx0XFx0PG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgQ1NTIHN0eWxlXFxyXFxuXFx0XFx0PGxpbmsgaHJlZj1cXFwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPiAtLT5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgRm9udCBzdHlsZSAtLT5cXHJcXG5cXHQgICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcXFwiPlxcclxcblxcdFxcdDwhLS08bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcInN0eWxlLmNzc1xcXCI+LS0+XFxyXFxuXFx0XFx0PCEtLSBHb29nbGUgRm9udHMgLS0+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhc3Npb24rT25lJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3h5Z2VuJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHJcXG5cXHRcXHQ8dGl0bGU+QWRtaW48L3RpdGxlPlxcclxcblxcdDwvaGVhZD5cXHJcXG5cXHQ8Ym9keT5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvdyBtYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJtYWluLWxvZ2luIG1haW4tY2VudGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8aDU+SGVyZSB5b3UgY2FuIG1vZGlmeSB5b3VyIG5hbWUgYW5kIHlvdXIgcGFzc3dvcmQuPC9oNT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiXFxcIiBtZXRob2Q9XFxcInBvc3RcXFwiIGFjdGlvbj1cXFwiI1xcXCI+XFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiZnVsbG5hbWVcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+RnVsbCBOYW1lOiA8L2xhYmVsPiA8c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogZnVsbG5hbWVcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJmdWxsbmFtZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb2xzLXNtLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9XFxcImNvbG9yOnJlZFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OmZ1bGxuYW1lRXJyb3JcXFwiPjwvcD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdXNlcnMgZmFcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogZnVsbG5hbWUndHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgIGlkPVxcXCJmdWxsbmFtZVxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIGZ1bGwgbmFtZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29scy1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVxcXCJjb2xvcjpyZWRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpwYXNzd29yZEVycm9yXFxcIj48L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2sgZmEtbGdcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBkYXRhLWJpbmQgPSd0ZXh0aW5wdXQ6IHBhc3N3b3JkJ3R5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91ciBQYXNzd29yZFxcXCIvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IGVkaXQnIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImVkaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+RWRpdDwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogbG9nb3V0JyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJsb2dvdXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+TG9nIE91dDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHQgPCEtLSBqUXVlcnkgKG5lY2Vzc2FyeSBmb3IgQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCBwbHVnaW5zKSAtLT5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG5cIjtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gVmlld01vZGVsKGN0eCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5jb250ZXh0PWN0eDtcclxuICAgIHNlbGYuZnVsbG5hbWUgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLmZ1bGxuYW1lRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnVzZXJuYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi51c2VybmFtZUVycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5wYXNzd29yZCA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYucGFzc3dvcmRFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYucGFzc3dvcmQyID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5wYXNzd29yZEVycm9yMiA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYudHlwZVVzZXI9a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi50eXBlVXNlckVycm9yPWtvLm9ic2VydmFibGUoKTtcclxuXHJcbiAgICBzZWxmLmZ1bGxuYW1lLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICAgIHNlbGYudXNlcm5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLnVzZXJuYW1lRXJyb3IodW5kZWZpbmVkKTtcclxuICAgIH0pO1xyXG4gICAgc2VsZi5wYXNzd29yZC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYucGFzc3dvcmRFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLnBhc3N3b3JkMi5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYucGFzc3dvcmRFcnJvcjIodW5kZWZpbmVkKTtcclxuICAgIH0pO1xyXG4gICAgc2VsZi50eXBlVXNlci5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYudHlwZVVzZXJFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZXJyb3I9ZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzZWxmLmZ1bGxuYW1lKCkpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYuZnVsbG5hbWVFcnJvcihcIk1vcmUgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYudXNlcm5hbWUoKSl7XHJcbiAgICAgICAgICBlcnJvcj10cnVlO1xyXG4gICAgICAgICAgc2VsZi51c2VybmFtZUVycm9yKFwiTW9yZSB0aGFuIHRocmVlIGNoYXJhY3RlcnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5wYXNzd29yZCgpKXtcclxuICAgICAgICAgIGVycm9yPXRydWU7XHJcbiAgICAgICAgICBzZWxmLnBhc3N3b3JkRXJyb3IoXCJNb3JlIHRoYW4gZWlnaHQgY2hhcmFjdGVyc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYucGFzc3dvcmQoKSE9c2VsZi5wYXNzd29yZDIoKSl7XHJcbiAgICAgICAgICBlcnJvcj10cnVlO1xyXG4gICAgICAgICAgc2VsZi5wYXNzd29yZEVycm9yMihcIkRvZXNuJ3QgbWF0Y2ggcGFzc3dvcmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFzZWxmLnR5cGVVc2VyKCkpe1xyXG4gICAgICAgICAgZXJyb3I9dHJ1ZTtcclxuICAgICAgICAgIHNlbGYudHlwZVVzZXJFcnJvcihcIlNlbGVjdCBvbmUgb2YgdGhlIG9wdGlvbnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFlcnJvcil7XHJcbiAgICAgICAgICB2YXIgcGFja2V0PXtcclxuICAgICAgICAgICAgXCJmdWxsbmFtZVwiOnNlbGYuZnVsbG5hbWUoKSxcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOnNlbGYudXNlcm5hbWUoKSxcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOnNlbGYucGFzc3dvcmQoKSxcclxuICAgICAgICAgICAgXCJ0eXBlXCI6c2VsZi50eXBlVXNlcigpXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXNlci5yZWdpc3RlclVzZXIocGFja2V0KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAvLyAgYWxlcnQocmVzdWx0KTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9sb2dpblwiXHJcblxyXG4gICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGlmKGUudGV4dFN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZS50ZXh0U3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdyZWdpc3RlcmluZycsIHtcclxuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJyksXHJcbiAgICAgICAgdmlld01vZGVsOiBWaWV3TW9kZWxcclxuICAgIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGgxPlJlZ2lzdGVyPC9oMT5cXHJcXG48L2Rpdj5cXHJcXG48IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICAgIDxoZWFkPlxcclxcblxcdFxcdDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0PCEtLSBXZWJzaXRlIENTUyBzdHlsZVxcclxcblxcdFxcdDxsaW5rIGhyZWY9XFxcImNzcy9ib290c3RyYXAubWluLmNzc1xcXCIgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIj4gLS0+XFxyXFxuXFxyXFxuXFx0XFx0PCEtLSBXZWJzaXRlIEZvbnQgc3R5bGUgLS0+XFxyXFxuXFx0ICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjEvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXFxcIj5cXHJcXG5cXHRcXHQ8IS0tPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJzdHlsZS5jc3NcXFwiPi0tPlxcclxcblxcdFxcdDwhLS0gR29vZ2xlIEZvbnRzIC0tPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QYXNzaW9uK09uZScgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU94eWdlbicgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+XFxyXFxuXFxyXFxuXFx0XFx0PHRpdGxlPlJlZ2lzdGVyPC90aXRsZT5cXHJcXG5cXHQ8L2hlYWQ+XFxyXFxuXFx0PGJvZHk+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJyb3cgbWFpblxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwibWFpbi1sb2dpbiBtYWluLWNlbnRlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGg1PlBsZWFzZSBzaWduIHVwLjwvaDU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGZvcm0gY2xhc3M9XFxcIlxcXCIgbWV0aG9kPVxcXCJwb3N0XFxcIiBhY3Rpb249XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImZ1bGxuYW1lXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkZ1bGwgTmFtZTwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29scy1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVxcXCJjb2xvcjpyZWRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpmdWxsbmFtZUVycm9yXFxcIj48L3A+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXVzZXIgZmFcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBkYXRhLWJpbmQ9J3RleHRpbnB1dDogZnVsbG5hbWUnIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJmdWxsbmFtZVxcXCIgIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIE5hbWVcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+VXNlcm5hbWU8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6dXNlcm5hbWVFcnJvclxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VycyBmYVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGRhdGEtYmluZD0ndGV4dGlucHV0OiB1c2VybmFtZSd0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAgaWQ9XFxcInVzZXJuYW1lXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdXIgVXNlcm5hbWVcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbHMtc20tMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT1cXFwiY29sb3I6cmVkXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6cGFzc3dvcmRFcnJvclxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWxnXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgZGF0YS1iaW5kID0ndGV4dGlucHV0OiBwYXNzd29yZCd0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdXIgUGFzc3dvcmRcXFwiLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJwYXNzd29yZDJcXFwiIGNsYXNzPVxcXCJjb2xzLXNtLTIgY29udHJvbC1sYWJlbFxcXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY29scy1zbS0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPVxcXCJjb2xvcjpyZWRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDpwYXNzd29yZEVycm9yMlxcXCI+PC9wPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrIGZhLWxnXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgZGF0YS1iaW5kPSd0ZXh0aW5wdXQ6IHBhc3N3b3JkMicgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZDJcXFwiICBwbGFjZWhvbGRlcj1cXFwiQ29uZmlybSB5b3VyIFBhc3N3b3JkXFxcIi8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ0eXBlVXNlclxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5UeXBlIG9mIGFjY291bnQ8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHMtc20tNTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XFxcImNvbG9yOnJlZFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OnR5cGVVc2VyRXJyb3JcXFwiPjwvcD5cXHJcXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS11c2VyLXBsdXMgXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaW8taW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgZGF0YS1iaW5kPSdjaGVja2VkOnR5cGVVc2VyJyB0eXBlPVxcXCJyYWRpb1xcXCIgdmFsdWU9XFxcIndvcmtlclxcXCIgPiBXb3JrZXIgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtdXNlci1zZWNyZXQgXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaW8taW5saW5lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgZGF0YS1iaW5kPSdjaGVja2VkOnR5cGVVc2VyJyB0eXBlPVxcXCJyYWRpb1xcXCIgdmFsdWU9XFxcIm1hc3RlclxcXCIgPiBNYW5hZ2VyIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogcmVnaXN0ZXInIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInJlZ2lzdGVyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgbG9naW4tYnV0dG9uXFxcIj5SZWdpc3RlcjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgPGg1PkRvIHlvdSBoYXZlIGFscmVhZHkgYW4gYWNjb3VudD8gUGxlYXNlIGxvZyBpbjwvaDU+XFxyXFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XFxcIndpbmRvdy5sb2NhdGlvbi5ocmVmPScvIyEvbG9naW4nXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBsb2dpblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwibG9naW5cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayBsb2dpbi1idXR0b25cXFwiPkxvZyBJbjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwhLS0gIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPktvIEV4YW1wbGU8L2E+IC0tPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdDwvZm9ybT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG5cXHRcXHQgPCEtLSBqUXVlcnkgKG5lY2Vzc2FyeSBmb3IgQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCBwbHVnaW5zKSAtLT5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXFxcIj48L3NjcmlwdD5cXHJcXG5cIjtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG4vKmdsb2JhbHMgYWxlcnQqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBrbyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydrbyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsna28nXSA6IG51bGwpO1xyXG5cclxuZnVuY3Rpb24gVmlld01vZGVsKGN0eCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5hID0ga28ub2JzZXJ2YWJsZSgnMScpO1xyXG4gICAgc2VsZi5hRXJyb3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLmIgPSBrby5vYnNlcnZhYmxlKCcyJyk7XHJcbiAgICBzZWxmLmJFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYucmVzdWx0ID0ga28ub2JzZXJ2YWJsZSgnJyk7XHJcbiAgICBzZWxmLmEuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLmFFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLmIuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZWxmLmJFcnJvcih1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLmFkZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjdHgucmVwb3NpdG9yaWVzLmFkZGVyLmFkZChcclxuICAgICAgICAgICAgcGFyc2VJbnQoc2VsZi5hKCksIDEwKSxcclxuICAgICAgICAgICAgcGFyc2VJbnQoc2VsZi5iKCksIDEwKVxyXG4gICAgICAgICkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVzdWx0KHJlc3VsdCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFFcnJvcihlLmVycm9ycy5hKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYkVycm9yKGUuZXJyb3JzLmIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ3JlbW90ZS1zdW0nLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBWaWV3TW9kZWwoY3R4KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmNvbnRleHQ9Y3R4O1xyXG4gICAgc2VsZi5pbWFnZXMgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLmFjY2VwdGVkPWtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYucmVqZWN0ZWQgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLmFubm90YXRpb24gPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5jYW1wYWlnblN0YXRpc3RpY3Moc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5zdGF0aXN0aWNzKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblxyXG5cclxuICAgICAgICBzZWxmLmltYWdlcyhyZXN1bHQuaW1hZ2VzKTtcclxuICAgICAgICBzZWxmLmFjY2VwdGVkKHJlc3VsdC5hY2NlcHRlZCk7XHJcbiAgICAgICAgc2VsZi5yZWplY3RlZChyZXN1bHQucmVqZWN0ZWQpO1xyXG4gICAgICAgIHNlbGYuYW5ub3RhdGlvbihyZXN1bHQuYW5ub3RhdGlvbik7XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuICAgIC8vc2VsZi51c2VybmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vc2VsZi5mdWxsbmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgLy8gIH0pO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ3N0YXRpc3RpY3MnLCB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpLFxyXG4gICAgICAgIHZpZXdNb2RlbDogVmlld01vZGVsXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgICA8aGVhZD5cXHJcXG5cXHRcXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcclxcblxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBDU1Mgc3R5bGVcXHJcXG5cXHRcXHQ8bGluayBocmVmPVxcXCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCI+IC0tPlxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBGb250IHN0eWxlIC0tPlxcclxcblxcdCAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxyXFxuXFx0XFx0PCEtLTxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj4tLT5cXHJcXG5cXHRcXHQ8IS0tIEdvb2dsZSBGb250cyAtLT5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmUnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PeHlnZW4nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcclxcblxcdFxcdDx0aXRsZT5BZG1pbjwvdGl0bGU+XFxyXFxuXFx0PC9oZWFkPlxcclxcblxcdDxib2R5PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93IG1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1haW4tbG9naW4gbWFpbi1jZW50ZXJcXFwiPlxcclxcblxcdFxcdFxcdCAgICAgPGRpdj48aDU+SGVyZSB5b3UgY2FuIHNlZSB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIHNlbGVjdGVkIGNhbXBhaWduLiBZb3UgY2FuIGFsc28gbW9kaWZ5IHRoZSBwYXJhbWV0ZXJzIHlvdSBuZWVkIGFuZCBjbGljayBlZGl0LjwvaDU+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGZvcm0gY2xhc3M9XFxcIlxcXCIgbWV0aG9kPVxcXCJwb3N0XFxcIiBhY3Rpb249XFxcIiNcXFwiPlxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltYWdlc1xcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5JbWFnZXM6IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBpbWFnZXNcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJpbWFnZXNcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhY2NlcHRlZFxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5BY2NlcHRlZDogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGFjY2VwdGVkXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiYWNjZXB0ZWRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJyZWplY3RlZFxcXCIgY2xhc3M9XFxcImNvbHMtc20tMiBjb250cm9sLWxhYmVsXFxcIj5SZWplY3RlZDogPC9sYWJlbD4gPHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IHJlamVjdGVkXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwicmVqZWN0ZWRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJhbm5vdGF0aW9uXFxcIiBjbGFzcz1cXFwiY29scy1zbS0yIGNvbnRyb2wtbGFiZWxcXFwiPkFubm90YXRpb246IDwvbGFiZWw+IDxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBhbm5vdGF0aW9uXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiYW5ub3RhdGlvblxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS0gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogZW5hYmxlV29ya2VyU2VsZWN0aW9uJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJlbmFibGVXb3JrZXJTZWxlY3Rpb25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+RW5hYmxlIGZvciBTZWxlY3Rpb248L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBkaXNhYmxlV29ya2VyU2VsZWN0aW9uJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJkaXNhYmxlV29ya2VyU2VsZWN0aW9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgcmVhZC1idXR0b25cXFwiPkRpc2FibGUgZm9yIHNlbGVjdGlvbjwvYnV0dG9uPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGRhdGEtYmluZD0nY2xpY2s6IGVuYWJsZVdvcmtlckFubm90YXRpb24nIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImVuYWJsZVdvcmtlckFubm90YXRpb25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9jayByZWFkLWJ1dHRvblxcXCI+RW5hYmxlIGZvciBBbm5vdGF0aW9uPC9idXR0b24+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gZGF0YS1iaW5kPSdjbGljazogZGlzYWJsZVdvcmtlckFubm90YXRpb24nIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImRpc2FibGVXb3JrZXJBbm5vdGF0aW9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgcmVhZC1idXR0b25cXFwiPkRpc2FibGUgZm9yIEFubm90YXRpb248L2J1dHRvbj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj4gLS0+XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9mb3JtPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcclxcblxcdFxcdCA8IS0tIGpRdWVyeSAobmVjZXNzYXJ5IGZvciBCb290c3RyYXAncyBKYXZhU2NyaXB0IHBsdWdpbnMpIC0tPlxcclxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcblwiO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBWaWV3TW9kZWwoY3R4KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmNvbnRleHQ9Y3R4O1xyXG4gICAgLy9zZWxmLmNvbnRleHQubG9nZ2VkKHRydWUpO1xyXG4gICAgLy9zZWxmLnR5cGUgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgIC8vc2VsZi51c2VybmFtZUVycm9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi50eXBlID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gIC8vICBzZWxmLm5hbWU9a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5pbWFnZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAvLyAgc2VsZi5zaXplID0ga28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuXHJcbiAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRhc2suc2Vzc2lvbnRhc2soc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5zZXNzaW9uKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcblxyXG4gICAgICAgIHNlbGYudHlwZShyZXN1bHQudHlwZSk7XHJcbiAgICAgIC8vICBpZihzZWxmLnR5cGUoKT09XCJhbm5vdGF0aW9uXCIpe1xyXG4gICAgICAgIC8vICBzZWxmLnNpemUocmVzdWx0LnNpemUpO1xyXG4gICAgICAgICAgLy9hbGVydChzZWxmLnNpemUoKSlcclxuICAgICAgLy8gIH1cclxuICAgICAgICBzZWxmLmltYWdlKHJlc3VsdC5pbWFnZSk7XHJcblxyXG5cclxuICAvLyAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsPXJlc3VsdC5pZDsgLy90byB1c2UgdGhlIHVybCBldmVyeXdoZXJlIGluIHRoZSBhcHBcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKGUudGV4dFN0YXR1cz09NDA0IHx8IGUudGV4dFN0YXR1cz09NDEwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJObyBXb3JrIEF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbmZvdGFza1wiO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIGVsc2VcclxuICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgfSk7XHJcbiAgICAvL3NlbGYudXNlcm5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gIHNlbGYuZnVsbG5hbWVFcnJvcih1bmRlZmluZWQpO1xyXG5cclxuICAvLyAgc2VsZi5mdWxsbmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICAvL30pO1xyXG4gICAgLy9zZWxmLnBhc3N3b3JkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vICBzZWxmLnBhc3N3b3JkRXJyb3IodW5kZWZpbmVkKTtcclxuICAgIC8vfSk7XHJcbiAgICBzZWxmLmFjY2VwdCA9IGZ1bmN0aW9uKHBhY2tldCkge1xyXG4gICAgICBcclxuICAgICAgdmFyIG1lc3NhZ2U9XCJSZWplY3RlZFwiO1xyXG4gICAgICBpZihwYWNrZXQuYWNjZXB0ZWQhPWZhbHNlKXtcclxuICAgICAgICBhbGVydChcIkFjY2VwdGluZ1wiKTtcclxuICAgICAgIHBhY2tldD17XHJcbiAgICAgICAgXCJhY2NlcHRlZFwiOnRydWVcclxuICAgICAgfTtcclxuICAgICAgbWVzc2FnZT1cIkFjY2VwdGVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50YXNrLmFjY2VwdEltZyhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnNlc3Npb24sIHBhY2tldCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudGFzay5zZXNzaW9udGFzayhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnNlc3Npb24pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHJcbiAgICAgICAgc2VsZi50eXBlKHJlc3VsdC50eXBlKTtcclxuICAgICAgLy8gIGlmKHNlbGYudHlwZSgpPT1cImFubm90YXRpb25cIil7XHJcbiAgICAgICAgLy8gIHNlbGYuc2l6ZShyZXN1bHQuc2l6ZSk7XHJcbiAgICAgICAgICAvL2FsZXJ0KHNlbGYuc2l6ZSgpKVxyXG4gICAgICAvLyAgfVxyXG4gICAgICAgIHNlbGYuaW1hZ2UocmVzdWx0LmltYWdlKTtcclxuXHJcbiAgICAgICBcclxuICAvLyAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsPXJlc3VsdC5pZDsgLy90byB1c2UgdGhlIHVybCBldmVyeXdoZXJlIGluIHRoZSBhcHBcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKGUudGV4dFN0YXR1cz09NDA0IHx8IGUudGV4dFN0YXR1cz09NDEwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJObyBXb3JrIEF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS90YXNrc3VzZXJcIjtcclxuICAgICAgICB9IFxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgYWxlcnQoZS50ZXh0U3RhdHVzK1wiYXNkYWRzXCIpO1xyXG4gICAgfSk7XHJcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICB9KTtcclxuICAgICAgXHJcbiAgICAvLyAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50YXNrLnNlc3Npb250YXNrKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuc2Vzc2lvbikudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cclxuICAgICAgLy8gICAgc2VsZi50eXBlKHJlc3VsdC50eXBlKTtcclxuICAgICAgICAvLyAgaWYoc2VsZi50eXBlKCk9PVwiYW5ub3RhdGlvblwiKXtcclxuICAgICAgICAgIC8vICBzZWxmLnNpemUocmVzdWx0LnNpemUpO1xyXG4gICAgICAgICAgICAvL2FsZXJ0KHNlbGYuc2l6ZSgpKVxyXG4gICAgICAgIC8vICB9XHJcbiAgICAgIC8vICAgIHNlbGYuaW1hZ2UocmVzdWx0LmltYWdlKTtcclxuXHJcblxyXG4gICAgICAvLyAgICBhbGVydCgnaHR0cDovL2F3dC5pZm1sZWRpdC5vcmcnKyBzZWxmLmltYWdlKCkpXHJcbiAgICAvL30pXHJcbiAgfVxyXG5cclxuICAgICAgc2VsZi5yZWplY3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcGFja2V0PXtcclxuICAgICAgICAgIFwiYWNjZXB0ZWRcIjpmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICBzZWxmLmFjY2VwdChwYWNrZXQpXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5pbmZvID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcblxyXG5cclxuICAgICAgLy9lc3RhIHBhcnRlIGVzIHBhcmEgcG9uZXIgbGEgYmFycmEgZGUgdGFyZWFzIGRlc3B1w6lzIGRlbCBsb2dpblxyXG4gICAgLy8gIHNlbGYubG9nSW49ZnVuY3Rpb24oKXtcclxuICAgICAgLy8gICAgc2VsZi5jb250ZXh0LmxvZ2dlZCh0cnVlKTtcclxuICAgICAgLy92YXIgZXJyb3I9ZmFsc2U7XHJcblxyXG4gICAgICAgIC8vaWYgKCFzZWxmLmZ1bGxuYW1lKCkpe1xyXG4gICAgICAgICAgLy9lcnJvcj10cnVlO1xyXG4gICAgICAgICAgLy9zZWxmLmZ1bGxuYW1lRXJyb3IoXCJUaGUgZnVsbCBuYW1lIG11c3QgYmUgZGlmZmVyZW50IGZyb20gdGhlIHByZXZpb3VzIG9uZVwiKTtcclxuICAgICAgICAvL31cclxuICAgICAgICAvL2lmKCFlcnJvcil7XHJcbiAgICAgICAgICAvL3ZhciBwYWNrZXQ9e1xyXG4gICAgICAgICAgICAvL1wiZnVsbG5hbWVcIjpzZWxmLmZ1bGxuYW1lKCksXHJcbiAgICAgICAgICAgIC8vXCJwYXNzd29yZFwiOnNlbGYucGFzc3dvcmQoKSxcclxuXHJcbiAgICAgICAgICAvL307XHJcbiAgICAgICAgLy92YXIgdHlwZT0gc2VsZi50eXBlKClcclxuICAgICAgICAvL2lmKHR5cGUgPT0gbWFzdGVyKXtcclxuICAgICAgICAgIC8vc2VsZi5jb250ZXh0Lm1hc3Rlcih0cnVlKTtcclxuICAgICAgICAvL31cclxuICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLnJlYWRDYW1wYWlnbihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICBzZWxmLmltYWdlcyhyZXN1bHQuaW1hZ2VzKTtcclxuICAgICAgICAgIHNlbGYuaWQocmVzdWx0LmlkKTtcclxuICAgICAgICAgIC8vc2VsZi5uYW1lKHJlc3VsdC5uYW1lKTtcclxuICAgICAgICAgIHNlbGYuY2Fub25pY2FsKHJlc3VsdC5jYW5vbmljYWwpO1xyXG4gICAgICAvLyAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybD1zZWxmLmNhbXBhaWducygpW2luZGV4XS5pZDtcclxuLy9teU9ic2VydmFibGVBcnJheSgpWzBdLnByaWNlXHJcbiAgICAgICAgICBhbGVydCgnVGhlIGVsZW1lbnQgaXMgJyArIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsKTtcclxuXHJcbiAgICAgIC8vICBhbGVydChpbmRleCk7XHJcblxyXG4gICAgICAgICAgLy9zZWxmLnJlbW92ZVBlcnNvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2VsZi5wZW9wbGUucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbmZvY2FtcGFpZ25cIjtcclxuICAgICAgICAgIC8vc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5pbmZvQ2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmwpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHJcbiAgICAgICAgICAgIC8vYWxlcnQoc2VsZi5jYW1wYWlnbnMocmVzdWx0LmNhbXBhaWducykpO1xyXG5cclxuXHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50ZXh0U3RhdHVzKXtcclxuICAgICAgICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ3Rhc2tzZXNzaW9uJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcclxuICAgICAgICB2aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8aDE+SW5mb3JtYXRpb24gb2YgdGhlIGltYWdlczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgICA8aGVhZD5cXHJcXG5cXHRcXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcclxcblxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBDU1Mgc3R5bGVcXHJcXG5cXHRcXHQ8bGluayBocmVmPVxcXCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCI+IC0tPlxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBGb250IHN0eWxlIC0tPlxcclxcblxcdCAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxyXFxuXFx0XFx0PCEtLTxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj4tLT5cXHJcXG5cXHRcXHQ8IS0tIEdvb2dsZSBGb250cyAtLT5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmUnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PeHlnZW4nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcclxcblxcdFxcdDx0aXRsZT5BZG1pbjwvdGl0bGU+XFxyXFxuXFx0PC9oZWFkPlxcclxcblxcdDxib2R5PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93IG1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1haW4tbG9naW4gbWFpbi1jZW50ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxoNT5IZXJlIHlvdSBjYW4gZmluZCB5b3VyIGNhbXBhaWducy48L2g1PlxcclxcblxcdFxcdFxcdFxcdFxcdDxmb3JtIGNsYXNzPVxcXCJcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCIgYWN0aW9uPVxcXCIjXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGFibGU+XFxyXFxuICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cXFwiMVxcXCI+IElkICAgICAgPC90aD48dGggY29sc3Bhbj1cXFwiMVxcXCI+ICAgTmFtZSBvZiB0aGUgQ2FtcGFpZ24gICA8L3RoPjx0aCBjb2xzcGFuPVxcXCIxXFxcIj4gIFN0YXR1cyAgPC90aD48dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgIDwvdHI+PC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gVG9kbzogR2VuZXJhdGUgdGFibGUgYm9keSAtLT5cXHJcXG4gICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogdHlwZVxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcInR5cGVcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gICAgPHRkPjxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBjYW5vbmljYWxcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJuYW1lXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+IC0tPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogaW1hZ2VcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJpbWFnZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgPCEtLSAgICA8dGQ+PHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IHNpemVcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJzaXplXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICA8L3RhYmxlPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcblxcclxcbiAgICAgIDwhLS0gICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuZGVsZXRlLmJpbmQoJGRhdGEsICRpbmRleCgpKVxcXCJ0eXBlPVxcXCJidXR0b25cXFwiPng8L2E+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5zdGF0aW1nLmJpbmQoJGRhdGEsICRpbmRleCgpKSBcXFwidHlwZT1cXFwiYnV0dG9uXFxcIj5TdGF0aXN0aWNzPC9hPiAtLT5cXHJcXG4gICAgICAgICAgICA8YSB0aXRsZT1cXFwiSW1hZ2UgMVxcXCIgaHJlZj1cXFwiI1xcXCIgPlxcclxcbiAgICAgICAgICAgICAgPGltZyBkYXRhLWJpbmQ9XFxcImF0dHI6e3NyYzogJ2h0dHA6Ly9hd3QuaWZtbGVkaXQub3JnJysgaW1hZ2UoKX1cXFwiIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICA8IS0tICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtc20tNCBjb2wteHMtNlxcXCI+PGEgdGl0bGU9XFxcIkltYWdlIDJcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwLzIyNTVFRVxcXCI+PC9hPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtc20tNCBjb2wteHMtNlxcXCI+PGEgdGl0bGU9XFxcIkltYWdlIDNcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwLzQ0OTk1NS9GRkZcXFwiPjwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPjxhIHRpdGxlPVxcXCJJbWFnZSA0XFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiIHNyYz1cXFwiLy9wbGFjZWhvbGQuaXQvNjAweDM1MC85OTIyMzNcXFwiPjwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPjxhIHRpdGxlPVxcXCJJbWFnZSA1XFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiIHNyYz1cXFwiLy9wbGFjZWhvbGQuaXQvNjAweDM1MC8yMjU1RUVcXFwiPjwvYT48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLXNtLTQgY29sLXhzLTZcXFwiPjxhIHRpdGxlPVxcXCJJbWFnZSA2XFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiIHNyYz1cXFwiLy9wbGFjZWhvbGQuaXQvNjAweDM1MC80NDk5NTUvRkZGXFxcIj48L2E+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgOFxcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwidGh1bWJuYWlsIGltZy1yZXNwb25zaXZlXFxcIiBzcmM9XFxcIi8vcGxhY2Vob2xkLml0LzYwMHgzNTAvNzc3XFxcIj48L2E+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgOVxcXCIgaHJlZj1cXFwiI1xcXCI+PGltZyBjbGFzcz1cXFwidGh1bWJuYWlsIGltZy1yZXNwb25zaXZlXFxcIiBzcmM9XFxcIi8vcGxhY2Vob2xkLml0LzYwMHgzNTAvOTkyMjMzXFxcIj48L2E+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgMTBcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwL0VFRVxcXCI+PC9hPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtc20tNCBjb2wteHMtNlxcXCI+PGEgdGl0bGU9XFxcIkltYWdlIDExXFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiIHNyYz1cXFwiLy9wbGFjZWhvbGQuaXQvNjAweDM1MC80NDk5NTUvRkZGXFxcIj48L2E+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1zbS00IGNvbC14cy02XFxcIj48YSB0aXRsZT1cXFwiSW1hZ2UgMTJcXFwiIGhyZWY9XFxcIiNcXFwiPjxpbWcgY2xhc3M9XFxcInRodW1ibmFpbCBpbWctcmVzcG9uc2l2ZVxcXCIgc3JjPVxcXCIvL3BsYWNlaG9sZC5pdC82MDB4MzUwL0RERFxcXCI+PC9hPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtc20tNCBjb2wteHMtNlxcXCI+PGEgdGl0bGU9XFxcIkltYWdlIDEzXFxcIiBocmVmPVxcXCIjXFxcIj48aW1nIGNsYXNzPVxcXCJ0aHVtYm5haWwgaW1nLXJlc3BvbnNpdmVcXFwiIHNyYz1cXFwiLy9wbGFjZWhvbGQuaXQvNjAweDM1MC85OTIyMzNcXFwiPjwvYT48L2Rpdj4gLS0+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxocj5cXHJcXG5cXHJcXG4gICAgICAgIDxocj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBhY2NlcHQnIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImFjY2VwdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIGxvZ2luLWJ1dHRvblxcXCI+QWNjZXB0ZWQ8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiByZWplY3QnIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcInJlamVjdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrIGxvZ2luLWJ1dHRvblxcXCI+UmVqZWN0ZWQ8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFx0XFx0IDwhLS0galF1ZXJ5IChuZWNlc3NhcnkgZm9yIEJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcGx1Z2lucykgLS0+XFxyXFxuICAgIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1xcXCI+PC9zY3JpcHQ+XFxyXFxuXCI7XG4iLCIvKmpzbGludCBub2RlOnRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIga28gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1sna28nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2tvJ10gOiBudWxsKTtcclxuXHJcbmZ1bmN0aW9uIFZpZXdNb2RlbChjdHgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuY29udGV4dD1jdHg7XHJcbiAgICAvL3NlbGYuY29udGV4dC5sb2dnZWQodHJ1ZSk7XHJcbiAgICBzZWxmLnRhc2tzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAvL3NlbGYudXNlcm5hbWVFcnJvciA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYuaWQgPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnR5cGU9a28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudGFzay5yZWFkVGFzayhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgc2VsZi50YXNrcyhyZXN1bHQudGFza3MpO1xyXG4gICAgICAgIHNlbGYuaWQocmVzdWx0LmlkKTtcclxuICAgICAgICBzZWxmLnR5cGUocmVzdWx0LnR5cGUpO1xyXG4gICAgICAvLyAgdmFyIGluZGV4PXNlbGYudGFza3MoKS5sZW5ndGhcclxuICAgICAgLy8gIGZvciAoaW5kZXg9MClcclxuICAgICAgICAvL2FsZXJ0KGluZGV4KVxyXG4gICAgICAvLyAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmxUYXNrPXNlbGYudGFza3MoKVtpbmRleF0uaWQ7XHJcbi8vbXlPYnNlcnZhYmxlQXJyYXkoKVswXS5wcmljZVxyXG4gICAgICAvLyAgYWxlcnQoJ1RoZSBlbGVtZW50IGlzICcgKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybFRhc2spO1xyXG4gICAgICAgIC8vc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50YXNrLnRhc2tJbmZvKHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudG9rZW4sIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudXJsVGFzaykudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgLy9zZWxmLnRhc2tzKHJlc3VsdC50YXNrcyk7XHJcbiAgICAgICAgICAvL3NlbGYuaWQocmVzdWx0LmlkKTtcclxuICAgICAgICAgIC8vc2VsZi50eXBlKHJlc3VsdC50eXBlKTtcclxuICAgICAgICAgIC8vc2VsZi5jYW1wYWlnbihyZXN1bHQuY2FtcGFpZ24pO1xyXG5cclxuICAgIC8vICAgIHNlbGYuc3RhdHVzKHJlc3VsdC5zdGF0dXMpO1xyXG4gIC8vICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmw9cmVzdWx0LmlkOyAvL3RvIHVzZSB0aGUgdXJsIGV2ZXJ5d2hlcmUgaW4gdGhlIGFwcFxyXG4gICAgLy99KTtcclxuICAgIC8vc2VsZi51c2VybmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcblxyXG4gIC8vICBzZWxmLmZ1bGxuYW1lLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICBzZWxmLmZ1bGxuYW1lRXJyb3IodW5kZWZpbmVkKTtcclxuICAgIH0pO1xyXG4gICAgLy9zZWxmLnBhc3N3b3JkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vICBzZWxmLnBhc3N3b3JkRXJyb3IodW5kZWZpbmVkKTtcclxuICAgIC8vfSk7XHJcbiAgICBzZWxmLnJlbW92ZVBlcnNvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIHNlbGYuY2FtcGFpZ25zLnJlbW92ZSh0aGlzKTtcclxuICAgICAgIH1cclxuXHJcbiAgICBzZWxmLmluZm8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHJcblxyXG4gICAgICAvL2VzdGEgcGFydGUgZXMgcGFyYSBwb25lciBsYSBiYXJyYSBkZSB0YXJlYXMgZGVzcHXDqXMgZGVsIGxvZ2luXHJcbiAgICAvLyAgc2VsZi5sb2dJbj1mdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICBzZWxmLmNvbnRleHQubG9nZ2VkKHRydWUpO1xyXG4gICAgICAvL3ZhciBlcnJvcj1mYWxzZTtcclxuXHJcbiAgICAgICAgLy9pZiAoIXNlbGYuZnVsbG5hbWUoKSl7XHJcbiAgICAgICAgICAvL2Vycm9yPXRydWU7XHJcbiAgICAgICAgICAvL3NlbGYuZnVsbG5hbWVFcnJvcihcIlRoZSBmdWxsIG5hbWUgbXVzdCBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgcHJldmlvdXMgb25lXCIpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vaWYoIWVycm9yKXtcclxuICAgICAgICAgIC8vdmFyIHBhY2tldD17XHJcbiAgICAgICAgICAgIC8vXCJmdWxsbmFtZVwiOnNlbGYuZnVsbG5hbWUoKSxcclxuICAgICAgICAgICAgLy9cInBhc3N3b3JkXCI6c2VsZi5wYXNzd29yZCgpLFxyXG5cclxuICAgICAgICAgIC8vfTtcclxuICAgICAgICAvL3ZhciB0eXBlPSBzZWxmLnR5cGUoKVxyXG4gICAgICAgIC8vaWYodHlwZSA9PSBtYXN0ZXIpe1xyXG4gICAgICAgICAgLy9zZWxmLmNvbnRleHQubWFzdGVyKHRydWUpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMudGFzay5yZWFkVGFzayhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICBzZWxmLnRhc2tzKHJlc3VsdC50YXNrcyk7XHJcbiAgICAgICAgICBzZWxmLmlkKHJlc3VsdC5pZCk7XHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybFRhc2s9c2VsZi50YXNrcygpW2luZGV4XS5pZDtcclxuICAvL215T2JzZXJ2YWJsZUFycmF5KClbMF0ucHJpY2VcclxuICAgICAgICAgIGFsZXJ0KCdUaGUgZWxlbWVudCBpcyAnICsgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmxUYXNrKTtcclxuXHJcbiAgICAgIC8vICBhbGVydChpbmRleCk7XHJcblxyXG4gICAgICAgICAgLy9zZWxmLnJlbW92ZVBlcnNvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2VsZi5wZW9wbGUucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbmZvdGFza1wiO1xyXG5cclxuICAgIC8vICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jIS9pbmZvY2FtcGFpZ25cIjtcclxuICAgICAgICAgIC8vc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy5jYW1wYWlnbi5pbmZvQ2FtcGFpZ24oc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy50b2tlbiwgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmwpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuXHJcbiAgICAgICAgICAgIC8vYWxlcnQoc2VsZi5jYW1wYWlnbnMocmVzdWx0LmNhbXBhaWducykpO1xyXG5cclxuXHJcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoZS50ZXh0U3RhdHVzKXtcclxuICAgICAgICAgICAgICBhbGVydChlLnRleHRTdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnRzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAga28uY29tcG9uZW50cy5yZWdpc3RlcigndGFza3N1c2VyJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcclxuICAgICAgICB2aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8aDE+WW91ciBUYXNrczwvaDE+XFxyXFxuPC9kaXY+XFxyXFxuPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgICA8aGVhZD5cXHJcXG5cXHRcXHQ8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcXFwiPlxcclxcblxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBDU1Mgc3R5bGVcXHJcXG5cXHRcXHQ8bGluayBocmVmPVxcXCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCI+IC0tPlxcclxcblxcclxcblxcdFxcdDwhLS0gV2Vic2l0ZSBGb250IHN0eWxlIC0tPlxcclxcblxcdCAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCI+XFxyXFxuXFx0XFx0PCEtLTxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj4tLT5cXHJcXG5cXHRcXHQ8IS0tIEdvb2dsZSBGb250cyAtLT5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFzc2lvbitPbmUnIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcdFxcdDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PeHlnZW4nIHJlbD0nc3R5bGVzaGVldCcgdHlwZT0ndGV4dC9jc3MnPlxcclxcblxcclxcblxcdFxcdDx0aXRsZT5BZG1pbjwvdGl0bGU+XFxyXFxuXFx0PC9oZWFkPlxcclxcblxcdDxib2R5PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwicm93IG1haW5cXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIm1haW4tbG9naW4gbWFpbi1jZW50ZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxoNT5IZXJlIHlvdSBjYW4gZmluZCB5b3VyIGNhbXBhaWducy48L2g1PlxcclxcblxcdFxcdFxcdFxcdFxcdDxmb3JtIGNsYXNzPVxcXCJcXFwiIG1ldGhvZD1cXFwicG9zdFxcXCIgYWN0aW9uPVxcXCIjXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGFibGU+XFxyXFxuICAgICAgICAgICAgICA8dGhlYWQ+PHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cXFwiMVxcXCI+IElkICAgICAgPC90aD48dGggY29sc3Bhbj1cXFwiMVxcXCI+ICAgQ2FtcGFpZ24gICA8L3RoPjx0aCBjb2xzcGFuPVxcXCIxXFxcIj4gIFN0YXR1cyAgPC90aD48dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgIDwvdHI+PC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gVG9kbzogR2VuZXJhdGUgdGFibGUgYm9keSAtLT5cXHJcXG4gICAgICAgICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9IFxcXCJmb3JlYWNoOiB0YXNrc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6ICRpbmRleCBcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogaWRcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJpZFxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogdHlwZVxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcInR5cGVcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gICAgICA8dGQ+PHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IGlkXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiaWRcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IHR5cGVcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJ0eXBlXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBjYW1wYWlnblxcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcImNhbXBhaWduXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGRhdGEtYmluZCA9IFxcXCJ0ZXh0OiBzZXNzaW9uXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwic2Vzc2lvblxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogc3RhdGlzdGljc1xcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcInN0YXRpc3RpY3NcXFwiIHJlYWRvbmx5PVxcXCJ0cnVlXFxcIj48L3NwYW4+PC90ZD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gZGF0YS1iaW5kID0gXFxcInRleHQ6IHN0YXR1c1xcXCIgdHlwZT0ndGV4dCcgaWQ9XFxcInN0YXR1c1xcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cXFwiI1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5pbmZvLmJpbmQoJGRhdGEsICRpbmRleCgpKVxcXCI+VGFzayBJbmZvcm1hdGlvbjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgPC90YWJsZT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBpbmZvJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJpbmZvXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgbG9naW4tYnV0dG9uXFxcIj5DaGVjazwvYnV0dG9uPlxcclxcblxcclxcblxcdFxcdCA8IS0tIGpRdWVyeSAobmVjZXNzYXJ5IGZvciBCb290c3RyYXAncyBKYXZhU2NyaXB0IHBsdWdpbnMpIC0tPlxcclxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcblwiO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCk7XHJcblxyXG5mdW5jdGlvbiBWaWV3TW9kZWwoY3R4KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmNvbnRleHQ9Y3R4O1xyXG4gICAgLy9zZWxmLmNvbnRleHQubG9nZ2VkKHRydWUpO1xyXG4gICAgc2VsZi53b3JrZXJzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICBzZWxmLmlkID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5mdWxsbmFtZT1rby5vYnNlcnZhYmxlKCk7XHJcbiAgICBzZWxmLnNlbGVjdG9yID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgc2VsZi5hbm5vdGF0b3IgPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG5cclxuICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb0NhbXBhaWduV29ya2VycyhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICBzZWxmLndvcmtlcnMocmVzdWx0LndvcmtlcnMpO1xyXG4gICAgICAgIHNlbGYuaWQocmVzdWx0LmlkKTtcclxuICAgICAgICBzZWxmLmZ1bGxuYW1lKHJlc3VsdC5mdWxsbmFtZSk7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RvcihyZXN1bHQuc2VsZWN0b3IpO1xyXG4gICAgICAgIHNlbGYuYW5ub3RhdG9yKHJlc3VsdC5hbm5vdGF0b3IpO1xyXG4gIC8vICAgICAgc2VsZi5jb250ZXh0LnJlcG9zaXRvcmllcy51cmw9cmVzdWx0LmlkOyAvL3RvIHVzZSB0aGUgdXJsIGV2ZXJ5d2hlcmUgaW4gdGhlIGFwcFxyXG4gICAgfSk7XHJcbiAgICAvL3NlbGYudXNlcm5hbWUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gIHNlbGYuZnVsbG5hbWVFcnJvcih1bmRlZmluZWQpO1xyXG5cclxuICAvLyAgc2VsZi5mdWxsbmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgc2VsZi5mdWxsbmFtZUVycm9yKHVuZGVmaW5lZCk7XHJcbiAgICAvL30pO1xyXG4gICAgLy9zZWxmLnBhc3N3b3JkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vICBzZWxmLnBhc3N3b3JkRXJyb3IodW5kZWZpbmVkKTtcclxuICAgIC8vfSk7XHJcbiAgICBzZWxmLnJlbW92ZVBlcnNvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIHNlbGYuY2FtcGFpZ25zLnJlbW92ZSh0aGlzKTtcclxuICAgICAgIH1cclxuXHJcbiAgICBzZWxmLmluZm8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHJcblxyXG4gICAgICAvL2VzdGEgcGFydGUgZXMgcGFyYSBwb25lciBsYSBiYXJyYSBkZSB0YXJlYXMgZGVzcHXDqXMgZGVsIGxvZ2luXHJcbiAgICAvLyAgc2VsZi5sb2dJbj1mdW5jdGlvbigpe1xyXG4gICAgICAvLyAgICBzZWxmLmNvbnRleHQubG9nZ2VkKHRydWUpO1xyXG4gICAgICAvL3ZhciBlcnJvcj1mYWxzZTtcclxuXHJcbiAgICAgICAgLy9pZiAoIXNlbGYuZnVsbG5hbWUoKSl7XHJcbiAgICAgICAgICAvL2Vycm9yPXRydWU7XHJcbiAgICAgICAgICAvL3NlbGYuZnVsbG5hbWVFcnJvcihcIlRoZSBmdWxsIG5hbWUgbXVzdCBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgcHJldmlvdXMgb25lXCIpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vaWYoIWVycm9yKXtcclxuICAgICAgICAgIC8vdmFyIHBhY2tldD17XHJcbiAgICAgICAgICAgIC8vXCJmdWxsbmFtZVwiOnNlbGYuZnVsbG5hbWUoKSxcclxuICAgICAgICAgICAgLy9cInBhc3N3b3JkXCI6c2VsZi5wYXNzd29yZCgpLFxyXG5cclxuICAgICAgICAgIC8vfTtcclxuICAgICAgICAvL3ZhciB0eXBlPSBzZWxmLnR5cGUoKVxyXG4gICAgICAgIC8vaWYodHlwZSA9PSBtYXN0ZXIpe1xyXG4gICAgICAgICAgLy9zZWxmLmNvbnRleHQubWFzdGVyKHRydWUpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIHNlbGYuY29udGV4dC5yZXBvc2l0b3JpZXMuY2FtcGFpZ24uaW5mb0NhbXBhaWduV29ya2VycyhzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICAgIHNlbGYuaWQocmVzdWx0LmlkKTtcclxuICAgICAgICAgIHNlbGYud29ya2VycyhyZXN1bHQud29ya2Vycyk7XHJcbiAgICAgICAgICBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcj1zZWxmLndvcmtlcnMoKVtpbmRleF0uaWQ7XHJcbi8vbXlPYnNlcnZhYmxlQXJyYXkoKVswXS5wcmljZVxyXG4gICAgICAgICAgYWxlcnQoJ1RoZSBlbGVtZW50IGlzICcgKyBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLndvcmtlcik7XHJcblxyXG4gICAgICAvLyAgYWxlcnQoaW5kZXgpO1xyXG5cclxuICAgICAgICAgIC8vc2VsZi5yZW1vdmVQZXJzb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHNlbGYucGVvcGxlLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvIyEvaW5mb3dvcmtlclwiO1xyXG4gICAgICAgICAgLy9zZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLmNhbXBhaWduLmluZm9DYW1wYWlnbihzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnRva2VuLCBzZWxmLmNvbnRleHQucmVwb3NpdG9yaWVzLnVybCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG5cclxuICAgICAgICAgICAgLy9hbGVydChzZWxmLmNhbXBhaWducyhyZXN1bHQuY2FtcGFpZ25zKSk7XHJcblxyXG5cclxuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLnRleHRTdGF0dXMpe1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGUudGV4dFN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCd3b3JrZXJzJywge1xyXG4gICAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcclxuICAgICAgICB2aWV3TW9kZWw6IFZpZXdNb2RlbFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8aDE+WW91ciBjYW1wYWlnbnM8L2gxPlxcclxcbjwvZGl2PlxcclxcbjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG4gICAgPGhlYWQ+XFxyXFxuXFx0XFx0PG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgQ1NTIHN0eWxlXFxyXFxuXFx0XFx0PGxpbmsgaHJlZj1cXFwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIiByZWw9XFxcInN0eWxlc2hlZXRcXFwiPiAtLT5cXHJcXG5cXHJcXG5cXHRcXHQ8IS0tIFdlYnNpdGUgRm9udCBzdHlsZSAtLT5cXHJcXG5cXHQgICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcXFwiPlxcclxcblxcdFxcdDwhLS08bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcInN0eWxlLmNzc1xcXCI+LS0+XFxyXFxuXFx0XFx0PCEtLSBHb29nbGUgRm9udHMgLS0+XFxyXFxuXFx0XFx0PGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhc3Npb24rT25lJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHRcXHQ8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3h5Z2VuJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz5cXHJcXG5cXHJcXG5cXHRcXHQ8dGl0bGU+QWRtaW48L3RpdGxlPlxcclxcblxcdDwvaGVhZD5cXHJcXG5cXHQ8Ym9keT5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInJvdyBtYWluXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJtYWluLWxvZ2luIG1haW4tY2VudGVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8aDU+SGVyZSB5b3UgY2FuIGZpbmQgeW91ciBjYW1wYWlnbnMuPC9oNT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8Zm9ybSBjbGFzcz1cXFwiXFxcIiBtZXRob2Q9XFxcInBvc3RcXFwiIGFjdGlvbj1cXFwiI1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHRhYmxlPlxcclxcbiAgICAgICAgICAgICAgPHRoZWFkPjx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XFxcIjFcXFwiPiBJZCAgICAgIDwvdGg+PHRoIGNvbHNwYW49XFxcIjFcXFwiPiAgIFdvcmtlcidzIE5hbWUgICA8L3RoPjx0aCBjb2xzcGFuPVxcXCIxXFxcIj4gIFNlbGVjdG9yICA8L3RoPjx0aCBjb2xzcGFuPVxcXCIxXFxcIj4gIEFubm90YXRvciAgPC90aD48dGg+PC90aD5cXHJcXG4gICAgICAgICAgICAgIDwvdHI+PC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgIDwhLS0gVG9kbzogR2VuZXJhdGUgdGFibGUgYm9keSAtLT5cXHJcXG4gICAgICAgICAgICAgIDx0Ym9keSBkYXRhLWJpbmQ9IFxcXCJmb3JlYWNoOiB3b3JrZXJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogaWRcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJpZFxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogZnVsbG5hbWVcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJmdWxsbmFtZVxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogc2VsZWN0b3JcXFwiIHR5cGU9J3RleHQnIGlkPVxcXCJzZWxlY3RvclxcXCIgcmVhZG9ubHk9XFxcInRydWVcXFwiPjwvc3Bhbj48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBkYXRhLWJpbmQgPSBcXFwidGV4dDogYW5ub3RhdG9yXFxcIiB0eXBlPSd0ZXh0JyBpZD1cXFwiYW5ub3RhdG9yXFxcIiByZWFkb25seT1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuaW5mby5iaW5kKCRkYXRhLCAkaW5kZXgoKSlcXFwiPldvcmtlciBJbmZvcm1hdGlvbjwvYT48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgPC90YWJsZT5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBkYXRhLWJpbmQ9J2NsaWNrOiBpbmZvJyB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJpbmZvXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBidG4tYmxvY2sgbG9naW4tYnV0dG9uXFxcIj5DaGVjazwvYnV0dG9uPlxcclxcblxcclxcblxcdFxcdCA8IS0tIGpRdWVyeSAobmVjZXNzYXJ5IGZvciBCb290c3RyYXAncyBKYXZhU2NyaXB0IHBsdWdpbnMpIC0tPlxcclxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcXFwiPjwvc2NyaXB0PlxcclxcblwiO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIGtvID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2tvJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydrbyddIDogbnVsbCksXHJcbiAgICBjb21wb25lbnRzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzJyksXHJcbiAgICBjcmVhdGVSZXBvc2l0b3JpZXMgPSByZXF1aXJlKCcuL3JlcG9zaXRvcmllcycpLmNyZWF0ZVJlcG9zaXRvcmllcztcclxuXHJcbmNvbXBvbmVudHMucmVnaXN0ZXIoKTtcclxuXHJcbnZhciByZXBvc2l0b3JpZXMgPSBjcmVhdGVSZXBvc2l0b3JpZXMoKTtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIHRoaXMubG9nZ2VkSW49a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5tYXN0ZXJMb2dnZWQ9a28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5yb3V0ZXMgPSB7XHJcbiAgICAgICAgJy8nOiAncmVnaXN0ZXJpbmcnLFxyXG4gICAgICAgICcvbG9naW4nOiAnbG9naW4nLFxyXG4gICAgICAgICcvY3JlYXRlJzogJ2NyZWF0ZScsXHJcbiAgICAgICAgJy9jYW1wYWlnbic6ICdjYW1wYWlnbicsXHJcbiAgICAgICAgJy9pbmZvY2FtcGFpZ24nOiAnaW5mb2NhbXBhaWduJyxcclxuICAgICAgICAnL2ltYWdlJzogJ2ltYWdlJyxcclxuICAgICAgICAnL2luZm9pbWFnZXMnOiAnaW5mb2ltYWdlcycsXHJcbiAgICAgICAgJy9pbWdzdGF0aXN0aWNzJzogJ2ltZ3N0YXRpc3RpY3MnLFxyXG4gICAgICAgICcvd29ya2Vycyc6ICd3b3JrZXJzJyxcclxuICAgICAgICAnL2luZm93b3JrZXInOiAnaW5mb3dvcmtlcicsXHJcbiAgICAgICAgJy9zdGF0aXN0aWNzJzogJ3N0YXRpc3RpY3MnLFxyXG4gICAgICAgICcvdGFza3N1c2VyJzogJ3Rhc2tzdXNlcicsXHJcbiAgICAgICAgJy9pbmZvdGFzayc6ICdpbmZvdGFzaycsXHJcbiAgICAgICAgJy90YXNrc2Vzc2lvbic6ICd0YXNrc2Vzc2lvbicsXHJcbiAgICAgICAgJy9mdWxsbmFtZSc6ICdmdWxsLW5hbWUnLFxyXG4gICAgICAgICcvZWRpdCc6ICdtYW5hZ2VyJyxcclxuICAgICAgICAnL2NydWQnOiAnY3J1ZC1saXN0JyxcclxuICAgICAgICAnL2xvY2FsLXN1bSc6ICdsb2NhbC1zdW0nLFxyXG4gICAgICAgICcvcmVtb3RlLXN1bSc6ICdyZW1vdGUtc3VtJyxcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcG9zaXRvcmllcyA9IHJlcG9zaXRvcmllcztcclxufVxyXG5cclxua28uYXBwbHlCaW5kaW5ncyhuZXcgQXBwKCkpO1xyXG4iLCIvKmpzbGludCBub2RlOnRydWUsIG5vbWVuOiB0cnVlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCksXHJcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcclxuXHJcbmZ1bmN0aW9uIFJlcG9zaXRvcnkoc2VydmVyKSB7XHJcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVwb3NpdG9yeSkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlcG9zaXRvcnkoc2VydmVyKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NlcnZlciA9IHNlcnZlciB8fCAnJztcclxufVxyXG5cclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBzZWxmLl9zZXJ2ZXIgKyAnL2FwaS9hZGQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgYTogYSxcclxuICAgICAgICAgICAgICAgIGI6IGJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQucmVzdWx0KTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKGVycm9yVGhyb3duKTtcclxuICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cyA9IHRleHRTdGF0dXM7XHJcbiAgICAgICAgICAgIGVycm9yLmpxWEhSID0ganFYSFI7XHJcbiAgICAgICAgICAgIGVycm9yLmVycm9ycyA9IGpxWEhSLnJlc3BvbnNlSlNPTi5lcnJvcnM7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydHMuUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbmV4cG9ydHMuY3JlYXRlUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSwgLy9yZXF1aXJlIGlzIHVzZWQgZm9yIG5vZGUganMgdG8gbG9hZCBtb2R1bGVzXHJcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTsgIC8vcHJvbWlzZSBpcyB1c2VkIHRvIHBlcmZvcm0gYXN5bmNocm9ub3VzIGNvbXB1dGF0aW9uc1xyXG5cclxuZnVuY3Rpb24gUmVwb3NpdG9yeShzZXJ2ZXIpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXBvc2l0b3J5KSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVwb3NpdG9yeShzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VydmVyID0gc2VydmVyIHx8ICcnO1xyXG59XHJcblxyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5jcmVhdGVDYW1wYWlnbiA9IGZ1bmN0aW9uICh0b2tlbiwgcGFja2V0KSB7IC8vcHV0IHByb3BlcnRpZXMgb3IgbWV0aG9kcyhyZWdpc3RlclVzZXIpIGZvciBhbiBleGlzdGluZyBjbGFzcywgYWRkaW5nIHRoZW0gdG8gdGhlIHByb3RvdHlwZVxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgLy9pbW1lZGlhdGx5IHJlc29sdmUgdGhlIHByb21pc2Ugb3IgcmVqZWN0IGl0XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyAnL2FwaS9jYW1wYWlnbicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAob3V0cHV0LCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICByZXNvbHZlKHhoci5nZXRSZXNwb25zZUhlYWRlcihcIkxvY2F0aW9uXCIpKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBSZXBvc2l0b3J5LnByb3RvdHlwZS5yZWFkQ2FtcGFpZ24gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyAnL2FwaS9jYW1wYWlnbicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTpcImpzb25cIiwgLy90eXBlIG9mIHRoZSBlbGVtZW50IHRoYXQgdGhlIFVSTCByZXR1cm5zLiBiZWNhdXNlIHJldHVybnMgc210aFxyXG4gICAgICAgICAgLy8gIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy90eXBlIG9mIHRoZSBlbGVtZW50IHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIC8vICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLCAvL3RoZSBwYWNrZXQgd2l0aCB0aGUgZGF0YSB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyIGluIGpzb24gZm9ybWF0LiBzdHJpbmdpZnkgY29udmVydHNcclxuICAgICAgICAgICAgLy9qYXZhc2NyaXB0IHZhbHVlIHRvIGEgSlNPTiBzdHJpbmdcclxuICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuIC8vXCJhdXRob3JpemF0aW9uIHJlcXVlc3RlZCB3aXRoIC4uLlwiQVBJVG9rZW5cIisuLi5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmluZm9DYW1wYWlnbiA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsKSB7XHJcbiAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybCxcclxuICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgZGF0YVR5cGU6XCJqc29uXCIsIC8vdHlwZSBvZiB0aGUgZWxlbWVudCB0aGF0IHRoZSBVUkwgcmV0dXJucy4gYmVjYXVzZSByZXR1cm5zIHNtdGhcclxuICAgICAgICAvLyAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgd2UgYXJlIHNlbmRpbmcgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgIC8vICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLCAvL3RoZSBwYWNrZXQgd2l0aCB0aGUgZGF0YSB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyIGluIGpzb24gZm9ybWF0LiBzdHJpbmdpZnkgY29udmVydHNcclxuICAgICAgICAgIC8vamF2YXNjcmlwdCB2YWx1ZSB0byBhIEpTT04gc3RyaW5nXHJcbiAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuIC8vXCJhdXRob3JpemF0aW9uIHJlcXVlc3RlZCB3aXRoIC4uLlwiQVBJVG9rZW5cIisuLi5cclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5lZGl0Q2FtcGFpZ24gPSBmdW5jdGlvbiAodG9rZW4sIHVybCwgcGFja2V0KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgICAgICAgIC8vdHlwZSBvZiB0aGUgZWxlbWVudCB0aGF0IHRoZSBVUkwgcmV0dXJucy4gYmVjYXVzZSByZXR1cm5zIHNtdGhcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgd2UgYXJlIHNlbmRpbmcgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICAvL2RhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksIC8vdGhlIHBhY2tldCB3aXRoIHRoZSBkYXRhIHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXIgaW4ganNvbiBmb3JtYXQuIHN0cmluZ2lmeSBjb252ZXJ0c1xyXG4gICAgICAgICAgICAvL2phdmFzY3JpcHQgdmFsdWUgdG8gYSBKU09OIHN0cmluZ1xyXG4gICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuIC8vXCJhdXRob3JpemF0aW9uIHJlcXVlc3RlZCB3aXRoIC4uLlwiQVBJVG9rZW5cIisuLi5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmxvYWRJbWFnZSA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsSW1hZ2UsIGltYWdlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmZC5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZSkgLy9hcHBlbmQgdGhlIGZpbGVcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxJbWFnZSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YTogZmQsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKG91dHB1dCwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMb2NhdGlvblwiKSk7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmluZm9JbWFnZXMgPSBmdW5jdGlvbiAodG9rZW4sIHVybEltYWdlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsSW1hZ2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5kZWxldGVJbWFnZXMgPSBmdW5jdGlvbiAodG9rZW4sIHVybEltZykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybEltZyxcclxuICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgLy8gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKFwiZGVsZXRlZFwiKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuaW5mb0ltZyA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsSW1nKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsSW1nLFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuaW5mb0ltZ1N0YXQgPSBmdW5jdGlvbiAodG9rZW4sIHVybEltZ1N0YXQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxJbWdTdGF0LFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuaW5mb0NhbXBhaWduV29ya2VycyA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsV29ya2Vycykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybFdvcmtlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5pbmZvV29ya2VyID0gZnVuY3Rpb24gKHRva2VuLCB1cmxXb3JrZXIpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxXb3JrZXIsXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5lbmFibGVXb3JrZXJTZWwgPSBmdW5jdGlvbiAodG9rZW4sIHVybFNlbCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybFNlbCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAvLyAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5kaXNhYmxlV29ya2VyU2VsID0gZnVuY3Rpb24gKHRva2VuLCB1cmxTZWwpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxTZWwsXHJcbiAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgIC8vICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAvLyAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShcImRlbGV0ZWRcIik7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5lbmFibGVXb3JrZXJBbm4gPSBmdW5jdGlvbiAodG9rZW4sIHVybEFubikge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybEFubixcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAvLyAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuZGlzYWJsZVdvcmtlckFubiA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsQW5uKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsQW5uLFxyXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAvLyAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoXCJkZWxldGVkXCIpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5zdGFydGNhbXBhaWduID0gZnVuY3Rpb24gKHRva2VuLCB1cmxleGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxleGUsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgLy8gIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLnRlcm1pbmF0ZWNhbXBhaWduID0gZnVuY3Rpb24gKHRva2VuLCB1cmxleGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxleGUsXHJcbiAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgLy8gIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIC8vICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5jYW1wYWlnblN0YXRpc3RpY3MgPSBmdW5jdGlvbiAodG9rZW4sIHVybFN0YXQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxTdGF0LFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUucmVhZFRhc2sgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgJy9hcGkvdGFzaycsXHJcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgIGRhdGFUeXBlOlwianNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgdGhhdCB0aGUgVVJMIHJldHVybnMuIGJlY2F1c2UgcmV0dXJucyBzbXRoXHJcbiAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vdHlwZSBvZiB0aGUgZWxlbWVudCB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgLy8gIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksIC8vdGhlIHBhY2tldCB3aXRoIHRoZSBkYXRhIHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXIgaW4ganNvbiBmb3JtYXQuIHN0cmluZ2lmeSBjb252ZXJ0c1xyXG4gICAgICAgICAgLy9qYXZhc2NyaXB0IHZhbHVlIHRvIGEgSlNPTiBzdHJpbmdcclxuICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4gLy9cImF1dGhvcml6YXRpb24gcmVxdWVzdGVkIHdpdGggLi4uXCJBUElUb2tlblwiKy4uLlxyXG4gICAgICAgICAgfSxcclxuICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydHMuUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbmV4cG9ydHMuY3JlYXRlUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSAqL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuY3JlYXRlUmVwb3NpdG9yaWVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkZXI6IHJlcXVpcmUoJy4vYWRkZXInKS5jcmVhdGVSZXBvc2l0b3J5KG9wdGlvbnMpLFxyXG4gICAgICAgIHVzZXI6IHJlcXVpcmUoJy4vdXNlcicpLmNyZWF0ZVJlcG9zaXRvcnkob3B0aW9ucyksXHJcbiAgICAgICAgY2FtcGFpZ246IHJlcXVpcmUoJy4vY2FtcGFpZ24nKS5jcmVhdGVSZXBvc2l0b3J5KG9wdGlvbnMpLFxyXG4gICAgICAgIHRhc2s6IHJlcXVpcmUoJy4vdGFzaycpLmNyZWF0ZVJlcG9zaXRvcnkob3B0aW9ucylcclxuICAgIH07XHJcbn07XHJcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSwgLy9yZXF1aXJlIGlzIHVzZWQgZm9yIG5vZGUganMgdG8gbG9hZCBtb2R1bGVzXHJcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTsgIC8vcHJvbWlzZSBpcyB1c2VkIHRvIHBlcmZvcm0gYXN5bmNocm9ub3VzIGNvbXB1dGF0aW9uc1xyXG5cclxuZnVuY3Rpb24gUmVwb3NpdG9yeShzZXJ2ZXIpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXBvc2l0b3J5KSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVwb3NpdG9yeShzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VydmVyID0gc2VydmVyIHx8ICcnO1xyXG59XHJcblxyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5yZWFkVGFzayA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gIHZhciBzZWxmID0gdGhpcztcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyAnL2FwaS90YXNrJyxcclxuICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgZGF0YVR5cGU6XCJqc29uXCIsIC8vdHlwZSBvZiB0aGUgZWxlbWVudCB0aGF0IHRoZSBVUkwgcmV0dXJucy4gYmVjYXVzZSByZXR1cm5zIHNtdGhcclxuICAgICAgLy8gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgd2UgYXJlIHNlbmRpbmcgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgIC8vICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLCAvL3RoZSBwYWNrZXQgd2l0aCB0aGUgZGF0YSB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyIGluIGpzb24gZm9ybWF0LiBzdHJpbmdpZnkgY29udmVydHNcclxuICAgICAgICAgIC8vamF2YXNjcmlwdCB2YWx1ZSB0byBhIEpTT04gc3RyaW5nXHJcbiAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuIC8vXCJhdXRob3JpemF0aW9uIHJlcXVlc3RlZCB3aXRoIC4uLlwiQVBJVG9rZW5cIisuLi5cclxuICAgICAgICAgIH0sXHJcbiAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEsaW5kZXgpIHtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSxpbmRleCk7XHJcbiAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuICBSZXBvc2l0b3J5LnByb3RvdHlwZS50YXNrSW5mbyA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsVGFzaykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybFRhc2ssXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICAvL2RhdGFUeXBlOlwianNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgdGhhdCB0aGUgVVJMIHJldHVybnMuIGJlY2F1c2UgcmV0dXJucyBzbXRoXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy90eXBlIG9mIHRoZSBlbGVtZW50IHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIC8vICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLCAvL3RoZSBwYWNrZXQgd2l0aCB0aGUgZGF0YSB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyIGluIGpzb24gZm9ybWF0LiBzdHJpbmdpZnkgY29udmVydHNcclxuICAgICAgICAgICAgLy9qYXZhc2NyaXB0IHZhbHVlIHRvIGEgSlNPTiBzdHJpbmdcclxuICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuIC8vXCJhdXRob3JpemF0aW9uIHJlcXVlc3RlZCB3aXRoIC4uLlwiQVBJVG9rZW5cIisuLi5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblJlcG9zaXRvcnkucHJvdG90eXBlLnN0YXJ0c2Vzc2lvbiA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsc2VzKSB7XHJcbiAgICBhbGVydChcIlNlc3Npb24gaWQgaXMgXCIrdXJsc2VzKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxzZXMsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgLy8gIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikgeyBcclxuICAgICAgICAgICAgaWYoZXJyLnN0YXR1cyA9PSA0MDQgfHwgZXJyLnN0YXR1cyA9PSA0MTAgfHwgZXJyb3JUaHJvd24gPT0gJ05vdCBGb3VuZCd8fCBlcnJvclRocm93biA9PSAnR29uZScpIFxyXG4gICAgICAgICAgICB7IFxyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdmFyIGU9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICBlLnRleHRTdGF0dXM9ZXJyLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZihlcnIuc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgZXJyb3Iuc3RhdHVzPWVyci5zdGF0dXM7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiQ291bGRuJ3QgZ2V0IG5ldyB0YXNrXCI7ICAgIFxyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblJlcG9zaXRvcnkucHJvdG90eXBlLnNlc3Npb250YXNrID0gZnVuY3Rpb24gKHRva2VuLCB1cmxzZXMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxzZXMsXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7IFxyXG4gICAgICAgICAgICBpZihlcnIuc3RhdHVzID09IDQwNCB8fCBlcnIuc3RhdHVzID09IDQxMCB8fCBlcnJvclRocm93biA9PSAnTm90IEZvdW5kJ3x8IGVycm9yVGhyb3duID09ICdHb25lJykgXHJcbiAgICAgICAgICAgIHsgXHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICB2YXIgZT1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIGUudGV4dFN0YXR1cz1lcnIuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmKGVyci5zdGF0dXMpXHJcbiAgICAgICAgICAgICAgICBlcnJvci5zdGF0dXM9ZXJyLnN0YXR1cztcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJDb3VsZG4ndCBnZXQgbmV3IHRhc2tcIjsgICAgXHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuYWNjZXB0SW1nID0gZnVuY3Rpb24gKHRva2VuLCB1cmxzZXMsIHBhY2tldCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybHNlcyxcclxuICAgICAgICAgICAgdHlwZTogJ1BVVCcsXHJcbiAgICAgICAgICAgICAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgdGhhdCB0aGUgVVJMIHJldHVybnMuIGJlY2F1c2UgcmV0dXJucyBzbXRoXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy90eXBlIG9mIHRoZSBlbGVtZW50IHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSwgLy90aGUgcGFja2V0IHdpdGggdGhlIGRhdGEgd2UgYXJlIHNlbmRpbmcgdG8gdGhlIHNlcnZlciBpbiBqc29uIGZvcm1hdC4gc3RyaW5naWZ5IGNvbnZlcnRzXHJcbiAgICAgICAgICAgIC8vamF2YXNjcmlwdCB2YWx1ZSB0byBhIEpTT04gc3RyaW5nXHJcbiAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbiAvL1wiYXV0aG9yaXphdGlvbiByZXF1ZXN0ZWQgd2l0aCAuLi5cIkFQSVRva2VuXCIrLi4uXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbiAodG9rZW4sIHVybEltYWdlLCBpbWFnZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZmQuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2UpIC8vYXBwZW5kIHRoZSBmaWxlXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsSW1hZ2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGZkLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChvdXRwdXQsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIikpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5pbmZvSW1hZ2VzID0gZnVuY3Rpb24gKHRva2VuLCB1cmxJbWFnZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybEltYWdlLFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuZGVsZXRlSW1hZ2VzID0gZnVuY3Rpb24gKHRva2VuLCB1cmxJbWcpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxJbWcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgIC8vICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAvLyAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShcImRlbGV0ZWRcIik7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmluZm9JbWcgPSBmdW5jdGlvbiAodG9rZW4sIHVybEltZykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybEltZyxcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAvLyAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmluZm9JbWdTdGF0ID0gZnVuY3Rpb24gKHRva2VuLCB1cmxJbWdTdGF0KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsSW1nU3RhdCxcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAvLyAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmluZm9DYW1wYWlnbldvcmtlcnMgPSBmdW5jdGlvbiAodG9rZW4sIHVybFdvcmtlcnMpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxXb3JrZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuaW5mb1dvcmtlciA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsV29ya2VyKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsV29ya2VyLFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuZW5hYmxlV29ya2VyU2VsID0gZnVuY3Rpb24gKHRva2VuLCB1cmxTZWwpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxTZWwsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgLy8gIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuZGlzYWJsZVdvcmtlclNlbCA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsU2VsKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsU2VsLFxyXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAvLyAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoXCJkZWxldGVkXCIpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuZW5hYmxlV29ya2VyQW5uID0gZnVuY3Rpb24gKHRva2VuLCB1cmxBbm4pIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyB1cmxBbm4sXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgLy8gIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmRpc2FibGVXb3JrZXJBbm4gPSBmdW5jdGlvbiAodG9rZW4sIHVybEFubikge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArIHVybEFubixcclxuICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgLy8gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKFwiZGVsZXRlZFwiKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuc3RhcnRjYW1wYWlnbiA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsZXhlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsZXhlLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIC8vICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgIC8vICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS50ZXJtaW5hdGVjYW1wYWlnbiA9IGZ1bmN0aW9uICh0b2tlbiwgdXJsZXhlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsZXhlLFxyXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgIC8vICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAvLyAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgICAvLyAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuUmVwb3NpdG9yeS5wcm90b3R5cGUuY2FtcGFpZ25TdGF0aXN0aWNzID0gZnVuY3Rpb24gKHRva2VuLCB1cmxTdGF0KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vYXd0LmlmbWxlZGl0Lm9yZ1wiICsgdXJsU3RhdCxcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAvLyAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSVRva2VuIFwiKyB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgLy8gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydHMuUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbmV4cG9ydHMuY3JlYXRlUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSwgbm9tZW46IHRydWUgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKSwgLy9yZXF1aXJlIGlzIHVzZWQgZm9yIG5vZGUganMgdG8gbG9hZCBtb2R1bGVzXHJcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTsgIC8vcHJvbWlzZSBpcyB1c2VkIHRvIHBlcmZvcm0gYXN5bmNocm9ub3VzIGNvbXB1dGF0aW9uc1xyXG5cclxuZnVuY3Rpb24gUmVwb3NpdG9yeShzZXJ2ZXIpIHtcclxuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXBvc2l0b3J5KSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVwb3NpdG9yeShzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VydmVyID0gc2VydmVyIHx8ICcnO1xyXG59XHJcblxyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5yZWdpc3RlclVzZXIgPSBmdW5jdGlvbiAocGFja2V0KSB7IC8vcHV0IHByb3BlcnRpZXMgb3IgbWV0aG9kcyhyZWdpc3RlclVzZXIpIGZvciBhbiBleGlzdGluZyBjbGFzcywgYWRkaW5nIHRoZW0gdG8gdGhlIHByb3RvdHlwZVxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgLy9pbW1lZGlhdGx5IHJlc29sdmUgdGhlIHByb21pc2Ugb3IgcmVqZWN0IGl0XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyAnL2FwaS91c2VyJyxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksXHJcbiAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkFQSUtleSBcIitcIjg5YTU1NjJhLTlkYzYtNDExNC05YzlkLWMwZGZiZjU1MGZkNFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoXCJVc2VyIFJlZ2lzdGVyZWRcIik7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZXJyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlSlNPTilcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9SlNPTi5zdHJpbmdpZnkoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPVwiU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gdGhlIHJlcXVlc3RcIjtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gICAgUmVwb3NpdG9yeS5wcm90b3R5cGUubG9naW5Vc2VyID0gZnVuY3Rpb24gKHBhY2tldCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyAnL2FwaS9hdXRoJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOlwianNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgdGhhdCB0aGUgVVJMIHJldHVybnMuIGJlY2F1c2UgcmV0dXJucyBzbXRoXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vdHlwZSBvZiB0aGUgZWxlbWVudCB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLCAvL3RoZSBwYWNrZXQgd2l0aCB0aGUgZGF0YSB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyIGluIGpzb24gZm9ybWF0LiBzdHJpbmdpZnkgY29udmVydHNcclxuICAgICAgICAgICAgICAgICAgLy9qYXZhc2NyaXB0IHZhbHVlIHRvIGEgSlNPTiBzdHJpbmdcclxuICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElLZXkgXCIrXCI4OWE1NTYyYS05ZGM2LTQxMTQtOWM5ZC1jMGRmYmY1NTBmZDRcIiAvL1wiYXV0aG9yaXphdGlvbiByZXF1ZXN0ZWQgd2l0aCAuLi5cIkFQSUtFWVwiKy4uLlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodG9rZW4udG9rZW4pO1xyXG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGVycm9yPW5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZXJyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuUmVwb3NpdG9yeS5wcm90b3R5cGUucmVhZFVzZXIgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9hd3QuaWZtbGVkaXQub3JnXCIgKyAnL2FwaS91c2VyL21lJyxcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOlwianNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgdGhhdCB0aGUgVVJMIHJldHVybnMuIGJlY2F1c2UgcmV0dXJucyBzbXRoXHJcbiAgICAgICAgICAvLyAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgd2UgYXJlIHNlbmRpbmcgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgLy8gIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksIC8vdGhlIHBhY2tldCB3aXRoIHRoZSBkYXRhIHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXIgaW4ganNvbiBmb3JtYXQuIHN0cmluZ2lmeSBjb252ZXJ0c1xyXG4gICAgICAgICAgICAvL2phdmFzY3JpcHQgdmFsdWUgdG8gYSBKU09OIHN0cmluZ1xyXG4gICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJBUElUb2tlbiBcIisgdG9rZW4gLy9cImF1dGhvcml6YXRpb24gcmVxdWVzdGVkIHdpdGggLi4uXCJBUElUb2tlblwiKy4uLlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChlcnIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3I9bmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2VKU09OKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1KU09OLnN0cmluZ2lmeShlcnIucmVzcG9uc2VKU09OLmVycm9yKTtcclxuICAgICAgICAgICAgZWxzZSBpZihlcnIucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9ZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yLnRleHRTdGF0dXM9XCJTb21ldGhpbmcgV2VudCBXcm9uZyBpbiB0aGUgcmVxdWVzdFwiO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5SZXBvc2l0b3J5LnByb3RvdHlwZS5jaGFuZ2VVc2VyID0gZnVuY3Rpb24gKHRva2VuLHBhY2tldCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArICcvYXBpL3VzZXIvbWUnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgICAgICAgIC8vdHlwZSBvZiB0aGUgZWxlbWVudCB0aGF0IHRoZSBVUkwgcmV0dXJucy4gYmVjYXVzZSByZXR1cm5zIHNtdGhcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLCAvL3R5cGUgb2YgdGhlIGVsZW1lbnQgd2UgYXJlIHNlbmRpbmcgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgICAgLy8gIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBhY2tldCksIC8vdGhlIHBhY2tldCB3aXRoIHRoZSBkYXRhIHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXIgaW4ganNvbiBmb3JtYXQuIHN0cmluZ2lmeSBjb252ZXJ0c1xyXG4gICAgICAgICAgICAvL2phdmFzY3JpcHQgdmFsdWUgdG8gYSBKU09OIHN0cmluZ1xyXG4gICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocGFja2V0KSxcclxuICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuIC8vXCJhdXRob3JpemF0aW9uIHJlcXVlc3RlZCB3aXRoIC4uLlwiQVBJVG9rZW5cIisuLi5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblJlcG9zaXRvcnkucHJvdG90eXBlLmxvZ091dCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2F3dC5pZm1sZWRpdC5vcmdcIiArICcvYXBpL2F1dGgnLFxyXG4gICAgICAgICAgICB0eXBlOiAnREVMRVRFJyxcclxuICAgICAgICAgIC8vICBkYXRhVHlwZTpcImpzb25cIiwgLy90eXBlIG9mIHRoZSBlbGVtZW50IHRoYXQgdGhlIFVSTCByZXR1cm5zLiBiZWNhdXNlIHJldHVybnMgc210aFxyXG4gICAgICAgICAgLy8gIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy90eXBlIG9mIHRoZSBlbGVtZW50IHdlIGFyZSBzZW5kaW5nIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIC8vICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYWNrZXQpLCAvL3RoZSBwYWNrZXQgd2l0aCB0aGUgZGF0YSB3ZSBhcmUgc2VuZGluZyB0byB0aGUgc2VydmVyIGluIGpzb24gZm9ybWF0LiBzdHJpbmdpZnkgY29udmVydHNcclxuICAgICAgICAgICAgLy9qYXZhc2NyaXB0IHZhbHVlIHRvIGEgSlNPTiBzdHJpbmdcclxuICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQVBJVG9rZW4gXCIrIHRva2VuIC8vXCJhdXRob3JpemF0aW9uIHJlcXVlc3RlZCB3aXRoIC4uLlwiQVBJVG9rZW5cIisuLi5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKGVyciwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgIHZhciBlcnJvcj1uZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgaWYgKGVyci5yZXNwb25zZUpTT04pXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPUpTT04uc3RyaW5naWZ5KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKGVyci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICBlcnJvci50ZXh0U3RhdHVzPWVyci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1lcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3IudGV4dFN0YXR1cz1cIlNvbWV0aGluZyBXZW50IFdyb25nIGluIHRoZSByZXF1ZXN0XCI7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydHMuUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbmV4cG9ydHMuY3JlYXRlUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnk7XHJcbiIsIi8qIEBwcmVzZXJ2ZVxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxMy0yMDE3IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG4vKipcbiAqIGJsdWViaXJkIGJ1aWxkIHZlcnNpb24gMy41LjBcbiAqIEZlYXR1cmVzIGVuYWJsZWQ6IGNvcmUsIHJhY2UsIGNhbGxfZ2V0LCBnZW5lcmF0b3JzLCBtYXAsIG5vZGVpZnksIHByb21pc2lmeSwgcHJvcHMsIHJlZHVjZSwgc2V0dGxlLCBzb21lLCB1c2luZywgdGltZXJzLCBmaWx0ZXIsIGFueSwgZWFjaFxuKi9cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIGY7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9mPXdpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2Y9Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYoZj1zZWxmKSxmLlByb21pc2U9ZSgpfX0oZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIF9kZXJlcV89PVwiZnVuY3Rpb25cIiYmX2RlcmVxXztpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX2RlcmVxXz09XCJmdW5jdGlvblwiJiZfZGVyZXFfO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIFNvbWVQcm9taXNlQXJyYXkgPSBQcm9taXNlLl9Tb21lUHJvbWlzZUFycmF5O1xuZnVuY3Rpb24gYW55KHByb21pc2VzKSB7XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgcmV0LnNldEhvd01hbnkoMSk7XG4gICAgcmV0LnNldFVud3JhcCgpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2UuYW55ID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIGFueShwcm9taXNlcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFueSh0aGlzKTtcbn07XG5cbn07XG5cbn0se31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZmlyc3RMaW5lRXJyb3I7XG50cnkge3Rocm93IG5ldyBFcnJvcigpOyB9IGNhdGNoIChlKSB7Zmlyc3RMaW5lRXJyb3IgPSBlO31cbnZhciBzY2hlZHVsZSA9IF9kZXJlcV8oXCIuL3NjaGVkdWxlXCIpO1xudmFyIFF1ZXVlID0gX2RlcmVxXyhcIi4vcXVldWVcIik7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIEFzeW5jKCkge1xuICAgIHRoaXMuX2N1c3RvbVNjaGVkdWxlciA9IGZhbHNlO1xuICAgIHRoaXMuX2lzVGlja1VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sYXRlUXVldWUgPSBuZXcgUXVldWUoMTYpO1xuICAgIHRoaXMuX25vcm1hbFF1ZXVlID0gbmV3IFF1ZXVlKDE2KTtcbiAgICB0aGlzLl9oYXZlRHJhaW5lZFF1ZXVlcyA9IGZhbHNlO1xuICAgIHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkID0gdHJ1ZTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5kcmFpblF1ZXVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5fZHJhaW5RdWV1ZXMoKTtcbiAgICB9O1xuICAgIHRoaXMuX3NjaGVkdWxlID0gc2NoZWR1bGU7XG59XG5cbkFzeW5jLnByb3RvdHlwZS5zZXRTY2hlZHVsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIHZhciBwcmV2ID0gdGhpcy5fc2NoZWR1bGU7XG4gICAgdGhpcy5fc2NoZWR1bGUgPSBmbjtcbiAgICB0aGlzLl9jdXN0b21TY2hlZHVsZXIgPSB0cnVlO1xuICAgIHJldHVybiBwcmV2O1xufTtcblxuQXN5bmMucHJvdG90eXBlLmhhc0N1c3RvbVNjaGVkdWxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TY2hlZHVsZXI7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuZW5hYmxlVHJhbXBvbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkID0gdHJ1ZTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5kaXNhYmxlVHJhbXBvbGluZUlmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHV0aWwuaGFzRGV2VG9vbHMpIHtcbiAgICAgICAgdGhpcy5fdHJhbXBvbGluZUVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaGF2ZUl0ZW1zUXVldWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1RpY2tVc2VkIHx8IHRoaXMuX2hhdmVEcmFpbmVkUXVldWVzO1xufTtcblxuXG5Bc3luYy5wcm90b3R5cGUuZmF0YWxFcnJvciA9IGZ1bmN0aW9uKGUsIGlzTm9kZSkge1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXCJGYXRhbCBcIiArIChlIGluc3RhbmNlb2YgRXJyb3IgPyBlLnN0YWNrIDogZSkgK1xuICAgICAgICAgICAgXCJcXG5cIik7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93TGF0ZXIoZSk7XG4gICAgfVxufTtcblxuQXN5bmMucHJvdG90eXBlLnRocm93TGF0ZXIgPSBmdW5jdGlvbihmbiwgYXJnKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYXJnID0gZm47XG4gICAgICAgIGZuID0gZnVuY3Rpb24gKCkgeyB0aHJvdyBhcmc7IH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4oYXJnKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHRyeSB7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4oYXJnKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhc3luYyBzY2hlZHVsZXIgYXZhaWxhYmxlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBBc3luY0ludm9rZUxhdGVyKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgdGhpcy5fbGF0ZVF1ZXVlLnB1c2goZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgIHRoaXMuX3F1ZXVlVGljaygpO1xufVxuXG5mdW5jdGlvbiBBc3luY0ludm9rZShmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHRoaXMuX25vcm1hbFF1ZXVlLnB1c2goZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgIHRoaXMuX3F1ZXVlVGljaygpO1xufVxuXG5mdW5jdGlvbiBBc3luY1NldHRsZVByb21pc2VzKHByb21pc2UpIHtcbiAgICB0aGlzLl9ub3JtYWxRdWV1ZS5fcHVzaE9uZShwcm9taXNlKTtcbiAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbn1cblxuaWYgKCF1dGlsLmhhc0RldlRvb2xzKSB7XG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZUxhdGVyID0gQXN5bmNJbnZva2VMYXRlcjtcbiAgICBBc3luYy5wcm90b3R5cGUuaW52b2tlID0gQXN5bmNJbnZva2U7XG4gICAgQXN5bmMucHJvdG90eXBlLnNldHRsZVByb21pc2VzID0gQXN5bmNTZXR0bGVQcm9taXNlcztcbn0gZWxzZSB7XG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZUxhdGVyID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgQXN5bmNJbnZva2VMYXRlci5jYWxsKHRoaXMsIGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFzeW5jLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkKSB7XG4gICAgICAgICAgICBBc3luY0ludm9rZS5jYWxsKHRoaXMsIGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBc3luYy5wcm90b3R5cGUuc2V0dGxlUHJvbWlzZXMgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgQXN5bmNTZXR0bGVQcm9taXNlcy5jYWxsKHRoaXMsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fc2V0dGxlUHJvbWlzZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuQXN5bmMucHJvdG90eXBlLl9kcmFpblF1ZXVlID0gZnVuY3Rpb24ocXVldWUpIHtcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZm4uX3NldHRsZVByb21pc2VzKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVjZWl2ZXIgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICB2YXIgYXJnID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgZm4uY2FsbChyZWNlaXZlciwgYXJnKTtcbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX2RyYWluUXVldWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2RyYWluUXVldWUodGhpcy5fbm9ybWFsUXVldWUpO1xuICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgdGhpcy5faGF2ZURyYWluZWRRdWV1ZXMgPSB0cnVlO1xuICAgIHRoaXMuX2RyYWluUXVldWUodGhpcy5fbGF0ZVF1ZXVlKTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcXVldWVUaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5faXNUaWNrVXNlZCkge1xuICAgICAgICB0aGlzLl9pc1RpY2tVc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2NoZWR1bGUodGhpcy5kcmFpblF1ZXVlcyk7XG4gICAgfVxufTtcblxuQXN5bmMucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9pc1RpY2tVc2VkID0gZmFsc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzeW5jO1xubW9kdWxlLmV4cG9ydHMuZmlyc3RMaW5lRXJyb3IgPSBmaXJzdExpbmVFcnJvcjtcblxufSx7XCIuL3F1ZXVlXCI6MjYsXCIuL3NjaGVkdWxlXCI6MjksXCIuL3V0aWxcIjozNn1dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBkZWJ1Zykge1xudmFyIGNhbGxlZEJpbmQgPSBmYWxzZTtcbnZhciByZWplY3RUaGlzID0gZnVuY3Rpb24oXywgZSkge1xuICAgIHRoaXMuX3JlamVjdChlKTtcbn07XG5cbnZhciB0YXJnZXRSZWplY3RlZCA9IGZ1bmN0aW9uKGUsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0LnByb21pc2VSZWplY3Rpb25RdWV1ZWQgPSB0cnVlO1xuICAgIGNvbnRleHQuYmluZGluZ1Byb21pc2UuX3RoZW4ocmVqZWN0VGhpcywgcmVqZWN0VGhpcywgbnVsbCwgdGhpcywgZSk7XG59O1xuXG52YXIgYmluZGluZ1Jlc29sdmVkID0gZnVuY3Rpb24odGhpc0FyZywgY29udGV4dCkge1xuICAgIGlmICgoKHRoaXMuX2JpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlQ2FsbGJhY2soY29udGV4dC50YXJnZXQpO1xuICAgIH1cbn07XG5cbnZhciBiaW5kaW5nUmVqZWN0ZWQgPSBmdW5jdGlvbihlLCBjb250ZXh0KSB7XG4gICAgaWYgKCFjb250ZXh0LnByb21pc2VSZWplY3Rpb25RdWV1ZWQpIHRoaXMuX3JlamVjdChlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAodGhpc0FyZykge1xuICAgIGlmICghY2FsbGVkQmluZCkge1xuICAgICAgICBjYWxsZWRCaW5kID0gdHJ1ZTtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX3Byb3BhZ2F0ZUZyb20gPSBkZWJ1Zy5wcm9wYWdhdGVGcm9tRnVuY3Rpb24oKTtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2JvdW5kVmFsdWUgPSBkZWJ1Zy5ib3VuZFZhbHVlRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodGhpc0FyZyk7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3Byb3BhZ2F0ZUZyb20odGhpcywgMSk7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldCgpO1xuICAgIHJldC5fc2V0Qm91bmRUbyhtYXliZVByb21pc2UpO1xuICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0ge1xuICAgICAgICAgICAgcHJvbWlzZVJlamVjdGlvblF1ZXVlZDogZmFsc2UsXG4gICAgICAgICAgICBwcm9taXNlOiByZXQsXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGJpbmRpbmdQcm9taXNlOiBtYXliZVByb21pc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGFyZ2V0Ll90aGVuKElOVEVSTkFMLCB0YXJnZXRSZWplY3RlZCwgdW5kZWZpbmVkLCByZXQsIGNvbnRleHQpO1xuICAgICAgICBtYXliZVByb21pc2UuX3RoZW4oXG4gICAgICAgICAgICBiaW5kaW5nUmVzb2x2ZWQsIGJpbmRpbmdSZWplY3RlZCwgdW5kZWZpbmVkLCByZXQsIGNvbnRleHQpO1xuICAgICAgICByZXQuX3NldE9uQ2FuY2VsKG1heWJlUHJvbWlzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0Ll9yZXNvbHZlQ2FsbGJhY2sodGFyZ2V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRCb3VuZFRvID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjA5NzE1MjtcbiAgICAgICAgdGhpcy5fYm91bmRUbyA9IG9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4yMDk3MTUyKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNCb3VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjA5NzE1MikgPT09IDIwOTcxNTI7XG59O1xuXG5Qcm9taXNlLmJpbmQgPSBmdW5jdGlvbiAodGhpc0FyZywgdmFsdWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS5iaW5kKHRoaXNBcmcpO1xufTtcbn07XG5cbn0se31dLDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgb2xkO1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiKSBvbGQgPSBQcm9taXNlO1xuZnVuY3Rpb24gbm9Db25mbGljdCgpIHtcbiAgICB0cnkgeyBpZiAoUHJvbWlzZSA9PT0gYmx1ZWJpcmQpIFByb21pc2UgPSBvbGQ7IH1cbiAgICBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gYmx1ZWJpcmQ7XG59XG52YXIgYmx1ZWJpcmQgPSBfZGVyZXFfKFwiLi9wcm9taXNlXCIpKCk7XG5ibHVlYmlyZC5ub0NvbmZsaWN0ID0gbm9Db25mbGljdDtcbm1vZHVsZS5leHBvcnRzID0gYmx1ZWJpcmQ7XG5cbn0se1wiLi9wcm9taXNlXCI6MjJ9XSw1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIGNyID0gT2JqZWN0LmNyZWF0ZTtcbmlmIChjcikge1xuICAgIHZhciBjYWxsZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIHZhciBnZXR0ZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIGNhbGxlckNhY2hlW1wiIHNpemVcIl0gPSBnZXR0ZXJDYWNoZVtcIiBzaXplXCJdID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIGlzSWRlbnRpZmllciA9IHV0aWwuaXNJZGVudGlmaWVyO1xuXG52YXIgZ2V0TWV0aG9kQ2FsbGVyO1xudmFyIGdldEdldHRlcjtcbmlmICghdHJ1ZSkge1xudmFyIG1ha2VNZXRob2RDYWxsZXIgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJlbnN1cmVNZXRob2RcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgZW5zdXJlTWV0aG9kKG9iaiwgJ21ldGhvZE5hbWUnKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgc3dpdGNoKGxlbikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG9iai5tZXRob2ROYW1lKHRoaXNbMF0pOyAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG9iai5tZXRob2ROYW1lKHRoaXNbMF0sIHRoaXNbMV0pOyAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIG9iai5tZXRob2ROYW1lKHRoaXNbMF0sIHRoaXNbMV0sIHRoaXNbMl0pOyAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG9iai5tZXRob2ROYW1lKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLm1ldGhvZE5hbWUuYXBwbHkob2JqLCB0aGlzKTsgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB9OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIi5yZXBsYWNlKC9tZXRob2ROYW1lL2csIG1ldGhvZE5hbWUpKShlbnN1cmVNZXRob2QpO1xufTtcblxudmFyIG1ha2VHZXR0ZXIgPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIm9ialwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHJldHVybiBvYmoucHJvcGVydHlOYW1lOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoXCJwcm9wZXJ0eU5hbWVcIiwgcHJvcGVydHlOYW1lKSk7XG59O1xuXG52YXIgZ2V0Q29tcGlsZWQgPSBmdW5jdGlvbihuYW1lLCBjb21waWxlciwgY2FjaGUpIHtcbiAgICB2YXIgcmV0ID0gY2FjaGVbbmFtZV07XG4gICAgaWYgKHR5cGVvZiByZXQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpZiAoIWlzSWRlbnRpZmllcihuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0gY29tcGlsZXIobmFtZSk7XG4gICAgICAgIGNhY2hlW25hbWVdID0gcmV0O1xuICAgICAgICBjYWNoZVtcIiBzaXplXCJdKys7XG4gICAgICAgIGlmIChjYWNoZVtcIiBzaXplXCJdID4gNTEyKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNhY2hlKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIGRlbGV0ZSBjYWNoZVtrZXlzW2ldXTtcbiAgICAgICAgICAgIGNhY2hlW1wiIHNpemVcIl0gPSBrZXlzLmxlbmd0aCAtIDI1NjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuZ2V0TWV0aG9kQ2FsbGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBnZXRDb21waWxlZChuYW1lLCBtYWtlTWV0aG9kQ2FsbGVyLCBjYWxsZXJDYWNoZSk7XG59O1xuXG5nZXRHZXR0ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIGdldENvbXBpbGVkKG5hbWUsIG1ha2VHZXR0ZXIsIGdldHRlckNhY2hlKTtcbn07XG59XG5cbmZ1bmN0aW9uIGVuc3VyZU1ldGhvZChvYmosIG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgZm47XG4gICAgaWYgKG9iaiAhPSBudWxsKSBmbiA9IG9ialttZXRob2ROYW1lXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIk9iamVjdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcob2JqKSArIFwiIGhhcyBubyBtZXRob2QgJ1wiICtcbiAgICAgICAgICAgIHV0aWwudG9TdHJpbmcobWV0aG9kTmFtZSkgKyBcIidcIjtcbiAgICAgICAgdGhyb3cgbmV3IFByb21pc2UuVHlwZUVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNhbGxlcihvYmopIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IHRoaXMucG9wKCk7XG4gICAgdmFyIGZuID0gZW5zdXJlTWV0aG9kKG9iaiwgbWV0aG9kTmFtZSk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgdGhpcyk7XG59XG5Qcm9taXNlLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTs7XG4gICAgaWYgKCF0cnVlKSB7XG4gICAgICAgIGlmIChjYW5FdmFsdWF0ZSkge1xuICAgICAgICAgICAgdmFyIG1heWJlQ2FsbGVyID0gZ2V0TWV0aG9kQ2FsbGVyKG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgaWYgKG1heWJlQ2FsbGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW4oXG4gICAgICAgICAgICAgICAgICAgIG1heWJlQ2FsbGVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJncywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmdzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oY2FsbGVyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYXJncywgdW5kZWZpbmVkKTtcbn07XG5cbmZ1bmN0aW9uIG5hbWVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5mdW5jdGlvbiBpbmRleGVkR2V0dGVyKG9iaikge1xuICAgIHZhciBpbmRleCA9ICt0aGlzO1xuICAgIGlmIChpbmRleCA8IDApIGluZGV4ID0gTWF0aC5tYXgoMCwgaW5kZXggKyBvYmoubGVuZ3RoKTtcbiAgICByZXR1cm4gb2JqW2luZGV4XTtcbn1cblByb21pc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICB2YXIgaXNJbmRleCA9ICh0eXBlb2YgcHJvcGVydHlOYW1lID09PSBcIm51bWJlclwiKTtcbiAgICB2YXIgZ2V0dGVyO1xuICAgIGlmICghaXNJbmRleCkge1xuICAgICAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZUdldHRlciA9IGdldEdldHRlcihwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgZ2V0dGVyID0gbWF5YmVHZXR0ZXIgIT09IG51bGwgPyBtYXliZUdldHRlciA6IG5hbWVkR2V0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0dGVyID0gbmFtZWRHZXR0ZXI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXR0ZXIgPSBpbmRleGVkR2V0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihnZXR0ZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwcm9wZXJ0eU5hbWUsIHVuZGVmaW5lZCk7XG59O1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCBkZWJ1Zykge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgYXN5bmMgPSBQcm9taXNlLl9hc3luYztcblxuUHJvbWlzZS5wcm90b3R5cGVbXCJicmVha1wiXSA9IFByb21pc2UucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghZGVidWcuY2FuY2VsbGF0aW9uKCkpIHJldHVybiB0aGlzLl93YXJuKFwiY2FuY2VsbGF0aW9uIGlzIGRpc2FibGVkXCIpO1xuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHZhciBjaGlsZCA9IHByb21pc2U7XG4gICAgd2hpbGUgKHByb21pc2UuX2lzQ2FuY2VsbGFibGUoKSkge1xuICAgICAgICBpZiAoIXByb21pc2UuX2NhbmNlbEJ5KGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLl9pc0ZvbGxvd2luZygpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuX2ZvbGxvd2VlKCkuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkLl9jYW5jZWxCcmFuY2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyZW50ID0gcHJvbWlzZS5fY2FuY2VsbGF0aW9uUGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ID09IG51bGwgfHwgIXBhcmVudC5faXNDYW5jZWxsYWJsZSgpKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faXNGb2xsb3dpbmcoKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2ZvbGxvd2VlKCkuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2NhbmNlbEJyYW5jaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9pc0ZvbGxvd2luZygpKSBwcm9taXNlLl9mb2xsb3dlZSgpLmNhbmNlbCgpO1xuICAgICAgICAgICAgcHJvbWlzZS5fc2V0V2lsbEJlQ2FuY2VsbGVkKCk7XG4gICAgICAgICAgICBjaGlsZCA9IHByb21pc2U7XG4gICAgICAgICAgICBwcm9taXNlID0gcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2JyYW5jaEhhc0NhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwtLTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9lbm91Z2hCcmFuY2hlc0hhdmVDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYnJhbmNoZXNSZW1haW5pbmdUb0NhbmNlbCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgIHRoaXMuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPD0gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWxCeSA9IGZ1bmN0aW9uKGNhbmNlbGxlcikge1xuICAgIGlmIChjYW5jZWxsZXIgPT09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5fYnJhbmNoZXNSZW1haW5pbmdUb0NhbmNlbCA9IDA7XG4gICAgICAgIHRoaXMuX2ludm9rZU9uQ2FuY2VsKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JyYW5jaEhhc0NhbmNlbGxlZCgpO1xuICAgICAgICBpZiAodGhpcy5fZW5vdWdoQnJhbmNoZXNIYXZlQ2FuY2VsbGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZU9uQ2FuY2VsKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsQnJhbmNoZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZW5vdWdoQnJhbmNoZXNIYXZlQ2FuY2VsbGVkKCkpIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5faXNDYW5jZWxsYWJsZSgpKSByZXR1cm47XG4gICAgdGhpcy5fc2V0Q2FuY2VsbGVkKCk7XG4gICAgYXN5bmMuaW52b2tlKHRoaXMuX2NhbmNlbFByb21pc2VzLCB0aGlzLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbFByb21pc2VzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xlbmd0aCgpID4gMCkgdGhpcy5fc2V0dGxlUHJvbWlzZXMoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldE9uQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fb25DYW5jZWxGaWVsZCA9IHVuZGVmaW5lZDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0NhbmNlbGxhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQZW5kaW5nKCkgJiYgIXRoaXMuX2lzQ2FuY2VsbGVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc0NhbmNlbGxhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNQZW5kaW5nKCkgJiYgIXRoaXMuaXNDYW5jZWxsZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9kb0ludm9rZU9uQ2FuY2VsID0gZnVuY3Rpb24ob25DYW5jZWxDYWxsYmFjaywgaW50ZXJuYWxPbmx5KSB7XG4gICAgaWYgKHV0aWwuaXNBcnJheShvbkNhbmNlbENhbGxiYWNrKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9uQ2FuY2VsQ2FsbGJhY2subGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvSW52b2tlT25DYW5jZWwob25DYW5jZWxDYWxsYmFja1tpXSwgaW50ZXJuYWxPbmx5KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob25DYW5jZWxDYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb25DYW5jZWxDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoIWludGVybmFsT25seSkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gdHJ5Q2F0Y2gob25DYW5jZWxDYWxsYmFjaykuY2FsbCh0aGlzLl9ib3VuZFZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIGlmIChlID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGUuZSk7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZS5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNhbmNlbENhbGxiYWNrLl9yZXN1bHRDYW5jZWxsZWQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faW52b2tlT25DYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb25DYW5jZWxDYWxsYmFjayA9IHRoaXMuX29uQ2FuY2VsKCk7XG4gICAgdGhpcy5fdW5zZXRPbkNhbmNlbCgpO1xuICAgIGFzeW5jLmludm9rZSh0aGlzLl9kb0ludm9rZU9uQ2FuY2VsLCB0aGlzLCBvbkNhbmNlbENhbGxiYWNrKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pbnZva2VJbnRlcm5hbE9uQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzQ2FuY2VsbGFibGUoKSkge1xuICAgICAgICB0aGlzLl9kb0ludm9rZU9uQ2FuY2VsKHRoaXMuX29uQ2FuY2VsKCksIHRydWUpO1xuICAgICAgICB0aGlzLl91bnNldE9uQ2FuY2VsKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG59O1xuXG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkVYVF9GSUxURVIpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBnZXRLZXlzID0gX2RlcmVxXyhcIi4vZXM1XCIpLmtleXM7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcblxuZnVuY3Rpb24gY2F0Y2hGaWx0ZXIoaW5zdGFuY2VzLCBjYiwgcHJvbWlzZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBib3VuZFRvID0gcHJvbWlzZS5fYm91bmRWYWx1ZSgpO1xuICAgICAgICBwcmVkaWNhdGVMb29wOiBmb3IgKHZhciBpID0gMDsgaSA8IGluc3RhbmNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpbnN0YW5jZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChpdGVtID09PSBFcnJvciB8fFxuICAgICAgICAgICAgICAgIChpdGVtICE9IG51bGwgJiYgaXRlbS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeUNhdGNoKGNiKS5jYWxsKGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzUHJlZGljYXRlID0gdHJ5Q2F0Y2goaXRlbSkuY2FsbChib3VuZFRvLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1ByZWRpY2F0ZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNQcmVkaWNhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzUHJlZGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlDYXRjaChjYikuY2FsbChib3VuZFRvLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHV0aWwuaXNPYmplY3QoZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IGdldEtleXMoaXRlbSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldICE9IGVba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgcHJlZGljYXRlTG9vcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ5Q2F0Y2goY2IpLmNhbGwoYm91bmRUbywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgIH07XG59XG5cbnJldHVybiBjYXRjaEZpbHRlcjtcbn07XG5cbn0se1wiLi9lczVcIjoxMyxcIi4vdXRpbFwiOjM2fV0sODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIGxvbmdTdGFja1RyYWNlcyA9IGZhbHNlO1xudmFyIGNvbnRleHRTdGFjayA9IFtdO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9O1xuUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gZnVuY3Rpb24oKSB7fTtcblByb21pc2UucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gZnVuY3Rpb24oKSB7cmV0dXJuIG51bGw7fTtcblByb21pc2UuX3BlZWtDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3BlZWtDb250ZXh0ID0gZnVuY3Rpb24oKSB7fTtcblxuZnVuY3Rpb24gQ29udGV4dCgpIHtcbiAgICB0aGlzLl90cmFjZSA9IG5ldyBDb250ZXh0LkNhcHR1cmVkVHJhY2UocGVla0NvbnRleHQoKSk7XG59XG5Db250ZXh0LnByb3RvdHlwZS5fcHVzaENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3RyYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdHJhY2UuX3Byb21pc2VDcmVhdGVkID0gbnVsbDtcbiAgICAgICAgY29udGV4dFN0YWNrLnB1c2godGhpcy5fdHJhY2UpO1xuICAgIH1cbn07XG5cbkNvbnRleHQucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl90cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IGNvbnRleHRTdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJldCA9IHRyYWNlLl9wcm9taXNlQ3JlYXRlZDtcbiAgICAgICAgdHJhY2UuX3Byb21pc2VDcmVhdGVkID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xuICAgIGlmIChsb25nU3RhY2tUcmFjZXMpIHJldHVybiBuZXcgQ29udGV4dCgpO1xufVxuXG5mdW5jdGlvbiBwZWVrQ29udGV4dCgpIHtcbiAgICB2YXIgbGFzdEluZGV4ID0gY29udGV4dFN0YWNrLmxlbmd0aCAtIDE7XG4gICAgaWYgKGxhc3RJbmRleCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0U3RhY2tbbGFzdEluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbkNvbnRleHQuQ2FwdHVyZWRUcmFjZSA9IG51bGw7XG5Db250ZXh0LmNyZWF0ZSA9IGNyZWF0ZUNvbnRleHQ7XG5Db250ZXh0LmRlYWN0aXZhdGVMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbigpIHt9O1xuQ29udGV4dC5hY3RpdmF0ZUxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBQcm9taXNlX3B1c2hDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0O1xuICAgIHZhciBQcm9taXNlX3BvcENvbnRleHQgPSBQcm9taXNlLnByb3RvdHlwZS5fcG9wQ29udGV4dDtcbiAgICB2YXIgUHJvbWlzZV9QZWVrQ29udGV4dCA9IFByb21pc2UuX3BlZWtDb250ZXh0O1xuICAgIHZhciBQcm9taXNlX3BlZWtDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3BlZWtDb250ZXh0O1xuICAgIHZhciBQcm9taXNlX3Byb21pc2VDcmVhdGVkID0gUHJvbWlzZS5wcm90b3R5cGUuX3Byb21pc2VDcmVhdGVkO1xuICAgIENvbnRleHQuZGVhY3RpdmF0ZUxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcHVzaENvbnRleHQgPSBQcm9taXNlX3B1c2hDb250ZXh0O1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcG9wQ29udGV4dCA9IFByb21pc2VfcG9wQ29udGV4dDtcbiAgICAgICAgUHJvbWlzZS5fcGVla0NvbnRleHQgPSBQcm9taXNlX1BlZWtDb250ZXh0O1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcGVla0NvbnRleHQgPSBQcm9taXNlX3BlZWtDb250ZXh0O1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUNyZWF0ZWQgPSBQcm9taXNlX3Byb21pc2VDcmVhdGVkO1xuICAgICAgICBsb25nU3RhY2tUcmFjZXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIGxvbmdTdGFja1RyYWNlcyA9IHRydWU7XG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gQ29udGV4dC5wcm90b3R5cGUuX3B1c2hDb250ZXh0O1xuICAgIFByb21pc2UucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gQ29udGV4dC5wcm90b3R5cGUuX3BvcENvbnRleHQ7XG4gICAgUHJvbWlzZS5fcGVla0NvbnRleHQgPSBQcm9taXNlLnByb3RvdHlwZS5fcGVla0NvbnRleHQgPSBwZWVrQ29udGV4dDtcbiAgICBQcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUNyZWF0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuX3BlZWtDb250ZXh0KCk7XG4gICAgICAgIGlmIChjdHggJiYgY3R4Ll9wcm9taXNlQ3JlYXRlZCA9PSBudWxsKSBjdHguX3Byb21pc2VDcmVhdGVkID0gdGhpcztcbiAgICB9O1xufTtcbnJldHVybiBDb250ZXh0O1xufTtcblxufSx7fV0sOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgQ29udGV4dCkge1xudmFyIGdldERvbWFpbiA9IFByb21pc2UuX2dldERvbWFpbjtcbnZhciBhc3luYyA9IFByb21pc2UuX2FzeW5jO1xudmFyIFdhcm5pbmcgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIikuV2FybmluZztcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBjYW5BdHRhY2hUcmFjZSA9IHV0aWwuY2FuQXR0YWNoVHJhY2U7XG52YXIgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZDtcbnZhciBwb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbjtcbnZhciBibHVlYmlyZEZyYW1lUGF0dGVybiA9XG4gICAgL1tcXFxcXFwvXWJsdWViaXJkW1xcXFxcXC9danNbXFxcXFxcL10ocmVsZWFzZXxkZWJ1Z3xpbnN0cnVtZW50ZWQpLztcbnZhciBub2RlRnJhbWVQYXR0ZXJuID0gL1xcKCg/OnRpbWVyc1xcLmpzKTpcXGQrOlxcZCtcXCkvO1xudmFyIHBhcnNlTGluZVBhdHRlcm4gPSAvW1xcLzxcXChdKC4rPyk6KFxcZCspOihcXGQrKVxcKT9cXHMqJC87XG52YXIgc3RhY2tGcmFtZVBhdHRlcm4gPSBudWxsO1xudmFyIGZvcm1hdFN0YWNrID0gbnVsbDtcbnZhciBpbmRlbnRTdGFja0ZyYW1lcyA9IGZhbHNlO1xudmFyIHByaW50V2FybmluZztcbnZhciBkZWJ1Z2dpbmcgPSAhISh1dGlsLmVudihcIkJMVUVCSVJEX0RFQlVHXCIpICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICh0cnVlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5lbnYoXCJCTFVFQklSRF9ERUJVR1wiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuZW52KFwiTk9ERV9FTlZcIikgPT09IFwiZGV2ZWxvcG1lbnRcIikpO1xuXG52YXIgd2FybmluZ3MgPSAhISh1dGlsLmVudihcIkJMVUVCSVJEX1dBUk5JTkdTXCIpICE9IDAgJiZcbiAgICAoZGVidWdnaW5nIHx8IHV0aWwuZW52KFwiQkxVRUJJUkRfV0FSTklOR1NcIikpKTtcblxudmFyIGxvbmdTdGFja1RyYWNlcyA9ICEhKHV0aWwuZW52KFwiQkxVRUJJUkRfTE9OR19TVEFDS19UUkFDRVNcIikgIT0gMCAmJlxuICAgIChkZWJ1Z2dpbmcgfHwgdXRpbC5lbnYoXCJCTFVFQklSRF9MT05HX1NUQUNLX1RSQUNFU1wiKSkpO1xuXG52YXIgd0ZvcmdvdHRlblJldHVybiA9IHV0aWwuZW52KFwiQkxVRUJJUkRfV19GT1JHT1RURU5fUkVUVVJOXCIpICE9IDAgJiZcbiAgICAod2FybmluZ3MgfHwgISF1dGlsLmVudihcIkJMVUVCSVJEX1dfRk9SR09UVEVOX1JFVFVSTlwiKSk7XG5cblByb21pc2UucHJvdG90eXBlLnN1cHByZXNzVW5oYW5kbGVkUmVqZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXQoKTtcbiAgICB0YXJnZXQuX2JpdEZpZWxkID0gKCh0YXJnZXQuX2JpdEZpZWxkICYgKH4xMDQ4NTc2KSkgfFxuICAgICAgICAgICAgICAgICAgICAgIDUyNDI4OCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgodGhpcy5fYml0RmllbGQgJiA1MjQyODgpICE9PSAwKSByZXR1cm47XG4gICAgdGhpcy5fc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICBhc3luYy5pbnZva2VMYXRlcih0aGlzLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb24sIHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uSXNIYW5kbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGZpcmVSZWplY3Rpb25FdmVudChcInJlamVjdGlvbkhhbmRsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkLCB1bmRlZmluZWQsIHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJldHVybmVkTm9uVW5kZWZpbmVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDI2ODQzNTQ1Njtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXR1cm5lZE5vblVuZGVmaW5lZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjg0MzU0NTYpICE9PSAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5faXNSZWplY3Rpb25VbmhhbmRsZWQoKSkge1xuICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5fc2V0dGxlZFZhbHVlKCk7XG4gICAgICAgIHRoaXMuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKTtcbiAgICAgICAgZmlyZVJlamVjdGlvbkV2ZW50KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uLCByZWFzb24sIHRoaXMpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyNjIxNDQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjI2MjE0NCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNVbmhhbmRsZWRSZWplY3Rpb25Ob3RpZmllZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjYyMTQ0KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEwNDg1NzY7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4xMDQ4NTc2KTtcbiAgICBpZiAodGhpcy5faXNVbmhhbmRsZWRSZWplY3Rpb25Ob3RpZmllZCgpKSB7XG4gICAgICAgIHRoaXMuX3Vuc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpO1xuICAgICAgICB0aGlzLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNSZWplY3Rpb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEwNDg1NzYpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl93YXJuID0gZnVuY3Rpb24obWVzc2FnZSwgc2hvdWxkVXNlT3duVHJhY2UsIHByb21pc2UpIHtcbiAgICByZXR1cm4gd2FybihtZXNzYWdlLCBzaG91bGRVc2VPd25UcmFjZSwgcHJvbWlzZSB8fCB0aGlzKTtcbn07XG5cblByb21pc2Uub25Qb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBkb21haW4gPSBnZXREb21haW4oKTtcbiAgICBwb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9XG4gICAgICAgIHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiID8gKGRvbWFpbiA9PT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuIDogdXRpbC5kb21haW5CaW5kKGRvbWFpbiwgZm4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG59O1xuXG5Qcm9taXNlLm9uVW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBkb21haW4gPSBnZXREb21haW4oKTtcbiAgICB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID1cbiAgICAgICAgdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgPyAoZG9tYWluID09PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4gOiB1dGlsLmRvbWFpbkJpbmQoZG9tYWluLCBmbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbn07XG5cbnZhciBkaXNhYmxlTG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24oKSB7fTtcblByb21pc2UubG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChhc3luYy5oYXZlSXRlbXNRdWV1ZWQoKSAmJiAhY29uZmlnLmxvbmdTdGFja1RyYWNlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgZW5hYmxlIGxvbmcgc3RhY2sgdHJhY2VzIGFmdGVyIHByb21pc2VzIGhhdmUgYmVlbiBjcmVhdGVkXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgaWYgKCFjb25maWcubG9uZ1N0YWNrVHJhY2VzICYmIGxvbmdTdGFja1RyYWNlc0lzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdmFyIFByb21pc2VfY2FwdHVyZVN0YWNrVHJhY2UgPSBQcm9taXNlLnByb3RvdHlwZS5fY2FwdHVyZVN0YWNrVHJhY2U7XG4gICAgICAgIHZhciBQcm9taXNlX2F0dGFjaEV4dHJhVHJhY2UgPSBQcm9taXNlLnByb3RvdHlwZS5fYXR0YWNoRXh0cmFUcmFjZTtcbiAgICAgICAgY29uZmlnLmxvbmdTdGFja1RyYWNlcyA9IHRydWU7XG4gICAgICAgIGRpc2FibGVMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChhc3luYy5oYXZlSXRlbXNRdWV1ZWQoKSAmJiAhY29uZmlnLmxvbmdTdGFja1RyYWNlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBlbmFibGUgbG9uZyBzdGFjayB0cmFjZXMgYWZ0ZXIgcHJvbWlzZXMgaGF2ZSBiZWVuIGNyZWF0ZWRcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2NhcHR1cmVTdGFja1RyYWNlID0gUHJvbWlzZV9jYXB0dXJlU3RhY2tUcmFjZTtcbiAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlID0gUHJvbWlzZV9hdHRhY2hFeHRyYVRyYWNlO1xuICAgICAgICAgICAgQ29udGV4dC5kZWFjdGl2YXRlTG9uZ1N0YWNrVHJhY2VzKCk7XG4gICAgICAgICAgICBhc3luYy5lbmFibGVUcmFtcG9saW5lKCk7XG4gICAgICAgICAgICBjb25maWcubG9uZ1N0YWNrVHJhY2VzID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9jYXB0dXJlU3RhY2tUcmFjZSA9IGxvbmdTdGFja1RyYWNlc0NhcHR1cmVTdGFja1RyYWNlO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fYXR0YWNoRXh0cmFUcmFjZSA9IGxvbmdTdGFja1RyYWNlc0F0dGFjaEV4dHJhVHJhY2U7XG4gICAgICAgIENvbnRleHQuYWN0aXZhdGVMb25nU3RhY2tUcmFjZXMoKTtcbiAgICAgICAgYXN5bmMuZGlzYWJsZVRyYW1wb2xpbmVJZk5lY2Vzc2FyeSgpO1xuICAgIH1cbn07XG5cblByb21pc2UuaGFzTG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjb25maWcubG9uZ1N0YWNrVHJhY2VzICYmIGxvbmdTdGFja1RyYWNlc0lzU3VwcG9ydGVkKCk7XG59O1xuXG52YXIgZmlyZURvbUV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICB1dGlsLmdsb2JhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkb21FdmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLnRvTG93ZXJDYXNlKCksIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudCxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiAhdXRpbC5nbG9iYWwuZGlzcGF0Y2hFdmVudChkb21FdmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICAgIHV0aWwuZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvbUV2ZW50ID0gbmV3IEV2ZW50KG5hbWUudG9Mb3dlckNhc2UoKSwge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZG9tRXZlbnQuZGV0YWlsID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF1dGlsLmdsb2JhbC5kaXNwYXRjaEV2ZW50KGRvbUV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KFwidGVzdGluZ3RoZWV2ZW50XCIsIGZhbHNlLCB0cnVlLCB7fSk7XG4gICAgICAgICAgICB1dGlsLmdsb2JhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkb21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICAgICAgZG9tRXZlbnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUudG9Mb3dlckNhc2UoKSwgZmFsc2UsIHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWwuZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZG9tRXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn0pKCk7XG5cbnZhciBmaXJlR2xvYmFsRXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHV0aWwuaXNOb2RlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVtaXQuYXBwbHkocHJvY2VzcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXV0aWwuZ2xvYmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSBcIm9uXCIgKyBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gdXRpbC5nbG9iYWxbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbWV0aG9kLmFwcGx5KHV0aWwuZ2xvYmFsLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfVxufSkoKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9taXNlTGlmZWN5Y2xlRXZlbnRPYmplY3QobmFtZSwgcHJvbWlzZSkge1xuICAgIHJldHVybiB7cHJvbWlzZTogcHJvbWlzZX07XG59XG5cbnZhciBldmVudFRvT2JqZWN0R2VuZXJhdG9yID0ge1xuICAgIHByb21pc2VDcmVhdGVkOiBnZW5lcmF0ZVByb21pc2VMaWZlY3ljbGVFdmVudE9iamVjdCxcbiAgICBwcm9taXNlRnVsZmlsbGVkOiBnZW5lcmF0ZVByb21pc2VMaWZlY3ljbGVFdmVudE9iamVjdCxcbiAgICBwcm9taXNlUmVqZWN0ZWQ6IGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0LFxuICAgIHByb21pc2VSZXNvbHZlZDogZ2VuZXJhdGVQcm9taXNlTGlmZWN5Y2xlRXZlbnRPYmplY3QsXG4gICAgcHJvbWlzZUNhbmNlbGxlZDogZ2VuZXJhdGVQcm9taXNlTGlmZWN5Y2xlRXZlbnRPYmplY3QsXG4gICAgcHJvbWlzZUNoYWluZWQ6IGZ1bmN0aW9uKG5hbWUsIHByb21pc2UsIGNoaWxkKSB7XG4gICAgICAgIHJldHVybiB7cHJvbWlzZTogcHJvbWlzZSwgY2hpbGQ6IGNoaWxkfTtcbiAgICB9LFxuICAgIHdhcm5pbmc6IGZ1bmN0aW9uKG5hbWUsIHdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIHt3YXJuaW5nOiB3YXJuaW5nfTtcbiAgICB9LFxuICAgIHVuaGFuZGxlZFJlamVjdGlvbjogZnVuY3Rpb24gKG5hbWUsIHJlYXNvbiwgcHJvbWlzZSkge1xuICAgICAgICByZXR1cm4ge3JlYXNvbjogcmVhc29uLCBwcm9taXNlOiBwcm9taXNlfTtcbiAgICB9LFxuICAgIHJlamVjdGlvbkhhbmRsZWQ6IGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0XG59O1xuXG52YXIgYWN0aXZlRmlyZUV2ZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZ2xvYmFsRXZlbnRGaXJlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGdsb2JhbEV2ZW50RmlyZWQgPSBmaXJlR2xvYmFsRXZlbnQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZSk7XG4gICAgICAgIGdsb2JhbEV2ZW50RmlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBkb21FdmVudEZpcmVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZG9tRXZlbnRGaXJlZCA9IGZpcmVEb21FdmVudChuYW1lLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRvT2JqZWN0R2VuZXJhdG9yW25hbWVdLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihlKTtcbiAgICAgICAgZG9tRXZlbnRGaXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbUV2ZW50RmlyZWQgfHwgZ2xvYmFsRXZlbnRGaXJlZDtcbn07XG5cblByb21pc2UuY29uZmlnID0gZnVuY3Rpb24ob3B0cykge1xuICAgIG9wdHMgPSBPYmplY3Qob3B0cyk7XG4gICAgaWYgKFwibG9uZ1N0YWNrVHJhY2VzXCIgaW4gb3B0cykge1xuICAgICAgICBpZiAob3B0cy5sb25nU3RhY2tUcmFjZXMpIHtcbiAgICAgICAgICAgIFByb21pc2UubG9uZ1N0YWNrVHJhY2VzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW9wdHMubG9uZ1N0YWNrVHJhY2VzICYmIFByb21pc2UuaGFzTG9uZ1N0YWNrVHJhY2VzKCkpIHtcbiAgICAgICAgICAgIGRpc2FibGVMb25nU3RhY2tUcmFjZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJ3YXJuaW5nc1wiIGluIG9wdHMpIHtcbiAgICAgICAgdmFyIHdhcm5pbmdzT3B0aW9uID0gb3B0cy53YXJuaW5ncztcbiAgICAgICAgY29uZmlnLndhcm5pbmdzID0gISF3YXJuaW5nc09wdGlvbjtcbiAgICAgICAgd0ZvcmdvdHRlblJldHVybiA9IGNvbmZpZy53YXJuaW5ncztcblxuICAgICAgICBpZiAodXRpbC5pc09iamVjdCh3YXJuaW5nc09wdGlvbikpIHtcbiAgICAgICAgICAgIGlmIChcIndGb3Jnb3R0ZW5SZXR1cm5cIiBpbiB3YXJuaW5nc09wdGlvbikge1xuICAgICAgICAgICAgICAgIHdGb3Jnb3R0ZW5SZXR1cm4gPSAhIXdhcm5pbmdzT3B0aW9uLndGb3Jnb3R0ZW5SZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwiY2FuY2VsbGF0aW9uXCIgaW4gb3B0cyAmJiBvcHRzLmNhbmNlbGxhdGlvbiAmJiAhY29uZmlnLmNhbmNlbGxhdGlvbikge1xuICAgICAgICBpZiAoYXN5bmMuaGF2ZUl0ZW1zUXVldWVkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcImNhbm5vdCBlbmFibGUgY2FuY2VsbGF0aW9uIGFmdGVyIHByb21pc2VzIGFyZSBpbiB1c2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2NsZWFyQ2FuY2VsbGF0aW9uRGF0YSA9XG4gICAgICAgICAgICBjYW5jZWxsYXRpb25DbGVhckNhbmNlbGxhdGlvbkRhdGE7XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9wcm9wYWdhdGVGcm9tID0gY2FuY2VsbGF0aW9uUHJvcGFnYXRlRnJvbTtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX29uQ2FuY2VsID0gY2FuY2VsbGF0aW9uT25DYW5jZWw7XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9zZXRPbkNhbmNlbCA9IGNhbmNlbGxhdGlvblNldE9uQ2FuY2VsO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fYXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2sgPVxuICAgICAgICAgICAgY2FuY2VsbGF0aW9uQXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2s7XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9leGVjdXRlID0gY2FuY2VsbGF0aW9uRXhlY3V0ZTtcbiAgICAgICAgcHJvcGFnYXRlRnJvbUZ1bmN0aW9uID0gY2FuY2VsbGF0aW9uUHJvcGFnYXRlRnJvbTtcbiAgICAgICAgY29uZmlnLmNhbmNlbGxhdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIGlmIChcIm1vbml0b3JpbmdcIiBpbiBvcHRzKSB7XG4gICAgICAgIGlmIChvcHRzLm1vbml0b3JpbmcgJiYgIWNvbmZpZy5tb25pdG9yaW5nKSB7XG4gICAgICAgICAgICBjb25maWcubW9uaXRvcmluZyA9IHRydWU7XG4gICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fZmlyZUV2ZW50ID0gYWN0aXZlRmlyZUV2ZW50O1xuICAgICAgICB9IGVsc2UgaWYgKCFvcHRzLm1vbml0b3JpbmcgJiYgY29uZmlnLm1vbml0b3JpbmcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5tb25pdG9yaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fZmlyZUV2ZW50ID0gZGVmYXVsdEZpcmVFdmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZTtcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRGaXJlRXZlbnQoKSB7IHJldHVybiBmYWxzZTsgfVxuXG5Qcm9taXNlLnByb3RvdHlwZS5fZmlyZUV2ZW50ID0gZGVmYXVsdEZpcmVFdmVudDtcblByb21pc2UucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24oZXhlY3V0b3IsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59O1xuUHJvbWlzZS5wcm90b3R5cGUuX29uQ2FuY2VsID0gZnVuY3Rpb24gKCkge307XG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0T25DYW5jZWwgPSBmdW5jdGlvbiAoaGFuZGxlcikgeyA7IH07XG5Qcm9taXNlLnByb3RvdHlwZS5fYXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbihvbkNhbmNlbCkge1xuICAgIDtcbn07XG5Qcm9taXNlLnByb3RvdHlwZS5fY2FwdHVyZVN0YWNrVHJhY2UgPSBmdW5jdGlvbiAoKSB7fTtcblByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlID0gZnVuY3Rpb24gKCkge307XG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYXJDYW5jZWxsYXRpb25EYXRhID0gZnVuY3Rpb24oKSB7fTtcblByb21pc2UucHJvdG90eXBlLl9wcm9wYWdhdGVGcm9tID0gZnVuY3Rpb24gKHBhcmVudCwgZmxhZ3MpIHtcbiAgICA7XG4gICAgO1xufTtcblxuZnVuY3Rpb24gY2FuY2VsbGF0aW9uRXhlY3V0ZShleGVjdXRvciwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICAgIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCwgZnVuY3Rpb24ob25DYW5jZWwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25DYW5jZWwgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJvbkNhbmNlbCBtdXN0IGJlIGEgZnVuY3Rpb24sIGdvdDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC50b1N0cmluZyhvbkNhbmNlbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2sob25DYW5jZWwpO1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsbGF0aW9uQXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2sob25DYW5jZWwpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcHJldmlvdXNPbkNhbmNlbCA9IHRoaXMuX29uQ2FuY2VsKCk7XG4gICAgaWYgKHByZXZpb3VzT25DYW5jZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodXRpbC5pc0FycmF5KHByZXZpb3VzT25DYW5jZWwpKSB7XG4gICAgICAgICAgICBwcmV2aW91c09uQ2FuY2VsLnB1c2gob25DYW5jZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0T25DYW5jZWwoW3ByZXZpb3VzT25DYW5jZWwsIG9uQ2FuY2VsXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZXRPbkNhbmNlbChvbkNhbmNlbCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxsYXRpb25PbkNhbmNlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25DYW5jZWxGaWVsZDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsbGF0aW9uU2V0T25DYW5jZWwob25DYW5jZWwpIHtcbiAgICB0aGlzLl9vbkNhbmNlbEZpZWxkID0gb25DYW5jZWw7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvbkNsZWFyQ2FuY2VsbGF0aW9uRGF0YSgpIHtcbiAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fb25DYW5jZWxGaWVsZCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsbGF0aW9uUHJvcGFnYXRlRnJvbShwYXJlbnQsIGZsYWdzKSB7XG4gICAgaWYgKChmbGFncyAmIDEpICE9PSAwKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbGxhdGlvblBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdmFyIGJyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPSBwYXJlbnQuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWw7XG4gICAgICAgIGlmIChicmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5fYnJhbmNoZXNSZW1haW5pbmdUb0NhbmNlbCA9IGJyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgKyAxO1xuICAgIH1cbiAgICBpZiAoKGZsYWdzICYgMikgIT09IDAgJiYgcGFyZW50Ll9pc0JvdW5kKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Qm91bmRUbyhwYXJlbnQuX2JvdW5kVG8pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYmluZGluZ1Byb3BhZ2F0ZUZyb20ocGFyZW50LCBmbGFncykge1xuICAgIGlmICgoZmxhZ3MgJiAyKSAhPT0gMCAmJiBwYXJlbnQuX2lzQm91bmQoKSkge1xuICAgICAgICB0aGlzLl9zZXRCb3VuZFRvKHBhcmVudC5fYm91bmRUbyk7XG4gICAgfVxufVxudmFyIHByb3BhZ2F0ZUZyb21GdW5jdGlvbiA9IGJpbmRpbmdQcm9wYWdhdGVGcm9tO1xuXG5mdW5jdGlvbiBib3VuZFZhbHVlRnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHRoaXMuX2JvdW5kVG87XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAocmV0LmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9uZ1N0YWNrVHJhY2VzQ2FwdHVyZVN0YWNrVHJhY2UoKSB7XG4gICAgdGhpcy5fdHJhY2UgPSBuZXcgQ2FwdHVyZWRUcmFjZSh0aGlzLl9wZWVrQ29udGV4dCgpKTtcbn1cblxuZnVuY3Rpb24gbG9uZ1N0YWNrVHJhY2VzQXR0YWNoRXh0cmFUcmFjZShlcnJvciwgaWdub3JlU2VsZikge1xuICAgIGlmIChjYW5BdHRhY2hUcmFjZShlcnJvcikpIHtcbiAgICAgICAgdmFyIHRyYWNlID0gdGhpcy5fdHJhY2U7XG4gICAgICAgIGlmICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlU2VsZikgdHJhY2UgPSB0cmFjZS5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cmFjZS5hdHRhY2hFeHRyYVRyYWNlKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICghZXJyb3IuX19zdGFja0NsZWFuZWRfXykge1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlU3RhY2tBbmRNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AoZXJyb3IsIFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICBwYXJzZWQubWVzc2FnZSArIFwiXFxuXCIgKyBwYXJzZWQuc3RhY2suam9pbihcIlxcblwiKSk7XG4gICAgICAgICAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKGVycm9yLCBcIl9fc3RhY2tDbGVhbmVkX19cIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yZ290dGVuUmV0dXJucyhyZXR1cm5WYWx1ZSwgcHJvbWlzZUNyZWF0ZWQsIG5hbWUsIHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50KSB7XG4gICAgaWYgKHJldHVyblZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvbWlzZUNyZWF0ZWQgIT09IG51bGwgJiZcbiAgICAgICAgd0ZvcmdvdHRlblJldHVybikge1xuICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQgJiYgcGFyZW50Ll9yZXR1cm5lZE5vblVuZGVmaW5lZCgpKSByZXR1cm47XG4gICAgICAgIGlmICgocHJvbWlzZS5fYml0RmllbGQgJiA2NTUzNSkgPT09IDApIHJldHVybjtcblxuICAgICAgICBpZiAobmFtZSkgbmFtZSA9IG5hbWUgKyBcIiBcIjtcbiAgICAgICAgdmFyIGhhbmRsZXJMaW5lID0gXCJcIjtcbiAgICAgICAgdmFyIGNyZWF0b3JMaW5lID0gXCJcIjtcbiAgICAgICAgaWYgKHByb21pc2VDcmVhdGVkLl90cmFjZSkge1xuICAgICAgICAgICAgdmFyIHRyYWNlTGluZXMgPSBwcm9taXNlQ3JlYXRlZC5fdHJhY2Uuc3RhY2suc3BsaXQoXCJcXG5cIik7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBjbGVhblN0YWNrKHRyYWNlTGluZXMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBzdGFja1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVGcmFtZVBhdHRlcm4udGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGluZU1hdGNoZXMgPSBsaW5lLm1hdGNoKHBhcnNlTGluZVBhdHRlcm4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGluZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJMaW5lICA9IFwiYXQgXCIgKyBsaW5lTWF0Y2hlc1sxXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIgKyBsaW5lTWF0Y2hlc1syXSArIFwiOlwiICsgbGluZU1hdGNoZXNbM10gKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0VXNlckxpbmUgPSBzdGFja1swXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNlTGluZXMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2VMaW5lc1tpXSA9PT0gZmlyc3RVc2VyTGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvckxpbmUgPSBcIlxcblwiICsgdHJhY2VMaW5lc1tpIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtc2cgPSBcImEgcHJvbWlzZSB3YXMgY3JlYXRlZCBpbiBhIFwiICsgbmFtZSArXG4gICAgICAgICAgICBcImhhbmRsZXIgXCIgKyBoYW5kbGVyTGluZSArIFwiYnV0IHdhcyBub3QgcmV0dXJuZWQgZnJvbSBpdCwgXCIgK1xuICAgICAgICAgICAgXCJzZWUgaHR0cDovL2dvby5nbC9yUnFNVXdcIiArXG4gICAgICAgICAgICBjcmVhdG9yTGluZTtcbiAgICAgICAgcHJvbWlzZS5fd2Fybihtc2csIHRydWUsIHByb21pc2VDcmVhdGVkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQobmFtZSwgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgbWVzc2FnZSA9IG5hbWUgK1xuICAgICAgICBcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cIjtcbiAgICBpZiAocmVwbGFjZW1lbnQpIG1lc3NhZ2UgKz0gXCIgVXNlIFwiICsgcmVwbGFjZW1lbnQgKyBcIiBpbnN0ZWFkLlwiO1xuICAgIHJldHVybiB3YXJuKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UsIHNob3VsZFVzZU93blRyYWNlLCBwcm9taXNlKSB7XG4gICAgaWYgKCFjb25maWcud2FybmluZ3MpIHJldHVybjtcbiAgICB2YXIgd2FybmluZyA9IG5ldyBXYXJuaW5nKG1lc3NhZ2UpO1xuICAgIHZhciBjdHg7XG4gICAgaWYgKHNob3VsZFVzZU93blRyYWNlKSB7XG4gICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2Uod2FybmluZyk7XG4gICAgfSBlbHNlIGlmIChjb25maWcubG9uZ1N0YWNrVHJhY2VzICYmIChjdHggPSBQcm9taXNlLl9wZWVrQ29udGV4dCgpKSkge1xuICAgICAgICBjdHguYXR0YWNoRXh0cmFUcmFjZSh3YXJuaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyc2VkID0gcGFyc2VTdGFja0FuZE1lc3NhZ2Uod2FybmluZyk7XG4gICAgICAgIHdhcm5pbmcuc3RhY2sgPSBwYXJzZWQubWVzc2FnZSArIFwiXFxuXCIgKyBwYXJzZWQuc3RhY2suam9pbihcIlxcblwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUZpcmVFdmVudChcIndhcm5pbmdcIiwgd2FybmluZykpIHtcbiAgICAgICAgZm9ybWF0QW5kTG9nRXJyb3Iod2FybmluZywgXCJcIiwgdHJ1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWNvbnN0cnVjdFN0YWNrKG1lc3NhZ2UsIHN0YWNrcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgICAgICBzdGFja3NbaV0ucHVzaChcIkZyb20gcHJldmlvdXMgZXZlbnQ6XCIpO1xuICAgICAgICBzdGFja3NbaV0gPSBzdGFja3NbaV0uam9pbihcIlxcblwiKTtcbiAgICB9XG4gICAgaWYgKGkgPCBzdGFja3MubGVuZ3RoKSB7XG4gICAgICAgIHN0YWNrc1tpXSA9IHN0YWNrc1tpXS5qb2luKFwiXFxuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFja3Muam9pbihcIlxcblwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlT3JFbXB0eUp1bXBzKHN0YWNrcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChzdGFja3NbaV0ubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAoKGkgKyAxIDwgc3RhY2tzLmxlbmd0aCkgJiYgc3RhY2tzW2ldWzBdID09PSBzdGFja3NbaSsxXVswXSkpIHtcbiAgICAgICAgICAgIHN0YWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbW1vblJvb3RzKHN0YWNrcykge1xuICAgIHZhciBjdXJyZW50ID0gc3RhY2tzWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc3RhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBwcmV2ID0gc3RhY2tzW2ldO1xuICAgICAgICB2YXIgY3VycmVudExhc3RJbmRleCA9IGN1cnJlbnQubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIGN1cnJlbnRMYXN0TGluZSA9IGN1cnJlbnRbY3VycmVudExhc3RJbmRleF07XG4gICAgICAgIHZhciBjb21tb25Sb290TWVldFBvaW50ID0gLTE7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IHByZXYubGVuZ3RoIC0gMTsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIGlmIChwcmV2W2pdID09PSBjdXJyZW50TGFzdExpbmUpIHtcbiAgICAgICAgICAgICAgICBjb21tb25Sb290TWVldFBvaW50ID0gajtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSBjb21tb25Sb290TWVldFBvaW50OyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgdmFyIGxpbmUgPSBwcmV2W2pdO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRbY3VycmVudExhc3RJbmRleF0gPT09IGxpbmUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnBvcCgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMYXN0SW5kZXgtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IHByZXY7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblN0YWNrKHN0YWNrKSB7XG4gICAgdmFyIHJldCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBzdGFja1tpXTtcbiAgICAgICAgdmFyIGlzVHJhY2VMaW5lID0gXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiID09PSBsaW5lIHx8XG4gICAgICAgICAgICBzdGFja0ZyYW1lUGF0dGVybi50ZXN0KGxpbmUpO1xuICAgICAgICB2YXIgaXNJbnRlcm5hbEZyYW1lID0gaXNUcmFjZUxpbmUgJiYgc2hvdWxkSWdub3JlKGxpbmUpO1xuICAgICAgICBpZiAoaXNUcmFjZUxpbmUgJiYgIWlzSW50ZXJuYWxGcmFtZSkge1xuICAgICAgICAgICAgaWYgKGluZGVudFN0YWNrRnJhbWVzICYmIGxpbmUuY2hhckF0KDApICE9PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBcIiAgICBcIiArIGxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXQucHVzaChsaW5lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBzdGFja0ZyYW1lc0FzQXJyYXkoZXJyb3IpIHtcbiAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFjay5yZXBsYWNlKC9cXHMrJC9nLCBcIlwiKS5zcGxpdChcIlxcblwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsaW5lID0gc3RhY2tbaV07XG4gICAgICAgIGlmIChcIiAgICAoTm8gc3RhY2sgdHJhY2UpXCIgPT09IGxpbmUgfHwgc3RhY2tGcmFtZVBhdHRlcm4udGVzdChsaW5lKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPiAwICYmIGVycm9yLm5hbWUgIT0gXCJTeW50YXhFcnJvclwiKSB7XG4gICAgICAgIHN0YWNrID0gc3RhY2suc2xpY2UoaSk7XG4gICAgfVxuICAgIHJldHVybiBzdGFjaztcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGFja0FuZE1lc3NhZ2UoZXJyb3IpIHtcbiAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICB2YXIgbWVzc2FnZSA9IGVycm9yLnRvU3RyaW5nKCk7XG4gICAgc3RhY2sgPSB0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIgJiYgc3RhY2subGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gc3RhY2tGcmFtZXNBc0FycmF5KGVycm9yKSA6IFtcIiAgICAoTm8gc3RhY2sgdHJhY2UpXCJdO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgIHN0YWNrOiBlcnJvci5uYW1lID09IFwiU3ludGF4RXJyb3JcIiA/IHN0YWNrIDogY2xlYW5TdGFjayhzdGFjaylcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRBbmRMb2dFcnJvcihlcnJvciwgdGl0bGUsIGlzU29mdCkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgaWYgKHV0aWwuaXNPYmplY3QoZXJyb3IpKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aXRsZSArIGZvcm1hdFN0YWNrKHN0YWNrLCBlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGl0bGUgKyBTdHJpbmcoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJpbnRXYXJuaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhtZXNzYWdlLCBpc1NvZnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY29uc29sZS5sb2cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaXJlUmVqZWN0aW9uRXZlbnQobmFtZSwgbG9jYWxIYW5kbGVyLCByZWFzb24sIHByb21pc2UpIHtcbiAgICB2YXIgbG9jYWxFdmVudEZpcmVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbEhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbG9jYWxFdmVudEZpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcInJlamVjdGlvbkhhbmRsZWRcIikge1xuICAgICAgICAgICAgICAgIGxvY2FsSGFuZGxlcihwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxIYW5kbGVyKHJlYXNvbiwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09IFwidW5oYW5kbGVkUmVqZWN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFhY3RpdmVGaXJlRXZlbnQobmFtZSwgcmVhc29uLCBwcm9taXNlKSAmJiAhbG9jYWxFdmVudEZpcmVkKSB7XG4gICAgICAgICAgICBmb3JtYXRBbmRMb2dFcnJvcihyZWFzb24sIFwiVW5oYW5kbGVkIHJlamVjdGlvbiBcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVGaXJlRXZlbnQobmFtZSwgcHJvbWlzZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXROb25FcnJvcihvYmopIHtcbiAgICB2YXIgc3RyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc3RyID0gXCJbZnVuY3Rpb24gXCIgK1xuICAgICAgICAgICAgKG9iai5uYW1lIHx8IFwiYW5vbnltb3VzXCIpICtcbiAgICAgICAgICAgIFwiXVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IG9iaiAmJiB0eXBlb2Ygb2JqLnRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gb2JqLnRvU3RyaW5nKCkgOiB1dGlsLnRvU3RyaW5nKG9iaik7XG4gICAgICAgIHZhciBydXNlbGVzc1RvU3RyaW5nID0gL1xcW29iamVjdCBbYS16QS1aMC05JF9dK1xcXS87XG4gICAgICAgIGlmIChydXNlbGVzc1RvU3RyaW5nLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBuZXdTdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3RyID0gXCIoZW1wdHkgYXJyYXkpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcIig8XCIgKyBzbmlwKHN0cikgKyBcIj4sIG5vIHN0YWNrIHRyYWNlKVwiKTtcbn1cblxuZnVuY3Rpb24gc25pcChzdHIpIHtcbiAgICB2YXIgbWF4Q2hhcnMgPSA0MTtcbiAgICBpZiAoc3RyLmxlbmd0aCA8IG1heENoYXJzKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIG1heENoYXJzIC0gMykgKyBcIi4uLlwiO1xufVxuXG5mdW5jdGlvbiBsb25nU3RhY2tUcmFjZXNJc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbnZhciBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xudmFyIHBhcnNlTGluZUluZm9SZWdleCA9IC9bXFwvPFxcKF0oW146XFwvXSspOihcXGQrKTooPzpcXGQrKVxcKT9cXHMqJC87XG5mdW5jdGlvbiBwYXJzZUxpbmVJbmZvKGxpbmUpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGxpbmUubWF0Y2gocGFyc2VMaW5lSW5mb1JlZ2V4KTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsZU5hbWU6IG1hdGNoZXNbMV0sXG4gICAgICAgICAgICBsaW5lOiBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvdW5kcyhmaXJzdExpbmVFcnJvciwgbGFzdExpbmVFcnJvcikge1xuICAgIGlmICghbG9uZ1N0YWNrVHJhY2VzSXNTdXBwb3J0ZWQoKSkgcmV0dXJuO1xuICAgIHZhciBmaXJzdFN0YWNrTGluZXMgPSBmaXJzdExpbmVFcnJvci5zdGFjay5zcGxpdChcIlxcblwiKTtcbiAgICB2YXIgbGFzdFN0YWNrTGluZXMgPSBsYXN0TGluZUVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICAgIHZhciBmaXJzdEluZGV4ID0gLTE7XG4gICAgdmFyIGxhc3RJbmRleCA9IC0xO1xuICAgIHZhciBmaXJzdEZpbGVOYW1lO1xuICAgIHZhciBsYXN0RmlsZU5hbWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaXJzdFN0YWNrTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlTGluZUluZm8oZmlyc3RTdGFja0xpbmVzW2ldKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgZmlyc3RGaWxlTmFtZSA9IHJlc3VsdC5maWxlTmFtZTtcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSByZXN1bHQubGluZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdFN0YWNrTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlTGluZUluZm8obGFzdFN0YWNrTGluZXNbaV0pO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBsYXN0RmlsZU5hbWUgPSByZXN1bHQuZmlsZU5hbWU7XG4gICAgICAgICAgICBsYXN0SW5kZXggPSByZXN1bHQubGluZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmaXJzdEluZGV4IDwgMCB8fCBsYXN0SW5kZXggPCAwIHx8ICFmaXJzdEZpbGVOYW1lIHx8ICFsYXN0RmlsZU5hbWUgfHxcbiAgICAgICAgZmlyc3RGaWxlTmFtZSAhPT0gbGFzdEZpbGVOYW1lIHx8IGZpcnN0SW5kZXggPj0gbGFzdEluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIGlmIChibHVlYmlyZEZyYW1lUGF0dGVybi50ZXN0KGxpbmUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIGluZm8gPSBwYXJzZUxpbmVJbmZvKGxpbmUpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8uZmlsZU5hbWUgPT09IGZpcnN0RmlsZU5hbWUgJiZcbiAgICAgICAgICAgICAgICAoZmlyc3RJbmRleCA8PSBpbmZvLmxpbmUgJiYgaW5mby5saW5lIDw9IGxhc3RJbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZShwYXJlbnQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fcHJvbWlzZXNDcmVhdGVkID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoID0gMSArIChwYXJlbnQgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJlbnQuX2xlbmd0aCk7XG4gICAgY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ2FwdHVyZWRUcmFjZSk7XG4gICAgaWYgKGxlbmd0aCA+IDMyKSB0aGlzLnVuY3ljbGUoKTtcbn1cbnV0aWwuaW5oZXJpdHMoQ2FwdHVyZWRUcmFjZSwgRXJyb3IpO1xuQ29udGV4dC5DYXB0dXJlZFRyYWNlID0gQ2FwdHVyZWRUcmFjZTtcblxuQ2FwdHVyZWRUcmFjZS5wcm90b3R5cGUudW5jeWNsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLl9sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA8IDIpIHJldHVybjtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICB2YXIgc3RhY2tUb0luZGV4ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbm9kZSA9IHRoaXM7IG5vZGUgIT09IHVuZGVmaW5lZDsgKytpKSB7XG4gICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIG5vZGUgPSBub2RlLl9wYXJlbnQ7XG4gICAgfVxuICAgIGxlbmd0aCA9IHRoaXMuX2xlbmd0aCA9IGk7XG4gICAgZm9yICh2YXIgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBzdGFjayA9IG5vZGVzW2ldLnN0YWNrO1xuICAgICAgICBpZiAoc3RhY2tUb0luZGV4W3N0YWNrXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFja1RvSW5kZXhbc3RhY2tdID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjdXJyZW50U3RhY2sgPSBub2Rlc1tpXS5zdGFjaztcbiAgICAgICAgdmFyIGluZGV4ID0gc3RhY2tUb0luZGV4W2N1cnJlbnRTdGFja107XG4gICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZXNbaW5kZXggLSAxXS5fcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG5vZGVzW2luZGV4IC0gMV0uX2xlbmd0aCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2Rlc1tpXS5fcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgbm9kZXNbaV0uX2xlbmd0aCA9IDE7XG4gICAgICAgICAgICB2YXIgY3ljbGVFZGdlTm9kZSA9IGkgPiAwID8gbm9kZXNbaSAtIDFdIDogdGhpcztcblxuICAgICAgICAgICAgaWYgKGluZGV4IDwgbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX3BhcmVudCA9IG5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fcGFyZW50LnVuY3ljbGUoKTtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9sZW5ndGggPVxuICAgICAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9wYXJlbnQuX2xlbmd0aCArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9sZW5ndGggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGN1cnJlbnRDaGlsZExlbmd0aCA9IGN5Y2xlRWRnZU5vZGUuX2xlbmd0aCArIDE7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gaSAtIDI7IGogPj0gMDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgbm9kZXNbal0uX2xlbmd0aCA9IGN1cnJlbnRDaGlsZExlbmd0aDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2hpbGRMZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkNhcHR1cmVkVHJhY2UucHJvdG90eXBlLmF0dGFjaEV4dHJhVHJhY2UgPSBmdW5jdGlvbihlcnJvcikge1xuICAgIGlmIChlcnJvci5fX3N0YWNrQ2xlYW5lZF9fKSByZXR1cm47XG4gICAgdGhpcy51bmN5Y2xlKCk7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlU3RhY2tBbmRNZXNzYWdlKGVycm9yKTtcbiAgICB2YXIgbWVzc2FnZSA9IHBhcnNlZC5tZXNzYWdlO1xuICAgIHZhciBzdGFja3MgPSBbcGFyc2VkLnN0YWNrXTtcblxuICAgIHZhciB0cmFjZSA9IHRoaXM7XG4gICAgd2hpbGUgKHRyYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhY2tzLnB1c2goY2xlYW5TdGFjayh0cmFjZS5zdGFjay5zcGxpdChcIlxcblwiKSkpO1xuICAgICAgICB0cmFjZSA9IHRyYWNlLl9wYXJlbnQ7XG4gICAgfVxuICAgIHJlbW92ZUNvbW1vblJvb3RzKHN0YWNrcyk7XG4gICAgcmVtb3ZlRHVwbGljYXRlT3JFbXB0eUp1bXBzKHN0YWNrcyk7XG4gICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChlcnJvciwgXCJzdGFja1wiLCByZWNvbnN0cnVjdFN0YWNrKG1lc3NhZ2UsIHN0YWNrcykpO1xuICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AoZXJyb3IsIFwiX19zdGFja0NsZWFuZWRfX1wiLCB0cnVlKTtcbn07XG5cbnZhciBjYXB0dXJlU3RhY2tUcmFjZSA9IChmdW5jdGlvbiBzdGFja0RldGVjdGlvbigpIHtcbiAgICB2YXIgdjhzdGFja0ZyYW1lUGF0dGVybiA9IC9eXFxzKmF0XFxzKi87XG4gICAgdmFyIHY4c3RhY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgIGlmIChlcnJvci5uYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBFcnJvci5zdGFja1RyYWNlTGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgdHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICs9IDY7XG4gICAgICAgIHN0YWNrRnJhbWVQYXR0ZXJuID0gdjhzdGFja0ZyYW1lUGF0dGVybjtcbiAgICAgICAgZm9ybWF0U3RhY2sgPSB2OHN0YWNrRm9ybWF0dGVyO1xuICAgICAgICB2YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcblxuICAgICAgICBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gYmx1ZWJpcmRGcmFtZVBhdHRlcm4udGVzdChsaW5lKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY2VpdmVyLCBpZ25vcmVVbnRpbCkge1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICs9IDY7XG4gICAgICAgICAgICBjYXB0dXJlU3RhY2tUcmFjZShyZWNlaXZlciwgaWdub3JlVW50aWwpO1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IC09IDY7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmICh0eXBlb2YgZXJyLnN0YWNrID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgIGVyci5zdGFjay5zcGxpdChcIlxcblwiKVswXS5pbmRleE9mKFwic3RhY2tEZXRlY3Rpb25AXCIpID49IDApIHtcbiAgICAgICAgc3RhY2tGcmFtZVBhdHRlcm4gPSAvQC87XG4gICAgICAgIGZvcm1hdFN0YWNrID0gdjhzdGFja0Zvcm1hdHRlcjtcbiAgICAgICAgaW5kZW50U3RhY2tGcmFtZXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgby5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBoYXNTdGFja0FmdGVyVGhyb3c7XG4gICAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKCk7IH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIGhhc1N0YWNrQWZ0ZXJUaHJvdyA9IChcInN0YWNrXCIgaW4gZSk7XG4gICAgfVxuICAgIGlmICghKFwic3RhY2tcIiBpbiBlcnIpICYmIGhhc1N0YWNrQWZ0ZXJUaHJvdyAmJlxuICAgICAgICB0eXBlb2YgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHN0YWNrRnJhbWVQYXR0ZXJuID0gdjhzdGFja0ZyYW1lUGF0dGVybjtcbiAgICAgICAgZm9ybWF0U3RhY2sgPSB2OHN0YWNrRm9ybWF0dGVyO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICs9IDY7XG4gICAgICAgICAgICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IoKTsgfVxuICAgICAgICAgICAgY2F0Y2goZSkgeyBvLnN0YWNrID0gZS5zdGFjazsgfVxuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IC09IDY7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0U3RhY2sgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgIGlmICgodHlwZW9mIGVycm9yID09PSBcIm9iamVjdFwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09IFwiZnVuY3Rpb25cIikgJiZcbiAgICAgICAgICAgIGVycm9yLm5hbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICByZXR1cm4gbnVsbDtcblxufSkoW10pO1xuXG5pZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUud2FybiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9O1xuICAgIGlmICh1dGlsLmlzTm9kZSAmJiBwcm9jZXNzLnN0ZGVyci5pc1RUWSkge1xuICAgICAgICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbihtZXNzYWdlLCBpc1NvZnQpIHtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGlzU29mdCA/IFwiXFx1MDAxYlszM21cIiA6IFwiXFx1MDAxYlszMW1cIjtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihjb2xvciArIG1lc3NhZ2UgKyBcIlxcdTAwMWJbMG1cXG5cIik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdXRpbC5pc05vZGUgJiYgdHlwZW9mIChuZXcgRXJyb3IoKS5zdGFjaykgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24obWVzc2FnZSwgaXNTb2Z0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCIlY1wiICsgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU29mdCA/IFwiY29sb3I6IGRhcmtvcmFuZ2VcIiA6IFwiY29sb3I6IHJlZFwiKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbnZhciBjb25maWcgPSB7XG4gICAgd2FybmluZ3M6IHdhcm5pbmdzLFxuICAgIGxvbmdTdGFja1RyYWNlczogZmFsc2UsXG4gICAgY2FuY2VsbGF0aW9uOiBmYWxzZSxcbiAgICBtb25pdG9yaW5nOiBmYWxzZVxufTtcblxuaWYgKGxvbmdTdGFja1RyYWNlcykgUHJvbWlzZS5sb25nU3RhY2tUcmFjZXMoKTtcblxucmV0dXJuIHtcbiAgICBsb25nU3RhY2tUcmFjZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uZmlnLmxvbmdTdGFja1RyYWNlcztcbiAgICB9LFxuICAgIHdhcm5pbmdzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy53YXJuaW5ncztcbiAgICB9LFxuICAgIGNhbmNlbGxhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25maWcuY2FuY2VsbGF0aW9uO1xuICAgIH0sXG4gICAgbW9uaXRvcmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25maWcubW9uaXRvcmluZztcbiAgICB9LFxuICAgIHByb3BhZ2F0ZUZyb21GdW5jdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9wYWdhdGVGcm9tRnVuY3Rpb247XG4gICAgfSxcbiAgICBib3VuZFZhbHVlRnVuY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYm91bmRWYWx1ZUZ1bmN0aW9uO1xuICAgIH0sXG4gICAgY2hlY2tGb3Jnb3R0ZW5SZXR1cm5zOiBjaGVja0ZvcmdvdHRlblJldHVybnMsXG4gICAgc2V0Qm91bmRzOiBzZXRCb3VuZHMsXG4gICAgd2Fybjogd2FybixcbiAgICBkZXByZWNhdGVkOiBkZXByZWNhdGVkLFxuICAgIENhcHR1cmVkVHJhY2U6IENhcHR1cmVkVHJhY2UsXG4gICAgZmlyZURvbUV2ZW50OiBmaXJlRG9tRXZlbnQsXG4gICAgZmlyZUdsb2JhbEV2ZW50OiBmaXJlR2xvYmFsRXZlbnRcbn07XG59O1xuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL3V0aWxcIjozNn1dLDEwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiByZXR1cm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn1cbmZ1bmN0aW9uIHRocm93ZXIoKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG59XG5cblByb21pc2UucHJvdG90eXBlW1wicmV0dXJuXCJdID1cblByb21pc2UucHJvdG90eXBlLnRoZW5SZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB2YWx1ZS5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgcmV0dXJuZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7dmFsdWU6IHZhbHVlfSwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlW1widGhyb3dcIl0gPVxuUHJvbWlzZS5wcm90b3R5cGUudGhlblRocm93ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICB0aHJvd2VyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwge3JlYXNvbjogcmVhc29ufSwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhdGNoVGhyb3cgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIHVuZGVmaW5lZCwgdGhyb3dlciwgdW5kZWZpbmVkLCB7cmVhc29uOiByZWFzb259LCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfcmVhc29uID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge3Rocm93IF9yZWFzb247fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F1Z2h0KHJlYXNvbiwgaGFuZGxlcik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hSZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHZhbHVlLnN1cHByZXNzVW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIHVuZGVmaW5lZCwgcmV0dXJuZXIsIHVuZGVmaW5lZCwge3ZhbHVlOiB2YWx1ZX0sIHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgaWYgKF92YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIF92YWx1ZS5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtyZXR1cm4gX3ZhbHVlO307XG4gICAgICAgIHJldHVybiB0aGlzLmNhdWdodCh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxufTtcbn07XG5cbn0se31dLDExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VSZWR1Y2UgPSBQcm9taXNlLnJlZHVjZTtcbnZhciBQcm9taXNlQWxsID0gUHJvbWlzZS5hbGw7XG5cbmZ1bmN0aW9uIHByb21pc2VBbGxUaGlzKCkge1xuICAgIHJldHVybiBQcm9taXNlQWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlTWFwU2VyaWVzKHByb21pc2VzLCBmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHByb21pc2VzLCBmbiwgSU5URVJOQUwsIElOVEVSTkFMKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHRoaXMsIGZuLCBJTlRFUk5BTCwgMClcbiAgICAgICAgICAgICAgLl90aGVuKHByb21pc2VBbGxUaGlzLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm1hcFNlcmllcyA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHRoaXMsIGZuLCBJTlRFUk5BTCwgSU5URVJOQUwpO1xufTtcblxuUHJvbWlzZS5lYWNoID0gZnVuY3Rpb24gKHByb21pc2VzLCBmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHByb21pc2VzLCBmbiwgSU5URVJOQUwsIDApXG4gICAgICAgICAgICAgIC5fdGhlbihwcm9taXNlQWxsVGhpcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHByb21pc2VzLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5tYXBTZXJpZXMgPSBQcm9taXNlTWFwU2VyaWVzO1xufTtcblxuXG59LHt9XSwxMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczVcIik7XG52YXIgT2JqZWN0ZnJlZXplID0gZXM1LmZyZWV6ZTtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBpbmhlcml0cyA9IHV0aWwuaW5oZXJpdHM7XG52YXIgbm90RW51bWVyYWJsZVByb3AgPSB1dGlsLm5vdEVudW1lcmFibGVQcm9wO1xuXG5mdW5jdGlvbiBzdWJFcnJvcihuYW1lUHJvcGVydHksIGRlZmF1bHRNZXNzYWdlKSB7XG4gICAgZnVuY3Rpb24gU3ViRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3ViRXJyb3IpKSByZXR1cm4gbmV3IFN1YkVycm9yKG1lc3NhZ2UpO1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm1lc3NhZ2VcIixcbiAgICAgICAgICAgIHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJuYW1lXCIsIG5hbWVQcm9wZXJ0eSk7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaGVyaXRzKFN1YkVycm9yLCBFcnJvcik7XG4gICAgcmV0dXJuIFN1YkVycm9yO1xufVxuXG52YXIgX1R5cGVFcnJvciwgX1JhbmdlRXJyb3I7XG52YXIgV2FybmluZyA9IHN1YkVycm9yKFwiV2FybmluZ1wiLCBcIndhcm5pbmdcIik7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBzdWJFcnJvcihcIkNhbmNlbGxhdGlvbkVycm9yXCIsIFwiY2FuY2VsbGF0aW9uIGVycm9yXCIpO1xudmFyIFRpbWVvdXRFcnJvciA9IHN1YkVycm9yKFwiVGltZW91dEVycm9yXCIsIFwidGltZW91dCBlcnJvclwiKTtcbnZhciBBZ2dyZWdhdGVFcnJvciA9IHN1YkVycm9yKFwiQWdncmVnYXRlRXJyb3JcIiwgXCJhZ2dyZWdhdGUgZXJyb3JcIik7XG50cnkge1xuICAgIF9UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4gICAgX1JhbmdlRXJyb3IgPSBSYW5nZUVycm9yO1xufSBjYXRjaChlKSB7XG4gICAgX1R5cGVFcnJvciA9IHN1YkVycm9yKFwiVHlwZUVycm9yXCIsIFwidHlwZSBlcnJvclwiKTtcbiAgICBfUmFuZ2VFcnJvciA9IHN1YkVycm9yKFwiUmFuZ2VFcnJvclwiLCBcInJhbmdlIGVycm9yXCIpO1xufVxuXG52YXIgbWV0aG9kcyA9IChcImpvaW4gcG9wIHB1c2ggc2hpZnQgdW5zaGlmdCBzbGljZSBmaWx0ZXIgZm9yRWFjaCBzb21lIFwiICtcbiAgICBcImV2ZXJ5IG1hcCBpbmRleE9mIGxhc3RJbmRleE9mIHJlZHVjZSByZWR1Y2VSaWdodCBzb3J0IHJldmVyc2VcIikuc3BsaXQoXCIgXCIpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IG1ldGhvZHMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZVttZXRob2RzW2ldXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIEFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZVttZXRob2RzW2ldXSA9IEFycmF5LnByb3RvdHlwZVttZXRob2RzW2ldXTtcbiAgICB9XG59XG5cbmVzNS5kZWZpbmVQcm9wZXJ0eShBZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICB2YWx1ZTogMCxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbn0pO1xuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlW1wiaXNPcGVyYXRpb25hbFwiXSA9IHRydWU7XG52YXIgbGV2ZWwgPSAwO1xuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGVudCA9IEFycmF5KGxldmVsICogNCArIDEpLmpvaW4oXCIgXCIpO1xuICAgIHZhciByZXQgPSBcIlxcblwiICsgaW5kZW50ICsgXCJBZ2dyZWdhdGVFcnJvciBvZjpcIiArIFwiXFxuXCI7XG4gICAgbGV2ZWwrKztcbiAgICBpbmRlbnQgPSBBcnJheShsZXZlbCAqIDQgKyAxKS5qb2luKFwiIFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXNbaV0gPT09IHRoaXMgPyBcIltDaXJjdWxhciBBZ2dyZWdhdGVFcnJvcl1cIiA6IHRoaXNbaV0gKyBcIlwiO1xuICAgICAgICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoXCJcXG5cIik7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGluZXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGxpbmVzW2pdID0gaW5kZW50ICsgbGluZXNbal07XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gbGluZXMuam9pbihcIlxcblwiKTtcbiAgICAgICAgcmV0ICs9IHN0ciArIFwiXFxuXCI7XG4gICAgfVxuICAgIGxldmVsLS07XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIE9wZXJhdGlvbmFsRXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBPcGVyYXRpb25hbEVycm9yKSlcbiAgICAgICAgcmV0dXJuIG5ldyBPcGVyYXRpb25hbEVycm9yKG1lc3NhZ2UpO1xuICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwibmFtZVwiLCBcIk9wZXJhdGlvbmFsRXJyb3JcIik7XG4gICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgIHRoaXMuY2F1c2UgPSBtZXNzYWdlO1xuICAgIHRoaXNbXCJpc09wZXJhdGlvbmFsXCJdID0gdHJ1ZTtcblxuICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJtZXNzYWdlXCIsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwic3RhY2tcIiwgbWVzc2FnZS5zdGFjayk7XG4gICAgfSBlbHNlIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbn1cbmluaGVyaXRzKE9wZXJhdGlvbmFsRXJyb3IsIEVycm9yKTtcblxudmFyIGVycm9yVHlwZXMgPSBFcnJvcltcIl9fQmx1ZWJpcmRFcnJvclR5cGVzX19cIl07XG5pZiAoIWVycm9yVHlwZXMpIHtcbiAgICBlcnJvclR5cGVzID0gT2JqZWN0ZnJlZXplKHtcbiAgICAgICAgQ2FuY2VsbGF0aW9uRXJyb3I6IENhbmNlbGxhdGlvbkVycm9yLFxuICAgICAgICBUaW1lb3V0RXJyb3I6IFRpbWVvdXRFcnJvcixcbiAgICAgICAgT3BlcmF0aW9uYWxFcnJvcjogT3BlcmF0aW9uYWxFcnJvcixcbiAgICAgICAgUmVqZWN0aW9uRXJyb3I6IE9wZXJhdGlvbmFsRXJyb3IsXG4gICAgICAgIEFnZ3JlZ2F0ZUVycm9yOiBBZ2dyZWdhdGVFcnJvclxuICAgIH0pO1xuICAgIGVzNS5kZWZpbmVQcm9wZXJ0eShFcnJvciwgXCJfX0JsdWViaXJkRXJyb3JUeXBlc19fXCIsIHtcbiAgICAgICAgdmFsdWU6IGVycm9yVHlwZXMsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgRXJyb3I6IEVycm9yLFxuICAgIFR5cGVFcnJvcjogX1R5cGVFcnJvcixcbiAgICBSYW5nZUVycm9yOiBfUmFuZ2VFcnJvcixcbiAgICBDYW5jZWxsYXRpb25FcnJvcjogZXJyb3JUeXBlcy5DYW5jZWxsYXRpb25FcnJvcixcbiAgICBPcGVyYXRpb25hbEVycm9yOiBlcnJvclR5cGVzLk9wZXJhdGlvbmFsRXJyb3IsXG4gICAgVGltZW91dEVycm9yOiBlcnJvclR5cGVzLlRpbWVvdXRFcnJvcixcbiAgICBBZ2dyZWdhdGVFcnJvcjogZXJyb3JUeXBlcy5BZ2dyZWdhdGVFcnJvcixcbiAgICBXYXJuaW5nOiBXYXJuaW5nXG59O1xuXG59LHtcIi4vZXM1XCI6MTMsXCIuL3V0aWxcIjozNn1dLDEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBpc0VTNSA9IChmdW5jdGlvbigpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHJldHVybiB0aGlzID09PSB1bmRlZmluZWQ7XG59KSgpO1xuXG5pZiAoaXNFUzUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZnJlZXplOiBPYmplY3QuZnJlZXplLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgICAgICBnZXREZXNjcmlwdG9yOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgICBrZXlzOiBPYmplY3Qua2V5cyxcbiAgICAgICAgbmFtZXM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgICAgICBnZXRQcm90b3R5cGVPZjogT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgICAgICBpc0FycmF5OiBBcnJheS5pc0FycmF5LFxuICAgICAgICBpc0VTNTogaXNFUzUsXG4gICAgICAgIHByb3BlcnR5SXNXcml0YWJsZTogZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgICAgIHJldHVybiAhISghZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3Iuc2V0KTtcbiAgICAgICAgfVxuICAgIH07XG59IGVsc2Uge1xuICAgIHZhciBoYXMgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgICB2YXIgc3RyID0ge30udG9TdHJpbmc7XG4gICAgdmFyIHByb3RvID0ge30uY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4gICAgdmFyIE9iamVjdEtleXMgPSBmdW5jdGlvbiAobykge1xuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwobywga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdEdldERlc2NyaXB0b3IgPSBmdW5jdGlvbihvLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogb1trZXldfTtcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdERlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG8sIGtleSwgZGVzYykge1xuICAgICAgICBvW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgICAgICByZXR1cm4gbztcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdEZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgdmFyIE9iamVjdEdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdChvYmopLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBBcnJheUlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgaXNBcnJheTogQXJyYXlJc0FycmF5LFxuICAgICAgICBrZXlzOiBPYmplY3RLZXlzLFxuICAgICAgICBuYW1lczogT2JqZWN0S2V5cyxcbiAgICAgICAgZGVmaW5lUHJvcGVydHk6IE9iamVjdERlZmluZVByb3BlcnR5LFxuICAgICAgICBnZXREZXNjcmlwdG9yOiBPYmplY3RHZXREZXNjcmlwdG9yLFxuICAgICAgICBmcmVlemU6IE9iamVjdEZyZWV6ZSxcbiAgICAgICAgZ2V0UHJvdG90eXBlT2Y6IE9iamVjdEdldFByb3RvdHlwZU9mLFxuICAgICAgICBpc0VTNTogaXNFUzUsXG4gICAgICAgIHByb3BlcnR5SXNXcml0YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbn0se31dLDE0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VNYXAgPSBQcm9taXNlLm1hcDtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIFByb21pc2VNYXAodGhpcywgZm4sIG9wdGlvbnMsIElOVEVSTkFMKTtcbn07XG5cblByb21pc2UuZmlsdGVyID0gZnVuY3Rpb24gKHByb21pc2VzLCBmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBQcm9taXNlTWFwKHByb21pc2VzLCBmbiwgb3B0aW9ucywgSU5URVJOQUwpO1xufTtcbn07XG5cbn0se31dLDE1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBORVhUX0ZJTFRFUikge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIENhbmNlbGxhdGlvbkVycm9yID0gUHJvbWlzZS5DYW5jZWxsYXRpb25FcnJvcjtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgY2F0Y2hGaWx0ZXIgPSBfZGVyZXFfKFwiLi9jYXRjaF9maWx0ZXJcIikoTkVYVF9GSUxURVIpO1xuXG5mdW5jdGlvbiBQYXNzVGhyb3VnaEhhbmRsZXJDb250ZXh0KHByb21pc2UsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICB0aGlzLmNhbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuY2VsUHJvbWlzZSA9IG51bGw7XG59XG5cblBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQucHJvdG90eXBlLmlzRmluYWxseUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAwO1xufTtcblxuZnVuY3Rpb24gRmluYWxseUhhbmRsZXJDYW5jZWxSZWFjdGlvbihmaW5hbGx5SGFuZGxlcikge1xuICAgIHRoaXMuZmluYWxseUhhbmRsZXIgPSBmaW5hbGx5SGFuZGxlcjtcbn1cblxuRmluYWxseUhhbmRsZXJDYW5jZWxSZWFjdGlvbi5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNoZWNrQ2FuY2VsKHRoaXMuZmluYWxseUhhbmRsZXIpO1xufTtcblxuZnVuY3Rpb24gY2hlY2tDYW5jZWwoY3R4LCByZWFzb24pIHtcbiAgICBpZiAoY3R4LmNhbmNlbFByb21pc2UgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGN0eC5jYW5jZWxQcm9taXNlLl9yZWplY3QocmVhc29uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5jYW5jZWxQcm9taXNlLl9jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2FuY2VsUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN1Y2NlZWQoKSB7XG4gICAgcmV0dXJuIGZpbmFsbHlIYW5kbGVyLmNhbGwodGhpcywgdGhpcy5wcm9taXNlLl90YXJnZXQoKS5fc2V0dGxlZFZhbHVlKCkpO1xufVxuZnVuY3Rpb24gZmFpbChyZWFzb24pIHtcbiAgICBpZiAoY2hlY2tDYW5jZWwodGhpcywgcmVhc29uKSkgcmV0dXJuO1xuICAgIGVycm9yT2JqLmUgPSByZWFzb247XG4gICAgcmV0dXJuIGVycm9yT2JqO1xufVxuZnVuY3Rpb24gZmluYWxseUhhbmRsZXIocmVhc29uT3JWYWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgaWYgKCF0aGlzLmNhbGxlZCkge1xuICAgICAgICB0aGlzLmNhbGxlZCA9IHRydWU7XG4gICAgICAgIHZhciByZXQgPSB0aGlzLmlzRmluYWxseUhhbmRsZXIoKVxuICAgICAgICAgICAgPyBoYW5kbGVyLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpKVxuICAgICAgICAgICAgOiBoYW5kbGVyLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpLCByZWFzb25PclZhbHVlKTtcbiAgICAgICAgaWYgKHJldCA9PT0gTkVYVF9GSUxURVIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb21pc2UuX3NldFJldHVybmVkTm9uVW5kZWZpbmVkKCk7XG4gICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXQsIHByb21pc2UpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW5jZWxQcm9taXNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5faXNDYW5jZWxsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENhbmNlbGxhdGlvbkVycm9yKFwibGF0ZSBjYW5jZWxsYXRpb24gb2JzZXJ2ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iai5lID0gcmVhc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9hdHRhY2hDYW5jZWxsYXRpb25DYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRmluYWxseUhhbmRsZXJDYW5jZWxSZWFjdGlvbih0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fdGhlbihcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZCwgZmFpbCwgdW5kZWZpbmVkLCB0aGlzLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIGNoZWNrQ2FuY2VsKHRoaXMpO1xuICAgICAgICBlcnJvck9iai5lID0gcmVhc29uT3JWYWx1ZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQ2FuY2VsKHRoaXMpO1xuICAgICAgICByZXR1cm4gcmVhc29uT3JWYWx1ZTtcbiAgICB9XG59XG5cblByb21pc2UucHJvdG90eXBlLl9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uKGhhbmRsZXIsIHR5cGUsIHN1Y2Nlc3MsIGZhaWwpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRoaXMudGhlbigpO1xuICAgIHJldHVybiB0aGlzLl90aGVuKHN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbCxcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IFBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQodGhpcywgdHlwZSwgaGFuZGxlciksXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmxhc3RseSA9XG5Qcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaChoYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5SGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseUhhbmRsZXIpO1xufTtcblxuXG5Qcm9taXNlLnByb3RvdHlwZS50YXAgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaChoYW5kbGVyLCAxLCBmaW5hbGx5SGFuZGxlcik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50YXBDYXRjaCA9IGZ1bmN0aW9uIChoYW5kbGVyT3JQcmVkaWNhdGUpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZihsZW4gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bhc3NUaHJvdWdoKGhhbmRsZXJPclByZWRpY2F0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5SGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgIHZhciBjYXRjaEluc3RhbmNlcyA9IG5ldyBBcnJheShsZW4gLSAxKSxcbiAgICAgICAgICAgIGogPSAwLCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuIC0gMTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmICh1dGlsLmlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgY2F0Y2hJbnN0YW5jZXNbaisrXSA9IGl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICBcInRhcENhdGNoIHN0YXRlbWVudCBwcmVkaWNhdGU6IFwiXG4gICAgICAgICAgICAgICAgICAgICsgXCJleHBlY3RpbmcgYW4gb2JqZWN0IGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGl0ZW0pXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2hJbnN0YW5jZXMubGVuZ3RoID0gajtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaChjYXRjaEZpbHRlcihjYXRjaEluc3RhbmNlcywgaGFuZGxlciwgdGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseUhhbmRsZXIpO1xuICAgIH1cblxufTtcblxucmV0dXJuIFBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQ7XG59O1xuXG59LHtcIi4vY2F0Y2hfZmlsdGVyXCI6NyxcIi4vdXRpbFwiOjM2fV0sMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnRUb1Byb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb3h5YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpIHtcbnZhciBlcnJvcnMgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIik7XG52YXIgVHlwZUVycm9yID0gZXJyb3JzLlR5cGVFcnJvcjtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIHlpZWxkSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gcHJvbWlzZUZyb21ZaWVsZEhhbmRsZXIodmFsdWUsIHlpZWxkSGFuZGxlcnMsIHRyYWNlUGFyZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB5aWVsZEhhbmRsZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHRyYWNlUGFyZW50Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goeWllbGRIYW5kbGVyc1tpXSkodmFsdWUpO1xuICAgICAgICB0cmFjZVBhcmVudC5fcG9wQ29udGV4dCgpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgdHJhY2VQYXJlbnQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgICAgICB2YXIgcmV0ID0gUHJvbWlzZS5yZWplY3QoZXJyb3JPYmouZSk7XG4gICAgICAgICAgICB0cmFjZVBhcmVudC5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXN1bHQsIHRyYWNlUGFyZW50KTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHJlY2VpdmVyLCB5aWVsZEhhbmRsZXIsIHN0YWNrKSB7XG4gICAgaWYgKGRlYnVnLmNhbmNlbGxhdGlvbigpKSB7XG4gICAgICAgIHZhciBpbnRlcm5hbCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgdmFyIF9maW5hbGx5UHJvbWlzZSA9IHRoaXMuX2ZpbmFsbHlQcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gaW50ZXJuYWwubGFzdGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9maW5hbGx5UHJvbWlzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGludGVybmFsLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICBpbnRlcm5hbC5fc2V0T25DYW5jZWwodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIH1cbiAgICB0aGlzLl9zdGFjayA9IHN0YWNrO1xuICAgIHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yRnVuY3Rpb247XG4gICAgdGhpcy5fcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5feWllbGRIYW5kbGVycyA9IHR5cGVvZiB5aWVsZEhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IFt5aWVsZEhhbmRsZXJdLmNvbmNhdCh5aWVsZEhhbmRsZXJzKVxuICAgICAgICA6IHlpZWxkSGFuZGxlcnM7XG4gICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBudWxsO1xuICAgIHRoaXMuX2NhbmNlbGxhdGlvblBoYXNlID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFByb21pc2VTcGF3biwgUHJveHlhYmxlKTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5faXNSZXNvbHZlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlID09PSBudWxsO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Byb21pc2UgPSB0aGlzLl9nZW5lcmF0b3IgPSBudWxsO1xuICAgIGlmIChkZWJ1Zy5jYW5jZWxsYXRpb24oKSAmJiB0aGlzLl9maW5hbGx5UHJvbWlzZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9maW5hbGx5UHJvbWlzZS5fZnVsZmlsbCgpO1xuICAgICAgICB0aGlzLl9maW5hbGx5UHJvbWlzZSA9IG51bGw7XG4gICAgfVxufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcHJvbWlzZUNhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB2YXIgaW1wbGVtZW50c1JldHVybiA9IHR5cGVvZiB0aGlzLl9nZW5lcmF0b3JbXCJyZXR1cm5cIl0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmICghaW1wbGVtZW50c1JldHVybikge1xuICAgICAgICB2YXIgcmVhc29uID0gbmV3IFByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IoXG4gICAgICAgICAgICBcImdlbmVyYXRvciAucmV0dXJuKCkgc2VudGluZWxcIik7XG4gICAgICAgIFByb21pc2UuY29yb3V0aW5lLnJldHVyblNlbnRpbmVsID0gcmVhc29uO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuX2dlbmVyYXRvcltcInRocm93XCJdKS5jYWxsKHRoaXMuX2dlbmVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3JbXCJyZXR1cm5cIl0pLmNhbGwodGhpcy5fZ2VuZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB9XG4gICAgdGhpcy5fY2FuY2VsbGF0aW9uUGhhc2UgPSB0cnVlO1xuICAgIHRoaXMuX3lpZWxkZWRQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuX2dlbmVyYXRvci5uZXh0KS5jYWxsKHRoaXMuX2dlbmVyYXRvciwgdmFsdWUpO1xuICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UocmVhc29uKTtcbiAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3JbXCJ0aHJvd1wiXSlcbiAgICAgICAgLmNhbGwodGhpcy5fZ2VuZXJhdG9yLCByZWFzb24pO1xuICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcmVzdWx0Q2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3lpZWxkZWRQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3lpZWxkZWRQcm9taXNlO1xuICAgICAgICB0aGlzLl95aWVsZGVkUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHByb21pc2UuY2FuY2VsKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2dlbmVyYXRvciA9IHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uLmNhbGwodGhpcy5fcmVjZWl2ZXIpO1xuICAgIHRoaXMuX3JlY2VpdmVyID1cbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fY29udGludWUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgICAgaWYgKHRoaXMuX2NhbmNlbGxhdGlvblBoYXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZXN1bHQuZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChyZXN1bHQuZG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLl9jYW5jZWxsYXRpb25QaGFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UuY2FuY2VsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHZhbHVlLCB0aGlzLl9wcm9taXNlKTtcbiAgICAgICAgaWYgKCEobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9XG4gICAgICAgICAgICAgICAgcHJvbWlzZUZyb21ZaWVsZEhhbmRsZXIobWF5YmVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3lpZWxkSGFuZGxlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZVJlamVjdGVkKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIHZhbHVlICVzIHdhcyB5aWVsZGVkIHRoYXQgY291bGQgbm90IGJlIHRyZWF0ZWQgYXMgYSBwcm9taXNlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVxcdTAwMGFcIi5yZXBsYWNlKFwiJXNcIiwgU3RyaW5nKHZhbHVlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJGcm9tIGNvcm91dGluZTpcXHUwMDBhXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhY2suc3BsaXQoXCJcXG5cIikuc2xpY2UoMSwgLTcpLmpvaW4oXCJcXG5cIilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgIHZhciBiaXRGaWVsZCA9IG1heWJlUHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgIDtcbiAgICAgICAgaWYgKCgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLl95aWVsZGVkUHJvbWlzZSA9IG1heWJlUHJvbWlzZTtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fcHJveHkodGhpcywgbnVsbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgIFByb21pc2UuX2FzeW5jLmludm9rZShcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9taXNlRnVsZmlsbGVkLCB0aGlzLCBtYXliZVByb21pc2UuX3ZhbHVlKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIFByb21pc2UuX2FzeW5jLmludm9rZShcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9taXNlUmVqZWN0ZWQsIHRoaXMsIG1heWJlUHJvbWlzZS5fcmVhc29uKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlQ2FuY2VsbGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLmNvcm91dGluZSA9IGZ1bmN0aW9uIChnZW5lcmF0b3JGdW5jdGlvbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZ2VuZXJhdG9yRnVuY3Rpb24gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZ2VuZXJhdG9yRnVuY3Rpb24gbXVzdCBiZSBhIGZ1bmN0aW9uXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdmFyIHlpZWxkSGFuZGxlciA9IE9iamVjdChvcHRpb25zKS55aWVsZEhhbmRsZXI7XG4gICAgdmFyIFByb21pc2VTcGF3biQgPSBQcm9taXNlU3Bhd247XG4gICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdlbmVyYXRvciA9IGdlbmVyYXRvckZ1bmN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24kKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB5aWVsZEhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrKTtcbiAgICAgICAgdmFyIHJldCA9IHNwYXduLnByb21pc2UoKTtcbiAgICAgICAgc3Bhd24uX2dlbmVyYXRvciA9IGdlbmVyYXRvcjtcbiAgICAgICAgc3Bhd24uX3Byb21pc2VGdWxmaWxsZWQodW5kZWZpbmVkKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xufTtcblxuUHJvbWlzZS5jb3JvdXRpbmUuYWRkWWllbGRIYW5kbGVyID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgfVxuICAgIHlpZWxkSGFuZGxlcnMucHVzaChmbik7XG59O1xuXG5Qcm9taXNlLnNwYXduID0gZnVuY3Rpb24gKGdlbmVyYXRvckZ1bmN0aW9uKSB7XG4gICAgZGVidWcuZGVwcmVjYXRlZChcIlByb21pc2Uuc3Bhd24oKVwiLCBcIlByb21pc2UuY29yb3V0aW5lKClcIik7XG4gICAgaWYgKHR5cGVvZiBnZW5lcmF0b3JGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJnZW5lcmF0b3JGdW5jdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICB2YXIgc3Bhd24gPSBuZXcgUHJvbWlzZVNwYXduKGdlbmVyYXRvckZ1bmN0aW9uLCB0aGlzKTtcbiAgICB2YXIgcmV0ID0gc3Bhd24ucHJvbWlzZSgpO1xuICAgIHNwYXduLl9ydW4oUHJvbWlzZS5zcGF3bik7XG4gICAgcmV0dXJuIHJldDtcbn07XG59O1xuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL3V0aWxcIjozNn1dLDE3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBJTlRFUk5BTCwgYXN5bmMsXG4gICAgICAgICBnZXREb21haW4pIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciByZWplY3Q7XG5cbmlmICghdHJ1ZSkge1xuaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgdmFyIHRoZW5DYWxsYmFjayA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInZhbHVlXCIsIFwiaG9sZGVyXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaG9sZGVyLnBJbmRleCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaG9sZGVyLmNoZWNrRnVsZmlsbG1lbnQodGhpcyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCIucmVwbGFjZSgvSW5kZXgvZywgaSkpO1xuICAgIH07XG5cbiAgICB2YXIgcHJvbWlzZVNldHRlciA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInByb21pc2VcIiwgXCJob2xkZXJcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaG9sZGVyLnBJbmRleCA9IHByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCIucmVwbGFjZSgvSW5kZXgvZywgaSkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2VuZXJhdGVIb2xkZXJDbGFzcyA9IGZ1bmN0aW9uKHRvdGFsKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IG5ldyBBcnJheSh0b3RhbCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHByb3BzW2ldID0gXCJ0aGlzLnBcIiArIChpKzEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gcHJvcHMuam9pbihcIiA9IFwiKSArIFwiID0gbnVsbDtcIjtcbiAgICAgICAgdmFyIGNhbmNlbGxhdGlvbkNvZGU9IFwidmFyIHByb21pc2U7XFxuXCIgKyBwcm9wcy5tYXAoZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gXCIgKyBwcm9wICsgXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLmNhbmNlbCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgXCI7XG4gICAgICAgIH0pLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIHZhciBwYXNzZWRBcmd1bWVudHMgPSBwcm9wcy5qb2luKFwiLCBcIik7XG4gICAgICAgIHZhciBuYW1lID0gXCJIb2xkZXIkXCIgKyB0b3RhbDtcblxuXG4gICAgICAgIHZhciBjb2RlID0gXCJyZXR1cm4gZnVuY3Rpb24odHJ5Q2F0Y2gsIGVycm9yT2JqLCBQcm9taXNlLCBhc3luYykgeyAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgZnVuY3Rpb24gW1RoZU5hbWVdKGZuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIFtUaGVQcm9wZXJ0aWVzXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHRoaXMuZm4gPSBmbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHRoaXMuYXN5bmNOZWVkZWQgPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHRoaXMubm93ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgW1RoZU5hbWVdLnByb3RvdHlwZS5fY2FsbEZ1bmN0aW9uID0gZnVuY3Rpb24ocHJvbWlzZSkgeyAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHZhciByZXQgPSB0cnlDYXRjaCh0aGlzLmZuKShbVGhlUGFzc2VkQXJndW1lbnRzXSk7ICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHByb21pc2UuX3BvcENvbnRleHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZXQuZSwgZmFsc2UpOyAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2socmV0KTsgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgW1RoZU5hbWVdLnByb3RvdHlwZS5jaGVja0Z1bGZpbGxtZW50ID0gZnVuY3Rpb24ocHJvbWlzZSkgeyAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHZhciBub3cgPSArK3RoaXMubm93OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIGlmIChub3cgPT09IFtUaGVUb3RhbF0pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hc3luY05lZWRlZCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMuaW52b2tlKHRoaXMuX2NhbGxGdW5jdGlvbiwgdGhpcywgcHJvbWlzZSk7ICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsbEZ1bmN0aW9uKHByb21pc2UpOyAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgW1RoZU5hbWVdLnByb3RvdHlwZS5fcmVzdWx0Q2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7ICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIFtDYW5jZWxsYXRpb25Db2RlXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgcmV0dXJuIFtUaGVOYW1lXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB9KHRyeUNhdGNoLCBlcnJvck9iaiwgUHJvbWlzZSwgYXN5bmMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBcIjtcblxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9cXFtUaGVOYW1lXFxdL2csIG5hbWUpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxbVGhlVG90YWxcXF0vZywgdG90YWwpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxbVGhlUGFzc2VkQXJndW1lbnRzXFxdL2csIHBhc3NlZEFyZ3VtZW50cylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFtUaGVQcm9wZXJ0aWVzXFxdL2csIGFzc2lnbm1lbnQpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxbQ2FuY2VsbGF0aW9uQ29kZVxcXS9nLCBjYW5jZWxsYXRpb25Db2RlKTtcblxuICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwidHJ5Q2F0Y2hcIiwgXCJlcnJvck9ialwiLCBcIlByb21pc2VcIiwgXCJhc3luY1wiLCBjb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRyeUNhdGNoLCBlcnJvck9iaiwgUHJvbWlzZSwgYXN5bmMpO1xuICAgIH07XG5cbiAgICB2YXIgaG9sZGVyQ2xhc3NlcyA9IFtdO1xuICAgIHZhciB0aGVuQ2FsbGJhY2tzID0gW107XG4gICAgdmFyIHByb21pc2VTZXR0ZXJzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7ICsraSkge1xuICAgICAgICBob2xkZXJDbGFzc2VzLnB1c2goZ2VuZXJhdGVIb2xkZXJDbGFzcyhpICsgMSkpO1xuICAgICAgICB0aGVuQ2FsbGJhY2tzLnB1c2godGhlbkNhbGxiYWNrKGkgKyAxKSk7XG4gICAgICAgIHByb21pc2VTZXR0ZXJzLnB1c2gocHJvbWlzZVNldHRlcihpICsgMSkpO1xuICAgIH1cblxuICAgIHJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG4gICAgfTtcbn19XG5cblByb21pc2Uuam9pbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgIHZhciBmbjtcbiAgICBpZiAobGFzdCA+IDAgJiYgdHlwZW9mIGFyZ3VtZW50c1tsYXN0XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGZuID0gYXJndW1lbnRzW2xhc3RdO1xuICAgICAgICBpZiAoIXRydWUpIHtcbiAgICAgICAgICAgIGlmIChsYXN0IDw9IDggJiYgY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICAgICAgICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICAgICAgICAgICAgICB2YXIgSG9sZGVyQ2xhc3MgPSBob2xkZXJDbGFzc2VzW2xhc3QgLSAxXTtcbiAgICAgICAgICAgICAgICB2YXIgaG9sZGVyID0gbmV3IEhvbGRlckNsYXNzKGZuKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhlbkNhbGxiYWNrcztcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKGFyZ3VtZW50c1tpXSwgcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYml0RmllbGQgPSBtYXliZVByb21pc2UuX2JpdEZpZWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKGNhbGxiYWNrc1tpXSwgcmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIHJldCwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlU2V0dGVyc1tpXShtYXliZVByb21pc2UsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZGVyLmFzeW5jTmVlZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmNhbGwocmV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdmFsdWUoKSwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuX3JlamVjdChtYXliZVByb21pc2UuX3JlYXNvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0Ll9jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5jYWxsKHJldCwgbWF5YmVQcm9taXNlLCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXQuX2lzRmF0ZVNlYWxlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChob2xkZXIuYXN5bmNOZWVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb21haW4gPSBnZXREb21haW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2xkZXIuZm4gPSB1dGlsLmRvbWFpbkJpbmQoZG9tYWluLCBob2xkZXIuZm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldC5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldC5fc2V0T25DYW5jZWwoaG9sZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTs7XG4gICAgaWYgKGZuKSBhcmdzLnBvcCgpO1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZUFycmF5KGFyZ3MpLnByb21pc2UoKTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IHJldC5zcHJlYWQoZm4pIDogcmV0O1xufTtcblxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDE4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKSB7XG52YXIgZ2V0RG9tYWluID0gUHJvbWlzZS5fZ2V0RG9tYWluO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgYXN5bmMgPSBQcm9taXNlLl9hc3luYztcblxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheShwcm9taXNlcywgZm4sIGxpbWl0LCBfZmlsdGVyKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQocHJvbWlzZXMpO1xuICAgIHRoaXMuX3Byb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdmFyIGRvbWFpbiA9IGdldERvbWFpbigpO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZG9tYWluID09PSBudWxsID8gZm4gOiB1dGlsLmRvbWFpbkJpbmQoZG9tYWluLCBmbik7XG4gICAgdGhpcy5fcHJlc2VydmVkVmFsdWVzID0gX2ZpbHRlciA9PT0gSU5URVJOQUxcbiAgICAgICAgPyBuZXcgQXJyYXkodGhpcy5sZW5ndGgoKSlcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy5faW5GbGlnaHQgPSAwO1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgYXN5bmMuaW52b2tlKHRoaXMuX2FzeW5jSW5pdCwgdGhpcywgdW5kZWZpbmVkKTtcbn1cbnV0aWwuaW5oZXJpdHMoTWFwcGluZ1Byb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2FzeW5jSW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2luaXQkKHVuZGVmaW5lZCwgLTIpO1xufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICB2YXIgcHJlc2VydmVkVmFsdWVzID0gdGhpcy5fcHJlc2VydmVkVmFsdWVzO1xuICAgIHZhciBsaW1pdCA9IHRoaXMuX2xpbWl0O1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IChpbmRleCAqIC0xKSAtIDE7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGxpbWl0ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2luRmxpZ2h0LS07XG4gICAgICAgICAgICB0aGlzLl9kcmFpblF1ZXVlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxICYmIHRoaXMuX2luRmxpZ2h0ID49IGxpbWl0KSB7XG4gICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlc2VydmVkVmFsdWVzICE9PSBudWxsKSBwcmVzZXJ2ZWRWYWx1ZXNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gcHJvbWlzZS5fYm91bmRWYWx1ZSgpO1xuICAgICAgICBwcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2goY2FsbGJhY2spLmNhbGwocmVjZWl2ZXIsIHZhbHVlLCBpbmRleCwgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHByb21pc2VDcmVhdGVkID0gcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgICAgICBkZWJ1Zy5jaGVja0ZvcmdvdHRlblJldHVybnMoXG4gICAgICAgICAgICByZXQsXG4gICAgICAgICAgICBwcm9taXNlQ3JlYXRlZCxcbiAgICAgICAgICAgIHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCA/IFwiUHJvbWlzZS5maWx0ZXJcIiA6IFwiUHJvbWlzZS5tYXBcIixcbiAgICAgICAgICAgIHByb21pc2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChyZXQuZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHJldCwgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgdmFyIGJpdEZpZWxkID0gbWF5YmVQcm9taXNlLl9iaXRGaWVsZDtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGlmIChsaW1pdCA+PSAxKSB0aGlzLl9pbkZsaWdodCsrO1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBtYXliZVByb21pc2U7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9wcm94eSh0aGlzLCAoaW5kZXggKyAxKSAqIC0xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLl92YWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlamVjdChtYXliZVByb21pc2UuX3JlYXNvbigpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHJldDtcbiAgICB9XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gbGVuZ3RoKSB7XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcih2YWx1ZXMsIHByZXNlcnZlZFZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9kcmFpblF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBsaW1pdCA9IHRoaXMuX2xpbWl0O1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5faW5GbGlnaHQgPCBsaW1pdCkge1xuICAgICAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICB0aGlzLl9wcm9taXNlRnVsZmlsbGVkKHZhbHVlc1tpbmRleF0sIGluZGV4KTtcbiAgICB9XG59O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZmlsdGVyID0gZnVuY3Rpb24gKGJvb2xlYW5zLCB2YWx1ZXMpIHtcbiAgICB2YXIgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbik7XG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGJvb2xlYW5zW2ldKSByZXRbaisrXSA9IHZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0Lmxlbmd0aCA9IGo7XG4gICAgdGhpcy5fcmVzb2x2ZShyZXQpO1xufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUucHJlc2VydmVkVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXM7XG59O1xuXG5mdW5jdGlvbiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cblxuICAgIHZhciBsaW1pdCA9IDA7XG4gICAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbmN1cnJlbmN5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFwiJ2NvbmN1cnJlbmN5JyBtdXN0IGJlIGEgbnVtYmVyIGJ1dCBpdCBpcyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmNsYXNzU3RyaW5nKG9wdGlvbnMuY29uY3VycmVuY3kpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdCA9IG9wdGlvbnMuY29uY3VycmVuY3k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnMgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QgYnV0IGl0IGlzIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jbGFzc1N0cmluZyhvcHRpb25zKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxpbWl0ID0gdHlwZW9mIGxpbWl0ID09PSBcIm51bWJlclwiICYmXG4gICAgICAgIGlzRmluaXRlKGxpbWl0KSAmJiBsaW1pdCA+PSAxID8gbGltaXQgOiAwO1xuICAgIHJldHVybiBuZXcgTWFwcGluZ1Byb21pc2VBcnJheShwcm9taXNlcywgZm4sIGxpbWl0LCBfZmlsdGVyKS5wcm9taXNlKCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBtYXAodGhpcywgZm4sIG9wdGlvbnMsIG51bGwpO1xufTtcblxuUHJvbWlzZS5tYXAgPSBmdW5jdGlvbiAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgcmV0dXJuIG1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIF9maWx0ZXIpO1xufTtcblxuXG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9XG5mdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCBkZWJ1Zykge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcblxuUHJvbWlzZS5tZXRob2QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFByb21pc2UuVHlwZUVycm9yKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICByZXQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNhdGNoKGZuKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgcHJvbWlzZUNyZWF0ZWQgPSByZXQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgZGVidWcuY2hlY2tGb3Jnb3R0ZW5SZXR1cm5zKFxuICAgICAgICAgICAgdmFsdWUsIHByb21pc2VDcmVhdGVkLCBcIlByb21pc2UubWV0aG9kXCIsIHJldCk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmF0dGVtcHQgPSBQcm9taXNlW1widHJ5XCJdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICByZXQuX3B1c2hDb250ZXh0KCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBkZWJ1Zy5kZXByZWNhdGVkKFwiY2FsbGluZyBQcm9taXNlLnRyeSB3aXRoIG1vcmUgdGhhbiAxIGFyZ3VtZW50XCIpO1xuICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB2YXIgY3R4ID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB2YWx1ZSA9IHV0aWwuaXNBcnJheShhcmcpID8gdHJ5Q2F0Y2goZm4pLmFwcGx5KGN0eCwgYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ5Q2F0Y2goZm4pLmNhbGwoY3R4LCBhcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdHJ5Q2F0Y2goZm4pKCk7XG4gICAgfVxuICAgIHZhciBwcm9taXNlQ3JlYXRlZCA9IHJldC5fcG9wQ29udGV4dCgpO1xuICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyhcbiAgICAgICAgdmFsdWUsIHByb21pc2VDcmVhdGVkLCBcIlByb21pc2UudHJ5XCIsIHJldCk7XG4gICAgcmV0Ll9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVN5bmNWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdXRpbC5lcnJvck9iaikge1xuICAgICAgICB0aGlzLl9yZWplY3RDYWxsYmFjayh2YWx1ZS5lLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlLCB0cnVlKTtcbiAgICB9XG59O1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIG1heWJlV3JhcEFzRXJyb3IgPSB1dGlsLm1heWJlV3JhcEFzRXJyb3I7XG52YXIgZXJyb3JzID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpO1xudmFyIE9wZXJhdGlvbmFsRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczVcIik7XG5cbmZ1bmN0aW9uIGlzVW50eXBlZEVycm9yKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvciAmJlxuICAgICAgICBlczUuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gRXJyb3IucHJvdG90eXBlO1xufVxuXG52YXIgckVycm9yS2V5ID0gL14oPzpuYW1lfG1lc3NhZ2V8c3RhY2t8Y2F1c2UpJC87XG5mdW5jdGlvbiB3cmFwQXNPcGVyYXRpb25hbEVycm9yKG9iaikge1xuICAgIHZhciByZXQ7XG4gICAgaWYgKGlzVW50eXBlZEVycm9yKG9iaikpIHtcbiAgICAgICAgcmV0ID0gbmV3IE9wZXJhdGlvbmFsRXJyb3Iob2JqKTtcbiAgICAgICAgcmV0Lm5hbWUgPSBvYmoubmFtZTtcbiAgICAgICAgcmV0Lm1lc3NhZ2UgPSBvYmoubWVzc2FnZTtcbiAgICAgICAgcmV0LnN0YWNrID0gb2JqLnN0YWNrO1xuICAgICAgICB2YXIga2V5cyA9IGVzNS5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIXJFcnJvcktleS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHV0aWwubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UsIG11bHRpQXJncykge1xuICAgIHJldHVybiBmdW5jdGlvbihlcnIsIHZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9taXNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVkID0gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihtYXliZVdyYXBBc0Vycm9yKGVycikpO1xuICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh3cmFwcGVkKTtcbiAgICAgICAgICAgIHByb21pc2UuX3JlamVjdCh3cmFwcGVkKTtcbiAgICAgICAgfSBlbHNlIGlmICghbXVsdGlBcmdzKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpOztcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub2RlYmFja0ZvclByb21pc2U7XG5cbn0se1wiLi9lcnJvcnNcIjoxMixcIi4vZXM1XCI6MTMsXCIuL3V0aWxcIjozNn1dLDIxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgYXN5bmMgPSBQcm9taXNlLl9hc3luYztcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5mdW5jdGlvbiBzcHJlYWRBZGFwdGVyKHZhbCwgbm9kZWJhY2spIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgaWYgKCF1dGlsLmlzQXJyYXkodmFsKSkgcmV0dXJuIHN1Y2Nlc3NBZGFwdGVyLmNhbGwocHJvbWlzZSwgdmFsLCBub2RlYmFjayk7XG4gICAgdmFyIHJldCA9XG4gICAgICAgIHRyeUNhdGNoKG5vZGViYWNrKS5hcHBseShwcm9taXNlLl9ib3VuZFZhbHVlKCksIFtudWxsXS5jb25jYXQodmFsKSk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihyZXQuZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdWNjZXNzQWRhcHRlcih2YWwsIG5vZGViYWNrKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHZhciByZWNlaXZlciA9IHByb21pc2UuX2JvdW5kVmFsdWUoKTtcbiAgICB2YXIgcmV0ID0gdmFsID09PSB1bmRlZmluZWRcbiAgICAgICAgPyB0cnlDYXRjaChub2RlYmFjaykuY2FsbChyZWNlaXZlciwgbnVsbClcbiAgICAgICAgOiB0cnlDYXRjaChub2RlYmFjaykuY2FsbChyZWNlaXZlciwgbnVsbCwgdmFsKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKHJldC5lKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlcnJvckFkYXB0ZXIocmVhc29uLCBub2RlYmFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKHJlYXNvbiArIFwiXCIpO1xuICAgICAgICBuZXdSZWFzb24uY2F1c2UgPSByZWFzb247XG4gICAgICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgICB9XG4gICAgdmFyIHJldCA9IHRyeUNhdGNoKG5vZGViYWNrKS5jYWxsKHByb21pc2UuX2JvdW5kVmFsdWUoKSwgcmVhc29uKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKHJldC5lKTtcbiAgICB9XG59XG5cblByb21pc2UucHJvdG90eXBlLmFzQ2FsbGJhY2sgPSBQcm9taXNlLnByb3RvdHlwZS5ub2RlaWZ5ID0gZnVuY3Rpb24gKG5vZGViYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygbm9kZWJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBhZGFwdGVyID0gc3VjY2Vzc0FkYXB0ZXI7XG4gICAgICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQgJiYgT2JqZWN0KG9wdGlvbnMpLnNwcmVhZCkge1xuICAgICAgICAgICAgYWRhcHRlciA9IHNwcmVhZEFkYXB0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGhlbihcbiAgICAgICAgICAgIGFkYXB0ZXIsXG4gICAgICAgICAgICBlcnJvckFkYXB0ZXIsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbm9kZWJhY2tcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbnZhciBtYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImNpcmN1bGFyIHByb21pc2UgcmVzb2x1dGlvbiBjaGFpblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG59O1xudmFyIHJlZmxlY3RIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uKHRoaXMuX3RhcmdldCgpKTtcbn07XG52YXIgYXBpUmVqZWN0aW9uID0gZnVuY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IobXNnKSk7XG59O1xuZnVuY3Rpb24gUHJveHlhYmxlKCkge31cbnZhciBVTkRFRklORURfQklORElORyA9IHt9O1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xuXG52YXIgZ2V0RG9tYWluO1xuaWYgKHV0aWwuaXNOb2RlKSB7XG4gICAgZ2V0RG9tYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXQgPSBwcm9jZXNzLmRvbWFpbjtcbiAgICAgICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSByZXQgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59IGVsc2Uge1xuICAgIGdldERvbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xufVxudXRpbC5ub3RFbnVtZXJhYmxlUHJvcChQcm9taXNlLCBcIl9nZXREb21haW5cIiwgZ2V0RG9tYWluKTtcblxudmFyIGVzNSA9IF9kZXJlcV8oXCIuL2VzNVwiKTtcbnZhciBBc3luYyA9IF9kZXJlcV8oXCIuL2FzeW5jXCIpO1xudmFyIGFzeW5jID0gbmV3IEFzeW5jKCk7XG5lczUuZGVmaW5lUHJvcGVydHkoUHJvbWlzZSwgXCJfYXN5bmNcIiwge3ZhbHVlOiBhc3luY30pO1xudmFyIGVycm9ycyA9IF9kZXJlcV8oXCIuL2Vycm9yc1wiKTtcbnZhciBUeXBlRXJyb3IgPSBQcm9taXNlLlR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG5Qcm9taXNlLlJhbmdlRXJyb3IgPSBlcnJvcnMuUmFuZ2VFcnJvcjtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IFByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IgPSBlcnJvcnMuQ2FuY2VsbGF0aW9uRXJyb3I7XG5Qcm9taXNlLlRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG5Qcm9taXNlLk9wZXJhdGlvbmFsRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuUmVqZWN0aW9uRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuQWdncmVnYXRlRXJyb3IgPSBlcnJvcnMuQWdncmVnYXRlRXJyb3I7XG52YXIgSU5URVJOQUwgPSBmdW5jdGlvbigpe307XG52YXIgQVBQTFkgPSB7fTtcbnZhciBORVhUX0ZJTFRFUiA9IHt9O1xudmFyIHRyeUNvbnZlcnRUb1Byb21pc2UgPSBfZGVyZXFfKFwiLi90aGVuYWJsZXNcIikoUHJvbWlzZSwgSU5URVJOQUwpO1xudmFyIFByb21pc2VBcnJheSA9XG4gICAgX2RlcmVxXyhcIi4vcHJvbWlzZV9hcnJheVwiKShQcm9taXNlLCBJTlRFUk5BTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24sIFByb3h5YWJsZSk7XG52YXIgQ29udGV4dCA9IF9kZXJlcV8oXCIuL2NvbnRleHRcIikoUHJvbWlzZSk7XG4gLypqc2hpbnQgdW51c2VkOmZhbHNlKi9cbnZhciBjcmVhdGVDb250ZXh0ID0gQ29udGV4dC5jcmVhdGU7XG52YXIgZGVidWcgPSBfZGVyZXFfKFwiLi9kZWJ1Z2dhYmlsaXR5XCIpKFByb21pc2UsIENvbnRleHQpO1xudmFyIENhcHR1cmVkVHJhY2UgPSBkZWJ1Zy5DYXB0dXJlZFRyYWNlO1xudmFyIFBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQgPVxuICAgIF9kZXJlcV8oXCIuL2ZpbmFsbHlcIikoUHJvbWlzZSwgdHJ5Q29udmVydFRvUHJvbWlzZSwgTkVYVF9GSUxURVIpO1xudmFyIGNhdGNoRmlsdGVyID0gX2RlcmVxXyhcIi4vY2F0Y2hfZmlsdGVyXCIpKE5FWFRfRklMVEVSKTtcbnZhciBub2RlYmFja0ZvclByb21pc2UgPSBfZGVyZXFfKFwiLi9ub2RlYmFja1wiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xuZnVuY3Rpb24gY2hlY2soc2VsZiwgZXhlY3V0b3IpIHtcbiAgICBpZiAoc2VsZiA9PSBudWxsIHx8IHNlbGYuY29uc3RydWN0b3IgIT09IFByb21pc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBpbnZva2VkIGRpcmVjdGx5XFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhleGVjdXRvcikpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgaWYgKGV4ZWN1dG9yICE9PSBJTlRFUk5BTCkge1xuICAgICAgICBjaGVjayh0aGlzLCBleGVjdXRvcik7XG4gICAgfVxuICAgIHRoaXMuX2JpdEZpZWxkID0gMDtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3Byb21pc2UwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3JlY2VpdmVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXNvbHZlRnJvbUV4ZWN1dG9yKGV4ZWN1dG9yKTtcbiAgICB0aGlzLl9wcm9taXNlQ3JlYXRlZCgpO1xuICAgIHRoaXMuX2ZpcmVFdmVudChcInByb21pc2VDcmVhdGVkXCIsIHRoaXMpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IFByb21pc2VdXCI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXVnaHQgPSBQcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgICAgdmFyIGNhdGNoSW5zdGFuY2VzID0gbmV3IEFycmF5KGxlbiAtIDEpLFxuICAgICAgICAgICAgaiA9IDAsIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4gLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKHV0aWwuaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjYXRjaEluc3RhbmNlc1tqKytdID0gaXRlbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcIkNhdGNoIHN0YXRlbWVudCBwcmVkaWNhdGU6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJleHBlY3RpbmcgYW4gb2JqZWN0IGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaEluc3RhbmNlcy5sZW5ndGggPSBqO1xuICAgICAgICBmbiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIGNhdGNoRmlsdGVyKGNhdGNoSW5zdGFuY2VzLCBmbiwgdGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgZm4pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUucmVmbGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihyZWZsZWN0SGFuZGxlcixcbiAgICAgICAgcmVmbGVjdEhhbmRsZXIsIHVuZGVmaW5lZCwgdGhpcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAoZGlkRnVsZmlsbCwgZGlkUmVqZWN0KSB7XG4gICAgaWYgKGRlYnVnLndhcm5pbmdzKCkgJiYgYXJndW1lbnRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgdHlwZW9mIGRpZEZ1bGZpbGwgIT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICB0eXBlb2YgZGlkUmVqZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIG1zZyA9IFwiLnRoZW4oKSBvbmx5IGFjY2VwdHMgZnVuY3Rpb25zIGJ1dCB3YXMgcGFzc2VkOiBcIiArXG4gICAgICAgICAgICAgICAgdXRpbC5jbGFzc1N0cmluZyhkaWRGdWxmaWxsKTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBtc2cgKz0gXCIsIFwiICsgdXRpbC5jbGFzc1N0cmluZyhkaWRSZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dhcm4obXNnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbiAoZGlkRnVsZmlsbCwgZGlkUmVqZWN0KSB7XG4gICAgdmFyIHByb21pc2UgPVxuICAgICAgICB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgcHJvbWlzZS5fc2V0SXNGaW5hbCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuc3ByZWFkID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbGwoKS5fdGhlbihmbiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIEFQUExZLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXQgPSB7XG4gICAgICAgIGlzRnVsZmlsbGVkOiBmYWxzZSxcbiAgICAgICAgaXNSZWplY3RlZDogZmFsc2UsXG4gICAgICAgIGZ1bGZpbGxtZW50VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgcmVqZWN0aW9uUmVhc29uOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmICh0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgcmV0LmZ1bGZpbGxtZW50VmFsdWUgPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgIHJldC5pc0Z1bGZpbGxlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICByZXQucmVqZWN0aW9uUmVhc29uID0gdGhpcy5yZWFzb24oKTtcbiAgICAgICAgcmV0LmlzUmVqZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl93YXJuKFwiLmFsbCgpIHdhcyBwYXNzZWQgYXJndW1lbnRzIGJ1dCBpdCBkb2VzIG5vdCB0YWtlIGFueVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkodGhpcykucHJvbWlzZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5jYXVnaHQodXRpbC5vcmlnaW5hdGVzRnJvbVJlamVjdGlvbiwgZm4pO1xufTtcblxuUHJvbWlzZS5nZXROZXdMaWJyYXJ5Q29weSA9IG1vZHVsZS5leHBvcnRzO1xuXG5Qcm9taXNlLmlzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWwgaW5zdGFuY2VvZiBQcm9taXNlO1xufTtcblxuUHJvbWlzZS5mcm9tTm9kZSA9IFByb21pc2UuZnJvbUNhbGxiYWNrID0gZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB2YXIgbXVsdGlBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyAhIU9iamVjdChhcmd1bWVudHNbMV0pLm11bHRpQXJnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaChmbikobm9kZWJhY2tGb3JQcm9taXNlKHJldCwgbXVsdGlBcmdzKSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgcmV0Ll9yZWplY3RDYWxsYmFjayhyZXN1bHQuZSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghcmV0Ll9pc0ZhdGVTZWFsZWQoKSkgcmV0Ll9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VBcnJheShwcm9taXNlcykucHJvbWlzZSgpO1xufTtcblxuUHJvbWlzZS5jYXN0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciByZXQgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKG9iaik7XG4gICAgaWYgKCEocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgICAgIHJldC5fc2V0RnVsZmlsbGVkKCk7XG4gICAgICAgIHJldC5fcmVqZWN0aW9uSGFuZGxlcjAgPSBvYmo7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnJlc29sdmUgPSBQcm9taXNlLmZ1bGZpbGxlZCA9IFByb21pc2UuY2FzdDtcblxuUHJvbWlzZS5yZWplY3QgPSBQcm9taXNlLnJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHJldC5fcmVqZWN0Q2FsbGJhY2socmVhc29uLCB0cnVlKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5zZXRTY2hlZHVsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG4gICAgcmV0dXJuIGFzeW5jLnNldFNjaGVkdWxlcihmbik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdGhlbiA9IGZ1bmN0aW9uIChcbiAgICBkaWRGdWxmaWxsLFxuICAgIGRpZFJlamVjdCxcbiAgICBfLCAgICByZWNlaXZlcixcbiAgICBpbnRlcm5hbERhdGFcbikge1xuICAgIHZhciBoYXZlSW50ZXJuYWxEYXRhID0gaW50ZXJuYWxEYXRhICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIHByb21pc2UgPSBoYXZlSW50ZXJuYWxEYXRhID8gaW50ZXJuYWxEYXRhIDogbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLl90YXJnZXQoKTtcbiAgICB2YXIgYml0RmllbGQgPSB0YXJnZXQuX2JpdEZpZWxkO1xuXG4gICAgaWYgKCFoYXZlSW50ZXJuYWxEYXRhKSB7XG4gICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20odGhpcywgMyk7XG4gICAgICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgICAgIGlmIChyZWNlaXZlciA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAoKHRoaXMuX2JpdEZpZWxkICYgMjA5NzE1MikgIT09IDApKSB7XG4gICAgICAgICAgICBpZiAoISgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB0aGlzLl9ib3VuZFZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyID0gdGFyZ2V0ID09PSB0aGlzID8gdW5kZWZpbmVkIDogdGhpcy5fYm91bmRUbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maXJlRXZlbnQoXCJwcm9taXNlQ2hhaW5lZFwiLCB0aGlzLCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgaWYgKCEoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICB2YXIgaGFuZGxlciwgdmFsdWUsIHNldHRsZXIgPSB0YXJnZXQuX3NldHRsZVByb21pc2VDdHg7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQuX3JlamVjdGlvbkhhbmRsZXIwO1xuICAgICAgICAgICAgaGFuZGxlciA9IGRpZEZ1bGZpbGw7XG4gICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0Ll9mdWxmaWxsbWVudEhhbmRsZXIwO1xuICAgICAgICAgICAgaGFuZGxlciA9IGRpZFJlamVjdDtcbiAgICAgICAgICAgIHRhcmdldC5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0dGxlciA9IHRhcmdldC5fc2V0dGxlUHJvbWlzZUxhdGVDYW5jZWxsYXRpb25PYnNlcnZlcjtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3IENhbmNlbGxhdGlvbkVycm9yKFwibGF0ZSBjYW5jZWxsYXRpb24gb2JzZXJ2ZXJcIik7XG4gICAgICAgICAgICB0YXJnZXQuX2F0dGFjaEV4dHJhVHJhY2UodmFsdWUpO1xuICAgICAgICAgICAgaGFuZGxlciA9IGRpZFJlamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jLmludm9rZShzZXR0bGVyLCB0YXJnZXQsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6IGRvbWFpbiA9PT0gbnVsbCA/IGhhbmRsZXJcbiAgICAgICAgICAgICAgICA6ICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgIHV0aWwuZG9tYWluQmluZChkb21haW4sIGhhbmRsZXIpKSxcbiAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgICAgICByZWNlaXZlcjogcmVjZWl2ZXIsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0Ll9hZGRDYWxsYmFja3MoZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBwcm9taXNlLCByZWNlaXZlciwgZG9tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdEZpZWxkICYgNjU1MzU7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGYXRlU2VhbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAxMTc1MDYwNDgpICE9PSAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRm9sbG93aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA2NzEwODg2NCkgPT09IDY3MTA4ODY0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldExlbmd0aCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9ICh0aGlzLl9iaXRGaWVsZCAmIC02NTUzNikgfFxuICAgICAgICAobGVuICYgNjU1MzUpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMzM1NTQ0MzI7XG4gICAgdGhpcy5fZmlyZUV2ZW50KFwicHJvbWlzZUZ1bGZpbGxlZFwiLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRSZWplY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTY3NzcyMTY7XG4gICAgdGhpcy5fZmlyZUV2ZW50KFwicHJvbWlzZVJlamVjdGVkXCIsIHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEZvbGxvd2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNjcxMDg4NjQ7XG4gICAgdGhpcy5fZmlyZUV2ZW50KFwicHJvbWlzZVJlc29sdmVkXCIsIHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldElzRmluYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDQxOTQzMDQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGaW5hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDE5NDMwNCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0Q2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NjU1MzYpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA2NTUzNjtcbiAgICB0aGlzLl9maXJlRXZlbnQoXCJwcm9taXNlQ2FuY2VsbGVkXCIsIHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFdpbGxCZUNhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA4Mzg4NjA4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEFzeW5jR3VhcmFudGVlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChhc3luYy5oYXNDdXN0b21TY2hlZHVsZXIoKSkgcmV0dXJuO1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAxMzQyMTc3Mjg7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVjZWl2ZXJBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciByZXQgPSBpbmRleCA9PT0gMCA/IHRoaXMuX3JlY2VpdmVyMCA6IHRoaXNbXG4gICAgICAgICAgICBpbmRleCAqIDQgLSA0ICsgM107XG4gICAgaWYgKHJldCA9PT0gVU5ERUZJTkVEX0JJTkRJTkcpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHJldCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzQm91bmQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRWYWx1ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb21pc2VBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiB0aGlzW1xuICAgICAgICAgICAgaW5kZXggKiA0IC0gNCArIDJdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Z1bGZpbGxtZW50SGFuZGxlckF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXNbXG4gICAgICAgICAgICBpbmRleCAqIDQgLSA0ICsgMF07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0aW9uSGFuZGxlckF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXNbXG4gICAgICAgICAgICBpbmRleCAqIDQgLSA0ICsgMV07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fYm91bmRWYWx1ZSA9IGZ1bmN0aW9uKCkge307XG5cblByb21pc2UucHJvdG90eXBlLl9taWdyYXRlQ2FsbGJhY2swID0gZnVuY3Rpb24gKGZvbGxvd2VyKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gZm9sbG93ZXIuX2JpdEZpZWxkO1xuICAgIHZhciBmdWxmaWxsID0gZm9sbG93ZXIuX2Z1bGZpbGxtZW50SGFuZGxlcjA7XG4gICAgdmFyIHJlamVjdCA9IGZvbGxvd2VyLl9yZWplY3Rpb25IYW5kbGVyMDtcbiAgICB2YXIgcHJvbWlzZSA9IGZvbGxvd2VyLl9wcm9taXNlMDtcbiAgICB2YXIgcmVjZWl2ZXIgPSBmb2xsb3dlci5fcmVjZWl2ZXJBdCgwKTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IHVuZGVmaW5lZCkgcmVjZWl2ZXIgPSBVTkRFRklORURfQklORElORztcbiAgICB0aGlzLl9hZGRDYWxsYmFja3MoZnVsZmlsbCwgcmVqZWN0LCBwcm9taXNlLCByZWNlaXZlciwgbnVsbCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbWlncmF0ZUNhbGxiYWNrQXQgPSBmdW5jdGlvbiAoZm9sbG93ZXIsIGluZGV4KSB7XG4gICAgdmFyIGZ1bGZpbGwgPSBmb2xsb3dlci5fZnVsZmlsbG1lbnRIYW5kbGVyQXQoaW5kZXgpO1xuICAgIHZhciByZWplY3QgPSBmb2xsb3dlci5fcmVqZWN0aW9uSGFuZGxlckF0KGluZGV4KTtcbiAgICB2YXIgcHJvbWlzZSA9IGZvbGxvd2VyLl9wcm9taXNlQXQoaW5kZXgpO1xuICAgIHZhciByZWNlaXZlciA9IGZvbGxvd2VyLl9yZWNlaXZlckF0KGluZGV4KTtcbiAgICBpZiAocmVjZWl2ZXIgPT09IHVuZGVmaW5lZCkgcmVjZWl2ZXIgPSBVTkRFRklORURfQklORElORztcbiAgICB0aGlzLl9hZGRDYWxsYmFja3MoZnVsZmlsbCwgcmVqZWN0LCBwcm9taXNlLCByZWNlaXZlciwgbnVsbCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fYWRkQ2FsbGJhY2tzID0gZnVuY3Rpb24gKFxuICAgIGZ1bGZpbGwsXG4gICAgcmVqZWN0LFxuICAgIHByb21pc2UsXG4gICAgcmVjZWl2ZXIsXG4gICAgZG9tYWluXG4pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSA2NTUzNSAtIDQpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9zZXRMZW5ndGgoMCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UwID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIwID0gcmVjZWl2ZXI7XG4gICAgICAgIGlmICh0eXBlb2YgZnVsZmlsbCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID1cbiAgICAgICAgICAgICAgICBkb21haW4gPT09IG51bGwgPyBmdWxmaWxsIDogdXRpbC5kb21haW5CaW5kKGRvbWFpbiwgZnVsZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IHJlamVjdCA6IHV0aWwuZG9tYWluQmluZChkb21haW4sIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYmFzZSA9IGluZGV4ICogNCAtIDQ7XG4gICAgICAgIHRoaXNbYmFzZSArIDJdID0gcHJvbWlzZTtcbiAgICAgICAgdGhpc1tiYXNlICsgM10gPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXNbYmFzZSArIDBdID1cbiAgICAgICAgICAgICAgICBkb21haW4gPT09IG51bGwgPyBmdWxmaWxsIDogdXRpbC5kb21haW5CaW5kKGRvbWFpbiwgZnVsZmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpc1tiYXNlICsgMV0gPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IHJlamVjdCA6IHV0aWwuZG9tYWluQmluZChkb21haW4sIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TGVuZ3RoKGluZGV4ICsgMSk7XG4gICAgcmV0dXJuIGluZGV4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5ID0gZnVuY3Rpb24gKHByb3h5YWJsZSwgYXJnKSB7XG4gICAgdGhpcy5fYWRkQ2FsbGJhY2tzKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBhcmcsIHByb3h5YWJsZSwgbnVsbCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVzb2x2ZUNhbGxiYWNrID0gZnVuY3Rpb24odmFsdWUsIHNob3VsZEJpbmQpIHtcbiAgICBpZiAoKCh0aGlzLl9iaXRGaWVsZCAmIDExNzUwNjA0OCkgIT09IDApKSByZXR1cm47XG4gICAgaWYgKHZhbHVlID09PSB0aGlzKVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0Q2FsbGJhY2sobWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKSwgZmFsc2UpO1xuICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHZhbHVlLCB0aGlzKTtcbiAgICBpZiAoIShtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkgcmV0dXJuIHRoaXMuX2Z1bGZpbGwodmFsdWUpO1xuXG4gICAgaWYgKHNob3VsZEJpbmQpIHRoaXMuX3Byb3BhZ2F0ZUZyb20obWF5YmVQcm9taXNlLCAyKTtcblxuICAgIHZhciBwcm9taXNlID0gbWF5YmVQcm9taXNlLl90YXJnZXQoKTtcblxuICAgIGlmIChwcm9taXNlID09PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdChtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBiaXRGaWVsZCA9IHByb21pc2UuX2JpdEZpZWxkO1xuICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCk7XG4gICAgICAgIGlmIChsZW4gPiAwKSBwcm9taXNlLl9taWdyYXRlQ2FsbGJhY2swKHRoaXMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9taWdyYXRlQ2FsbGJhY2tBdCh0aGlzLCBpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXRGb2xsb3dpbmcoKTtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgICAgICB0aGlzLl9zZXRGb2xsb3dlZShwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgIHRoaXMuX2Z1bGZpbGwocHJvbWlzZS5fdmFsdWUoKSk7XG4gICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwKSkge1xuICAgICAgICB0aGlzLl9yZWplY3QocHJvbWlzZS5fcmVhc29uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZWFzb24gPSBuZXcgQ2FuY2VsbGF0aW9uRXJyb3IoXCJsYXRlIGNhbmNlbGxhdGlvbiBvYnNlcnZlclwiKTtcbiAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShyZWFzb24pO1xuICAgICAgICB0aGlzLl9yZWplY3QocmVhc29uKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0Q2FsbGJhY2sgPVxuZnVuY3Rpb24ocmVhc29uLCBzeW5jaHJvbm91cywgaWdub3JlTm9uRXJyb3JXYXJuaW5ncykge1xuICAgIHZhciB0cmFjZSA9IHV0aWwuZW5zdXJlRXJyb3JPYmplY3QocmVhc29uKTtcbiAgICB2YXIgaGFzU3RhY2sgPSB0cmFjZSA9PT0gcmVhc29uO1xuICAgIGlmICghaGFzU3RhY2sgJiYgIWlnbm9yZU5vbkVycm9yV2FybmluZ3MgJiYgZGVidWcud2FybmluZ3MoKSkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IFwiYSBwcm9taXNlIHdhcyByZWplY3RlZCB3aXRoIGEgbm9uLWVycm9yOiBcIiArXG4gICAgICAgICAgICB1dGlsLmNsYXNzU3RyaW5nKHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3dhcm4obWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UsIHN5bmNocm9ub3VzID8gaGFzU3RhY2sgOiBmYWxzZSk7XG4gICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVzb2x2ZUZyb21FeGVjdXRvciA9IGZ1bmN0aW9uIChleGVjdXRvcikge1xuICAgIGlmIChleGVjdXRvciA9PT0gSU5URVJOQUwpIHJldHVybjtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdGhpcy5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB0aGlzLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciBzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgdmFyIHIgPSB0aGlzLl9leGVjdXRlKGV4ZWN1dG9yLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBwcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVhc29uLCBzeW5jaHJvbm91cyk7XG4gICAgfSk7XG4gICAgc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICB0aGlzLl9wb3BDb250ZXh0KCk7XG5cbiAgICBpZiAociAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHIsIHRydWUpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIgPSBmdW5jdGlvbiAoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlXG4pIHtcbiAgICB2YXIgYml0RmllbGQgPSBwcm9taXNlLl9iaXRGaWVsZDtcbiAgICBpZiAoKChiaXRGaWVsZCAmIDY1NTM2KSAhPT0gMCkpIHJldHVybjtcbiAgICBwcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciB4O1xuICAgIGlmIChyZWNlaXZlciA9PT0gQVBQTFkpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUubGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB4ID0gZXJyb3JPYmo7XG4gICAgICAgICAgICB4LmUgPSBuZXcgVHlwZUVycm9yKFwiY2Fubm90IC5zcHJlYWQoKSBhIG5vbi1hcnJheTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jbGFzc1N0cmluZyh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHRyeUNhdGNoKGhhbmRsZXIpLmFwcGx5KHRoaXMuX2JvdW5kVmFsdWUoKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IHRyeUNhdGNoKGhhbmRsZXIpLmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgdmFyIHByb21pc2VDcmVhdGVkID0gcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgIGJpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiA2NTUzNikgIT09IDApKSByZXR1cm47XG5cbiAgICBpZiAoeCA9PT0gTkVYVF9GSUxURVIpIHtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHggPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHguZSwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyh4LCBwcm9taXNlQ3JlYXRlZCwgXCJcIiwgIHByb21pc2UsIHRoaXMpO1xuICAgICAgICBwcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2soeCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3RhcmdldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXQgPSB0aGlzO1xuICAgIHdoaWxlIChyZXQuX2lzRm9sbG93aW5nKCkpIHJldCA9IHJldC5fZm9sbG93ZWUoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2ZvbGxvd2VlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEZvbGxvd2VlID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwID0gcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlID0gZnVuY3Rpb24ocHJvbWlzZSwgaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlKSB7XG4gICAgdmFyIGlzUHJvbWlzZSA9IHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlO1xuICAgIHZhciBiaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkO1xuICAgIHZhciBhc3luY0d1YXJhbnRlZWQgPSAoKGJpdEZpZWxkICYgMTM0MjE3NzI4KSAhPT0gMCk7XG4gICAgaWYgKCgoYml0RmllbGQgJiA2NTUzNikgIT09IDApKSB7XG4gICAgICAgIGlmIChpc1Byb21pc2UpIHByb21pc2UuX2ludm9rZUludGVybmFsT25DYW5jZWwoKTtcblxuICAgICAgICBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQYXNzVGhyb3VnaEhhbmRsZXJDb250ZXh0ICYmXG4gICAgICAgICAgICByZWNlaXZlci5pc0ZpbmFsbHlIYW5kbGVyKCkpIHtcbiAgICAgICAgICAgIHJlY2VpdmVyLmNhbmNlbFByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICAgICAgaWYgKHRyeUNhdGNoKGhhbmRsZXIpLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3QoZXJyb3JPYmouZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9PT0gcmVmbGVjdEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwocmVmbGVjdEhhbmRsZXIuY2FsbChyZWNlaXZlcikpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlY2VpdmVyIGluc3RhbmNlb2YgUHJveHlhYmxlKSB7XG4gICAgICAgICAgICByZWNlaXZlci5fcHJvbWlzZUNhbmNlbGxlZChwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UgfHwgcHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2VBcnJheSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fY2FuY2VsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWNlaXZlci5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpZiAoIWlzUHJvbWlzZSkge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYXN5bmNHdWFyYW50ZWVkKSBwcm9taXNlLl9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb3h5YWJsZSkge1xuICAgICAgICBpZiAoIXJlY2VpdmVyLl9pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgICAgIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuX3Byb21pc2VSZWplY3RlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZSkge1xuICAgICAgICBpZiAoYXN5bmNHdWFyYW50ZWVkKSBwcm9taXNlLl9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICAgICAgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UuX3JlamVjdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUxhdGVDYW5jZWxsYXRpb25PYnNlcnZlciA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBoYW5kbGVyID0gY3R4LmhhbmRsZXI7XG4gICAgdmFyIHByb21pc2UgPSBjdHgucHJvbWlzZTtcbiAgICB2YXIgcmVjZWl2ZXIgPSBjdHgucmVjZWl2ZXI7XG4gICAgdmFyIHZhbHVlID0gY3R4LnZhbHVlO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIoaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHZhbHVlKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUN0eCA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHRoaXMuX3NldHRsZVByb21pc2UoY3R4LnByb21pc2UsIGN0eC5oYW5kbGVyLCBjdHgucmVjZWl2ZXIsIGN0eC52YWx1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZTAgPSBmdW5jdGlvbihoYW5kbGVyLCB2YWx1ZSwgYml0RmllbGQpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2UwO1xuICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoMCk7XG4gICAgdGhpcy5fcHJvbWlzZTAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcmVjZWl2ZXIwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NldHRsZVByb21pc2UocHJvbWlzZSwgaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jbGVhckNhbGxiYWNrRGF0YUF0SW5kZXggPSBmdW5jdGlvbihpbmRleCkge1xuICAgIHZhciBiYXNlID0gaW5kZXggKiA0IC0gNDtcbiAgICB0aGlzW2Jhc2UgKyAyXSA9XG4gICAgdGhpc1tiYXNlICsgM10gPVxuICAgIHRoaXNbYmFzZSArIDBdID1cbiAgICB0aGlzW2Jhc2UgKyAxXSA9IHVuZGVmaW5lZDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gdGhpcy5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiAxMTc1MDYwNDgpID4+PiAxNikpIHJldHVybjtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMpIHtcbiAgICAgICAgdmFyIGVyciA9IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaEV4dHJhVHJhY2UoZXJyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdChlcnIpO1xuICAgIH1cbiAgICB0aGlzLl9zZXRGdWxmaWxsZWQoKTtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHZhbHVlO1xuXG4gICAgaWYgKChiaXRGaWVsZCAmIDY1NTM1KSA+IDApIHtcbiAgICAgICAgaWYgKCgoYml0RmllbGQgJiAxMzQyMTc3MjgpICE9PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFzeW5jLnNldHRsZVByb21pc2VzKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB2YXIgYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZDtcbiAgICBpZiAoKChiaXRGaWVsZCAmIDExNzUwNjA0OCkgPj4+IDE2KSkgcmV0dXJuO1xuICAgIHRoaXMuX3NldFJlamVjdGVkKCk7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHJlYXNvbjtcblxuICAgIGlmICh0aGlzLl9pc0ZpbmFsKCkpIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jLmZhdGFsRXJyb3IocmVhc29uLCB1dGlsLmlzTm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKChiaXRGaWVsZCAmIDY1NTM1KSA+IDApIHtcbiAgICAgICAgYXN5bmMuc2V0dGxlUHJvbWlzZXModGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2Z1bGZpbGxQcm9taXNlcyA9IGZ1bmN0aW9uIChsZW4sIHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlckF0KGkpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2VBdChpKTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcmVjZWl2ZXJBdChpKTtcbiAgICAgICAgdGhpcy5fY2xlYXJDYWxsYmFja0RhdGFBdEluZGV4KGkpO1xuICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlKHByb21pc2UsIGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlamVjdFByb21pc2VzID0gZnVuY3Rpb24gKGxlbiwgcmVhc29uKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuX3JlamVjdGlvbkhhbmRsZXJBdChpKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaSk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoaSk7XG4gICAgICAgIHRoaXMuX2NsZWFyQ2FsbGJhY2tEYXRhQXRJbmRleChpKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZShwcm9taXNlLCBoYW5kbGVyLCByZWNlaXZlciwgcmVhc29uKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gdGhpcy5fYml0RmllbGQ7XG4gICAgdmFyIGxlbiA9IChiaXRGaWVsZCAmIDY1NTM1KTtcblxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgMTY4NDI3NTIpICE9PSAwKSkge1xuICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjA7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlMCh0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCwgcmVhc29uLCBiaXRGaWVsZCk7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3RQcm9taXNlcyhsZW4sIHJlYXNvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMDtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZVByb21pc2UwKHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAsIHZhbHVlLCBiaXRGaWVsZCk7XG4gICAgICAgICAgICB0aGlzLl9mdWxmaWxsUHJvbWlzZXMobGVuLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhckNhbmNlbGxhdGlvbkRhdGEoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVkVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZDtcbiAgICBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdGlvbkhhbmRsZXIwO1xuICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjA7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZGVmZXJSZXNvbHZlKHYpIHt0aGlzLnByb21pc2UuX3Jlc29sdmVDYWxsYmFjayh2KTt9XG5mdW5jdGlvbiBkZWZlclJlamVjdCh2KSB7dGhpcy5wcm9taXNlLl9yZWplY3RDYWxsYmFjayh2LCBmYWxzZSk7fVxuXG5Qcm9taXNlLmRlZmVyID0gUHJvbWlzZS5wZW5kaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgZGVidWcuZGVwcmVjYXRlZChcIlByb21pc2UuZGVmZXJcIiwgXCJuZXcgUHJvbWlzZVwiKTtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBwcm9taXNlLFxuICAgICAgICByZXNvbHZlOiBkZWZlclJlc29sdmUsXG4gICAgICAgIHJlamVjdDogZGVmZXJSZWplY3RcbiAgICB9O1xufTtcblxudXRpbC5ub3RFbnVtZXJhYmxlUHJvcChQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICBcIl9tYWtlU2VsZlJlc29sdXRpb25FcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICBtYWtlU2VsZlJlc29sdXRpb25FcnJvcik7XG5cbl9kZXJlcV8oXCIuL21ldGhvZFwiKShQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uLFxuICAgIGRlYnVnKTtcbl9kZXJlcV8oXCIuL2JpbmRcIikoUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGRlYnVnKTtcbl9kZXJlcV8oXCIuL2NhbmNlbFwiKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbiwgZGVidWcpO1xuX2RlcmVxXyhcIi4vZGlyZWN0X3Jlc29sdmVcIikoUHJvbWlzZSk7XG5fZGVyZXFfKFwiLi9zeW5jaHJvbm91c19pbnNwZWN0aW9uXCIpKFByb21pc2UpO1xuX2RlcmVxXyhcIi4vam9pblwiKShcbiAgICBQcm9taXNlLCBQcm9taXNlQXJyYXksIHRyeUNvbnZlcnRUb1Byb21pc2UsIElOVEVSTkFMLCBhc3luYywgZ2V0RG9tYWluKTtcblByb21pc2UuUHJvbWlzZSA9IFByb21pc2U7XG5Qcm9taXNlLnZlcnNpb24gPSBcIjMuNS4wXCI7XG5fZGVyZXFfKCcuL21hcC5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBJTlRFUk5BTCwgZGVidWcpO1xuX2RlcmVxXygnLi9jYWxsX2dldC5qcycpKFByb21pc2UpO1xuX2RlcmVxXygnLi91c2luZy5qcycpKFByb21pc2UsIGFwaVJlamVjdGlvbiwgdHJ5Q29udmVydFRvUHJvbWlzZSwgY3JlYXRlQ29udGV4dCwgSU5URVJOQUwsIGRlYnVnKTtcbl9kZXJlcV8oJy4vdGltZXJzLmpzJykoUHJvbWlzZSwgSU5URVJOQUwsIGRlYnVnKTtcbl9kZXJlcV8oJy4vZ2VuZXJhdG9ycy5qcycpKFByb21pc2UsIGFwaVJlamVjdGlvbiwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIFByb3h5YWJsZSwgZGVidWcpO1xuX2RlcmVxXygnLi9ub2RlaWZ5LmpzJykoUHJvbWlzZSk7XG5fZGVyZXFfKCcuL3Byb21pc2lmeS5qcycpKFByb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vcHJvcHMuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbik7XG5fZGVyZXFfKCcuL3JhY2UuanMnKShQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKTtcbl9kZXJlcV8oJy4vcmVkdWNlLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIHRyeUNvbnZlcnRUb1Byb21pc2UsIElOVEVSTkFMLCBkZWJ1Zyk7XG5fZGVyZXFfKCcuL3NldHRsZS5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSwgZGVidWcpO1xuX2RlcmVxXygnLi9zb21lLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24pO1xuX2RlcmVxXygnLi9maWx0ZXIuanMnKShQcm9taXNlLCBJTlRFUk5BTCk7XG5fZGVyZXFfKCcuL2VhY2guanMnKShQcm9taXNlLCBJTlRFUk5BTCk7XG5fZGVyZXFfKCcuL2FueS5qcycpKFByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgdXRpbC50b0Zhc3RQcm9wZXJ0aWVzKFByb21pc2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHV0aWwudG9GYXN0UHJvcGVydGllcyhQcm9taXNlLnByb3RvdHlwZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmdW5jdGlvbiBmaWxsVHlwZXModmFsdWUpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBwID0gbmV3IFByb21pc2UoSU5URVJOQUwpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fcmVqZWN0aW9uSGFuZGxlcjAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX3Byb21pc2UwID0gdmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9yZWNlaXZlcjAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gQ29tcGxldGUgc2xhY2sgdHJhY2tpbmcsIG9wdCBvdXQgb2YgZmllbGQtdHlwZSB0cmFja2luZyBhbmQgICAgICAgICAgIFxuICAgIC8vIHN0YWJpbGl6ZSBtYXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoe2E6IDF9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKHtiOiAyfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyh7YzogM30pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoMSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKGZ1bmN0aW9uKCl7fSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyh1bmRlZmluZWQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoZmFsc2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKG5ldyBQcm9taXNlKElOVEVSTkFMKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGRlYnVnLnNldEJvdW5kcyhBc3luYy5maXJzdExpbmVFcnJvciwgdXRpbC5sYXN0TGluZUVycm9yKTsgICAgICAgICAgICAgICBcbiAgICByZXR1cm4gUHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbn07XG5cbn0se1wiLi9hbnkuanNcIjoxLFwiLi9hc3luY1wiOjIsXCIuL2JpbmRcIjozLFwiLi9jYWxsX2dldC5qc1wiOjUsXCIuL2NhbmNlbFwiOjYsXCIuL2NhdGNoX2ZpbHRlclwiOjcsXCIuL2NvbnRleHRcIjo4LFwiLi9kZWJ1Z2dhYmlsaXR5XCI6OSxcIi4vZGlyZWN0X3Jlc29sdmVcIjoxMCxcIi4vZWFjaC5qc1wiOjExLFwiLi9lcnJvcnNcIjoxMixcIi4vZXM1XCI6MTMsXCIuL2ZpbHRlci5qc1wiOjE0LFwiLi9maW5hbGx5XCI6MTUsXCIuL2dlbmVyYXRvcnMuanNcIjoxNixcIi4vam9pblwiOjE3LFwiLi9tYXAuanNcIjoxOCxcIi4vbWV0aG9kXCI6MTksXCIuL25vZGViYWNrXCI6MjAsXCIuL25vZGVpZnkuanNcIjoyMSxcIi4vcHJvbWlzZV9hcnJheVwiOjIzLFwiLi9wcm9taXNpZnkuanNcIjoyNCxcIi4vcHJvcHMuanNcIjoyNSxcIi4vcmFjZS5qc1wiOjI3LFwiLi9yZWR1Y2UuanNcIjoyOCxcIi4vc2V0dGxlLmpzXCI6MzAsXCIuL3NvbWUuanNcIjozMSxcIi4vc3luY2hyb25vdXNfaW5zcGVjdGlvblwiOjMyLFwiLi90aGVuYWJsZXNcIjozMyxcIi4vdGltZXJzLmpzXCI6MzQsXCIuL3VzaW5nLmpzXCI6MzUsXCIuL3V0aWxcIjozNn1dLDIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICBhcGlSZWplY3Rpb24sIFByb3h5YWJsZSkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG5cbmZ1bmN0aW9uIHRvUmVzb2x1dGlvblZhbHVlKHZhbCkge1xuICAgIHN3aXRjaCh2YWwpIHtcbiAgICBjYXNlIC0yOiByZXR1cm4gW107XG4gICAgY2FzZSAtMzogcmV0dXJuIHt9O1xuICAgIGNhc2UgLTY6IHJldHVybiBuZXcgTWFwKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBQcm9taXNlQXJyYXkodmFsdWVzKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20odmFsdWVzLCAzKTtcbiAgICB9XG4gICAgcHJvbWlzZS5fc2V0T25DYW5jZWwodGhpcyk7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCA9IDA7XG4gICAgdGhpcy5faW5pdCh1bmRlZmluZWQsIC0yKTtcbn1cbnV0aWwuaW5oZXJpdHMoUHJvbWlzZUFycmF5LCBQcm94eWFibGUpO1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIGluaXQoXywgcmVzb2x2ZVZhbHVlSWZFbXB0eSkge1xuICAgIHZhciB2YWx1ZXMgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHRoaXMuX3ZhbHVlcywgdGhpcy5fcHJvbWlzZSk7XG4gICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLl90YXJnZXQoKTtcbiAgICAgICAgdmFyIGJpdEZpZWxkID0gdmFsdWVzLl9iaXRGaWVsZDtcbiAgICAgICAgO1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgICAgICAgaWYgKCgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlLl9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuX3RoZW4oXG4gICAgICAgICAgICAgICAgaW5pdCxcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWplY3QsXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVZhbHVlSWZFbXB0eVxuICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuX3ZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QodmFsdWVzLl9yZWFzb24oKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVzID0gdXRpbC5hc0FycmF5KHZhbHVlcyk7XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgICB2YXIgZXJyID0gYXBpUmVqZWN0aW9uKFxuICAgICAgICAgICAgXCJleHBlY3RpbmcgYW4gYXJyYXkgb3IgYW4gaXRlcmFibGUgb2JqZWN0IGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKHZhbHVlcykpLnJlYXNvbigpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9yZWplY3RDYWxsYmFjayhlcnIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChyZXNvbHZlVmFsdWVJZkVtcHR5ID09PSAtNSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUVtcHR5QXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodG9SZXNvbHV0aW9uVmFsdWUocmVzb2x2ZVZhbHVlSWZFbXB0eSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXRlcmF0ZSh2YWx1ZXMpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faXRlcmF0ZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhciBsZW4gPSB0aGlzLmdldEFjdHVhbExlbmd0aCh2YWx1ZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW47XG4gICAgdGhpcy5fdmFsdWVzID0gdGhpcy5zaG91bGRDb3B5VmFsdWVzKCkgPyBuZXcgQXJyYXkobGVuKSA6IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5fcHJvbWlzZTtcbiAgICB2YXIgaXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHZhciBiaXRGaWVsZCA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh2YWx1ZXNbaV0sIHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICBiaXRGaWVsZCA9IG1heWJlUHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiaXRGaWVsZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgaWYgKGJpdEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLnN1cHByZXNzVW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGJpdEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5KHRoaXMsIGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpXSA9IG1heWJlUHJvbWlzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpc1Jlc29sdmVkID0gdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZChtYXliZVByb21pc2UuX3ZhbHVlKCksIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIGlzUmVzb2x2ZWQgPSB0aGlzLl9wcm9taXNlUmVqZWN0ZWQobWF5YmVQcm9taXNlLl9yZWFzb24oKSwgaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzUmVzb2x2ZWQgPSB0aGlzLl9wcm9taXNlQ2FuY2VsbGVkKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNSZXNvbHZlZCA9IHRoaXMuX3Byb21pc2VGdWxmaWxsZWQobWF5YmVQcm9taXNlLCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzUmVzb2x2ZWQpIHJlc3VsdC5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pc1Jlc29sdmVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMgPT09IG51bGw7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX2NhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkgfHwgIXRoaXMuX3Byb21pc2UuX2lzQ2FuY2VsbGFibGUoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3ZhbHVlcyA9IG51bGw7XG4gICAgdGhpcy5fcHJvbWlzZS5fY2FuY2VsKCk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZWFzb24sIGZhbHNlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlQ2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVqZWN0ZWQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCsrO1xuICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzdWx0Q2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFsdWVzLmNhbmNlbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzW2ldIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpXS5jYW5jZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuc2hvdWxkQ29weVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID0gZnVuY3Rpb24gKGxlbikge1xuICAgIHJldHVybiBsZW47XG59O1xuXG5yZXR1cm4gUHJvbWlzZUFycmF5O1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDI0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFRISVMgPSB7fTtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBub2RlYmFja0ZvclByb21pc2UgPSBfZGVyZXFfKFwiLi9ub2RlYmFja1wiKTtcbnZhciB3aXRoQXBwZW5kZWQgPSB1dGlsLndpdGhBcHBlbmRlZDtcbnZhciBtYXliZVdyYXBBc0Vycm9yID0gdXRpbC5tYXliZVdyYXBBc0Vycm9yO1xudmFyIGNhbkV2YWx1YXRlID0gdXRpbC5jYW5FdmFsdWF0ZTtcbnZhciBUeXBlRXJyb3IgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIikuVHlwZUVycm9yO1xudmFyIGRlZmF1bHRTdWZmaXggPSBcIkFzeW5jXCI7XG52YXIgZGVmYXVsdFByb21pc2lmaWVkID0ge19faXNQcm9taXNpZmllZF9fOiB0cnVlfTtcbnZhciBub0NvcHlQcm9wcyA9IFtcbiAgICBcImFyaXR5XCIsICAgIFwibGVuZ3RoXCIsXG4gICAgXCJuYW1lXCIsXG4gICAgXCJhcmd1bWVudHNcIixcbiAgICBcImNhbGxlclwiLFxuICAgIFwiY2FsbGVlXCIsXG4gICAgXCJwcm90b3R5cGVcIixcbiAgICBcIl9faXNQcm9taXNpZmllZF9fXCJcbl07XG52YXIgbm9Db3B5UHJvcHNQYXR0ZXJuID0gbmV3IFJlZ0V4cChcIl4oPzpcIiArIG5vQ29weVByb3BzLmpvaW4oXCJ8XCIpICsgXCIpJFwiKTtcblxudmFyIGRlZmF1bHRGaWx0ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHV0aWwuaXNJZGVudGlmaWVyKG5hbWUpICYmXG4gICAgICAgIG5hbWUuY2hhckF0KDApICE9PSBcIl9cIiAmJlxuICAgICAgICBuYW1lICE9PSBcImNvbnN0cnVjdG9yXCI7XG59O1xuXG5mdW5jdGlvbiBwcm9wc0ZpbHRlcihrZXkpIHtcbiAgICByZXR1cm4gIW5vQ29weVByb3BzUGF0dGVybi50ZXN0KGtleSk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzaWZpZWQoZm4pIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4uX19pc1Byb21pc2lmaWVkX18gPT09IHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1Byb21pc2lmaWVkKG9iaiwga2V5LCBzdWZmaXgpIHtcbiAgICB2YXIgdmFsID0gdXRpbC5nZXREYXRhUHJvcGVydHlPckRlZmF1bHQob2JqLCBrZXkgKyBzdWZmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9taXNpZmllZCk7XG4gICAgcmV0dXJuIHZhbCA/IGlzUHJvbWlzaWZpZWQodmFsKSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gY2hlY2tWYWxpZChyZXQsIHN1ZmZpeCwgc3VmZml4UmVnZXhwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGtleSA9IHJldFtpXTtcbiAgICAgICAgaWYgKHN1ZmZpeFJlZ2V4cC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHZhciBrZXlXaXRob3V0QXN5bmNTdWZmaXggPSBrZXkucmVwbGFjZShzdWZmaXhSZWdleHAsIFwiXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXQubGVuZ3RoOyBqICs9IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0W2pdID09PSBrZXlXaXRob3V0QXN5bmNTdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwcm9taXNpZnkgYW4gQVBJIHRoYXQgaGFzIG5vcm1hbCBtZXRob2RzIHdpdGggJyVzJy1zdWZmaXhcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiJXNcIiwgc3VmZml4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9taXNpZmlhYmxlTWV0aG9kcyhvYmosIHN1ZmZpeCwgc3VmZml4UmVnZXhwLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IHV0aWwuaW5oZXJpdGVkRGF0YUtleXMob2JqKTtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgdmFyIHBhc3Nlc0RlZmF1bHRGaWx0ZXIgPSBmaWx0ZXIgPT09IGRlZmF1bHRGaWx0ZXJcbiAgICAgICAgICAgID8gdHJ1ZSA6IGRlZmF1bHRGaWx0ZXIoa2V5LCB2YWx1ZSwgb2JqKTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAhaXNQcm9taXNpZmllZCh2YWx1ZSkgJiZcbiAgICAgICAgICAgICFoYXNQcm9taXNpZmllZChvYmosIGtleSwgc3VmZml4KSAmJlxuICAgICAgICAgICAgZmlsdGVyKGtleSwgdmFsdWUsIG9iaiwgcGFzc2VzRGVmYXVsdEZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrVmFsaWQocmV0LCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxudmFyIGVzY2FwZUlkZW50UmVnZXggPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbJF0pLywgXCJcXFxcJFwiKTtcbn07XG5cbnZhciBtYWtlTm9kZVByb21pc2lmaWVkRXZhbDtcbmlmICghdHJ1ZSkge1xudmFyIHN3aXRjaENhc2VBcmd1bWVudE9yZGVyID0gZnVuY3Rpb24obGlrZWx5QXJndW1lbnRDb3VudCkge1xuICAgIHZhciByZXQgPSBbbGlrZWx5QXJndW1lbnRDb3VudF07XG4gICAgdmFyIG1pbiA9IE1hdGgubWF4KDAsIGxpa2VseUFyZ3VtZW50Q291bnQgLSAxIC0gMyk7XG4gICAgZm9yKHZhciBpID0gbGlrZWx5QXJndW1lbnRDb3VudCAtIDE7IGkgPj0gbWluOyAtLWkpIHtcbiAgICAgICAgcmV0LnB1c2goaSk7XG4gICAgfVxuICAgIGZvcih2YXIgaSA9IGxpa2VseUFyZ3VtZW50Q291bnQgKyAxOyBpIDw9IDM7ICsraSkge1xuICAgICAgICByZXQucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbnZhciBhcmd1bWVudFNlcXVlbmNlID0gZnVuY3Rpb24oYXJndW1lbnRDb3VudCkge1xuICAgIHJldHVybiB1dGlsLmZpbGxlZFJhbmdlKGFyZ3VtZW50Q291bnQsIFwiX2FyZ1wiLCBcIlwiKTtcbn07XG5cbnZhciBwYXJhbWV0ZXJEZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKHBhcmFtZXRlckNvdW50KSB7XG4gICAgcmV0dXJuIHV0aWwuZmlsbGVkUmFuZ2UoXG4gICAgICAgIE1hdGgubWF4KHBhcmFtZXRlckNvdW50LCAzKSwgXCJfYXJnXCIsIFwiXCIpO1xufTtcblxudmFyIHBhcmFtZXRlckNvdW50ID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oZm4ubGVuZ3RoLCAxMDIzICsgMSksIDApO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbm1ha2VOb2RlUHJvbWlzaWZpZWRFdmFsID1cbmZ1bmN0aW9uKGNhbGxiYWNrLCByZWNlaXZlciwgb3JpZ2luYWxOYW1lLCBmbiwgXywgbXVsdGlBcmdzKSB7XG4gICAgdmFyIG5ld1BhcmFtZXRlckNvdW50ID0gTWF0aC5tYXgoMCwgcGFyYW1ldGVyQ291bnQoZm4pIC0gMSk7XG4gICAgdmFyIGFyZ3VtZW50T3JkZXIgPSBzd2l0Y2hDYXNlQXJndW1lbnRPcmRlcihuZXdQYXJhbWV0ZXJDb3VudCk7XG4gICAgdmFyIHNob3VsZFByb3h5VGhpcyA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJzdHJpbmdcIiB8fCByZWNlaXZlciA9PT0gVEhJUztcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2FsbEZvckFyZ3VtZW50Q291bnQoY291bnQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudFNlcXVlbmNlKGNvdW50KS5qb2luKFwiLCBcIik7XG4gICAgICAgIHZhciBjb21tYSA9IGNvdW50ID4gMCA/IFwiLCBcIiA6IFwiXCI7XG4gICAgICAgIHZhciByZXQ7XG4gICAgICAgIGlmIChzaG91bGRQcm94eVRoaXMpIHtcbiAgICAgICAgICAgIHJldCA9IFwicmV0ID0gY2FsbGJhY2suY2FsbCh0aGlzLCB7e2FyZ3N9fSwgbm9kZWJhY2spOyBicmVhaztcXG5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9IHJlY2VpdmVyID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IFwicmV0ID0gY2FsbGJhY2soe3thcmdzfX0sIG5vZGViYWNrKTsgYnJlYWs7XFxuXCJcbiAgICAgICAgICAgICAgICA6IFwicmV0ID0gY2FsbGJhY2suY2FsbChyZWNlaXZlciwge3thcmdzfX0sIG5vZGViYWNrKTsgYnJlYWs7XFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldC5yZXBsYWNlKFwie3thcmdzfX1cIiwgYXJncykucmVwbGFjZShcIiwgXCIsIGNvbW1hKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUFyZ3VtZW50U3dpdGNoQ2FzZSgpIHtcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRPcmRlci5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgcmV0ICs9IFwiY2FzZSBcIiArIGFyZ3VtZW50T3JkZXJbaV0gK1wiOlwiICtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUNhbGxGb3JBcmd1bWVudENvdW50KGFyZ3VtZW50T3JkZXJbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ICs9IFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsZW4gKyAxKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgaSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBhcmdzW2ldID0gbm9kZWJhY2s7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBbQ29kZUZvckNhbGxdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoXCJbQ29kZUZvckNhbGxdXCIsIChzaG91bGRQcm94eVRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJldCA9IGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpO1xcblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZXQgPSBjYWxsYmFjay5hcHBseShyZWNlaXZlciwgYXJncyk7XFxuXCIpKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICB2YXIgZ2V0RnVuY3Rpb25Db2RlID0gdHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKFwidGhpcyAhPSBudWxsID8gdGhpc1snXCIrY2FsbGJhY2srXCInXSA6IGZuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJmblwiO1xuICAgIHZhciBib2R5ID0gXCIndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgdmFyIHJldCA9IGZ1bmN0aW9uIChQYXJhbWV0ZXJzKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBub2RlYmFjayA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlLCBcIiArIG11bHRpQXJncyArIFwiKTsgICBcXG5cXFxuICAgICAgICAgICAgdmFyIHJldDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdHJ5Q2F0Y2goW0dldEZ1bmN0aW9uQ29kZV0pOyAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgc3dpdGNoKGxlbikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIFtDb2RlRm9yU3dpdGNoQ2FzZV0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKG1heWJlV3JhcEFzRXJyb3IocmV0LmUpLCB0cnVlLCB0cnVlKTtcXG5cXFxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgaWYgKCFwcm9taXNlLl9pc0ZhdGVTZWFsZWQoKSkgcHJvbWlzZS5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7ICAgICBcXG5cXFxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB9OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcChyZXQsICdfX2lzUHJvbWlzaWZpZWRfXycsIHRydWUpOyAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICByZXR1cm4gcmV0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgIFwiLnJlcGxhY2UoXCJbQ29kZUZvclN3aXRjaENhc2VdXCIsIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkpXG4gICAgICAgIC5yZXBsYWNlKFwiW0dldEZ1bmN0aW9uQ29kZV1cIiwgZ2V0RnVuY3Rpb25Db2RlKTtcbiAgICBib2R5ID0gYm9keS5yZXBsYWNlKFwiUGFyYW1ldGVyc1wiLCBwYXJhbWV0ZXJEZWNsYXJhdGlvbihuZXdQYXJhbWV0ZXJDb3VudCkpO1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJQcm9taXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlY2VpdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpdGhBcHBlbmRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXliZVdyYXBBc0Vycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vZGViYWNrRm9yUHJvbWlzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cnlDYXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvck9ialwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub3RFbnVtZXJhYmxlUHJvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJTlRFUk5BTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSkoXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIGZuLFxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlcixcbiAgICAgICAgICAgICAgICAgICAgd2l0aEFwcGVuZGVkLFxuICAgICAgICAgICAgICAgICAgICBtYXliZVdyYXBBc0Vycm9yLFxuICAgICAgICAgICAgICAgICAgICBub2RlYmFja0ZvclByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgIHV0aWwudHJ5Q2F0Y2gsXG4gICAgICAgICAgICAgICAgICAgIHV0aWwuZXJyb3JPYmosXG4gICAgICAgICAgICAgICAgICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AsXG4gICAgICAgICAgICAgICAgICAgIElOVEVSTkFMKTtcbn07XG59XG5cbmZ1bmN0aW9uIG1ha2VOb2RlUHJvbWlzaWZpZWRDbG9zdXJlKGNhbGxiYWNrLCByZWNlaXZlciwgXywgZm4sIF9fLCBtdWx0aUFyZ3MpIHtcbiAgICB2YXIgZGVmYXVsdFRoaXMgPSAoZnVuY3Rpb24oKSB7cmV0dXJuIHRoaXM7fSkoKTtcbiAgICB2YXIgbWV0aG9kID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBtZXRob2QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBmbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJvbWlzaWZpZWQoKSB7XG4gICAgICAgIHZhciBfcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHJlY2VpdmVyID09PSBUSElTKSBfcmVjZWl2ZXIgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICAgICAgdmFyIGNiID0gdHlwZW9mIG1ldGhvZCA9PT0gXCJzdHJpbmdcIiAmJiB0aGlzICE9PSBkZWZhdWx0VGhpc1xuICAgICAgICAgICAgPyB0aGlzW21ldGhvZF0gOiBjYWxsYmFjaztcbiAgICAgICAgdmFyIGZuID0gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UsIG11bHRpQXJncyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYi5hcHBseShfcmVjZWl2ZXIsIHdpdGhBcHBlbmRlZChhcmd1bWVudHMsIGZuKSk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2sobWF5YmVXcmFwQXNFcnJvcihlKSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm9taXNlLl9pc0ZhdGVTZWFsZWQoKSkgcHJvbWlzZS5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKHByb21pc2lmaWVkLCBcIl9faXNQcm9taXNpZmllZF9fXCIsIHRydWUpO1xuICAgIHJldHVybiBwcm9taXNpZmllZDtcbn1cblxudmFyIG1ha2VOb2RlUHJvbWlzaWZpZWQgPSBjYW5FdmFsdWF0ZVxuICAgID8gbWFrZU5vZGVQcm9taXNpZmllZEV2YWxcbiAgICA6IG1ha2VOb2RlUHJvbWlzaWZpZWRDbG9zdXJlO1xuXG5mdW5jdGlvbiBwcm9taXNpZnlBbGwob2JqLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIsIG11bHRpQXJncykge1xuICAgIHZhciBzdWZmaXhSZWdleHAgPSBuZXcgUmVnRXhwKGVzY2FwZUlkZW50UmVnZXgoc3VmZml4KSArIFwiJFwiKTtcbiAgICB2YXIgbWV0aG9kcyA9XG4gICAgICAgIHByb21pc2lmaWFibGVNZXRob2RzKG9iaiwgc3VmZml4LCBzdWZmaXhSZWdleHAsIGZpbHRlcik7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRob2RzW2ldO1xuICAgICAgICB2YXIgZm4gPSBtZXRob2RzW2krMV07XG4gICAgICAgIHZhciBwcm9taXNpZmllZEtleSA9IGtleSArIHN1ZmZpeDtcbiAgICAgICAgaWYgKHByb21pc2lmaWVyID09PSBtYWtlTm9kZVByb21pc2lmaWVkKSB7XG4gICAgICAgICAgICBvYmpbcHJvbWlzaWZpZWRLZXldID1cbiAgICAgICAgICAgICAgICBtYWtlTm9kZVByb21pc2lmaWVkKGtleSwgVEhJUywga2V5LCBmbiwgc3VmZml4LCBtdWx0aUFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByb21pc2lmaWVkID0gcHJvbWlzaWZpZXIoZm4sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlTm9kZVByb21pc2lmaWVkKGtleSwgVEhJUywga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuLCBzdWZmaXgsIG11bHRpQXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AocHJvbWlzaWZpZWQsIFwiX19pc1Byb21pc2lmaWVkX19cIiwgdHJ1ZSk7XG4gICAgICAgICAgICBvYmpbcHJvbWlzaWZpZWRLZXldID0gcHJvbWlzaWZpZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXRpbC50b0Zhc3RQcm9wZXJ0aWVzKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gcHJvbWlzaWZ5KGNhbGxiYWNrLCByZWNlaXZlciwgbXVsdGlBcmdzKSB7XG4gICAgcmV0dXJuIG1ha2VOb2RlUHJvbWlzaWZpZWQoY2FsbGJhY2ssIHJlY2VpdmVyLCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLCBudWxsLCBtdWx0aUFyZ3MpO1xufVxuXG5Qcm9taXNlLnByb21pc2lmeSA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzaWZpZWQoZm4pKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9XG4gICAgb3B0aW9ucyA9IE9iamVjdChvcHRpb25zKTtcbiAgICB2YXIgcmVjZWl2ZXIgPSBvcHRpb25zLmNvbnRleHQgPT09IHVuZGVmaW5lZCA/IFRISVMgOiBvcHRpb25zLmNvbnRleHQ7XG4gICAgdmFyIG11bHRpQXJncyA9ICEhb3B0aW9ucy5tdWx0aUFyZ3M7XG4gICAgdmFyIHJldCA9IHByb21pc2lmeShmbiwgcmVjZWl2ZXIsIG11bHRpQXJncyk7XG4gICAgdXRpbC5jb3B5RGVzY3JpcHRvcnMoZm4sIHJldCwgcHJvcHNGaWx0ZXIpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb21pc2lmeUFsbCA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSB0YXJnZXQgb2YgcHJvbWlzaWZ5QWxsIG11c3QgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICBvcHRpb25zID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgIHZhciBtdWx0aUFyZ3MgPSAhIW9wdGlvbnMubXVsdGlBcmdzO1xuICAgIHZhciBzdWZmaXggPSBvcHRpb25zLnN1ZmZpeDtcbiAgICBpZiAodHlwZW9mIHN1ZmZpeCAhPT0gXCJzdHJpbmdcIikgc3VmZml4ID0gZGVmYXVsdFN1ZmZpeDtcbiAgICB2YXIgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgIT09IFwiZnVuY3Rpb25cIikgZmlsdGVyID0gZGVmYXVsdEZpbHRlcjtcbiAgICB2YXIgcHJvbWlzaWZpZXIgPSBvcHRpb25zLnByb21pc2lmaWVyO1xuICAgIGlmICh0eXBlb2YgcHJvbWlzaWZpZXIgIT09IFwiZnVuY3Rpb25cIikgcHJvbWlzaWZpZXIgPSBtYWtlTm9kZVByb21pc2lmaWVkO1xuXG4gICAgaWYgKCF1dGlsLmlzSWRlbnRpZmllcihzdWZmaXgpKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwic3VmZml4IG11c3QgYmUgYSB2YWxpZCBpZGVudGlmaWVyXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IHV0aWwuaW5oZXJpdGVkRGF0YUtleXModGFyZ2V0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleXNbaV1dO1xuICAgICAgICBpZiAoa2V5c1tpXSAhPT0gXCJjb25zdHJ1Y3RvclwiICYmXG4gICAgICAgICAgICB1dGlsLmlzQ2xhc3ModmFsdWUpKSB7XG4gICAgICAgICAgICBwcm9taXNpZnlBbGwodmFsdWUucHJvdG90eXBlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIsXG4gICAgICAgICAgICAgICAgbXVsdGlBcmdzKTtcbiAgICAgICAgICAgIHByb21pc2lmeUFsbCh2YWx1ZSwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyLCBtdWx0aUFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2lmeUFsbCh0YXJnZXQsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllciwgbXVsdGlBcmdzKTtcbn07XG59O1xuXG5cbn0se1wiLi9lcnJvcnNcIjoxMixcIi4vbm9kZWJhY2tcIjoyMCxcIi4vdXRpbFwiOjM2fV0sMjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFxuICAgIFByb21pc2UsIFByb21pc2VBcnJheSwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgaXNPYmplY3QgPSB1dGlsLmlzT2JqZWN0O1xudmFyIGVzNSA9IF9kZXJlcV8oXCIuL2VzNVwiKTtcbnZhciBFczZNYXA7XG5pZiAodHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiKSBFczZNYXAgPSBNYXA7XG5cbnZhciBtYXBUb0VudHJpZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgc2l6ZSA9IDA7XG5cbiAgICBmdW5jdGlvbiBleHRyYWN0RW50cnkodmFsdWUsIGtleSkge1xuICAgICAgICB0aGlzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICB0aGlzW2luZGV4ICsgc2l6ZV0gPSBrZXk7XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1hcFRvRW50cmllcyhtYXApIHtcbiAgICAgICAgc2l6ZSA9IG1hcC5zaXplO1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIHZhciByZXQgPSBuZXcgQXJyYXkobWFwLnNpemUgKiAyKTtcbiAgICAgICAgbWFwLmZvckVhY2goZXh0cmFjdEVudHJ5LCByZXQpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59KSgpO1xuXG52YXIgZW50cmllc1RvTWFwID0gZnVuY3Rpb24oZW50cmllcykge1xuICAgIHZhciByZXQgPSBuZXcgRXM2TWFwKCk7XG4gICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoIC8gMiB8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gZW50cmllc1tsZW5ndGggKyBpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gZW50cmllc1tpXTtcbiAgICAgICAgcmV0LnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkob2JqKSB7XG4gICAgdmFyIGlzTWFwID0gZmFsc2U7XG4gICAgdmFyIGVudHJpZXM7XG4gICAgaWYgKEVzNk1hcCAhPT0gdW5kZWZpbmVkICYmIG9iaiBpbnN0YW5jZW9mIEVzNk1hcCkge1xuICAgICAgICBlbnRyaWVzID0gbWFwVG9FbnRyaWVzKG9iaik7XG4gICAgICAgIGlzTWFwID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIga2V5cyA9IGVzNS5rZXlzKG9iaik7XG4gICAgICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZW50cmllcyA9IG5ldyBBcnJheShsZW4gKiAyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBlbnRyaWVzW2ldID0gb2JqW2tleV07XG4gICAgICAgICAgICBlbnRyaWVzW2kgKyBsZW5dID0ga2V5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29uc3RydWN0b3IkKGVudHJpZXMpO1xuICAgIHRoaXMuX2lzTWFwID0gaXNNYXA7XG4gICAgdGhpcy5faW5pdCQodW5kZWZpbmVkLCBpc01hcCA/IC02IDogLTMpO1xufVxudXRpbC5pbmhlcml0cyhQcm9wZXJ0aWVzUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgIHZhciB2YWw7XG4gICAgICAgIGlmICh0aGlzLl9pc01hcCkge1xuICAgICAgICAgICAgdmFsID0gZW50cmllc1RvTWFwKHRoaXMuX3ZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWwgPSB7fTtcbiAgICAgICAgICAgIHZhciBrZXlPZmZzZXQgPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGVuZ3RoKCk7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIHZhbFt0aGlzLl92YWx1ZXNbaSArIGtleU9mZnNldF1dID0gdGhpcy5fdmFsdWVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodmFsKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLnNob3VsZENvcHlWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID0gZnVuY3Rpb24gKGxlbikge1xuICAgIHJldHVybiBsZW4gPj4gMTtcbn07XG5cbmZ1bmN0aW9uIHByb3BzKHByb21pc2VzKSB7XG4gICAgdmFyIHJldDtcbiAgICB2YXIgY2FzdFZhbHVlID0gdHJ5Q29udmVydFRvUHJvbWlzZShwcm9taXNlcyk7XG5cbiAgICBpZiAoIWlzT2JqZWN0KGNhc3RWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImNhbm5vdCBhd2FpdCBwcm9wZXJ0aWVzIG9mIGEgbm9uLW9iamVjdFxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfSBlbHNlIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldCA9IGNhc3RWYWx1ZS5fdGhlbihcbiAgICAgICAgICAgIFByb21pc2UucHJvcHMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gbmV3IFByb3BlcnRpZXNQcm9taXNlQXJyYXkoY2FzdFZhbHVlKS5wcm9taXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGNhc3RWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0Ll9wcm9wYWdhdGVGcm9tKGNhc3RWYWx1ZSwgMik7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cblByb21pc2UucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9wcyh0aGlzKTtcbn07XG5cblByb21pc2UucHJvcHMgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gcHJvcHMocHJvbWlzZXMpO1xufTtcbn07XG5cbn0se1wiLi9lczVcIjoxMyxcIi4vdXRpbFwiOjM2fV0sMjY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBhcnJheU1vdmUoc3JjLCBzcmNJbmRleCwgZHN0LCBkc3RJbmRleCwgbGVuKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZW47ICsraikge1xuICAgICAgICBkc3RbaiArIGRzdEluZGV4XSA9IHNyY1tqICsgc3JjSW5kZXhdO1xuICAgICAgICBzcmNbaiArIHNyY0luZGV4XSA9IHZvaWQgMDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFF1ZXVlKGNhcGFjaXR5KSB7XG4gICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX2Zyb250ID0gMDtcbn1cblxuUXVldWUucHJvdG90eXBlLl93aWxsQmVPdmVyQ2FwYWNpdHkgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHJldHVybiB0aGlzLl9jYXBhY2l0eSA8IHNpemU7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX3B1c2hPbmUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGggKyAxKTtcbiAgICB2YXIgaSA9ICh0aGlzLl9mcm9udCArIGxlbmd0aCkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzW2ldID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aCArIDE7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpICsgMztcbiAgICBpZiAodGhpcy5fd2lsbEJlT3ZlckNhcGFjaXR5KGxlbmd0aCkpIHtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShmbik7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUocmVjZWl2ZXIpO1xuICAgICAgICB0aGlzLl9wdXNoT25lKGFyZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGogPSB0aGlzLl9mcm9udCArIGxlbmd0aCAtIDM7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGgpO1xuICAgIHZhciB3cmFwTWFzayA9IHRoaXMuX2NhcGFjaXR5IC0gMTtcbiAgICB0aGlzWyhqICsgMCkgJiB3cmFwTWFza10gPSBmbjtcbiAgICB0aGlzWyhqICsgMSkgJiB3cmFwTWFza10gPSByZWNlaXZlcjtcbiAgICB0aGlzWyhqICsgMikgJiB3cmFwTWFza10gPSBhcmc7XG4gICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250LFxuICAgICAgICByZXQgPSB0aGlzW2Zyb250XTtcblxuICAgIHRoaXNbZnJvbnRdID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Zyb250ID0gKGZyb250ICsgMSkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUXVldWUucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9jaGVja0NhcGFjaXR5ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICBpZiAodGhpcy5fY2FwYWNpdHkgPCBzaXplKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVRvKHRoaXMuX2NhcGFjaXR5IDw8IDEpO1xuICAgIH1cbn07XG5cblF1ZXVlLnByb3RvdHlwZS5fcmVzaXplVG8gPSBmdW5jdGlvbiAoY2FwYWNpdHkpIHtcbiAgICB2YXIgb2xkQ2FwYWNpdHkgPSB0aGlzLl9jYXBhY2l0eTtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250O1xuICAgIHZhciBsZW5ndGggPSB0aGlzLl9sZW5ndGg7XG4gICAgdmFyIG1vdmVJdGVtc0NvdW50ID0gKGZyb250ICsgbGVuZ3RoKSAmIChvbGRDYXBhY2l0eSAtIDEpO1xuICAgIGFycmF5TW92ZSh0aGlzLCAwLCB0aGlzLCBvbGRDYXBhY2l0eSwgbW92ZUl0ZW1zQ291bnQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxufSx7fV0sMjc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFxuICAgIFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcblxudmFyIHJhY2VMYXRlciA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihhcnJheSkge1xuICAgICAgICByZXR1cm4gcmFjZShhcnJheSwgcHJvbWlzZSk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiByYWNlKHByb21pc2VzLCBwYXJlbnQpIHtcbiAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShwcm9taXNlcyk7XG5cbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcmFjZUxhdGVyKG1heWJlUHJvbWlzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZXMgPSB1dGlsLmFzQXJyYXkocHJvbWlzZXMpO1xuICAgICAgICBpZiAocHJvbWlzZXMgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGFuIGFycmF5IG9yIGFuIGl0ZXJhYmxlIG9iamVjdCBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhwcm9taXNlcykpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbShwYXJlbnQsIDMpO1xuICAgIH1cbiAgICB2YXIgZnVsZmlsbCA9IHJldC5fZnVsZmlsbDtcbiAgICB2YXIgcmVqZWN0ID0gcmV0Ll9yZWplY3Q7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHByb21pc2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciB2YWwgPSBwcm9taXNlc1tpXTtcblxuICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQgJiYgIShpIGluIHByb21pc2VzKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmNhc3QodmFsKS5fdGhlbihmdWxmaWxsLCByZWplY3QsIHVuZGVmaW5lZCwgcmV0LCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIHJhY2UocHJvbWlzZXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByYWNlKHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2VBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpUmVqZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBJTlRFUk5BTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpIHtcbnZhciBnZXREb21haW4gPSBQcm9taXNlLl9nZXREb21haW47XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xuXG5mdW5jdGlvbiBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQocHJvbWlzZXMpO1xuICAgIHZhciBkb21haW4gPSBnZXREb21haW4oKTtcbiAgICB0aGlzLl9mbiA9IGRvbWFpbiA9PT0gbnVsbCA/IGZuIDogdXRpbC5kb21haW5CaW5kKGRvbWFpbiwgZm4pO1xuICAgIGlmIChpbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbml0aWFsVmFsdWUgPSBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgaW5pdGlhbFZhbHVlLl9hdHRhY2hDYW5jZWxsYXRpb25DYWxsYmFjayh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5faW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgIHRoaXMuX2N1cnJlbnRDYW5jZWxsYWJsZSA9IG51bGw7XG4gICAgaWYoX2VhY2ggPT09IElOVEVSTkFMKSB7XG4gICAgICAgIHRoaXMuX2VhY2hWYWx1ZXMgPSBBcnJheSh0aGlzLl9sZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAoX2VhY2ggPT09IDApIHtcbiAgICAgICAgdGhpcy5fZWFjaFZhbHVlcyA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZWFjaFZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC01KTtcbn1cbnV0aWwuaW5oZXJpdHMoUmVkdWN0aW9uUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9nb3RBY2N1bSA9IGZ1bmN0aW9uKGFjY3VtKSB7XG4gICAgaWYgKHRoaXMuX2VhY2hWYWx1ZXMgIT09IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgdGhpcy5fZWFjaFZhbHVlcyAhPT0gbnVsbCAmJiBcbiAgICAgICAgYWNjdW0gIT09IElOVEVSTkFMKSB7XG4gICAgICAgIHRoaXMuX2VhY2hWYWx1ZXMucHVzaChhY2N1bSk7XG4gICAgfVxufTtcblxuUmVkdWN0aW9uUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZWFjaENvbXBsZXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5fZWFjaFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9lYWNoVmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZWFjaFZhbHVlcztcbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbigpIHt9O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlRW1wdHlBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fZWFjaFZhbHVlcyAhPT0gdW5kZWZpbmVkID8gdGhpcy5fZWFjaFZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5faW5pdGlhbFZhbHVlKTtcbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuc2hvdWxkQ29weVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLl9wcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlcyA9IG51bGw7XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXN1bHRDYW5jZWxsZWQgPSBmdW5jdGlvbihzZW5kZXIpIHtcbiAgICBpZiAoc2VuZGVyID09PSB0aGlzLl9pbml0aWFsVmFsdWUpIHJldHVybiB0aGlzLl9jYW5jZWwoKTtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fcmVzdWx0Q2FuY2VsbGVkJCgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50Q2FuY2VsbGFibGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDYW5jZWxsYWJsZS5jYW5jZWwoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luaXRpYWxWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbFZhbHVlLmNhbmNlbCgpO1xuICAgIH1cbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2l0ZXJhdGUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgaTtcbiAgICB2YXIgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcbiAgICBpZiAodGhpcy5faW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9pbml0aWFsVmFsdWU7XG4gICAgICAgIGkgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKHZhbHVlc1swXSk7XG4gICAgICAgIGkgPSAxO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRDYW5jZWxsYWJsZSA9IHZhbHVlO1xuXG4gICAgaWYgKCF2YWx1ZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGN0eCA9IHtcbiAgICAgICAgICAgICAgICBhY2N1bTogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgICAgICAgIGFycmF5OiB0aGlzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5fdGhlbihnb3RBY2N1bSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGN0eCwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lYWNoVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgLl90aGVuKHRoaXMuX2VhY2hDb21wbGV0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMsIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHZhbHVlLl90aGVuKGNvbXBsZXRlZCwgY29tcGxldGVkLCB1bmRlZmluZWQsIHZhbHVlLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIChmbiwgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh0aGlzLCBmbiwgaW5pdGlhbFZhbHVlLCBudWxsKTtcbn07XG5cblByb21pc2UucmVkdWNlID0gZnVuY3Rpb24gKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCkge1xuICAgIHJldHVybiByZWR1Y2UocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZCh2YWx1ZU9yUmVhc29uLCBhcnJheSkge1xuICAgIGlmICh0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgYXJyYXkuX3Jlc29sdmUodmFsdWVPclJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXkuX3JlamVjdCh2YWx1ZU9yUmVhc29uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgfVxuICAgIHZhciBhcnJheSA9IG5ldyBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKTtcbiAgICByZXR1cm4gYXJyYXkucHJvbWlzZSgpO1xufVxuXG5mdW5jdGlvbiBnb3RBY2N1bShhY2N1bSkge1xuICAgIHRoaXMuYWNjdW0gPSBhY2N1bTtcbiAgICB0aGlzLmFycmF5Ll9nb3RBY2N1bShhY2N1bSk7XG4gICAgdmFyIHZhbHVlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGlzLnZhbHVlLCB0aGlzLmFycmF5Ll9wcm9taXNlKTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuYXJyYXkuX2N1cnJlbnRDYW5jZWxsYWJsZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUuX3RoZW4oZ290VmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnb3RWYWx1ZS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdvdFZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICB2YXIgcHJvbWlzZSA9IGFycmF5Ll9wcm9taXNlO1xuICAgIHZhciBmbiA9IHRyeUNhdGNoKGFycmF5Ll9mbik7XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChhcnJheS5fZWFjaFZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IGZuLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpLCB2YWx1ZSwgdGhpcy5pbmRleCwgdGhpcy5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGZuLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2N1bSwgdmFsdWUsIHRoaXMuaW5kZXgsIHRoaXMubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgYXJyYXkuX2N1cnJlbnRDYW5jZWxsYWJsZSA9IHJldDtcbiAgICB9XG4gICAgdmFyIHByb21pc2VDcmVhdGVkID0gcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyhcbiAgICAgICAgcmV0LFxuICAgICAgICBwcm9taXNlQ3JlYXRlZCxcbiAgICAgICAgYXJyYXkuX2VhY2hWYWx1ZXMgIT09IHVuZGVmaW5lZCA/IFwiUHJvbWlzZS5lYWNoXCIgOiBcIlByb21pc2UucmVkdWNlXCIsXG4gICAgICAgIHByb21pc2VcbiAgICApO1xuICAgIHJldHVybiByZXQ7XG59XG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgc2NoZWR1bGU7XG52YXIgbm9Bc3luY1NjaGVkdWxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFzeW5jIHNjaGVkdWxlciBhdmFpbGFibGVcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xufTtcbnZhciBOYXRpdmVQcm9taXNlID0gdXRpbC5nZXROYXRpdmVQcm9taXNlKCk7XG5pZiAodXRpbC5pc05vZGUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgR2xvYmFsU2V0SW1tZWRpYXRlID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbiAgICB2YXIgUHJvY2Vzc05leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICBzY2hlZHVsZSA9IHV0aWwuaXNSZWNlbnROb2RlXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbihmbikgeyBHbG9iYWxTZXRJbW1lZGlhdGUuY2FsbChnbG9iYWwsIGZuKTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24oZm4pIHsgUHJvY2Vzc05leHRUaWNrLmNhbGwocHJvY2VzcywgZm4pOyB9O1xufSBlbHNlIGlmICh0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgIHR5cGVvZiBOYXRpdmVQcm9taXNlLnJlc29sdmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBuYXRpdmVQcm9taXNlID0gTmF0aXZlUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbihmbikge1xuICAgICAgICBuYXRpdmVQcm9taXNlLnRoZW4oZm4pO1xuICAgIH07XG59IGVsc2UgaWYgKCh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIikgJiZcbiAgICAgICAgICAhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IgJiZcbiAgICAgICAgICAgICh3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmUgfHwgd2luZG93LmNvcmRvdmEpKSkge1xuICAgIHNjaGVkdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9wdHMgPSB7YXR0cmlidXRlczogdHJ1ZX07XG4gICAgICAgIHZhciB0b2dnbGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbzIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpO1xuICAgICAgICAgICAgdG9nZ2xlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBvMi5vYnNlcnZlKGRpdjIsIG9wdHMpO1xuXG4gICAgICAgIHZhciBzY2hlZHVsZVRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRvZ2dsZVNjaGVkdWxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdG9nZ2xlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpdjIuY2xhc3NMaXN0LnRvZ2dsZShcImZvb1wiKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc2NoZWR1bGUoZm4pIHtcbiAgICAgICAgICAgIHZhciBvID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgby5vYnNlcnZlKGRpdiwgb3B0cyk7XG4gICAgICAgICAgICBzY2hlZHVsZVRvZ2dsZSgpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBzY2hlZHVsZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH07XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgc2NoZWR1bGUgPSBub0FzeW5jU2NoZWR1bGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBzY2hlZHVsZTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDMwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuICAgIGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgZGVidWcpIHtcbnZhciBQcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb247XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIFNldHRsZWRQcm9taXNlQXJyYXkodmFsdWVzKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQodmFsdWVzKTtcbn1cbnV0aWwuaW5oZXJpdHMoU2V0dGxlZFByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZXNvbHZlZCA9IGZ1bmN0aW9uIChpbmRleCwgaW5zcGVjdGlvbikge1xuICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSBpbnNwZWN0aW9uO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5TZXR0bGVkUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgcmV0Ll9iaXRGaWVsZCA9IDMzNTU0NDMyO1xuICAgIHJldC5fc2V0dGxlZFZhbHVlRmllbGQgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZVJlc29sdmVkKGluZGV4LCByZXQpO1xufTtcblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVqZWN0ZWQgPSBmdW5jdGlvbiAocmVhc29uLCBpbmRleCkge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZUluc3BlY3Rpb24oKTtcbiAgICByZXQuX2JpdEZpZWxkID0gMTY3NzcyMTY7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWVGaWVsZCA9IHJlYXNvbjtcbiAgICByZXR1cm4gdGhpcy5fcHJvbWlzZVJlc29sdmVkKGluZGV4LCByZXQpO1xufTtcblxuUHJvbWlzZS5zZXR0bGUgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICBkZWJ1Zy5kZXByZWNhdGVkKFwiLnNldHRsZSgpXCIsIFwiLnJlZmxlY3QoKVwiKTtcbiAgICByZXR1cm4gbmV3IFNldHRsZWRQcm9taXNlQXJyYXkocHJvbWlzZXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNldHRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5zZXR0bGUodGhpcyk7XG59O1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDMxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24pIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBSYW5nZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLlJhbmdlRXJyb3I7XG52YXIgQWdncmVnYXRlRXJyb3IgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIikuQWdncmVnYXRlRXJyb3I7XG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcbnZhciBDQU5DRUxMQVRJT04gPSB7fTtcblxuXG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG4gICAgdGhpcy5faG93TWFueSA9IDA7XG4gICAgdGhpcy5fdW53cmFwID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcbn1cbnV0aWwuaW5oZXJpdHMoU29tZVByb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9ob3dNYW55ID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUoW10pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2luaXQkKHVuZGVmaW5lZCwgLTUpO1xuICAgIHZhciBpc0FycmF5UmVzb2x2ZWQgPSBpc0FycmF5KHRoaXMuX3ZhbHVlcyk7XG4gICAgaWYgKCF0aGlzLl9pc1Jlc29sdmVkKCkgJiZcbiAgICAgICAgaXNBcnJheVJlc29sdmVkICYmXG4gICAgICAgIHRoaXMuX2hvd01hbnkgPiB0aGlzLl9jYW5Qb3NzaWJseUZ1bGZpbGwoKSkge1xuICAgICAgICB0aGlzLl9yZWplY3QodGhpcy5fZ2V0UmFuZ2VFcnJvcih0aGlzLmxlbmd0aCgpKSk7XG4gICAgfVxufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5faW5pdCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuc2V0VW53cmFwID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3Vud3JhcCA9IHRydWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5ob3dNYW55ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9ob3dNYW55O1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuc2V0SG93TWFueSA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgIHRoaXMuX2hvd01hbnkgPSBjb3VudDtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5fYWRkRnVsZmlsbGVkKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZnVsZmlsbGVkKCkgPT09IHRoaXMuaG93TWFueSgpKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSB0aGlzLmhvd01hbnkoKTtcbiAgICAgICAgaWYgKHRoaXMuaG93TWFueSgpID09PSAxICYmIHRoaXMuX3Vud3JhcCkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG5cbn07XG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRoaXMuX2FkZFJlamVjdGVkKHJlYXNvbik7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrT3V0Y29tZSgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VDYW5jZWxsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlcyBpbnN0YW5jZW9mIFByb21pc2UgfHwgdGhpcy5fdmFsdWVzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbmNlbCgpO1xuICAgIH1cbiAgICB0aGlzLl9hZGRSZWplY3RlZChDQU5DRUxMQVRJT04pO1xuICAgIHJldHVybiB0aGlzLl9jaGVja091dGNvbWUoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9jaGVja091dGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5ob3dNYW55KCkgPiB0aGlzLl9jYW5Qb3NzaWJseUZ1bGZpbGwoKSkge1xuICAgICAgICB2YXIgZSA9IG5ldyBBZ2dyZWdhdGVFcnJvcigpO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sZW5ndGgoKTsgaSA8IHRoaXMuX3ZhbHVlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlc1tpXSAhPT0gQ0FOQ0VMTEFUSU9OKSB7XG4gICAgICAgICAgICAgICAgZS5wdXNoKHRoaXMuX3ZhbHVlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0KGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9mdWxmaWxsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUmVzb2x2ZWQ7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVqZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5sZW5ndGggLSB0aGlzLmxlbmd0aCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZFJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHJlYXNvbik7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fYWRkRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzW3RoaXMuX3RvdGFsUmVzb2x2ZWQrK10gPSB2YWx1ZTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9jYW5Qb3NzaWJseUZ1bGZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoKCkgLSB0aGlzLl9yZWplY3RlZCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2dldFJhbmdlRXJyb3IgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICB2YXIgbWVzc2FnZSA9IFwiSW5wdXQgYXJyYXkgbXVzdCBjb250YWluIGF0IGxlYXN0IFwiICtcbiAgICAgICAgICAgIHRoaXMuX2hvd01hbnkgKyBcIiBpdGVtcyBidXQgY29udGFpbnMgb25seSBcIiArIGNvdW50ICsgXCIgaXRlbXNcIjtcbiAgICByZXR1cm4gbmV3IFJhbmdlRXJyb3IobWVzc2FnZSk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVzb2x2ZUVtcHR5QXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcmVqZWN0KHRoaXMuX2dldFJhbmdlRXJyb3IoMCkpO1xufTtcblxuZnVuY3Rpb24gc29tZShwcm9taXNlcywgaG93TWFueSkge1xuICAgIGlmICgoaG93TWFueSB8IDApICE9PSBob3dNYW55IHx8IGhvd01hbnkgPCAwKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBwb3NpdGl2ZSBpbnRlZ2VyXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgcmV0LnNldEhvd01hbnkoaG93TWFueSk7XG4gICAgcmV0LmluaXQoKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuUHJvbWlzZS5zb21lID0gZnVuY3Rpb24gKHByb21pc2VzLCBob3dNYW55KSB7XG4gICAgcmV0dXJuIHNvbWUocHJvbWlzZXMsIGhvd01hbnkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuc29tZSA9IGZ1bmN0aW9uIChob3dNYW55KSB7XG4gICAgcmV0dXJuIHNvbWUodGhpcywgaG93TWFueSk7XG59O1xuXG5Qcm9taXNlLl9Tb21lUHJvbWlzZUFycmF5ID0gU29tZVByb21pc2VBcnJheTtcbn07XG5cbn0se1wiLi9lcnJvcnNcIjoxMixcIi4vdXRpbFwiOjM2fV0sMzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbmZ1bmN0aW9uIFByb21pc2VJbnNwZWN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAocHJvbWlzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLl90YXJnZXQoKTtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSBwcm9taXNlLl9iaXRGaWVsZDtcbiAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlRmllbGQgPSBwcm9taXNlLl9pc0ZhdGVTZWFsZWQoKVxuICAgICAgICAgICAgPyBwcm9taXNlLl9zZXR0bGVkVmFsdWUoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gMDtcbiAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlRmllbGQgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuX3NldHRsZWRWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWVGaWVsZDtcbn07XG5cbnZhciB2YWx1ZSA9IFByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2Fubm90IGdldCBmdWxmaWxsbWVudCB2YWx1ZSBvZiBhIG5vbi1mdWxmaWxsZWQgcHJvbWlzZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWUoKTtcbn07XG5cbnZhciByZWFzb24gPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuZXJyb3IgPVxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLnJlYXNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYW5ub3QgZ2V0IHJlamVjdGlvbiByZWFzb24gb2YgYSBub24tcmVqZWN0ZWQgcHJvbWlzZVxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWUoKTtcbn07XG5cbnZhciBpc0Z1bGZpbGxlZCA9IFByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc0Z1bGZpbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDA7XG59O1xuXG52YXIgaXNSZWplY3RlZCA9IFByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1JlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDA7XG59O1xuXG52YXIgaXNQZW5kaW5nID0gUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUGVuZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNTAzOTcxODQpID09PSAwO1xufTtcblxudmFyIGlzUmVzb2x2ZWQgPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNSZXNvbHZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNTAzMzE2NDgpICE9PSAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzQ2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDg0NTQxNDQpICE9PSAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX19pc0NhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA2NTUzNikgPT09IDY1NTM2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzQ2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldCgpLl9faXNDYW5jZWxsZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzQ2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLl90YXJnZXQoKS5fYml0RmllbGQgJiA4NDU0MTQ0KSAhPT0gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzUGVuZGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpc1BlbmRpbmcuY2FsbCh0aGlzLl90YXJnZXQoKSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1JlamVjdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGlzUmVqZWN0ZWQuY2FsbCh0aGlzLl90YXJnZXQoKSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5pc0Z1bGZpbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpc0Z1bGZpbGxlZC5jYWxsKHRoaXMuX3RhcmdldCgpKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzUmVzb2x2ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaXNSZXNvbHZlZC5jYWxsKHRoaXMuX3RhcmdldCgpKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcy5fdGFyZ2V0KCkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUucmVhc29uID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldCgpO1xuICAgIHRhcmdldC5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIHJldHVybiByZWFzb24uY2FsbCh0YXJnZXQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3ZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JlYXNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlKCk7XG59O1xuXG5Qcm9taXNlLlByb21pc2VJbnNwZWN0aW9uID0gUHJvbWlzZUluc3BlY3Rpb247XG59O1xuXG59LHt9XSwzMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgaXNPYmplY3QgPSB1dGlsLmlzT2JqZWN0O1xuXG5mdW5jdGlvbiB0cnlDb252ZXJ0VG9Qcm9taXNlKG9iaiwgY29udGV4dCkge1xuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gb2JqO1xuICAgICAgICB2YXIgdGhlbiA9IGdldFRoZW4ob2JqKTtcbiAgICAgICAgaWYgKHRoZW4gPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkgY29udGV4dC5fcHVzaENvbnRleHQoKTtcbiAgICAgICAgICAgIHZhciByZXQgPSBQcm9taXNlLnJlamVjdCh0aGVuLmUpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKGlzQW55Qmx1ZWJpcmRQcm9taXNlKG9iaikpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICAgICAgICAgIG9iai5fdGhlbihcbiAgICAgICAgICAgICAgICAgICAgcmV0Ll9mdWxmaWxsLFxuICAgICAgICAgICAgICAgICAgICByZXQuX3JlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICByZXQsXG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9UaGVuYWJsZShvYmosIHRoZW4sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGRvR2V0VGhlbihvYmopIHtcbiAgICByZXR1cm4gb2JqLnRoZW47XG59XG5cbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRvR2V0VGhlbihvYmopO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG59XG5cbnZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBpc0FueUJsdWViaXJkUHJvbWlzZShvYmopIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gaGFzUHJvcC5jYWxsKG9iaiwgXCJfcHJvbWlzZTBcIik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkb1RoZW5hYmxlKHgsIHRoZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICB2YXIgcmV0ID0gcHJvbWlzZTtcbiAgICBpZiAoY29udGV4dCkgY29udGV4dC5fcHVzaENvbnRleHQoKTtcbiAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIGlmIChjb250ZXh0KSBjb250ZXh0Ll9wb3BDb250ZXh0KCk7XG4gICAgdmFyIHN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICB2YXIgcmVzdWx0ID0gdXRpbC50cnlDYXRjaCh0aGVuKS5jYWxsKHgsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgc3luY2hyb25vdXMgPSBmYWxzZTtcblxuICAgIGlmIChwcm9taXNlICYmIHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2socmVzdWx0LmUsIHRydWUsIHRydWUpO1xuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIGlmICghcHJvbWlzZSkgcmV0dXJuO1xuICAgICAgICBwcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gICAgICAgIGlmICghcHJvbWlzZSkgcmV0dXJuO1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZWFzb24sIHN5bmNocm9ub3VzLCB0cnVlKTtcbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbnJldHVybiB0cnlDb252ZXJ0VG9Qcm9taXNlO1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDM0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgZGVidWcpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBQcm9taXNlLlRpbWVvdXRFcnJvcjtcblxuZnVuY3Rpb24gSGFuZGxlV3JhcHBlcihoYW5kbGUpICB7XG4gICAgdGhpcy5oYW5kbGUgPSBoYW5kbGU7XG59XG5cbkhhbmRsZVdyYXBwZXIucHJvdG90eXBlLl9yZXN1bHRDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oYW5kbGUpO1xufTtcblxudmFyIGFmdGVyVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gZGVsYXkoK3RoaXMpLnRoZW5SZXR1cm4odmFsdWUpOyB9O1xudmFyIGRlbGF5ID0gUHJvbWlzZS5kZWxheSA9IGZ1bmN0aW9uIChtcywgdmFsdWUpIHtcbiAgICB2YXIgcmV0O1xuICAgIHZhciBoYW5kbGU7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0ID0gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKVxuICAgICAgICAgICAgICAgIC5fdGhlbihhZnRlclZhbHVlLCBudWxsLCBudWxsLCBtcywgdW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKGRlYnVnLmNhbmNlbGxhdGlvbigpICYmIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0Ll9zZXRPbkNhbmNlbCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJldC5fZnVsZmlsbCgpOyB9LCArbXMpO1xuICAgICAgICBpZiAoZGVidWcuY2FuY2VsbGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldC5fc2V0T25DYW5jZWwobmV3IEhhbmRsZVdyYXBwZXIoaGFuZGxlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIH1cbiAgICByZXQuX3NldEFzeW5jR3VhcmFudGVlZCgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIChtcykge1xuICAgIHJldHVybiBkZWxheShtcywgdGhpcyk7XG59O1xuXG52YXIgYWZ0ZXJUaW1lb3V0ID0gZnVuY3Rpb24gKHByb21pc2UsIG1lc3NhZ2UsIHBhcmVudCkge1xuICAgIHZhciBlcnI7XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIGVyciA9IG1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgVGltZW91dEVycm9yKFwib3BlcmF0aW9uIHRpbWVkIG91dFwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVyciA9IG5ldyBUaW1lb3V0RXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHV0aWwubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGVycik7XG4gICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgIHByb21pc2UuX3JlamVjdChlcnIpO1xuXG4gICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudC5jYW5jZWwoKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBzdWNjZXNzQ2xlYXIodmFsdWUpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oYW5kbGUpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmFpbHVyZUNsZWFyKHJlYXNvbikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmhhbmRsZSk7XG4gICAgdGhyb3cgcmVhc29uO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKG1zLCBtZXNzYWdlKSB7XG4gICAgbXMgPSArbXM7XG4gICAgdmFyIHJldCwgcGFyZW50O1xuXG4gICAgdmFyIGhhbmRsZVdyYXBwZXIgPSBuZXcgSGFuZGxlV3JhcHBlcihzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXRUaW1lb3V0KCkge1xuICAgICAgICBpZiAocmV0LmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICBhZnRlclRpbWVvdXQocmV0LCBtZXNzYWdlLCBwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfSwgbXMpKTtcblxuICAgIGlmIChkZWJ1Zy5jYW5jZWxsYXRpb24oKSkge1xuICAgICAgICBwYXJlbnQgPSB0aGlzLnRoZW4oKTtcbiAgICAgICAgcmV0ID0gcGFyZW50Ll90aGVuKHN1Y2Nlc3NDbGVhciwgZmFpbHVyZUNsZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgaGFuZGxlV3JhcHBlciwgdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0Ll9zZXRPbkNhbmNlbChoYW5kbGVXcmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSB0aGlzLl90aGVuKHN1Y2Nlc3NDbGVhciwgZmFpbHVyZUNsZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgaGFuZGxlV3JhcHBlciwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufTtcblxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDM1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgIGNyZWF0ZUNvbnRleHQsIElOVEVSTkFMLCBkZWJ1Zykge1xuICAgIHZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbiAgICB2YXIgVHlwZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLlR5cGVFcnJvcjtcbiAgICB2YXIgaW5oZXJpdHMgPSBfZGVyZXFfKFwiLi91dGlsXCIpLmluaGVyaXRzO1xuICAgIHZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG4gICAgdmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbiAgICB2YXIgTlVMTCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gdGhyb3dlcihlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30sIDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhc3RQcmVzZXJ2aW5nRGlzcG9zYWJsZSh0aGVuYWJsZSkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGVuYWJsZSk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgIT09IHRoZW5hYmxlICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhlbmFibGUuX2lzRGlzcG9zYWJsZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhlbmFibGUuX2dldERpc3Bvc2VyID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgIHRoZW5hYmxlLl9pc0Rpc3Bvc2FibGUoKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9zZXREaXNwb3NhYmxlKHRoZW5hYmxlLl9nZXREaXNwb3NlcigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwb3NlKHJlc291cmNlcywgaW5zcGVjdGlvbikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW4gPSByZXNvdXJjZXMubGVuZ3RoO1xuICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICAgICAgICAgIGlmIChpID49IGxlbikgcmV0dXJuIHJldC5fZnVsZmlsbCgpO1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3RQcmVzZXJ2aW5nRGlzcG9zYWJsZShyZXNvdXJjZXNbaSsrXSk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9nZXREaXNwb3NlcigpLnRyeURpc3Bvc2UoaW5zcGVjdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXMucHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dlcihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fdGhlbihpdGVyYXRvciwgdGhyb3dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZXJhdG9yKCk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGlzcG9zZXIoZGF0YSwgcHJvbWlzZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIERpc3Bvc2VyLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucmVzb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb21pc2UoKS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlKCkudmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTlVMTDtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnRyeURpc3Bvc2UgPSBmdW5jdGlvbihpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2UoKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSBjb250ZXh0Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmV0ID0gcmVzb3VyY2UgIT09IE5VTExcbiAgICAgICAgICAgID8gdGhpcy5kb0Rpc3Bvc2UocmVzb3VyY2UsIGluc3BlY3Rpb24pIDogbnVsbDtcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgY29udGV4dC5fcG9wQ29udGV4dCgpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl91bnNldERpc3Bvc2FibGUoKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIERpc3Bvc2VyLmlzRGlzcG9zZXIgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gKGQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkLnJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZC50cnlEaXNwb3NlID09PSBcImZ1bmN0aW9uXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBGdW5jdGlvbkRpc3Bvc2VyKGZuLCBwcm9taXNlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkKGZuLCBwcm9taXNlLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaW5oZXJpdHMoRnVuY3Rpb25EaXNwb3NlciwgRGlzcG9zZXIpO1xuXG4gICAgRnVuY3Rpb25EaXNwb3Nlci5wcm90b3R5cGUuZG9EaXNwb3NlID0gZnVuY3Rpb24gKHJlc291cmNlLCBpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciBmbiA9IHRoaXMuZGF0YSgpO1xuICAgICAgICByZXR1cm4gZm4uY2FsbChyZXNvdXJjZSwgcmVzb3VyY2UsIGluc3BlY3Rpb24pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYXliZVVud3JhcERpc3Bvc2VyKHZhbHVlKSB7XG4gICAgICAgIGlmIChEaXNwb3Nlci5pc0Rpc3Bvc2VyKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5pbmRleF0uX3NldERpc3Bvc2FibGUodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnByb21pc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUmVzb3VyY2VMaXN0KGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpc1tsZW5ndGgtMV0gPSBudWxsO1xuICAgIH1cblxuICAgIFJlc291cmNlTGlzdC5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpc1tpXTtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2FuY2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJvbWlzZS51c2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPCAyKSByZXR1cm4gYXBpUmVqZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5b3UgbXVzdCBwYXNzIGF0IGxlYXN0IDIgYXJndW1lbnRzIHRvIFByb21pc2UudXNpbmdcIik7XG4gICAgICAgIHZhciBmbiA9IGFyZ3VtZW50c1tsZW4gLSAxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5wdXQ7XG4gICAgICAgIHZhciBzcHJlYWRBcmdzID0gdHJ1ZTtcbiAgICAgICAgaWYgKGxlbiA9PT0gMiAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgIGlucHV0ID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgbGVuID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICAgICAgc3ByZWFkQXJncyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5wdXQgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlTGlzdChsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBpbnB1dFtpXTtcbiAgICAgICAgICAgIGlmIChEaXNwb3Nlci5pc0Rpc3Bvc2VyKHJlc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXNwb3NlciA9IHJlc291cmNlO1xuICAgICAgICAgICAgICAgIHJlc291cmNlID0gcmVzb3VyY2UucHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLl9zZXREaXNwb3NhYmxlKGRpc3Bvc2VyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihtYXliZVVud3JhcERpc3Bvc2VyLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICAgICAgICAgICAgfSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZXNbaV0gPSByZXNvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWZsZWN0ZWRSZXNvdXJjZXMgPSBuZXcgQXJyYXkocmVzb3VyY2VzLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVmbGVjdGVkUmVzb3VyY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZWZsZWN0ZWRSZXNvdXJjZXNbaV0gPSBQcm9taXNlLnJlc29sdmUocmVzb3VyY2VzW2ldKS5yZWZsZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UuYWxsKHJlZmxlY3RlZFJlc291cmNlcylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGluc3BlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnNwZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IGluc3BlY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zcGVjdGlvbi5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqLmUgPSBpbnNwZWN0aW9uLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWluc3BlY3Rpb24uaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnNwZWN0aW9uc1tpXSA9IGluc3BlY3Rpb24udmFsdWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcblxuICAgICAgICAgICAgICAgIGZuID0gdHJ5Q2F0Y2goZm4pO1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBzcHJlYWRBcmdzXG4gICAgICAgICAgICAgICAgICAgID8gZm4uYXBwbHkodW5kZWZpbmVkLCBpbnNwZWN0aW9ucykgOiBmbihpbnNwZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2VDcmVhdGVkID0gcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyhcbiAgICAgICAgICAgICAgICAgICAgcmV0LCBwcm9taXNlQ3JlYXRlZCwgXCJQcm9taXNlLnVzaW5nXCIsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHJlc3VsdFByb21pc2UubGFzdGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGluc3BlY3Rpb24gPSBuZXcgUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbihyZXN1bHRQcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiBkaXNwb3NlKHJlc291cmNlcywgaW5zcGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvdXJjZXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHByb21pc2UuX3NldE9uQ2FuY2VsKHJlc291cmNlcyk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTMxMDcyO1xuICAgICAgICB0aGlzLl9kaXNwb3NlciA9IGRpc3Bvc2VyO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5faXNEaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTMxMDcyKSA+IDA7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3Bvc2VyO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fdW5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4xMzEwNzIpO1xuICAgICAgICB0aGlzLl9kaXNwb3NlciA9IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuZGlzcG9zZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uRGlzcG9zZXIoZm4sIHRoaXMsIGNyZWF0ZUNvbnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgIH07XG5cbn07XG5cbn0se1wiLi9lcnJvcnNcIjoxMixcIi4vdXRpbFwiOjM2fV0sMzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1XCIpO1xudmFyIGNhbkV2YWx1YXRlID0gdHlwZW9mIG5hdmlnYXRvciA9PSBcInVuZGVmaW5lZFwiO1xuXG52YXIgZXJyb3JPYmogPSB7ZToge319O1xudmFyIHRyeUNhdGNoVGFyZ2V0O1xudmFyIGdsb2JhbE9iamVjdCA9IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6XG4gICAgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6XG4gICAgdGhpcyAhPT0gdW5kZWZpbmVkID8gdGhpcyA6IG51bGw7XG5cbmZ1bmN0aW9uIHRyeUNhdGNoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRyeUNhdGNoVGFyZ2V0O1xuICAgICAgICB0cnlDYXRjaFRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJ5Q2F0Y2goZm4pIHtcbiAgICB0cnlDYXRjaFRhcmdldCA9IGZuO1xuICAgIHJldHVybiB0cnlDYXRjaGVyO1xufVxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbihDaGlsZCwgUGFyZW50KSB7XG4gICAgdmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgIGZ1bmN0aW9uIFQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZDtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciQgPSBQYXJlbnQ7XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBQYXJlbnQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKFBhcmVudC5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUuY2hhckF0KHByb3BlcnR5TmFtZS5sZW5ndGgtMSkgIT09IFwiJFwiXG4gICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lICsgXCIkXCJdID0gUGFyZW50LnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFQucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZTtcbiAgICBDaGlsZC5wcm90b3R5cGUgPSBuZXcgVCgpO1xuICAgIHJldHVybiBDaGlsZC5wcm90b3R5cGU7XG59O1xuXG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG5cbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBtYXliZVdyYXBBc0Vycm9yKG1heWJlRXJyb3IpIHtcbiAgICBpZiAoIWlzUHJpbWl0aXZlKG1heWJlRXJyb3IpKSByZXR1cm4gbWF5YmVFcnJvcjtcblxuICAgIHJldHVybiBuZXcgRXJyb3Ioc2FmZVRvU3RyaW5nKG1heWJlRXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gd2l0aEFwcGVuZGVkKHRhcmdldCwgYXBwZW5kZWUpIHtcbiAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbiArIDEpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICByZXRbaV0gPSB0YXJnZXRbaV07XG4gICAgfVxuICAgIHJldFtpXSA9IGFwcGVuZGVlO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdChvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKGVzNS5pc0VTNSkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXG4gICAgICAgIGlmIChkZXNjICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXNjLmdldCA9PSBudWxsICYmIGRlc2Muc2V0ID09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBkZXNjLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpID8gb2JqW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RFbnVtZXJhYmxlUHJvcChvYmosIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGlzUHJpbWl0aXZlKG9iaikpIHJldHVybiBvYmo7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9O1xuICAgIGVzNS5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHRocm93ZXIocikge1xuICAgIHRocm93IHI7XG59XG5cbnZhciBpbmhlcml0ZWREYXRhS2V5cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZXhjbHVkZWRQcm90b3R5cGVzID0gW1xuICAgICAgICBBcnJheS5wcm90b3R5cGUsXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZVxuICAgIF07XG5cbiAgICB2YXIgaXNFeGNsdWRlZFByb3RvID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhjbHVkZWRQcm90b3R5cGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWRQcm90b3R5cGVzW2ldID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGlmIChlczUuaXNFUzUpIHtcbiAgICAgICAgdmFyIGdldEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICAgICAgdmFyIHZpc2l0ZWRLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHdoaWxlIChvYmogIT0gbnVsbCAmJiAhaXNFeGNsdWRlZFByb3RvKG9iaikpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5cztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzID0gZ2V0S2V5cyhvYmopO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaXRlZEtleXNba2V5XSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYyAhPSBudWxsICYmIGRlc2MuZ2V0ID09IG51bGwgJiYgZGVzYy5zZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmogPSBlczUuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKGlzRXhjbHVkZWRQcm90byhvYmopKSByZXR1cm4gW107XG4gICAgICAgICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgICAgICAgIC8qanNoaW50IGZvcmluOmZhbHNlICovXG4gICAgICAgICAgICBlbnVtZXJhdGlvbjogZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGNsdWRlZFByb3RvdHlwZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wLmNhbGwoZXhjbHVkZWRQcm90b3R5cGVzW2ldLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgZW51bWVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH1cblxufSkoKTtcblxudmFyIHRoaXNBc3NpZ25tZW50UGF0dGVybiA9IC90aGlzXFxzKlxcLlxccypcXFMrXFxzKj0vO1xuZnVuY3Rpb24gaXNDbGFzcyhmbikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBlczUubmFtZXMoZm4ucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgdmFyIGhhc01ldGhvZHMgPSBlczUuaXNFUzUgJiYga2V5cy5sZW5ndGggPiAxO1xuICAgICAgICAgICAgdmFyIGhhc01ldGhvZHNPdGhlclRoYW5Db25zdHJ1Y3RvciA9IGtleXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICEoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gXCJjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgIHZhciBoYXNUaGlzQXNzaWdubWVudEFuZFN0YXRpY01ldGhvZHMgPVxuICAgICAgICAgICAgICAgIHRoaXNBc3NpZ25tZW50UGF0dGVybi50ZXN0KGZuICsgXCJcIikgJiYgZXM1Lm5hbWVzKGZuKS5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICBpZiAoaGFzTWV0aG9kcyB8fCBoYXNNZXRob2RzT3RoZXJUaGFuQ29uc3RydWN0b3IgfHxcbiAgICAgICAgICAgICAgICBoYXNUaGlzQXNzaWdubWVudEFuZFN0YXRpY01ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0Zhc3RQcm9wZXJ0aWVzKG9iaikge1xuICAgIC8qanNoaW50IC1XMDI3LC1XMDU1LC1XMDMxKi9cbiAgICBmdW5jdGlvbiBGYWtlQ29uc3RydWN0b3IoKSB7fVxuICAgIEZha2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBvYmo7XG4gICAgdmFyIGwgPSA4O1xuICAgIHdoaWxlIChsLS0pIG5ldyBGYWtlQ29uc3RydWN0b3IoKTtcbiAgICByZXR1cm4gb2JqO1xuICAgIGV2YWwob2JqKTtcbn1cblxudmFyIHJpZGVudCA9IC9eW2EteiRfXVthLXokXzAtOV0qJC9pO1xuZnVuY3Rpb24gaXNJZGVudGlmaWVyKHN0cikge1xuICAgIHJldHVybiByaWRlbnQudGVzdChzdHIpO1xufVxuXG5mdW5jdGlvbiBmaWxsZWRSYW5nZShjb3VudCwgcHJlZml4LCBzdWZmaXgpIHtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICByZXRbaV0gPSBwcmVmaXggKyBpICsgc3VmZml4O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBzYWZlVG9TdHJpbmcob2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG9iaiArIFwiXCI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gXCJbbm8gc3RyaW5nIHJlcHJlc2VudGF0aW9uXVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmXG4gICAgICAgICAgIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgdHlwZW9mIG9iai5tZXNzYWdlID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgIHR5cGVvZiBvYmoubmFtZSA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZnVuY3Rpb24gbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGUpIHtcbiAgICB0cnkge1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcChlLCBcImlzT3BlcmF0aW9uYWxcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGNhdGNoKGlnbm9yZSkge31cbn1cblxuZnVuY3Rpb24gb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24oZSkge1xuICAgIGlmIChlID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKChlIGluc3RhbmNlb2YgRXJyb3JbXCJfX0JsdWViaXJkRXJyb3JUeXBlc19fXCJdLk9wZXJhdGlvbmFsRXJyb3IpIHx8XG4gICAgICAgIGVbXCJpc09wZXJhdGlvbmFsXCJdID09PSB0cnVlKTtcbn1cblxuZnVuY3Rpb24gY2FuQXR0YWNoVHJhY2Uob2JqKSB7XG4gICAgcmV0dXJuIGlzRXJyb3Iob2JqKSAmJiBlczUucHJvcGVydHlJc1dyaXRhYmxlKG9iaiwgXCJzdGFja1wiKTtcbn1cblxudmFyIGVuc3VyZUVycm9yT2JqZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmICghKFwic3RhY2tcIiBpbiBuZXcgRXJyb3IoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY2FuQXR0YWNoVHJhY2UodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB0cnkge3Rocm93IG5ldyBFcnJvcihzYWZlVG9TdHJpbmcodmFsdWUpKTt9XG4gICAgICAgICAgICBjYXRjaChlcnIpIHtyZXR1cm4gZXJyO31cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjYW5BdHRhY2hUcmFjZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3Ioc2FmZVRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgfVxufSkoKTtcblxuZnVuY3Rpb24gY2xhc3NTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gY29weURlc2NyaXB0b3JzKGZyb20sIHRvLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IGVzNS5uYW1lcyhmcm9tKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIGlmIChmaWx0ZXIoa2V5KSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkodG8sIGtleSwgZXM1LmdldERlc2NyaXB0b3IoZnJvbSwga2V5KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBhc0FycmF5ID0gZnVuY3Rpb24odikge1xuICAgIGlmIChlczUuaXNBcnJheSh2KSkge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5pZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICB2YXIgQXJyYXlGcm9tID0gdHlwZW9mIEFycmF5LmZyb20gPT09IFwiZnVuY3Rpb25cIiA/IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odik7XG4gICAgfSA6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICB2YXIgaXQgPSB2W1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgdmFyIGl0UmVzdWx0O1xuICAgICAgICB3aGlsZSAoISgoaXRSZXN1bHQgPSBpdC5uZXh0KCkpLmRvbmUpKSB7XG4gICAgICAgICAgICByZXQucHVzaChpdFJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgYXNBcnJheSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgaWYgKGVzNS5pc0FycmF5KHYpKSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSBlbHNlIGlmICh2ICE9IG51bGwgJiYgdHlwZW9mIHZbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXlGcm9tKHYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG59XG5cbnZhciBpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICBjbGFzc1N0cmluZyhwcm9jZXNzKS50b0xvd2VyQ2FzZSgpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIjtcblxudmFyIGhhc0VudlZhcmlhYmxlcyA9IHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIHByb2Nlc3MuZW52ICE9PSBcInVuZGVmaW5lZFwiO1xuXG5mdW5jdGlvbiBlbnYoa2V5KSB7XG4gICAgcmV0dXJuIGhhc0VudlZhcmlhYmxlcyA/IHByb2Nlc3MuZW52W2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldE5hdGl2ZVByb21pc2UoKSB7XG4gICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oKXt9KTtcbiAgICAgICAgICAgIGlmICh7fS50b1N0cmluZy5jYWxsKHByb21pc2UpID09PSBcIltvYmplY3QgUHJvbWlzZV1cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9tYWluQmluZChzZWxmLCBjYikge1xuICAgIHJldHVybiBzZWxmLmJpbmQoY2IpO1xufVxuXG52YXIgcmV0ID0ge1xuICAgIGlzQ2xhc3M6IGlzQ2xhc3MsXG4gICAgaXNJZGVudGlmaWVyOiBpc0lkZW50aWZpZXIsXG4gICAgaW5oZXJpdGVkRGF0YUtleXM6IGluaGVyaXRlZERhdGFLZXlzLFxuICAgIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdDogZ2V0RGF0YVByb3BlcnR5T3JEZWZhdWx0LFxuICAgIHRocm93ZXI6IHRocm93ZXIsXG4gICAgaXNBcnJheTogZXM1LmlzQXJyYXksXG4gICAgYXNBcnJheTogYXNBcnJheSxcbiAgICBub3RFbnVtZXJhYmxlUHJvcDogbm90RW51bWVyYWJsZVByb3AsXG4gICAgaXNQcmltaXRpdmU6IGlzUHJpbWl0aXZlLFxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgICBpc0Vycm9yOiBpc0Vycm9yLFxuICAgIGNhbkV2YWx1YXRlOiBjYW5FdmFsdWF0ZSxcbiAgICBlcnJvck9iajogZXJyb3JPYmosXG4gICAgdHJ5Q2F0Y2g6IHRyeUNhdGNoLFxuICAgIGluaGVyaXRzOiBpbmhlcml0cyxcbiAgICB3aXRoQXBwZW5kZWQ6IHdpdGhBcHBlbmRlZCxcbiAgICBtYXliZVdyYXBBc0Vycm9yOiBtYXliZVdyYXBBc0Vycm9yLFxuICAgIHRvRmFzdFByb3BlcnRpZXM6IHRvRmFzdFByb3BlcnRpZXMsXG4gICAgZmlsbGVkUmFuZ2U6IGZpbGxlZFJhbmdlLFxuICAgIHRvU3RyaW5nOiBzYWZlVG9TdHJpbmcsXG4gICAgY2FuQXR0YWNoVHJhY2U6IGNhbkF0dGFjaFRyYWNlLFxuICAgIGVuc3VyZUVycm9yT2JqZWN0OiBlbnN1cmVFcnJvck9iamVjdCxcbiAgICBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbjogb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sXG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uOiBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24sXG4gICAgY2xhc3NTdHJpbmc6IGNsYXNzU3RyaW5nLFxuICAgIGNvcHlEZXNjcmlwdG9yczogY29weURlc2NyaXB0b3JzLFxuICAgIGhhc0RldlRvb2xzOiB0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZSAmJlxuICAgICAgICAgICAgICAgICB0eXBlb2YgY2hyb21lLmxvYWRUaW1lcyA9PT0gXCJmdW5jdGlvblwiLFxuICAgIGlzTm9kZTogaXNOb2RlLFxuICAgIGhhc0VudlZhcmlhYmxlczogaGFzRW52VmFyaWFibGVzLFxuICAgIGVudjogZW52LFxuICAgIGdsb2JhbDogZ2xvYmFsT2JqZWN0LFxuICAgIGdldE5hdGl2ZVByb21pc2U6IGdldE5hdGl2ZVByb21pc2UsXG4gICAgZG9tYWluQmluZDogZG9tYWluQmluZFxufTtcbnJldC5pc1JlY2VudE5vZGUgPSByZXQuaXNOb2RlICYmIChmdW5jdGlvbigpIHtcbiAgICB2YXIgdmVyc2lvbiA9IHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdChcIi5cIikubWFwKE51bWJlcik7XG4gICAgcmV0dXJuICh2ZXJzaW9uWzBdID09PSAwICYmIHZlcnNpb25bMV0gPiAxMCkgfHwgKHZlcnNpb25bMF0gPiAwKTtcbn0pKCk7XG5cbmlmIChyZXQuaXNOb2RlKSByZXQudG9GYXN0UHJvcGVydGllcyhwcm9jZXNzKTtcblxudHJ5IHt0aHJvdyBuZXcgRXJyb3IoKTsgfSBjYXRjaCAoZSkge3JldC5sYXN0TGluZUVycm9yID0gZTt9XG5tb2R1bGUuZXhwb3J0cyA9IHJldDtcblxufSx7XCIuL2VzNVwiOjEzfV19LHt9LFs0XSkoNClcbn0pOyAgICAgICAgICAgICAgICAgICAgO2lmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgIT09IG51bGwpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LlAgPSB3aW5kb3cuUHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgIT09IG51bGwpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuUCA9IHNlbGYuUHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdfQ==
