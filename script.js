var loadinganimation =  function(){
    var tl = gsap.timeline();

tl
.to(".fullscreen",{
    height:"0%",
    duration:2,
    delay:0.2,
    ease:Expo.easeInOut,
})
.to(".middle-mover",{
    height:"100%",
    duration:2,
    delay:-2,
    ease:Expo.easeInOut,
})
.to(".page1",{
    height:"100%",
    duration:2,
    delay:-1.7,
    ease:Expo.easeInOut,
})

}

loadinganimation();