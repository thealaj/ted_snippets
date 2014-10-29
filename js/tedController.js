var spinAppender = function(quotesData) { 
	for (var i = 0; i < quotesData.length; i++) {
		var $div = '.'+i 
		var quotestring = quotesData[i].quote.quote
		$($div).append("<p>"+quotestring+"</p>");
			} 
		}


$(document).ready(function() { 
var randNumber = Math.floor(Math.random() * 2145);
	$.ajax({
		type: 'GET',
		url: 'https://api.ted.com/v1/quotes.json?api-key=&filter=id:' + randNumber +'..' + (randNumber + 5),
		dataType: "jsonp",
		error: function(a) {
			console.log('error', a.responseText);
		},
		success: function(data) {
			console.log('Got back success from call!');
			console.log(data);
			 quotesData = data.quotes;
		}
	}); 

	$('.spin-button').on("click", function(){
		spinAppender(quotesData);
	});
});
