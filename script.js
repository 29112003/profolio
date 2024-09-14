
function covertingInSpanChild(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        let parentSpan =  document.createElement("span")
        let childSpan = document.createElement("span")
        
        parentSpan.classList.add("parent");
        childSpan.classList.add("child");
    
        childSpan.innerHTML = elem.innerHTML;
    
        parentSpan.appendChild(childSpan)
        elem.innerHTML = "";
        elem.appendChild(parentSpan);
    })
}
covertingInSpanChild()
var loadinganimation =  function(){
    var tl = gsap.timeline();

    tl
    .from(".child span",{
        x:"100px",
        duration:1.3,
        stagger:0.2,
        ease:Power3.easeInOut
    })
    .to(".parent .child",{
        duration:1,
        y:"-100%",
        ease:Circ.easeInOut
    })
    
    .to(".loader",{
        height:"0%",
        duration:2,
        delay:-.7,
        ease:Circ.easeInOut,
    })
    .to(".green",{
        height:"100%",
        duration:2,
        delay:-2,
        ease:Circ.easeInOut,
    })
    .to(".page1",{
        height:"100%",
        duration:2,
        delay:-1.7,
        ease:Circ.easeInOut,
    })

}

loadinganimation(); 


