const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) =>{
    gsap.to(cursor,{
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.5,
        ease: "power2.out",
    });
});

document.addEventListener("DOMContentLoaded",function(){
const activeItemIndicator = CSSRulePlugin.getRule(".menuitem p#active::after");
const toggleBotton = document.querySelector(".menuBtn");
const toggleBotton1 = document.querySelector(".homebtn");
let isOpen = false;

gsap.set(".menuitem p", { y: 255 });

const timeline = gsap.timeline({ paused: true });

timeline.to(".overlay",{
    duration: 1.5,
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut"
});

timeline.to(".menuitem p",{
    duration: 1.5,
    y: 0,
    stagger:0.2,
    ease: " power4.Out"
},"-=1");

timeline.to(activeItemIndicator,{
    width:"100%",
    duration: 1,
    ease:"power4.Out",
    delay:0.5
},"<");

timeline.to(".subnav",{
    bottom: "10%",
    opacity: 1,
    duration: 0.5,
    delay: 0.5
},"<");

toggleBotton.addEventListener("click",function(){
    if(isOpen){
        timeline.reverse();
    }else{  
        timeline.play();
    }
    isOpen = !isOpen;
});

});

const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change",() =>{document.body.classList.toggle("dark")})