

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

// testimonial arrow

const testimonialArrow = document.querySelector('.testimonial-arrow');
const prevArrow = testimonialArrow.querySelector('.prev-arrow');
const nextArrow = testimonialArrow.querySelector('.next-arrow');
prevArrow.addEventListener('click', function () {
    nextArrow.classList.remove('active');
    prevArrow.classList.add('active');
})
nextArrow.addEventListener('click', function () {
    nextArrow.classList.add('active');
    prevArrow.classList.remove('active');
})


// world area small

const worldAreSmall = document.querySelector('.world-wide-area-small');
const worldAreaSmallCircleOuter = worldAreSmall.querySelectorAll('.circle-outer');
worldAreaSmallCircleOuter[1].classList.add('active');









// need project slider
var swiper = new Swiper(".need-project-swiper-slider", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});