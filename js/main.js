(function($){

	jQuery(document).ready(function(){

		/*** Sticky header */
		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".header").addClass("stop");
			} else {
				$(".header").removeClass("stop");
			}
		});

		/*** Sticky header */
		const body = document.body;
		const scrollUp = "scroll-up";
		const scrollDown = "scroll-down";
		let lastScroll = 100;

		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) 
			{
				body.classList.remove(scrollUp);
				return;
			}

			if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
			{
				// down
				body.classList.remove(scrollUp);
				body.classList.add(scrollDown);
			} 
			else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
			{
				// up
				body.classList.remove(scrollDown);
				body.classList.add(scrollUp);
			}

			lastScroll = currentScroll;
		});

		/*** Scroll Nav */
		var link = $('.main-menu ul li a');
 
		link.on('click', function(e) {
			var target = $($(this).attr('href'));
			$('html, body').animate({
			scrollTop: target.offset().top - 76
			}, 600); 
			$(this).parent().addClass('active');
			e.preventDefault();
		});
 
		$(window).on('scroll', function(){
			scrNav();
		});

		function scrNav() {
			var sTop = $(window).scrollTop();
			$('section').each(function() {
				var id = $(this).attr('id'),
					offset = $(this).offset().top-1,
					height = $(this).height();
				if(sTop >= offset && sTop < offset + height) {
					link.parent().removeClass('active');
					$('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
				}
			});
		}
		scrNav();

		/*** mobile menu  */
		$(".hamburger-menu").on("click", function () {
			$(".side-info").toggleClass("info-open");
			$(".offcanvas-overlay").toggleClass("overlay-open");
		});

		/*** ScrollDown */
        $('.scrollDown').click(function() {
            var target = $($(this).data('target'));
            var space = $(this).data('space');

            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top - space
                }, 500);
            }
        });
    	 

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".side-info").removeClass("info-open");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});  

		/*** AOS */
		AOS.init({
			once: true,
			offset: -300,
			duration: 900,
		});
		 
	});

}(jQuery));