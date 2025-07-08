export function page2Anim() {
  //heading initial animation
  ["#page2 .leftPage span", "#page2 .heading2 h1"].forEach(
    (selector, index) => {
      gsap.from(selector, {
        opacity: 0,
        duration: index == 0 ? 1.3 : 0.8,
        scrollTrigger: {
          once: true,
          start: "top 80%",
          trigger: "#page2 .headingTxt",
        },
      });
    }
  );
  //description initial animation
  const descriptionArray = [
    ".boxes .imgBox:nth-of-type(1) .description",
    ".boxes .imgBox:nth-of-type(2) .description",
    ".boxes .imgBox:nth-of-type(5) .description",
    ".boxes .imgBox:nth-of-type(6) .description",
    ".boxes .imgBox:nth-of-type(7) .description",
    ".boxes .imgBox:nth-of-type(9) .description",
  ];
  descriptionArray.forEach((selector) => {
    gsap.from(selector, {
      opacity: 0,
      scrollTrigger: {
        once: true,
        trigger: selector,
        start: "top 85%",
      },
    });
  });

  // Underline animation
  const underlineArray = [
    ".p2underline",
    ".p2underlineBox1",
    ".p2underlineBox2",
    ".p2underlineBox3",
    ".p2underlineBox4",
    ".p2underlineBox5",
    ".p2underlineBox6",
  ];

  underlineArray.forEach((selector) => {
    gsap.from(selector, {
      xPercent: 100,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: selector,
        start: "top 90%",
        once: true,
      },
    });
  });

  //arrow boxes
  // Fade in Transition
  const arrowFadeArray = [
    ".arrowBox:nth-of-type(3) .circleBtn",
    ".arrowBox:nth-of-type(4) .circleBtn",
    ".arrowBox:nth-of-type(8) .circleBtn",
  ]
    arrowFadeArray.forEach((selector) => {
    gsap.from(selector, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: selector,
        start: "top 30%",
        once: true,
      },
    });
  });

  // Moving Animation of arrow circle
  const arrowAnimation = [
    {
      selector: ".arrowBox:nth-of-type(3) .circleBtn",
      yPercent: -50,
    },
    {
      selector: ".arrowBox:nth-of-type(4) .circleBtn",
      yPercent: -20,
    },
    {
      selector: ".arrowBox:nth-of-type(8) .circleBtn",
      yPercent: -60,
    },
  ];
  arrowAnimation.forEach((item) => {
    gsap.to(item.selector, {
      yPercent: item.yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: item.selector.split(" .")[0],
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  //gooey and wobble effect
  Shery.imageEffect(".img", {
    style: 5,
    config: {
      // === Primary Dynamics ===
      a: { value: 2, range: [0, 30] },
      b: { value: -0.19, range: [-1, 1] },
      displaceAmount: { value: 0.5 },

      // === Layout & Sizing ===
      zindex: { value: "0", range: [-9999999, 9999999] },
      aspect: { value: 1 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },

      // === Animation Durations ===
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      scrollLerp: { value: 0.07 },
      currentScroll: { value: 0 },

      // === Gooey Settings ===
      gooey: { value: true },
      infiniteGooey: { value: false },
      noEffectGooey: { value: false },
      growSize: { value: 1, range: [1, 15] },

      // === Masking ===
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },

      // === Scroll & Geometry ===
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },

      // === Interaction ===
      onMouse: { value: 1 },

      // === Noise & Metaball ===
      noise_speed: { value: 0.2, range: [0, 10] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
      metaball: { value: 0.5, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
    },
    gooey: true,
  });
}
