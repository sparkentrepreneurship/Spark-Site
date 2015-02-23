$(document).ready(function() {

	/*** init variables ***/
	// starting_position = $('.splash-container').outerHeight(true) - 300;
 	starting_position = 70;
 	toggle = true;

	/*** code for automatic scrolling ***/
	$('.nav').localScroll({duration:500});
	$('.fixed-nav').localScroll({duration:500});
	$('.splash-text').localScroll({duration:500});
	$('.conf-fixed-nav').localScroll({duration:500});
	$('.content').localScroll({duration:500});

 	/*** code for the flip down navigation bar ***/
	$(window).scroll(function() {
		var yPos = ( $(window).scrollTop() );
		if( yPos > starting_position && window.innerWidth > 500 ) { // show sticky menu after these many (starting_position) pixels have been scrolled down from the top and only when viewport width is greater than 500px.
			// $(".nav-container").fadeIn();
			if (toggle) {
				$(".fixed-nav-contents").animate({
					top: "0px",
				}, 300, function() {

				});
				toggle = false;
			}
			
		} else {
			// $(".nav-container").fadeOut();
			if (!toggle) {
				$(".fixed-nav-contents").animate({
					top: "-100px",
				}, 300, function() {

				});
				toggle = true;
			}
		}
	});

	/*** code for Facebook sdk ***/
	// Distillery event id: 720222351402468
	/*
	FB.api(
	    "/{720222351402468}",
	    function (response) {
	      	if (response && !response.error) {
	        	// handle the result 
	        	console.log("got a successful response");
	      	}
	    }
	);
	*/

	/******************************/
	/***						***/
	/***	conference page		***/
	/***						***/
	/******************************/

	// set the nav bar gradient to right position
	if ($(window).scrollTop() > ($(window).height()-$('.conf-fixed-nav-contents').height())) {
		$('.nav-bg').animate({
			top: -($(window).height()-$('.conf-fixed-nav-contents').height()),
		}, 1, function() {
		});
	}

	// Gradient effects for the navigation bar
	$(window).scroll(function() {
		var yPos = ( $(window).scrollTop() );
		if (yPos < ($(window).height()-$('.conf-fixed-nav-contents').height())) {
			$('.nav-bg').animate({
				top: -$(window).scrollTop(),
			}, 1, function() {
			});
		}
	});





});