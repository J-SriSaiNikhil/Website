const itemArray = [];
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) =>{
    gsap.to(cursor,{
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.5,
        ease: "power2.out",
    });
});


document.addEventListener("click", function(event){
    const clickSfx = new Audio(" ");
    clickSfx.play();

    // const itemType = Math.random() > 0.5 ? "video" : "image";  
    let container = document.createElement("div");
    let elementWidth = 700;

    // if(itemType === "video"){
    //     const videonumber = Math.floor(Math.random() * 6) + 1;
    //     container.innerHTML = `<div class="video-container">
    //                                 <video autoplay loop>
    //                                     <source src="./saruku/video-${videonumber}.mp4" type="mp4/"/>
    //                                 </video>
    //                             </div>`;
    // } else{
        const imgnumber = Math.floor(Math.random() * 7) + 1;
        container.innerHTML = `<div class="img-container">
                                    <img src="./media/image${imgnumber}.jpg" alt = "" />
                                </div>`;
    // }

    const appendedElement = container.firstChild;
    document.querySelector(".items-container").appendChild(appendedElement);

    appendedElement.style.left = `${event.clientX - elementWidth/2}px`;
    appendedElement.style.top = `${event.clientY}px`;
    const randomRotation = Math.random() * 10 - 5;

    gsap.set (appendedElement,{
        scale: 0,
        rotation: randomRotation,
        transformOrigin: "center",
    });


    const tl = gsap.timeline();

    const randomScale = Math.random() * 0.5 + 0.5;
    tl.to(appendedElement,{
        scale: randomScale,
        duration: 0.5,
        delay: 0.1,
    });

    tl.to(appendedElement,{
        y: () => `-=500`,
        opacity: 1,
        duration: 4,
        ease: "none",
    },
    "<"
    ).to(appendedElement,{
        opacity: 0,
        duration: 1,
        onComplete: () => {
            appendedElement.parentNode.removeChild(appendedElement);
            const index = itemArray.indexOf(appendedElement);
            if(index > -1){
                itemArray.splice(index, 1);
            }
        },
    }, "-=0.5");
});

