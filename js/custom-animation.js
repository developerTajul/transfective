gsap.registerPlugin(ScrollTrigger);

// mouse pointer Animation

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


// const homebanner = document.querySelector(".home-bannar-area");
// homebanner.onwheel = e => {
//     if (e.deltaY >= 0) {
//         smallStarDown();
//         circleRightImageDown()
//     } else {
//         smallStarUp();
//         circleRightImageUp();
//     }
// }



const lightCircleTimeline = gsap.timeline({ defaults: { duration: 6 }, repeat: -1 });

lightCircleTimeline.to(".hero-world-image .light-circle-img", {
    y: 100
}).to('.hero-world-image .light-circle-img', {
    y: 0
})

// who we

const technologyBannarAreaTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.bannar-area__technology',
    },
    defaults: { opacity: 0 },
    ease: 'back'
})

technologyBannarAreaTimeline.from
    ('.bannar-area__technology', { ease: 'linear' })
    .from('.bannar-area__technology .hero-left-area h1', { x: -40 })
    .from('.bannar-area__technology .hero-contents p', { x: -40 })
    .from('.bannar-area.bannar-area__technology .hero-left-area .stretch-rope', {})
    .from('.bannar-area__technology .hero-contents .hero-contents-image', {})
    .from('.technology-bannar-style-1 .hero-right-area .arrow-img', {})
    .from('.technology-bannar-style-1 .hero-right-area .star-img', {})

// our solution

const ourSolutionsTimeline = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.our-solutions',
            start: 'top 100%',
            end: 'top 10%',
            scrub: true,
            toggleActions: 'resume'
        },
        defaults: { opacity: 0, duration: 1 },
        ease: 'back'
    }
)



ourSolutionsTimeline.from('.our-solutions', { ease: 'linear', delay: 3 })
    .from('.our-solutions .our-solutions-heading h2', { y: 50 })
    .from('.our-solutions .translation-api .card-style-left ', { x: -100 })
    .from('.our-solutions .translation-api  .card-img ', { x: 100 })


// tanslation memory cloud
const translationMemoryCloud = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.translation-memory-cloud',
            start: 'top 90%',
            end: 'top 10%',
            scrub: true,
            toggleActions: 'restart'
        },
        defaults: { opacity: 0, duration: 1 },
        ease: 'back'
    }
)
translationMemoryCloud.from('.our-solutions .translation-memory-cloud .card-style-left ', { x: 150 })
    .from('.our-solutions .translation-memory-cloud .card-img ', { x: -150 })
    .from('.our-solutions.our-solution-style-1 .card-style-1 .translation-memory .three-star', { y: 100 })


// glossary management card
const glossaryManaagementTimeline = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.glossary-management-card',
            start: 'top 90%',
            end: 'top 10%',
            scrub: true,
            toggleActions: 'restart'
        },
        defaults: { opacity: 0, duration: 1 },
        ease: 'back'
    }
)
glossaryManaagementTimeline.from('.our-solutions .glossary-management-card .card-style-left', { x: -150 })
    .from('.our-solutions .glossary-management-card .card-img ', { x: 150 })
    .from('.our-solutions .glossary-management .globe-img ', { x: -100 })
// cat tools management card
const catToolsManaagementTimeline = gsap.timeline(
    {
        scrollTrigger: {
            trigger: '.cat-tools-management-card',
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
            toggleActions: 'restart'
        },
        defaults: { opacity: 0, duration: 1 },
        ease: 'back'
    }
)
catToolsManaagementTimeline.from('.our-solutions .cat-tools-management-card .card-style-left', { x: 150 })
    .from('.our-solutions .cat-tools-management-card .card-img ', { x: -150 })
    .from('.our-solutions.our-solution-style-1 .card-style-1 .cat-tools-img .cat-tools-globe', { y: 100 })




