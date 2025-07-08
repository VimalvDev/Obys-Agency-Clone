export function page4Anim() {
  let headingTxt = document.querySelector(".heading4 .headingTxt");
  let normalTxtChar = document.querySelectorAll(".normalTxt span");
  let italicTxtChar = document.querySelectorAll(".italicTxt span");
  let arrowSvg = document.querySelector(".headingTxt svg");
  
  //heading fade in
  gsap.set(italicTxtChar, {
    opacity:0
  })
  headingTxt.addEventListener("mouseenter", () => {
    gsap.to(normalTxtChar, {
      opacity: 0,
      stagger: 0.05,
    });
    gsap.to(italicTxtChar, {
      opacity: 1,
      stagger: 0.09,
    });
    gsap.to(arrowSvg, {
      x: "6vw",
      delay: 0.8,
    });
  });
  headingTxt.addEventListener("mouseleave", () => {
    gsap.to(normalTxtChar, {
      opacity: 1,
      stagger: 0.05,
    });
    gsap.to(italicTxtChar, {
      opacity: 0,
      stagger: 0.02,
    });
    gsap.to(arrowSvg, {
      x: "0vw",
      delay: 0.4,
    });
  });

  //heading underline
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      [".p4underline", ".p4underline2"].forEach((selector) => {
        
        gsap.from(selector, {
          xPercent: 100,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: selector,
            start: "top 30%",
            once: true,
          },
        });
      })
    }
  })
}

