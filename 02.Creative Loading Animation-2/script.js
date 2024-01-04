var t1 = gsap.timeline({ repeat: -1});

t1.to("section>.rect",{
    x:-250,
    duration:0.5,
    // scale:,
})
t1.to("section>.rect",{
    y:-250,
    duration:0.5,
    // scale:1.5,
    
})
t1.to("section>.rect",{
    x:0,
    duration:0.5,
    // scale:1.5,
    
})
t1.to("section>.rect",{
    y:0,
    duration:0.5,
    // scale:1.5,
    
})
