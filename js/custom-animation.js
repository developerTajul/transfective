
// animation

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


gsap.set(".ball", { xPercent: -50, yPercent: -50 });

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

gsap.ticker.add(() => {

    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
});


// custom animation

if (document.getElementById('home-bannar-slider') !== null) {

    const homeBannarSlider = document.getElementById('home-bannar-slider');
    const smallStar = document.querySelector('.home-bannar-area .container .small-star');
    const bigStar = document.querySelector('.home-bannar-area .bannar-area-right .star');


    ScrollTrigger.observe({
        target: homeBannarSlider,
        type: "wheel,touch",
        ease: 'none',
        onDown: () => {
            gsap.to(smallStar, { x: -10, y: 100, yoyo: true, duration: 20, rotate: -36 })
            gsap.to(bigStar, { x: 10, y: 100, yoyo: true, duration: 20, rotate: 36 })
        },
        onUp: () => {
            gsap.to(smallStar, { x: 10, y: -100, yoyo: true, duration: 20, rotate: 36 })
            gsap.to(bigStar, { x: -10, y: -100, yoyo: true, duration: 20, rotate: -96 })
        }
    })
  


   
    
    

}


// ecommerce area

if (document.querySelector('.ecommerce-area') !== null) {
    const star = document.querySelector('.ecommerce-area .star img');
    const globeOne = document.querySelector('.ecommerce-area .globe-1  img');
    const globeTwo = document.querySelector('.ecommerce-area .globe-2  img');
    ScrollTrigger.observe({
        target: '.ecommerce-area',
        type: "wheel,touch",
        ease: 'none',
        onDown: () => {
            gsap.to([star, globeOne, globeTwo], { y: 50, rotate: 36, yoyo: true, duration: 5 })
            gsap.to(globeTwo, { x: 50, duration: 6, rotate: 45 })
        },
        onUp: () => {

            gsap.to([star, globeOne], { y: -50, rotate: -36, yoyo: true, duration: 4 })
            gsap.to(globeTwo, {
                x: -50, y: -60, duration: 6, yoyo: true, rotate: -45
            })
        }
    })

}

const servicesPageContent = document.querySelector('.services-content');
if (servicesPageContent) {

    const arrow = servicesPageContent.querySelector('.arrow img');
    const star = servicesPageContent.querySelector('.star img');
    const globeOne = servicesPageContent.querySelector('.globe-1');
    const servicesPageTimeLine = gsap.timeline(
        {
            scrollTrigger: {
                trigger: [arrow, globeOne],
            },

            defaults: { opacity: 0 }
        })

    servicesPageTimeLine.from(arrow, { scale: 0.8 })
        .from(star, { scale: 0.9 })

    gsap.from(globeOne, {
        scrollTrigger: globeOne,
        duration: 1,
        scale: 0.8
    })


    ScrollTrigger.observe({
        target: servicesPageContent,
        type: "wheel,touch",
        ease: 'none',
        onDown: (e) => {
            const y = e.deltaY * 0.5;
            gsap.to([globeOne, star], { y: y, duration: 10, yoyo: true, rotate: 36, stagger: 0.5 })
        },
        onUp: (e) => {
            const y = e.deltaY * 0.5;
            gsap.to([globeOne, star], { y: y, duration: 10, yoyo: true, rotate: -36 })
        }
    })



}


// out process area

const ourProcess = document.querySelector('.our-process');
if (ourProcess) {
    const starImg = ourProcess.querySelector('.star-img');
    ScrollTrigger.observe({
        target: ourProcess,
        type: "wheel,touch",
        ease: 'back',
        onDown: () => {
            gsap.to(starImg, { scale: 0.7, duration: 2 })
        },
        onUp: () => {
            gsap.to(starImg, { scale: 1.1, duration: 2 })
        }
    })
}

// technology page

const ourSolutions = document.querySelector('.our-solutions');
if (ourSolutions) {
    const globeOneImage = document.querySelector('.hero-contents-image');
    const starImg = document.querySelector('.star-img');
    const threeStar = document.querySelector('.three-star img');
    const globeImg = document.querySelector('.globe-img');
    const catToolsGlobeImg = document.querySelector('.cat-tools-globe img');
    const blackStar = document.querySelector('.black-star img');

    ScrollTrigger.observe({
        target: ourSolutions,
        type: "wheel,touch",
        ease: 'back',
        onDown: () => {
            gsap.to(globeOneImage, {
                scale: 1.1, rotate: -360, duration: 10, repeat: -1, opacity: 0.5, transformOrigin: 'center', x: -100, yoyo: true
            })
            gsap.to(starImg, {
                y: 30, xPercent: 100, duration: 10, rotate: 45, repeat: -1, yoyo: true, ease: 'none'
            })
            gsap.to(threeStar, { scale: 0.8, duration: 2 })
            gsap.to(globeImg, { scale: 0.5, duration: 4 })
            gsap.to(catToolsGlobeImg, { scale: 0.8, skewX: 10, duration: 2 })
            gsap.to(blackStar, { rotate: 360, duration: 10 })

        },
        onUp: () => {
            gsap.to(globeOneImage, {
                scale: 1.1, rotate: 360, duration: 10, repeat: -1, opacity: 1, transformOrigin: 'center', yoyo: true
            })
            gsap.to(starImg, {
                y: 100, duration: 10
            })
            gsap.to(threeStar, { scale: 1.1, duration: 2 })
            gsap.to(globeImg, { scale: 0.9, duration: 4 })
            gsap.to(catToolsGlobeImg, { scale: 0.9, skewX: -10, duration: 2 })
            gsap.to(blackStar, { rotate: -360, duration: 10 })
        }
    })
}


// integration

const integrationArea = document.querySelector('.integration-area');
if (integrationArea) {
    const globe = integrationArea.querySelector('.globe');
    const globeStar = integrationArea.querySelector('.globe .star');
    const star = integrationArea.querySelector('.position-img.star img');

    const starTl = gsap.timeline().pause();
    starTl.to(star, { y: 100, duration: 10, x: 20, yoyo: true, rotate: 45, repeat: -1, opacity: 0.6 })
    const globeTl = gsap.timeline().pause();
    globeTl.to(globe, { x: -20, y: -120, duration: 10, rotate: -45, scale: 0.8, ease: 'none', yoyo: true });

    ScrollTrigger.observe({
        target: integrationArea,
        type: 'wheel,touch',
        ease: 'none',
        onDown: () => {
            starTl.play();
            globeTl.play();
        },
        onUp: () => {
            starTl.reverse();
            globeTl.reverse();
        }
    })




}

const swiperSlides = document.querySelectorAll('.need-project-swiper-slider .swiper-wrapper .swiper-slide');
if (swiperSlides.length > 0) {
    const totalSlides = swiperSlides.length;
    let lastSlide = swiperSlides[totalSlides - 1];
    let firstSlide = swiperSlides[0];
    ScrollTrigger.observe({
        target: lastSlide,
        type: 'wheel,touch',
        ease: 'none',
        onDown: () => {
            gsap.to(window, { duration: 2, scrollTo: ".core-value" });

        },

    });
    ScrollTrigger.observe({
        target: firstSlide,
        type: 'wheel,touch',
        ease: 'none',
        onUp: () => {
            gsap.to(window, { duration: 2, scrollTo: ".world-wide-area" });

        },

    });

}





