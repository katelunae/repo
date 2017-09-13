/*jslint node:true, nomen: true */
"use strict";

var $ = require('jquery'), //require is used for node js to load modules
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
