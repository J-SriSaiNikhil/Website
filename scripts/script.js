document.addEventListener("DOMContentLoaded",function(){
    const activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleBotton = document.querySelector(".menuBtn");
    const toggleBotton1 = document.querySelector(".homebtn");
    let isOpen = false;

    gsap.set(".menu-item p", { y: 255 });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".overlay",{
        duration: 1.5,
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
    });

    timeline.to(".menu-item p",{
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

    timeline.to(".sub-nav",{
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



// animated background

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// let mousemoved = false;

// const pointer = {
//     x: 0.5 * window.innerWidth,
//     y: 0.5 * window.innnerHeight,
// };

// const params = {
//     pointsnumber: 40,
//     widthFactor: 10,
//     mouseThreshold: 0.5,
//     spring: 0.25,
//     friction: 0.5,
// };

// const trail = new Array(params.pointsnumber);
// for(let i=0; i< params.pointsnumber; i++){
//     trail[i] = {
//         x: pointer.x,
//         y: pointer.y,
//         dx: 0,
//         dy: 0,
//     };
// }

// window.addEventListener("click",(e) => {
//     updateMousePosition(e.pageX, e.pageY);
// });

// window.addEventListener("mousemove", (e) =>{
//     mouseMoved = true;
//     updateMousePosition(e.pageX,e.pageY);
// });

// window.addEventListener("touchmove", (e) =>{
//     mouseMoved = true;
//     updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
// });

// function updateMousePosition(eX,eY){
//     pointer.x = eX;
//     pointer.y = eY;
// }

// setupCanvas();
// update(0);
// window.addEventListener("resize",setupCanvas);

// function update(t){
//     if (!mouseMoved){
//         pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t))* window.innerWidth;
//         pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t))* window.innerHeight;
//     }

//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     trail.forEach((p,pIdx) => {
//         const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
//         const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
//         p.dx += (prev.x - p.x) * spring;
//         p.dy += (prev.y - p.y) * spring;
//         p.dx *= params.friction;
//         p.dy *= params.friction;
//         p.x += p.dx;
//         p.y += p.dy;
//     });

//     var gradient = ctx .createLinearGradient(0, 0, canvas.width, canvas.height);
//     gradient.addColorStop(0, "rgba(160, 93, 134, 1)");
//     gradient.addColorStop(1, "rgba(57, 34, 115, 1)");

//     ctx.strokeStyle = gradient;
//     ctx.lineCap = "round";
//     ctx.beginPath();
//     ctx.moveTo(trail[0].x, trail[0].y);

//     for(let i = 1; i< trail.length - 1; i++)
//     {
//         const xc = 0.5 * (trail[i].x + trail[i + 1].x);
//         const yc = 0.5 * (trail[i].y + trail[i + 1].x);
//         ctx.quadraticCurveTo(trail[1].x, trail[i].y, xc, yc);
//         ctx.lineWidth = params.widthFactor * (params.pointsnumber - i);
//         ctx.stroke();
//     }
//     ctx.lineTo(trail[trail.length - 1]. x, trail[trail.length - 1].y);
//     ctx.stroke();

//     window.requestAnimationFrame(update)
// }

// function setupCanvas(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }