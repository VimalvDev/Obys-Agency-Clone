export function page3Anim() {
  // Heading animation
  gsap.from("#page3 .left span", {
    opacity: 0,
    duration: 1.3,
    scrollTrigger: {
      once: true,
      start: "top 80%",
      trigger: "#page3 .p3top .left",
    },
  });
  gsap.from("#page3 .p3txt h1", {
    yPercent: 100,
    duration: 0.8,
    scrollTrigger: {
      once: true,
      start: "top 80%",
      trigger: "#page3 .p3txt",
    },
  });

  //parallax effect
  gsap.to(".blueBox", {
    yPercent: 3,
    ease: "none",
    scrollTrigger: {
      trigger: ".blueBoxContainer",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  //underline animation
  [".p3top .p3underline", ".p3Bottom .p3underline2"].forEach(
    (selector, index) => {
      gsap.from(selector, {
        xPercent: 100,
        ease: "power3.out",
        duration: 1.3,
        scrollTrigger: {
          trigger: selector,
          start: index == 0 ? "top 85%" : "top 30%",
          once: true,
        },
      });
    }
  );
  //underline text
  gsap.from(".p3Bottom .bTop .right p", {
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      once: true,
      trigger: ".p3Bottom .bTop .right",
      start: "top 30%",
    },
  });

  //paragraph animation
  [".p3content2 .top p span", ".p3content2 .bottomParaRight"].forEach(
    (selector) => {
      gsap.from(selector, {
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          once: true,
          trigger: selector,
          start: "top 70%",
        },
      });
    }
  );
}
