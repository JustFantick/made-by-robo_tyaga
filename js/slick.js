$(document).ready(function () {
	// Слайдер!!!
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 2,
		easing: 'ease-out',
		touchThreshold: 45,
		waitForAnimate: true,
		variableWidth: false,
		vertical: true,
		//adaptiveHeight: true,
		verticalSwiping: true,

		autoplay: true,
		autoplaySpeed: 3500,

		// responsive: [
		// 	{
		// 		breakpoint: 500,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			variableWidth: false,
		// 			centerMode: false,
		// 		}
		// 	}
		// ]
	});
});
