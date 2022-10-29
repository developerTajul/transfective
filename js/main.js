(function ($) {

	jQuery(document).ready(function () {

		

		// slick slider

		
		
		
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
		
	

		// services hero tab slider


		$('.brands-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			autoplaySpeed:1000,
			slidesToShow: 5,
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
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			// variableWidth: true,
			autoplay: true,
			prevArrow:'.testimonial-prev-arrow',
			nextArrow:'.testimonial-next-arrow',
			
		});


	});

}(jQuery));

