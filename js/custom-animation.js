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

// custom animation

if (document.querySelector('.upDownAnimation') !== null) {
    gsap.from(".upDownAnimation", {
        keyframes: {
            "0%": { y: 0 },
            "25%": { y: -50 },
            "50%": { y: 0 },
            '100%': { y: -50 }
        },
        repeat: -1,
        duration: 15,
        ease: 'none'
    })
}
if (document.querySelector('.zoomInAnimation') !== null) {
    gsap.from(".zoomInAnimation", {
        keyframes: {
            "0%": { scale: 0.9 },
            "25%": { scale: 1 },
            "50%": { scale: 0.9 },
            '100%': { scale: 1 }
        },
        repeat: -1,
        duration: 15,
        ease: 'none'
    })
}


const leftToRightTimeLine = gsap.timeline({
    defaults: { duration: 10 },
    repeat: -1
})
if (document.querySelector('.leftToRight')) {
    leftToRightTimeLine.from('.leftToRight', { x: -50 })
        .from(".leftToRight", { x: 0 })
    leftToRightTimeLine.reverse(0);
}


// section animation


if (document.querySelector('.home-bannar-area') !== null) {
    const homebanner = document.querySelector(".home-bannar-area");
    homebanner.onwheel = e => {
        if (e.deltaY >= 150) {
            // smallStarDown();
            circleRightImageDown();
        } else {
            // smallStarUp();
            circleRightImageUp();
        }
    }
}

/* Home Bannar Area */
function circleRightImageDown() {
    gsap.to('.home-bannar-area .bannar-bottom-area .right-img', {
        y: -100
    });
}
function circleRightImageUp() {
    gsap.to('.home-bannar-area .bannar-bottom-area .right-img', {
        y: 100
    });
}



if (document.querySelector('.hero-world-image .light-circle-img') !== null) {
    const lightCircleTimeline = gsap.timeline({ defaults: { duration: 6 }, repeat: -1 });

    lightCircleTimeline.to(".hero-world-image .light-circle-img", {
        y: 100
    }).to('.hero-world-image .light-circle-img', {
        y: 0
    })
}



// who we

if (document.querySelector('.bannar-area__technology') !== null) {
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

}
// our solution
if (document.querySelector('.our-solutions') !== null) {
    const ourSolutionsTimeline = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.our-solutions',
                start: 'top 80%',
                end: 'top 0%',
               
            },
            defaults: { opacity: 0 },
            ease: 'back'
        }
    )



    ourSolutionsTimeline.from('.our-solutions', { ease: 'linear', delay: 3 })
        .from('.our-solutions .our-solutions-heading h2', { y: 50 })
        .from('.our-solutions .translation-api .card-style-left ', { x: -100 })
        .from('.our-solutions .translation-api  .card-img ', { x: 100 })
}

// tanslation memory cloud
if (document.querySelector('.translation-memory-cloud') !== null) {
    const translationMemoryCloud = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.translation-memory-cloud',
                start: 'top 80%',
                end: 'top 0%',
               
            },
            defaults: { opacity: 0 },
            ease: 'back'
        }
    )
    translationMemoryCloud.from('.our-solutions .translation-memory-cloud .card-style-left ', { x: 150 })
        .from('.our-solutions .translation-memory-cloud .card-img ', { x: -150 })
        .from('.our-solutions.our-solution-style-1 .card-style-1 .translation-memory .three-star', { y: 100 })
}

// glossary management card
if (document.querySelector('.glossary-management-card') !== null) {
    const glossaryManaagementTimeline = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.glossary-management-card',
                start: 'top 80%',
                end: 'top 0%',
                scrub: false,
                // toggleActions: 'restart'
            },
            defaults: { opacity: 0 },
            ease: 'back'
        }
    )
    glossaryManaagementTimeline.from('.our-solutions .glossary-management-card .card-style-left', { x: -150 })
        .from('.our-solutions .glossary-management-card .card-img ', { x: 150 })
        .from('.our-solutions .glossary-management .globe-img ', { x: -100 })
}
// cat tools management card
if (document.querySelector('.cat-tools-management-card') !== null) {
    const catToolsManaagementTimeline = gsap.timeline(
        {
            scrollTrigger: {
                trigger: '.cat-tools-management-card',
                start: 'top 80%',
                end: 'top 0%',
            },
            defaults: { opacity: 0 },
            ease: 'back'
        }
    )
    catToolsManaagementTimeline.from('.our-solutions .cat-tools-management-card .card-style-left', { x: 150 })
        .from('.our-solutions .cat-tools-management-card .card-img ', { x: -150 })
        .from('.our-solutions.our-solution-style-1 .card-style-1 .cat-tools-img .cat-tools-globe', { y: 100 })
}

if (document.querySelector('.machine-area')) {
    const machineAreaTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.machine-area',
            start: 'top 80%',
            end:'top 0%'
            
        },
        defaults: { opacity: 0 },
    },
    )
    machineAreaTl.to('.machine-area', { opacity: 1 })
        .from('.machine-left-area', { xPercent: -100 })
        .from('.machine-right-area', { xPercent: -100 })
}


if (document.querySelector('.content-review') !== null) {
    const contentReviewTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.content-review',
            start: 'top 80%',
            end:'top 0%'
        },
        defaults: { opacity: 0 },
    })
    contentReviewTl.from('.content-review', { opacity: 1 })
        .from('.content-review .content-review-right ', { x: 200 })
        .from('.content-review .content-card',{x:-200})
}
// integration area

if (document.querySelector('.integration-area') !== null) {
    const integrationTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.integration-area ',
            start: 'top 80%',
            end: 'top 0%',
            
        },
        defaults: { opacity: 0 },
    })
    integrationTl.from('.integration-area', { opacity: 1 })
        .from('.integration-area .section-title h2',{y:100})
        .from('.integration-area .section-title .line-img',{y:100})
        .from('.integration-area .section-desc ',{y:100})
        .from('.integration-area .image-area ',{y:100})
      
}
