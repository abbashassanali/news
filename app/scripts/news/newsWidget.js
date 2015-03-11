"use strict";

var newsWidget = {
	viewModel: require("./newsVM"),
	template: require('fs').readFileSync(__dirname + '/news.html')
};

module.exports = newsWidget;