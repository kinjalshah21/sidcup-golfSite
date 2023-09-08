let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 18 + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 110 + "px";
  cursorBlur.style.top = dets.y - 110 + "px";
});

let h4All = document.querySelectorAll("#nav h5");

h4All.forEach(function(element){
  element.addEventListener("mouseover",function(){
     cursor.style.scale = 3;
     cursor.style.border = "1px solid white";
     cursor.style.backgroundColor = "transparent";
  })
  element.addEventListener("mouseout",function(){
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
 })

})
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top - 11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top - 70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-content",{
  y:90,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:2,
  }
});

gsap.from("#comma-left",{
  x:-70,
  y:-70,
  scrollTrigger:{
    trigger:"#comma-left",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:3,
  }
});

gsap.from("#comma-right",{
  x:70,
  y:70,
  scrollTrigger:{
    trigger:"#comma-left",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:3,
  }
});

gsap.from("#page-fourth h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page-fourth h1",
    scroller:"body",
    start:"top 88%",
    end:"top 78%",
    scrub:3,
  }
});