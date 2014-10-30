var quoteAppender = function(quotesData) { 
	for (var i = 0; i < quotesData.length; i++) {
		var $div = '.'+i 
		var quotestring = quotesData[i].quote.quote
		quotestring = quotestring.substring(0, 100) + " ...";
		$($div).append(quotestring);
			} 
		}

// var quoteRemover = function(quotesData) { 
// 	for (var i = 0; i < quotesData.length; i++) {
// 		var $div = '.'+i 
// 		$($div).hide();

// 			} 

// 		}

//AJAX stuff

var videoCall = function() {
	var talkID = quotesData[2].quote.talk_id;
	$.ajax({
		type: 'GET',
		url: 'https://api.ted.com/v1/talks/' + talkID + '.json?external=true&api-key=',
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
});



//make this a function and add in extra button//
$('.spin-button').on("click", function(e){
		var element = document.getElementById("ring");
	if (element.style.webkitAnimationPlayState === "paused") {
		quoteAppender(quotesData);
		e.preventDefault;
		$(element).css('webkitAnimationPlayState', "running");
		var $selected = quotesData[2].quote.quote;

//DISPLAYING FINAL QUOTE
		window.setTimeout(function() {
		// quoteRemover(quotesData);
		$(element).css('webkitTransformStyle', "flat");
		$(element).css('webkitAnimationPlayState', "paused");
		$('.ring').fadeOut(500);
		$('.selected_quote').append($selected);
		$('.selected_quote').show();
		$('.retry-button').show();
		$('.listen-button').show();
		$('.spin-button').hide();
	}, 3000);

	} else {
		$(element).css('webkitAnimationPlayState', "paused");
		}
		// $($element).classList.remove('ring');
		// $element.offsetWidth = $element.offsetWidth;
		// $($element).classList.add('ring');
	});
