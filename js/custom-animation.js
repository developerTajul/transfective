gsap.registerPlugin(ScrollTrigger);

// home bannar

gsap.to(".bannar-bottom-area .right-img .down-icon", {
    ScrollTrigger: '.home-bannar-area',
    duration: 2,
    // scale: 0.6,
    y: '70%',
    repeat: Infinity
})

// icon animations

var iconTl = gsap.timeline({ repeat: Infinity })

// Array-based keyframes
iconTl.to(".bannar-area-right .star img", {
    keyframes: {
        "0%": { x: 0, y: 0 },
        "25%": { x: 100, y: 0, rotation: 360 },
        "50%": { x: 100, y: 100, rotation: -360 },
        "75%": { x: 0, y: 100, rotation: 90 },
        "100%": { x: 0, y: 0 }
    },
    duration: 20
});


gsap.to('.bannar-area-right .arrow', {
    y: 5,
    duration: 2,
    repeat: Infinity
})

// small star
gsap.to('.bannar-area-right .small-star', {
    rotation: 30,
    y:20,
    repeat:Infinity,
    duration:2
})








// mouse pointer animation

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

// horizontal animation

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