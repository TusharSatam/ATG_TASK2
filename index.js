const svgBar = document.querySelector(".svgBar");
const opaqueRing = document.querySelector("#Opaque_Ring");
const purple = "#7421b8";
const blue = "#4D26CB";
const black = "#0E103A";
const BlackS4 = "#0e0a0a";
const BlueS5 = "#124BA1";
const DarkBlueS6 = "#0D3879";
const green = "#0c8b2c";

window.addEventListener("scroll", function() {
  const windowHeight = window.innerHeight;
  const windowY = window.scrollY;
  const totalHeight = document.body.clientHeight;

  const firstStop = Math.round(windowHeight * 0.9);
  const secondStop = Math.round(windowHeight * 1.8);
  const thirdStop = Math.round(windowHeight * 2.7);
  const FourthStop = Math.round(windowHeight * 3.6);
  const FifthStop = Math.round(windowHeight * 4.5);
  const SixthStop = Math.round(windowHeight * 5.4);


  if (windowY >= 0 && windowY < firstStop) {
    opaqueRing.style.strokeDasharray = "10, 1000";
    svgBar.style.backgroundImage = `linear-gradient(to right, ${purple} 60%, ${purple} 100%)`;
  } else if (windowY >= firstStop && windowY < secondStop) {
    opaqueRing.style.strokeDasharray = "130, 1000";
    svgBar.style.backgroundImage = `linear-gradient(to right, ${blue} 60%, ${blue} 100%)`;
  } else if (windowY >= secondStop && windowY <= thirdStop) {
    opaqueRing.style.strokeDasharray = "280, 1000";
    svgBar.style.backgroundImage = `linear-gradient(to right, ${black} 60%, ${black} 100%)`;
  }
  else if (windowY >= thirdStop && windowY <= FourthStop) {
    opaqueRing.style.strokeDasharray = "410, 1000";
    svgBar.style.backgroundImage = `linear-gradient(to right, ${BlackS4} 60%, ${BlackS4} 100%)`;
  }
  else if (windowY >= FourthStop && windowY <= FifthStop) {
    opaqueRing.style.strokeDasharray = "530, 1000";
    svgBar.style.backgroundImage = `linear-gradient(to right, ${BlueS5} 60%, ${BlueS5} 100%)`;
  }
  else if (windowY >= FifthStop && windowY <= SixthStop) {
    opaqueRing.style.strokeDasharray = "670, 1000";
    svgBar.style.backgroundImage = `linear-gradient(to right, ${DarkBlueS6} 60%, ${DarkBlueS6} 100%)`;
  }
  else if (windowY >= SixthStop && windowY <= totalHeight - windowHeight) {
    opaqueRing.style.strokeDasharray = "810, 1000";
    svgBar.style.backgroundImage = `linear-gradient(to right, ${green} 60%, ${green} 100%)`;
  }

});


// const svgBar = document.querySelector(".svgBar");
// const purple = "#7421b8";
// const blue = "#4D26CB";
// const black = "#0E103A";
// const BlackS4 = "#0e0a0a";
// const BlueS5 = "#124BA1";
// const DarkBlueS6 = "#0D3879";
// const green = "#0c8b2c";


// window.addEventListener("scroll", function() {
//   const windowY = window.scrollY;
//   if (windowY >= 0 && windowY < 350) {
//     svgBar.style.backgroundImage = `linear-gradient(to right, ${purple} 60%, ${purple} 100%)`;
//   } else if (windowY >= 350 && windowY < 1100) {
//     svgBar.style.backgroundImage = `linear-gradient(to right, ${blue} 60%, ${blue} 100%)`;
//   } else if (windowY >= 1100 && windowY <= 1860) {
//     svgBar.style.backgroundImage = `linear-gradient(to right, ${black} 60%, ${black} 100%)`;
//   }
//   else if (windowY >= 1860 && windowY <= 2600) {
//     svgBar.style.backgroundImage = `linear-gradient(to right, ${BlackS4} 60%, ${BlackS4} 100%)`;
//   }
//   else if (windowY >= 2600 && windowY <= 3360) {
//     svgBar.style.backgroundImage = `linear-gradient(to right, ${BlueS5} 60%, ${BlueS5} 100%)`;
//   }
//   else if (windowY >= 3360 && windowY <= 4120) {
//     svgBar.style.backgroundImage = `linear-gradient(to right, ${DarkBlueS6} 60%, ${DarkBlueS6} 100%)`;
//   }
//   else if (windowY >= 4120 && windowY <= 4900) {
//     svgBar.style.backgroundImage = `linear-gradient(to right, ${green} 60%, ${green} 100%)`;
//   }

// });

//   ----------------------------------------------

gsap.from(".rightSide_Container1 .img_1",{
    y:200,
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger: {
        trigger: ".rightSide_Container1 .img_1",    
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                // Restart the animation when the trigger reaches the center marker
                gsap.fromTo(".rightSide_Container1 .img_1", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: .8});
            }
        }
    }
})
gsap.from(".rightSide_Container1 .img_2",{
    y:200,
    opacity:0,
    duration:1.5,
    delay:1,
    scrollTrigger: {
        trigger: ".rightSide_Container1 .img_2",
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                // Restart the animation when the trigger reaches the center marker
                gsap.fromTo(".rightSide_Container1 .img_2", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: 1});
            }
        }
    }
})
gsap.from(".leftSide_Container1 .topHeading1,.mainContent1 p",{
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".leftSide_Container1 .topHeading1,.mainContent1 p",     
        toggleActions: "restart reverse restart reverse",
        // markers: true,
        end:"top",
    }
})
gsap.from(".viewCS",{
    y: 50,
    opacity: 0,
    transform: "scale(0)",
    duration: 1,
    scrollTrigger: {
        // markers:true,
        trigger: ".viewCS",
        // end: "top 80%",
        // start: "bottom 20%",
        toggleActions: "restart reverse restart reverse"
    }
});


// ----------------screen2------------------

//   const svgBar = document.querySelector('.svgBar');

  window.addEventListener('scroll', function() {
    // if (window.scrollY > 404) {
        console.log(window.scrollY);
    //   svgBar.style.backgroundImage = 'none';
    //   svgBar.style.background = 'linear-gradient(to right, #7421b8 60%, #501386 100%)';

    // } 
  });



gsap.from(".rightSide_Container2 .img_1",{
    y:200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        trigger: ".rightSide_Container2 .img_1",    
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                // Restart the animation when the trigger reaches the center marker
                gsap.fromTo(".rightSide_Container2 .img_1", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: .8});
            }
        }
    }
})

gsap.from(".rightSide_Container2 .img_2",{
    y:-200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        // markers:true,
        start:"center center",
        trigger: ".rightSide_Container2 .img_2",    
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.from(".leftSide_Container2 .topHeading2,.mainContent2 p",{
    y:-70,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        trigger: ".leftSide_Container2 .topHeading2,.mainContent2 p",     
        toggleActions: "restart reverse restart reverse",
        // markers: true,
        end:"top",
    }
})
gsap.from(".CS",{
    y: 70,
    opacity: 0,
    transform: "scale(0)",
    duration: .8,
    ease: "power3.out",
    scrollTrigger: {
        // markers:true,
        trigger: ".mainContent2",
        // end: "top 80%",
        // start: "bottom 20%",
        toggleActions: "restart reverse restart reverse"
    }
});

// ---------------------------Screen 3--------------------------------------


gsap.from(".rightSide_Container3 .img_1",{
    y:200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        trigger: ".rightSide_Container3 .img_1",    
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                gsap.fromTo(".rightSide_Container3 .img_1", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: .8});
            }
        }
    }
})

gsap.from(".rightSide_Container3 .img_2",{
    y:-200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"center center",
        trigger: ".rightSide_Container3 .img_2",    
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.from(".leftSide_Container3 .topHeading3,.mainContent3 p",{
    y:-70,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".leftSide_Container3 .topHeading3,.mainContent3 p",     
        toggleActions: "restart reverse restart reverse",
        end:"top",
    }
})

gsap.from(".bottomContent3 .CS",{
    y: 70,
    opacity: 0,
    transform: "scale(0)",
    duration: .8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".bottomContent3 .CS",
        toggleActions: "restart reverse restart reverse"
    }
});


// ---------------------------Screen 4--------------------------------------


gsap.from(".rightSide_Container4 .img_1",{
    y:200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        trigger: ".rightSide_Container4 .img_1",    
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                gsap.fromTo(".rightSide_Container4 .img_1", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: .8});
            }
        }
    }
})

gsap.from(".rightSide_Container4 .img_2",{
    y:-200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"center center",
        trigger: ".rightSide_Container4 .img_2",    
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.from(".rightSide_Container4 .img_3",{
    x:-200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"center center",
        trigger: ".rightSide_Container4 .img_3",    
        toggleActions: "restart reverse restart reverse",
    }
})
gsap.from(".rightSide_Container4 .img_4",{
    y:-100,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"bottom bottom",
        trigger: ".rightSide_Container4 .img_4",    
        toggleActions: "restart reverse restart reverse",
    }
})
gsap.from(".rightSide_Container4 .img_5",{
    y:-100,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"top 90%",
        trigger: ".rightSide_Container4 .img_5",    
        toggleActions: "restart reverse restart reverse",
    }
})
gsap.from(".leftSide_Container4 .topHeading4,.mainContent4 p",{
    y:-70,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".leftSide_Container4 .topHeading4,.mainContent4 p",     
        toggleActions: "restart reverse restart reverse",
        end:"top",
    }
})

gsap.from(".bottomContent4 .View",{
    y: 70,
    opacity: 0,
    transform: "scale(0)",
    duration: .8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".bottomContent4 .View",
        toggleActions: "restart reverse restart reverse"
    }
});

// -------------------------Screen 5--------------------------------


gsap.from(".rightSide_Container5 .img_1",{
    y:200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        trigger: ".rightSide_Container5 .img_1",    
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                gsap.fromTo(".rightSide_Container5 .img_1", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: .8});
            }
        }
    }
})

gsap.from(".rightSide_Container5 .img_2",{
    x:200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"center center",
        trigger: ".rightSide_Container5 .img_2",    
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.from(".rightSide_Container5 .img_3",{
    y:-200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"center center",
        trigger: ".rightSide_Container5 .img_3",    
        toggleActions: "restart reverse restart reverse",
    }
})
gsap.from(".rightSide_Container5 .img_4",{
    y:-100,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"bottom bottom",
        trigger: ".rightSide_Container5 .img_4",    
        toggleActions: "restart reverse restart reverse",
    }
})
gsap.from(".rightSide_Container5 .img_5",{
    y:100,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        start:"top 90%",
        trigger: ".rightSide_Container5 .img_5",    
        toggleActions: "restart reverse restart reverse",
    }
})
gsap.from(".leftSide_Container5 .topHeading5,.mainContent5 p",{
    y:70,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".leftSide_Container5 .topHeading5,.mainContent5 p",     
        toggleActions: "restart reverse restart reverse",
        end:"top",
    }
})

gsap.from(".bottomContent5 .View5",{
    y: 70,
    opacity: 0,
    transform: "scale(0)",
    duration: .8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".bottomContent5 .View5",
        toggleActions: "restart reverse restart reverse"
    }
});

// -------------------------Screen 6--------------------------------


gsap.from(".rightSide_Container6 .img_1",{
    y:200,
    opacity:0,
    duration:1,
    delay:.5,
    scrollTrigger: {
        trigger: ".rightSide_Container6 .img_1",    
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                gsap.fromTo(".rightSide_Container6 .img_1", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: .8});
            }
        }
    }
})

gsap.from(".leftSide_Container6 .topHeading6,.mainContent6 p",{
    y:70,
    opacity:0,
    duration:1,
    delay:.3,
    scrollTrigger: {
        trigger: ".leftSide_Container6 .topHeading6,.mainContent6 p",     
        toggleActions: "restart reverse restart reverse",
        end:"top",
    }
})

gsap.from(".bottomContent6 .View6",{
    y: 70,
    opacity: 0,
    transform: "scale(0)",
    duration: .8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".bottomContent6 .View6",
        toggleActions: "restart reverse restart reverse"
    }
});
// -------------------------Screen 7--------------------------------


gsap.from(".rightSide_Container7 .img_1",{
    y:00,
    opacity:0,
    duration:.8,
    scrollTrigger: {
        trigger: ".rightSide_Container7 .img_1",    
        toggleActions: "restart reverse restart reverse",
        onToggle: self => {
            if (self.isActive && self.direction === 1 && self.scrollDirection === -1) {
                gsap.fromTo(".rightSide_Container7 .img_1", {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: .8});
            }
        }
    }
})

gsap.from(".leftSide_Container7 .topHeading7,.mainContent7 p,.mainContent7 h1",{
    y:70,
    opacity:0,
    duration:1,
    delay:.3,
    scrollTrigger: {
        trigger: ".leftSide_Container7 .topHeading7,.mainContent7 p,.mainContent7 h1",     
        toggleActions: "restart reverse restart reverse",
        end:"top",
    }
})

gsap.from(".bottomContent7 .CS7",{
    y: 70,
    opacity: 0,
    transform: "scale(0)",
    duration: .8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".mainContent7",
        toggleActions: "restart reverse restart reverse"
    }
});