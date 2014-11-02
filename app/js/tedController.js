
var quoteAppender = function(quotesData) { 
	for (var i = 0; i < quotesData.length; i++) {
		var $div = '.'+i; 
		var quotestring = quotesData[i].quote.quote;
		quotestring = quotestring.substring(0, 150) + " ...";
		$($div).append(quotestring);
			} 
		}

//TED API CALLS
//QUOTES CALL
var pullTedQuotes = function(resolve, reject) {
	if(resolve && reject) {

	}
	var randNumber = Math.floor(Math.random() * 2145);
	console.log("resolve",resolve,"err",reject);
	$.ajax({
		type: 'GET',
		url: 'https://api.ted.com/v1/quotes.json?api-key=&filter=id:' + randNumber +'..' + (randNumber + 5),
		dataType: "jsonp",
		error: function(a) {
			console.log('error', a.responseText);
			if(reject) {
				reject(a.responseText);
			}
		},
		success: function(data) {
			console.log('Got back success from call!');
			console.log(data);
			quotesData = data.quotes;
			if(resolve) {
				resolve(quotesData);
			}
			
		}
	}); 
};

//TED VIDEO CALL
var videoCall = function() {
	var talkID = quotesData[0].quote.talk_id;
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
			tedImage = data.talk.images[2].image.url;
			embedURL = data.talk.slug;
		}
	}); 
}


$(document).ready(function() { 
	pullTedQuotes();
});

//REFACTORED DISPLAY QUOTE
var displayQuote = function() {
	var element = document.getElementById("ring");
	var $selected = quotesData[0].quote.quote;
	window.setTimeout(function() {
		$(element).css('webkitAnimationPlayState', "paused");
		$('.selected_quote').append($selected);
		$('.selected_quote').show();
		$('.retry-button').show();
		$('.listen-button').show();
		$('.spin-button').hide();
		$('.ted-image').css({'background-image' : 'url(' + tedImage + ')', 'background-repeat': 'no-repeat'} );
	}, 3000);
}

//SPIN BUTTON ACTIONS//
$('.spin-button').on("click", function(e){
		var wheel = document.getElementById("ring");
		quoteAppender(quotesData);
		e.preventDefault;
		$(wheel).css('webkitAnimationPlayState', "running");
//fetching video image
		videoCall();		

//DISPLAYING FINAL QUOTE
		displayQuote();	 
	});

$('.retry-button').on("click", function(e){
		$('.selection').empty();
		$('.selection').fadeIn(500);
		$('.selected_quote').empty();
		$('.retry-button').hide();
		$('.listen-button').hide();
		$('.ted-image').css('background-image', '');
		//run request

	var promise = new Promise(function(resolve, reject){
			pullTedQuotes(resolve, reject); 
		// debugger;
		});


	promise.then(function(quotesData) {
 		var element = document.getElementById("ring");
		$(element).css('webkitAnimationPlayState', "running");
	 
		quoteAppender(quotesData);
		e.preventDefault;
		$(element).css('webkitAnimationPlayState', "running");

//fetching video image
		var $selected = quotesData[2].quote.quote;
		videoCall();		

//DISPLAYING NEW QUOTE
		setTimeout(function() {
		// quoteRemover(quotesData);
		$(element).css('webkitAnimationPlayState', "paused");
		$('.selection').fadeOut(500);
		$('.selected_quote').append($selected);
		$('.selected_quote').show();
		$('.retry-button').show();
		$('.listen-button').show();
		// $('.spin-button').hide();
		$('.ted-image').css({'background-image' : 'url(' + tedImage + ')', 'background-repeat': 'no-repeat'} );
	}, 3000);

		},function(err){
			console.log("Ohno!",err);
		});
	});


//LISTEN BUTTON function

$('.listen-button').on("click", function(e){
		// $('.selected_quote').empty();
		$('.selected_quote').show();
		$('.retry-button').show();
		$('.listen-button').hide();
		$('.spin-button').hide();
		var $videoURL = "http://embed-ssl.ted.com/talks/" + embedURL + ".html"
		var $video = $('<iframe src='+ $videoURL +' width="560" height="315" frameborder="0" scrolling="no" webkitAllowFullScreen allowFullScreen></iframe>');
 		$('.video_embed').append($video);
 		$('.video_embed').show();

	 
	});

