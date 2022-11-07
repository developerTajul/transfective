
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

const lightCirlcleImg = document.querySelector('.light-circle-img');

ScrollTrigger.observe({
    target: ".home-bannar-area",         
    type: "wheel,touch",    
    onUp: () => upAnimate(),
    onDown: () => downEliments(),
    toggleActions:'resume'
})

function upAnimate() {
    // gsap.from(".light-circle-img",{y:-50,scale:0.9})
    var tl = gsap.timeline({
        duration: 1,
        ease: none,
    })
}
function downAnimate() {
    gsap.from(".light-circle-img",{y:50})
}

alert("Hello world");


