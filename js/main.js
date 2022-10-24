




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
			speed: 300,
			slidesToShow: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000
		});
		$('#prefered-choice-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			arrows: false,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 2000,
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
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			arrows: false,
			variableWidth: true,

		});

		$('.brands-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 9,
			slidesToScroll: 4,
			arrows: false,
			autoplay:true,
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
			arrows: false,
			variableWidth: true,
			autoplay:true,
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


		/*** AOS */
		AOS.init({
			once: false,
			// offset: -300,
			// duration: 900,
		});

	

	});

}(jQuery));


// header

const openMenuBtn = document.querySelector('.header-area .open-menu-btn button');
const mobileMenu = document.querySelector('.header-area .mobile-menu-area');
const closeBtn = document.querySelector('.header-area .close-btn button');
const body = document.querySelector('body');

openMenuBtn.addEventListener('click', function () {
	mobileMenu.classList.add('toggle-mobile-menu');
	body.classList.add('bg-gray');
})
closeBtn.addEventListener('click', function () {
	mobileMenu.classList.remove('toggle-mobile-menu');
	body.classList.remove('bg-gray');
})

