
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
    const lightCirlcleImg = document.querySelector('.light-circle-img img');
    const bannarAreaRight = document.querySelector('.bannar-area-right');

    ScrollTrigger.observe({
        target: '.home-bannar-area',
        type: "wheel,touch",
        onUp: () => upTheElement(lightCirlcleImg, bannarAreaRight),
        onDown: () => downTheELement(lightCirlcleImg, bannarAreaRight),
    })

    const upTheElement = (...element) => {

        gsap.from(element, {
            keyframes: {
                "0%": { y: 0, scale: 0.99 },
                "50%": { y: -40, delay: 1 },
                "100%": { y: -70, scale: 1 }
            },
            duration: 8,
            yoyo: true,
            ease: 'none'
        })
    }
    const downTheELement = (...element) => {

        gsap.from(element, {
            keyframes: {
                "0%": { y: 0, scale: 0.99 },
                "50%": { y: 0, scale: 1, delay: 1 },
                "100%": { y: 70, scale: 1 }
            },
            duration: 8,
            ease: 'none'
        })
    }


    const starImg = document.querySelector('.our-process-right .star-img img');
    starImg.classList.add('up-down');
    const upDownTimeline = gsap.timeline(
        {
            repeat: -1, yoyo: true, ease: 'none'
        }
    );
    upDownTimeline.from(".up-down", { y: -50, duration: 7, scale: 0.9 })


    ScrollTrigger.observe({
        target: '.up-down',
        type: "wheel,touch",
        pin: true,
        onUp: () => {
            gsap.from('.up-down', { rotate: 90 })
        },
        onDown: () => {
            gsap.from('.up-down', { rotate: -90 })
        },
    })


    ScrollTrigger.observe({
        target: '.our-process',
        type: "wheel,touch",
        ease: 'none',
        onUp: () => {

            gsap.from('.up-down', {
                y: -50
            })
        },
        onDown: () => {
            gsap.from('.up-down', {
                y: 50
            })
        },
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
            gsap.to(globeTwo, { x: 50,duration:6 })
        },
        onUp: () => {

            gsap.to([star, globeOne], { y: -50, rotate: -36, yoyo: true, duration: 4 })
            gsap.to(globeTwo, {
                x: -50, y: -60, duration: 6
            })
        }
    })

}