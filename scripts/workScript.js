
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


document.addEventListener("DOMContentLoaded", () => {
    const itemsContainer = document.querySelector(".items");
    const itemscols = document.querySelectorAll(".items-col");
    const filters = document.querySelectorAll(".filter");
    const defaultFontSize = "75px";
    const activeFontSize = "250px";

    function splitTextIntoSpans(selector){
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const text = element.innerText;
            element.innerHTML = text
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");
        });
    }

    function animateFontSize(target, fontSize){
        const spans = target.querySelectorAll("span");
        gsap.to(spans, {
            fontSize: fontSize,
            stagger: 0.025,
            duration: 0.5,
            ease: "power2.out",
        });
    }

    function clearItems(){
        itemscols.forEach((col) => {
            col.innerHTML = "";
        });
    }

    function addItemsToCols(filter = "all"){
        let colIndex = 0;
        const filteredItems = items.filter(
            (item) => (filter === "all" || item.tag.includes(filter))
        );

        filteredItems.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.className = "item";
            itemElement.innerHTML = `   <div class="item-img">
                                            <img src="${item.img}" alt="">
                                        </div>
                                        <div class="item-copy"><p>${item.title}</p></div>
                                        `;
            itemscols[colIndex % itemscols.length].appendChild(itemElement);
            colIndex++;
        });
    }

    function animateItems(filter){
        gsap.to(itemsContainer, {
            opacity: 0,
            duration: 0.25,
            onComplete: () =>{
                clearItems();
                addItemsToCols(filter);
                gsap.to(itemsContainer,{
                    opacity: 1,
                    duration: 0.25,
                });
            },
        });
    }

    splitTextIntoSpans(".filter h1");
    animateFontSize(document.querySelector(".filter.active h1"), activeFontSize);
    addItemsToCols();

    filters.forEach((filter) => {
        filter.addEventListener("click", function(){
            if(this.classList.contains("active")){
                return;
            }

            const previousActiveFilterH1 = 
                document.querySelector(".filter.active h1");
            animateFontSize(previousActiveFilterH1, defaultFontSize);

            filters.forEach((f) => f.classList.remove("active"));
            this.classList.add("active");

            const newActiveFilterH1 = this.querySelector("h1");
            animateFontSize(newActiveFilterH1, activeFontSize);

            const filterValue = this.getAttribute("data-filter");
            animateItems(filterValue);
        });
    });
});


{/* <div class="container">
<div class="filters">
    <div class="filter active" data-filter="all">
        <p>(34)</p>
        <h1>All</h1>
    </div>
    <div class="filter" data-filter="mix">
        <p>(12)</p>
        <h1>Photography</h1>
    </div>
    <div class="filter" data-filter="design">
        <p>(12)</p>
        <h1>Projects</h1>
    </div>
    <div class="filter" data-filter="production">
        <p>(10)</p>
        <h1>Production</h1>
    </div>
</div>
<div class="items">
    <div class="items-col"></div>
    <div class="items-col"></div>
</div>
</div> */}