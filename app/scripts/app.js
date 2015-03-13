'use strict';

var ko = require("knockout"),
	newsWidget = require("./news/newsComponent");
	window.ko = ko;

var viewModel = {
	menuBtnVal: ko.observable(false),
	toggleMenu: function() {
		this.menuBtnVal(!this.menuBtnVal());
	}
};

ko.applyBindings(viewModel);