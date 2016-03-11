$(document).ready(function($){
	$(".search").click(function() {
		var search-query = $(".search-form").text();
		if(search-query !== ""){

			$($.getJSON('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
			+ search-query + '&srlimit=100', function(json) {
				var html = "";

				for (var i = json.query.search .length - 1; i >= 0; i--) {
					json.query.search[i]
				};
			});)
		}
	});

	
});