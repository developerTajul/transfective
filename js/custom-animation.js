gsap.registerPlugin(ScrollTrigger);

// mouse pointer animation

const homeBannarTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-bannar-area",
        // start: "top ",
        end: "top 90%",
    },
    defaults: { opacity: 0, duration: 1 },

})
homeBannarTimeline.from('.home-bannar-area', { opacity: 0 })
    .from('.home-bannar-area .bannar-area-title h1', { y: -50 })
    .from('.home-bannar-area .bannar-area-title .arrow-shape', { duration: 0.5 })
    .from('.home-bannar-area .bannar-area-right .small-star', { rotate: 360, duration: 0.5 })
    .from('.home-bannar-area .bannar-area-right .star', { rotate: 90, duration: 0.5 })
    .from('.home-bannar-area .bannar-area-right .arrow', { y: -50 })
    .from('.home-bannar-area .bannar-bottom-area .right-img .circle-img', { y: 50 })
    .from('.home-bannar-area  .down-icon  ', { y: -50, rotate: 20 })
    .from('.home-bannar-area  .hero-world-image .world-img img ', { scale: 0.5 })

// change ellipse color

gsap.to(".home-bannar-area .down-icon", {
    keyframes: {
        "0%": { y: -50 },
        "100%": { y: 0 }
    },
    ease: 'none', // ease the entire keyframe block
    duration: 2.5,
    delay: 2,
    repeat: -1
})
gsap.from(".home-bannar-area .bannar-bottom-area .right-img .circle-img", {
    scale: 0.5,
    repeat: -1,
    delay: 3,
    duration: 3,
    color: '#00CCFF'
})

gsap.from('.home-bannar-area .hero-world-image .light-circle-img', {
    scale: 0.5,
    repeat: -1,
    delay: 3,
    duration: 3,
    color: '#00CCFF'
})

gsap.from('.home-bannar-area .bannar-area-right .arrow', {
    keyframes: {
        "0%": { y: 0 },
        "100%": { y: 50 }
    },
    ease: 'none',
    duration: 3,
    repeat: -1
})

const homebanner = document.querySelector(".home-bannar-area");
homebanner.onwheel = e => {
    if (e.deltaY >= 0) {
        const smallStar = document.querySelector('.home-bannar-area .bannar-area-right .small-star');
        
    } else {
        // Scrolling Up with mouse
        console.log('Scroll Up');
    }
}





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
