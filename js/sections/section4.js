export function page4Anim() {
  //heading fade in
  let headingTxt = document.querySelector(".heading4 .headingTxt");
  let normalTxtChar = document.querySelectorAll(".normalTxt span");
  let italicTxtChar = document.querySelectorAll(".italicTxt span");
  let arrowSvg = document.querySelector(".headingTxt svg");

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
  gsap.from(".p4underline", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p4underline",
      start: "top 75%",
      once: true,
    },
  });
  gsap.from(".p4underline2", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".infoBox",
      start: "top 85%",
      once: true,
    },
  });
  //
}

