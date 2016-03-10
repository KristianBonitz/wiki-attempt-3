$(document).ready(function($){
	$($.getJSON('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='
		+ search + '&srlimit=100', function(json) {
			/*optional stuff to do after success */
	});)
});