export function page3Anim() {
  //parallax effect
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      gsap.to(".blueBox", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".blueBoxContainer",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
  });

  //heading animation
  gsap.from("#page3 .left span", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      once: true,
      start: "top 85%",
      trigger: "#page3 .p3txt",
    },
  });

  gsap.from("#page3 .p3txt h1", {
    yPercent: 100,
    scrollTrigger: {
      once: true,
      start: "top 85%",
      trigger: "#page3 .p3txt",
    },
  });
  //underline animation
  gsap.from(".p3underline", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p3underline",
      start: "top 95%",
      once: true,
    },
  });
  gsap.from(".p3underline2", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p3underline2",
      start: "top 75%",
      once: true,
    },
  });
  gsap.from(".p3Bottom .bTop .right p", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".p3Bottom .bTop .right",
      start: "top 75%",
    },
  });
  //paragraph animation
  gsap.from(".p3content2 .top p span", {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      once: true,
      trigger: ".p3content2 .top p",
      start: "top 85%",
    },
  });
  gsap.from(".p3content2 .bottomParaRight", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".p3content2 .bottomParaRight",
      start: "top 85%",
    },
  });
}

