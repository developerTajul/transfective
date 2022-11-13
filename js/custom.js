


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
if (document.querySelector('.testimonial-arrow') !== null) {
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

}


// world area small
if (document.querySelector('.world-wide-area-small') !== null) {

    const worldAreaSmall = document.querySelector('.world-wide-area-small');
    const worldAreaSmallCircleOuter = worldAreaSmall.querySelectorAll('.circle-outer');
    worldAreaSmallCircleOuter[1].classList.add('active');

    const worldAreaSmallCircleInner = worldAreaSmall.querySelectorAll('.circle-inner');
    for (let i = 0; i < worldAreaSmallCircleInner.length; i++) {
        worldAreaSmallCircleInner[i].addEventListener('mouseenter', function (e) {
            const activeAll = worldAreaSmall.querySelectorAll('.active');
            for (let j = 0; j < activeAll.length; j++) {
                activeAll[j].classList.remove('active');
            }
            e.target.parentNode.classList.add('active');

        })
    }
}
// need project slider


const needProject = document.querySelector('.need-project');
if (needProject) {
    needProject.classList.remove('bg-need-project');
    var swiper = new Swiper(".need-project-swiper-slider", {
        slideToClickedSlide: true,
        slidePerView: 1,
        autoplay: true,
        mousewheel: {
            enabled: true,
            sensitivity: 4,

        },
        // freeMode: {
        //     enabled: false,
        //     sticky: true,
        //     momentumBounce: false,
        // },
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });
}



AOS.init();