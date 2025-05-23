function lenisStart() {
  const lenis = new Lenis({
    duration: 2, // Controls how "slow/smooth" the scroll feels (default: 1.2)
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}
lenisStart();

function startingAnim() {
  let tl = gsap.timeline();
  //up
  tl.from("#loader .line h1", {
    yPercent: 100,
    stagger: 0.2,
    duration: 0.7,
    delay: 0.2,
  });
  //timer
  tl.from(
    ".timer",
    {
      opacity: 0,
      onStart: function () {
        let countdown = document.querySelector(".countdown");
        let count = 0;
        let timefun = setInterval(() => {
          if (count <= 100) {
            countdown.textContent = count++;
          } else {
            clearInterval(timefun);
          }
        }, 25);
      },
    },
    0.6
  );
  tl.from(
    ".txt",
    {
      opacity: 0,
    },
    1
  );

  //end
  tl.to(
    "#loader .line span",
    {
      opacity: 0,
      stagger: 0.1,
    },
    "+=1.5"
  );
  tl.to(
    "#loader .line h1,.part2 .txt",
    {
      opacity: 0,
      stagger: 0.1,
    },
    "-=0.5"
  );
  tl.to("#loader", {
    yPercent: -100,
    duration: 1.5,
    ease: "power4.out",
  });
  //page1
  tl.from(
    ".p1content1 .right h1",
    {
      yPercent: 100,
      stagger: 0.2,
      duration: 0.7,
    },
    "-=1.4"
  );
}
startingAnim();
function customCursor() {
  // document.addEventListener("mousemove", (e) => {
  //   gsap.to("#cursor", {
  //     x: e.clientX,
  //     y: e.clientY,
  //     duration: 0.1,
  //   });
  // });
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: -1,
  });
}
customCursor();

function page1Anim() {
  //nav magnet effect
  Shery.makeMagnet("nav li");
  Shery.makeMagnet(".navLeft i");
  //parallax effect
  gsap.to(".videoContainer", {
    yPercent: 35,
    ease: "none",
    scrollTrigger: {
      trigger: ".p1content2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  //video cursor
  let videoCont = document.querySelector(".videoContainer");
  let videoCursor = document.querySelector(".videoCursor");
  
  videoCont.addEventListener("mouseenter", () => {
    videoCont.addEventListener("mousemove", (pos) => {
      gsap.to(videoCursor, {
        // left: pos.x - 600,
        // y: pos.y - 100,
        x: pos.clientX,
        y:pos.clientY
      });
    });
  });
}
page1Anim();
function page2Anim() {
  //parallax effect
  gsap.to(".arrowBox:nth-of-type(3) .circleBtn", {
    yPercent: -60,
    rotate: "40deg",
    ease: "none",
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(3)",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".arrowBox:nth-of-type(4) .circleBtn", {
    yPercent: -60,
    rotate: "49deg",
    ease: "none",
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(4)",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".arrowBox:nth-of-type(8) .circleBtn", {
    yPercent: -60,
    rotate: "-45deg",
    ease: "none",
    scrollTrigger: {
      trigger: ".arrowBox:nth-of-type(8)",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".boxes .imgBox:nth-of-type(1) .img", {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: ".imgBox",
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
    yPercent: -10,
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
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: ".boxes .imgBox:nth-of-type(7)",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".boxes .imgBox:nth-of-type(9) .img", {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: ".boxes .imgBox:nth-of-type(9)",
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
page2Anim();

function page3Anim() {
  //parallax effect
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
  //underline animation
  gsap.from(".p3underline", {
    xPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".p3underline",
      start: "top 90%",
      end: "top 70%",
      marker: "true",
      scrub: true,
    },
  });
}
page3Anim();
