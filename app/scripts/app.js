'use strict';

var ko = require("knockout"),
	newsWidget = require("./news/newsWidget");

ko.components.register('news-component', {
    viewModel: newsWidget.viewModel,
    template: newsWidget.template.toString()
});

ko.applyBindings();