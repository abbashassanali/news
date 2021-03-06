"use strict";
var httpClient = require("./httpClient"),
	cacheBust = Math.round(new Date().getTime() / 1000);

var newsApi = {
	getNewsByType : function(type) {
		return httpClient.get(apiCalls.showAll);
	}
};

var apiCalls = {
	showAll: "http://www.svd.se/search.do?q=&sort=date&output=json&start=0&rows=29",
	domestic: "",
	foreign: "",
	sport: "",
	economy: ""
};

module.exports = newsApi;