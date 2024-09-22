
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
        top:0,
        duration:1,
        delay:-1,
        ease:Circ.easeInOut,
    })
    .to(".green",{
        height:"0%",
        duration:1,
        delay:-0.5,
        ease:Circ.easeInOut,
    })

}

var animateSvg = function(){
    document.addEventListener("DOMContentLoaded", function () {
        function animatingSvg() {
            
          const elements = document.querySelectorAll("#Visual path, #Visual polyline");
      
          console.log("Total elements to animate:", elements.length);
      
          elements.forEach(function (element) {
            // Ensure the element supports getTotalLength()
            if (typeof element.getTotalLength === "function") {
              try {
                const totalLength = element.getTotalLength();
                console.log(`Processing element ID: ${element.id}, Total Length: ${totalLength}`);
      
                if (totalLength === 0) {
                  console.warn(`Element ID: ${element.id} has a total length of 0. Animation may not be visible.`);
                  return; // Skip elements with zero length
                }
      
                // Set strokeDasharray and strokeDashoffset without 'px'
                element.style.strokeDasharray = totalLength;
                element.style.strokeDashoffset = totalLength;
      
                // Animate each element individually
                gsap.to(element, {
                  strokeDashoffset: 0,
                  duration: 1,
                  ease: "expo.inOut",
                  delay: 2,
                  onComplete: function () {
                    console.log(`Animation complete for element ID: ${element.id}`);
                  },
                });
              } catch (error) {
                console.error("Error processing element:", element, error);
              }
            } else {
              console.warn("Element does not support getTotalLength:", element);
            }
          });
        }
      
        // Trigger the SVG animation after ensuring all elements are rendered
        setTimeout(animatingSvg, 100); // Adjust delay if necessary
      });
}
  
covertingInSpanChild()
loadinganimation(); 
animateSvg();

