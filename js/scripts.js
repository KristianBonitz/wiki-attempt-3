$(document).ready(function($){
	$(".search").click(function() {
		var query = $(".searchForm").val();
		if(query !== ""){

			$.getJSON('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
			+ query + '&srlimit=100', function(json) {
				var html = "";

				for (var i = json.query.search .length - 1; i >= 0; i--) {
					html += json.query.search[i].title;
					html += "\n" + json.query.search[i].snippet
					html += "\n\n";
				};

				$(".debug").html(html);
			});
		}
	});
});