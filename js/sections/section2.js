export function page2Anim() {
  //parallax effect
  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
      gsap.to(".boxes .imgBox:nth-of-type(1) .img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(1)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(2) .img", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(2)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(5) .img", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(5)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(6) .img", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(6)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(7) .img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(7)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(9) .img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(9)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      ScrollTrigger.refresh();

    },
  });
  //heading initial animation
  gsap.from("#page2 .leftPage span", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      once: true,
      start: "top 85%",
      trigger: "#page2 .headingTxt",
    },
  });

  gsap.from("#page2 .headingTxt h1", {
    yPercent: 100,
    scrollTrigger: {
      once: true,
      start: "top 85%",
      trigger: "#page2 .headingTxt",
    },
  });
  //description initial animation
  gsap.from(".boxes .imgBox:nth-of-type(1) .description", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".boxes .imgBox:nth-of-type(1) .description",
      start: "top 90%",
    },
  });
  gsap.from(".boxes .imgBox:nth-of-type(2) .description", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".boxes .imgBox:nth-of-type(2) .description",
      start: "top 90%",
    },
  });
  gsap.from(".boxes .imgBox:nth-of-type(5) .description", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".boxes .imgBox:nth-of-type(5) .description",
      start: "top 90%",
    },
  });
  gsap.from(".boxes .imgBox:nth-of-type(6) .description", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".boxes .imgBox:nth-of-type(6) .description",
      start: "top 90%",
    },
  });
  gsap.from(".boxes .imgBox:nth-of-type(7) .description", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".boxes .imgBox:nth-of-type(7) .description",
      start: "top 90%",
    },
  });
  gsap.from(".boxes .imgBox:nth-of-type(9) .description", {
    opacity: 0,
    scrollTrigger: {
      once: true,
      trigger: ".boxes .imgBox:nth-of-type(9) .description",
      start: "top 90%",
    },
  });

  //heading underline
  gsap.from(".p2underline", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underline",
      start: "top 90%",
      once: true,
    },
  });

  //boxes underline
  gsap.from(".p2underlineBox1", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox1",
      start: "top 90%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox2", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox2",
      start: "top 90%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox3", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox3",
      start: "top 90%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox4", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox4",
      start: "top 90%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox5", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox5",
      start: "top 90%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox6", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox6",
      start: "top 90%",
      once: true,
    },
  });

  //arrow boxes
  gsap.from(".arrowBox:nth-of-type(3) .circleBtn", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(3)",
      start: "top 30%",
      once: true,
    },
  });

  gsap.to(".arrowBox:nth-of-type(3) .circleBtn", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(3)",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".arrowBox:nth-of-type(4) .circleBtn", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(4)",
      start: "top 70%",
      once: true,
    },
  });
  gsap.to(".arrowBox:nth-of-type(4) .circleBtn", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(4)",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.from(".arrowBox:nth-of-type(8) .circleBtn", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(8)",
      start: "top 10%",
      once: true,
    },
  });
  gsap.to(".arrowBox:nth-of-type(8) .circleBtn", {
    yPercent: -60,
    ease: "none",
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(8)",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  //gooey and wobble effect
  Shery.imageEffect(".img", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: -0.19, range: [-1, 1] },
      zindex: { value: "0", range: [-9999999, 9999999] }, // Neutral z-index
      aspect: { value: 1 }, // Use a default aspect ratio, adjust per image
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 1, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false }, // Disable masker to avoid hiding images
      maskVal: { value: 1, range: [1, 5] }, // Neutral value
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false }, // Enable gooey effect
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.5, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}

