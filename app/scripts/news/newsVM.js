"use strict";
var newsData = require("../data/news"),
	ko = require("knockout");

var newsVM = function() {
	var self = this;
	this.news = ko.observable();
    newsData().then(function(data) {
		self.news(data);
    });
};

module.exports = newsVM;