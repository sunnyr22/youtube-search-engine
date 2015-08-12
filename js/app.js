$(function() {

	$("#search-term").submit(function(e){
		e.preventDefault();
		searchTerm= ($("#query").val() );
		getRequest(searchTerm);

	})

});

function getRequest(searchTerm) {
	var params = {
		part: "snippet",
		key: "AIzaSyA0jENnzVXZwUzJAEIXBINbApwy8dSdwQc",
		q : searchTerm,
		maxResults: 25,
	};

	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url,params,function(data) {
		showResults(data.items)
		console.log(data);
	});
}

function showResults(results) {
	var html = "";
	$.each(results,function(index,value){
		console.log(index);
		html += '<li>';
		html += '<a href="http://youtube.com/watch?v=' +value.id.videoId + '">';
		html +='<img src="' + value.snippet.thumbnails.medium.url + '"" />';
	    html += '<h3>' + value.snippet.title + '</h3>';
		html += '</a></li>';
   	    console.log(value);


	});

	 $('#search-results').html(html);


}