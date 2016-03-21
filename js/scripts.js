$(document).ready(function($){
	$(".searchbutton").click(function() {
		var query = $(".searchForm").val();
		if(query !== ""){

			$.ajax({
				url: 'https://en.wikipedia.org/w/api.php?',
				type: 'GET',
				jsonp: 'callback',
				dataType: 'jsonp',
				data: {
					action: 'query',
					format: 'json',
					list: 'search',
					srsearch: query,
					srlimit: 100
				},
				xhrFields: {
					withCredentials: true
				}

			})
			.done(function(json) {
				console.log("success");

				var html = "";
				for (var i = 0; i < json.query.search .length; i++) {
					html += json.query.search[i].title;
					html += "<br>" + json.query.search[i].snippet
					html += "<br><br>";
				};

				$(".debug").html(html);
			})

			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		}
	});

	$(".article_1").click(function() {
  		window.location = $(this).data("https://en.wikipedia.org/wiki/Pizza");
});

});