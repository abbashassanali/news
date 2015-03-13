'use strict';
var newsApi = require("../api/newsApi"),
	articles = [];

var getNews = function(){
	return newsApi.getNewsByType("showAll").then(function(data) {
		var rawArticles = JSON.parse(data).SvDSearch.results.articles;
		rawArticles.forEach(function(data){
			articles.push(createNewsModel(data));
		});
		return articles;
	});
};

function createNewsModel(newsData) {
	var newsModel = {
		title: newsData.title,
		section: newsData.section,
		description: newsData.description,
		friendlyDateShort: newsData.friendlyDateShort,
		mobileUrl: newsData.mobileUrl,
		imageUrl: newsData.imageUrl
	};
	return newsModel;
}

module.exports = getNews;