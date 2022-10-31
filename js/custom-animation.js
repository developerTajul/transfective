

// mouse pointer Animation
document.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);
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


    /* Home Bannar Area */

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

        const homeBannarTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-bannar-area'
            },
            defaults: { opacity: 0 },
            ease: 'none'
        })
        homeBannarTl.from(".home-bannar-area", { ease: 'linear' })
            .from('.home-bannar-area .bannar-area-title h1', { y: 50 })
            .from('.home-bannar-area .hero-world-image .world-img', { y: 50 })
            .from('.home-bannar-area .arrow-shape', { y: 50 })
            .from('.home-bannar-area .bannar-area-right .arrow', {})
            .from('.home-bannar-area .bannar-area-right .star', {})
            .from('.home-bannar-area .bannar-area-right .small-star', {})
            .from('.home-bannar-area .bannar-bottom-area .right-img', {})
            .from('.home-bannar-area .hero-world-image .light-circle-img', {})

    }


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
                end: 'top 0%'

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
                end: 'top 0%'
            },
            defaults: { opacity: 0 },
        })
        contentReviewTl.from('.content-review', { opacity: 1 })
            .from('.content-review .content-review-right ', { x: 200 })
            .from('.content-review .content-card', { x: -200 })
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
            .from('.integration-area .section-title h2', { y: 100 })
            .from('.integration-area .section-title .line-img', { y: 100 })
            .from('.integration-area .section-desc ', { y: 100 })
            .from('.integration-area .image-area ', { y: 100 })

    }

    // industries page

    if (document.querySelector('.ecommerce-area') !== null) {
        const ecommerceTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.ecommerce-area ',
                start: 'top 80%',
                end: 'top 0%',

            },
            defaults: { opacity: 0 },
        })

        ecommerceTl.from(".ecommerce-area", {})
            .from('.ecommerce-area .tab-content-title h2', { y: 50 })
            .from('.ecommerce-area .arrow', { y: 50 })
            .from('.ecommerce-area .star', { y: 50 })
            .from('.ecommerce-area .tab-title-arrow', { y: 50 })
            .from('.ecommerce-area .tab-content-desc', { y: 50 })
            .from('.ecommerce-area .tab-img-area', { x: -150 })
            .from('.ecommerce-area .globe-1', {})
            .from('.ecommerce-area .globe-2', {})


    }
    if (document.querySelector('.insdustries-verticle-tabs-area') !== null) {
        const industriesVerticleTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.insdustries-verticle-tabs-area ',
                start: 'top 80%',
                end: 'top 0%',

            },
            defaults: { opacity: 0 },
        })
        industriesVerticleTl.from(".insdustries-verticle-tabs-area", {})
            .from('.insdustries-verticle-tabs-area .tabs-area', { x: -100 })
    }
    if (document.querySelector('.services-content') !== null) {
        const servicesContentTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.services-content ',


            },
            defaults: { opacity: 0 },
        })
        servicesContentTl.from(".services-content", {})
            .from('.services-content .services-content-title h2', { y: 50 })
            .from('.services-content .services-title-arrow', { y: 50 })
            .from('.services-content .services-content-right .arrow', { y: 50 })
            .from('.services-content .services-content-right .star', { y: 50 })
            .from('.services-content .services-content-img', { x: -100 })
            .from('.services-content .tab-content-right-area', { x: 100 })
    }

    // contact page

    if (document.querySelector('.bannar-area__contact') !== null) {
        const bannarContactArea = gsap.timeline({
            scrollTrigger: {
                trigger: '.bannar-area__contact '
            },
            defaults: { opacity: 0 },
        })
        bannarContactArea.from(".bannar-area__contact", { y: 50 })
            .from('.bannar-area__contact .hero-left-area h1', { y: 50 })
            .from('.bannar-area__contact .hero-left-area .stretch-rope', { y: 50 })
            .from('.bannar-area__contact .hero-right-area .arrow-img', {})
            .from('.bannar-area__contact .hero-right-area .star-img', {})
    }

    if (document.querySelector('.contact-area') !== null) {
        const contactAreaTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.bordered-card',
            },
            defaults: { opacity: 0 }
        })
        contactAreaTl.from(".contact-area", {})
            .from('.contact-area .bordered-card', { x: -100, transformOrigin: 'top center', stagger: 0.5 })
    }
    // we assist

    if (document.querySelector('.we-assist') !== null) {
        const weAssistTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.we-assist .we-assists-img-area',
            },
            defaults: { opacity: 0 },
            ease: 'none'
        });
        weAssistTl.from('.we-assist', { ease: 'linear' })
            .from('.we-assist .we-assists-img-area', { x: -100 })
            .from('.we-assist .contact-right-area .contact-heading h2', { x: 100 })
            .from('.we-assist .contact-right-area .arrow-img', { x: 100 })
            .from('.we-assist .contact-form-area', { x: -100 })
            .from('.we-assist .contact-card .card-one', { x: 100 })
            .from('.we-assist .contact-card .card-two', { x: 100 })
    }

    // home page start
/*
    if (document.querySelector('.who-we') !== null) {
        const whoWeTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.who-we',
                start: 'top 80%'
            },
            ease: 'none',
            defaults: { opacity: 0 }
        }
        );
        whoWeTl.from('.who-we', { ease: 'linear' })
            .from('.who-we .section-title h2', { y: 50 })
            .from('.who-we .main-area-subtitle', { y: 50 })
            .from('.who-we .arrow-shape', {})
            .from('.who-we .animation-wrapper', { scale: 0.8 })
            .from('.who-we .main-area-desc', { y: 20 })
    }

    // world wide area
    if (document.querySelector('.world-wide-area') !== null) {
        const whoWeTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.world-wide-area',
                start: 'top 80%'
            },
            ease: 'none',
            defaults: { opacity: 0 }
        }
        );
        whoWeTl.from('.world-wide-area', { ease: 'linear' })
            .from('.world-wide-area .section-title h2', { y: 50 })
            .from('.world-wide-area .section-subtitle', { y: 50 })
            .from('.world-wide-area .arrow-shape', {})
            .from('.world-wide-area .circle-outer', { x: -100, stagger: 0.5 })
    }

    // our process
    if (document.querySelector('.our-process') !== null) {
        const ourProcessTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.our-process',
                start: 'top 80%'
            },
            ease: 'none',
            defaults: { opacity: 0 }
        }
        );
        ourProcessTl.from('.our-process', {})
            .from('.our-process .our-process-title h2', { y: 50 })
            .from('.our-process .our-process-subtitle ', { y: 50 })
            .from('.our-process .our-process-right .star-img ', {})
            .from('.our-process .need-project .full-width-animation', { xPercent: -50, duration: 1 })
    }
    //core values
    if (document.querySelector('.core-value') !== null) {
        const coreValueTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.core-value',

            },
            ease: 'none',
            defaults: { opacity: 0 }
        }
        );
        coreValueTl.from('.core-value', { ease: 'linear' })
            .from('.core-value .core-value-title h2', { y: 50 })
            .from('.core-value .core-value-subtitle', { y: 50 })
            .from('.core-value .core-text-content', { x: -100 })
            .from('.core-value .bordered-card', { x: -100, stagger: 0.5 })
    }

    // prefered choice
    if (document.querySelector('.prefered-choice') !== null) {
        const preferedChoiceTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.prefered-choice',
                start: 'top 80%'
            },
            ease: 'none',
            defaults: { opacity: 0 }
        }
        );
        preferedChoiceTl.from('.prefered-choice', { ease: 'linear' })
            .from('.prefered-choice .prefered-choice-title', { y: 50 })
            .from('.prefered-choice .prefered-card-wrapper .single-card', { y: 50, stagger: 0.5 })
    }

    // partenrs area
    if (document.querySelector('.partner-area') !== null) {
        const partnerAreaTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.partner-area',
                start: 'top 80%'
            },
            ease: 'none',
            defaults: { opacity: 0 }
        }
        );
        partnerAreaTl.from('.partner-area', { ease: 'linear' })
            .from('.partner-area .section-title', { y: 50 })
            .from('.partner-area .section-subtitle ', { y: 50 })
            .from('.partner-area .logoMarqueeSection', { y: 100, duration: 1 })
    }
    // testimonial area
    if (document.querySelector('.success-stories') !== null) {
        const partnerAreaTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.success-stories',
                start: 'top 80%'
            },
            ease: 'none',
            defaults: { opacity: 0 }
        }
        );
        partnerAreaTl.from('.success-stories', { ease: 'linear' })
            .from('.success-stories .section-title', { y: 50 })
            .from('.success-stories .section-subtitle ', { y: 50 })
            .from('.success-stories .testimonial-card-area .single-slide ', { x: -100, stagger: 0.5 })
    }
*/
})