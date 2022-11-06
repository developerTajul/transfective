(function ($) {

	jQuery(document).ready(function () {

		// core value icon

		// slick slider

		// contact slider
		$('#contact-slider-mobile-one').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: false,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 1000,
		});
		// contact slider
		$('#contact-slider-mobile-two').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: false,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 1000,
		});
		// home bannar slider
		$('#home-bannar-slider').slick({
			dots: false,
			infinite: true,
			speed: 1500,
			slidesToShow: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000
		});
		$('#prefered-choice-slider').slick({
			dots: false,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 1,
			arrows: false,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 1000,
		});
		// industrial hero tab slider
		$('#industriesTab').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			arrows: false,
			variableWidth: true,

		});

		// services hero tab slider

		$('.services-nav nav ul').slick({
			dots: false,
			infinite: true,
			speed: 300,
			// slidesToShow: 3,
			arrows: false,
			variableWidth: true,
			slidesToScroll:2

		});

		$('.brands-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			autoplaySpeed: 300,
			slidesToShow: 9,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,

					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 3,

					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 4,

					}
				},
			]
		});

		$('.testimonial-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			variableWidth: true,
			autoplay: true,
			centerMode: true,
			prevArrow: '.testimonial-arrow .prev-arrow',
			nextArrow: '.testimonial-arrow .next-arrow',
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}


			]
		});
		// marquee slider
		$('.marquee-slider').slick({
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false
		});



	


	});

}(jQuery));

