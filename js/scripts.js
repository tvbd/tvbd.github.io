/*
|----------------------------------------------------------------------------
	Coming Soon Style 2 JS
	Author: Envalab
	Version: 1.0
|----------------------------------------------------------------------------
*/

jQuery(window).on('load', function(){

	// PRELOADER
	jQuery(".preloader-wrap").fadeOut(1000);


}); // end window load function

(function ($) {
	"use strict";

	/*
	|-----------------------------------------------------
	|	CONTROL Countdown box display
	|-----------------------------------------------------
	*/
	// Make 'false' to hide (top-bottom).
	var display_till_years		= false;
	var display_till_months 	= false;
	var display_till_days		= true;
	var display_till_hours		= true;
	var display_till_minutes	= true;
	var display_till_seconds	= true;

	// Hide Hour, Min, Sec boxes
	var hide_hr_min_sec			= 'no'; // make 'yes' to hide Hour, Min, Sec boxes

	/*
	|-----------------------------------------------------
	|	Countdown JS
	|-----------------------------------------------------
	*/
	var userDate = new Date($("#count-down-date").val()).getTime();
	function countDown(){

		var frontYears 		= $( '.years' );
		var frontMonths 	= $( '.months' );
		var frontDays 		= $( '.days' );
		var frontHours		= $( '.hours' );
		var frontminutes	= $( '.minutes' );
		var frontSeconds	= $( '.seconds' );
		var expiredText		= $( '.expired-text' );
		var countDownUl		= $( '.count-down-list' );

		var currentDate = new Date().getTime();
		var difference = userDate - currentDate;
		
		if(difference < 0){
			clearInterval(countd);
			$(expiredText).removeClass('hidden');
			$(countDownUl).addClass('hidden');
		}
		else {
			// if all boxes hide condition
			if (!display_till_years && !display_till_months && !display_till_days && !display_till_hours && !display_till_minutes && !display_till_seconds ) {
				$('#countdown-boxes').hide();
			} else {

				// seconds display condition
				if (display_till_seconds) {
					var seconds = Math.floor(difference / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').hide();
					$('#hours').hide();
					$('#minutes').hide();
					$('#seconds').show();
				}

				// till minutes display condition
				if (display_till_minutes) {
					var minutes = Math.floor(difference / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').hide();
					$('#hours').hide();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till hours display condition
				if (display_till_hours) {
					var hours = Math.floor(difference / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').hide();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till days display condition
				if (display_till_days) {
					var days = Math.floor(difference / (1000 * 60 * 60 * 24));
					var hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').show();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till months display condition
				if (display_till_months) {
					var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.436875));
					var days = Math.floor(difference % (1000 * 60 * 60 * 24 * 30.436875) / (1000 * 60 * 60 * 24));
					var hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').show();
					$('#days').show();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till years display condition
				if (display_till_years) {
					var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.436875 * 12));
					var months = Math.floor(difference % (1000 * 60 * 60 * 24 * 30.436875 * 12) / (1000 * 60 * 60 * 24 * 30.436875));
					var days = Math.floor(difference % (1000 * 60 * 60 * 24 * 30.436875) / (1000 * 60 * 60 * 24));
					var hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').show();
					$('#months').show();
					$('#days').show();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// Hr, Min, Sec hide condition
				if ('yes' == hide_hr_min_sec) {
					$('#hours').hide();
					$('#minutes').hide();
					$('#seconds').hide();
				}
			}

			// Double zero conditions
			if(years < 10){years = "0" + years;}
			if(months < 10){months = "0" + months;}
			if(days < 10){days = "0" + days;}
			if(hours < 10){hours = "0" + hours;}
			if(minutes < 10){minutes = "0" + minutes;}
			if(seconds < 10) {seconds = "0" + seconds;}

			// display numbers
			(years > 0) ? $(frontYears).text(years) : $('#years').hide();
			(months > 0) ? $(frontMonths).text(months) : $('#months').hide();
			(days > 0) ? $(frontDays).text(days) : $('#days').hide();
			$(frontHours).text(hours);
			$(frontminutes).text(minutes);
			$(frontSeconds).text(seconds);
		}
	}
	countDown();
	var countd = setInterval(function(){
		countDown();
	}, 1000);

}(jQuery));

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		margin:10,
		dots:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:4,
				nav:false,
				slideBy: 4

			},
			600:{
				items:5,
				nav:false,
				slideBy: 5

			},
			1000:{
				items:12,
				nav:true,
				loop:true,
				slideBy: 12

			}
		}
	});
// Go to the next item
$('.customNextBtn').click(function() {
	owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

$('iframe').contents().find('img').css({with: '99%', 'height': '99%'});


});
$(document).ready(function(){
	$(".playignitor, .thumbnail").click(function() {

		const player = videojs('player');

    	player.src({
      		src: $(this).attr('data-source'),
      		type: 'application/x-mpegURL'
    	});

	});

	$('#playerholder').height($('#playerholder').width() * (9/16));
	$('#contact-list').height($('#playerholder').height() - 51);


});


$(function () {
	$('#contact-list').searchable({
		searchField: '.search-hover',
		selector: 'li',
		childSelector: '.playignitor',
		show: function( elem ) {
			elem.slideDown(100);
		},
		hide: function( elem ) {
			elem.slideUp( 100 );
		}
	})

});
