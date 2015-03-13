"use strict";

var ko = require("knockout"),
	newsWidget = {
		viewModel: require("./newsVM"),
		template: require('fs').readFileSync(__dirname + '/news.html')
	};

ko.components.register('news-component', {
    viewModel: newsWidget.viewModel,
    template: newsWidget.template.toString()
});