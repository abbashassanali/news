"use strict";
var request = function(url, method, data) {
      // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open(method, url, true);

        req.onload = function() {
          // This is called even on 404 etc
          // so check the status
          if (req.status == 200) {
            // Resolve the promise with the response text
            resolve(req.response);
          }
          else {
            // Otherwise reject with the status text
            // which will hopefully be a meaningful error
            reject(new Error(req.statusText));
          }
        };

        // Handle network errors
        req.onerror = function() {
          reject(new Error("Network Error"));
        };

        // Make the request
        if (data){
            req.send(data);
        }
        else{
            req.send();
        }
    });
};

var httpClient = {
    post:function(url,data,contentType){
        return request(url,'POST',data);
    },
    put:function(url,data){
        return request(url,'PUT',data);
    },
    delete:function(url){
        return request(url,'DELETE');
    },
    get:function(url){
        return request(url,'GET');
    }
};

module.exports = httpClient;