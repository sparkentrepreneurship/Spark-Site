$(document).ready(function() {

	$('.nav').localScroll({duration:500});
	$('.fixed-nav').localScroll({duration:500});

 	// starting_position = $('.splash-container').outerHeight(true) - 300;
 	starting_position = 70;
 	toggle = true;

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

});