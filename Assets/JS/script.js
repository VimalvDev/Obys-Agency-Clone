window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

if (window.innerWidth < 500) gsap.ticker.lagSmoothing(1000, 16);
else gsap.ticker.lagSmoothing(0);

function startingAnim() {
  let tl = gsap.timeline();

  // 1️⃣ Initial loader entrance animation
  tl.from("#loader .line h1", {
    yPercent: 100,
    stagger: 0.2,
    duration: 0.7,
    delay: 0.2,
  });

  // 2️⃣ Countdown timer
  tl.add(() => {
    let countdown = document.querySelector(".countdown");
    let count = 0;

    let interval = setInterval(() => {
      if (count <= 100) {
        countdown.textContent = count++;
      } else {
        clearInterval(interval);

        // 3️⃣ Continue the rest of the timeline only after timer completes
        resumeTimeline();
      }
    }, 25);

    // Pause GSAP timeline until resumeTimeline is called
    tl.pause();
  }, "+=0.3");

  // 4️⃣ Define the rest of the animation in another timeline or function
  function resumeTimeline() {
    // Resume GSAP timeline
    tl.resume();

    // Continue timeline
    tl.from(".txt", {
      opacity: 0,
    });

    tl.to("#loader .line span", {
      opacity: 0,
      stagger: 0.1,
      // delay: 2,
    });

    tl.to(
      "#loader .line h1, .part2 .txt",
      {
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.5"
    );

    tl.to("#loader", {
      yPercent: -100,
      duration: 1.5,
      ease: "power3.out",
    });

    // Page1 animation
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
}
startingAnim();
function customCursor() {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: -1,
  });
}
customCursor();

function page1Anim() {
  //nav auto hide
  let lastScroll = window.scrollY;
  let nav = document.querySelector(".navRight");

  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      // Scrolling down
      gsap.to(nav, {
        top: "-50px",
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      // Scrolling up
      gsap.to(nav, {
        top: "0px",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
    lastScroll = currentScroll;
  });
  //nav magnet effect
  Shery.makeMagnet("nav li");
  Shery.makeMagnet(".navLeft i");

  //parallax effect
  gsap.to(".videoContainer", {
    yPercent: 40,
    ease: "none",
    scrollTrigger: {
      trigger: ".p1content2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  //hoverImg
  let hoverTxt = document.querySelector(".p1txtHover");
  let hoverImg = document.querySelector(".hoverImg");

  hoverTxt.addEventListener("mouseenter", () => {
    hoverTxt.addEventListener("mousemove", (pos) => {
      gsap.to(hoverImg, {
        opacity: 1,
        x: pos.clientX,
        y: pos.clientY,
        skewX: pos.movementX * 0.3,
        skewY: pos.movementY * 0.3,
      });
    });
  });
  hoverTxt.addEventListener("mouseleave", () => {
    gsap.to(hoverImg, {
      opacity: 0,
    });
  });
  //video cursor
  let videoCont = document.querySelector(".videoContainer");
  let videoCursor = document.querySelector(".videoCursor");
  let video = document.querySelector(".videoContainer video");

  function curPos(pos, immediate = false) {
    const cursorSize = videoCursor.offsetWidth / 2;

    gsap.to("#behindmouse", {
      opacity: 0,
      duration: 0.3,
    });

    gsap.to(videoCursor, {
      left: pos.clientX - cursorSize,
      top: pos.clientY - cursorSize,
      duration: 0.2,
      ease: "power3.out",
    });
  }

  videoCont.addEventListener("mouseenter", (e) => {
    curPos(e); // instantly move to mouse
    videoCont.addEventListener("mousemove", curPos);
  });

  videoCont.addEventListener("mouseleave", () => {
    gsap.to("#behindmouse", {
      opacity: 1,
      duration: 0.3,
    });

    gsap.to(videoCursor, {
      left: "70%",
      top: "-10%",
      duration: 0.6,
      ease: "power3.out",
    });

    videoCont.removeEventListener("mousemove", curPos);
  });

  videoCont.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      video.style.opacity = 1;
      videoCursor.innerHTML = `<i class="ri-pause-line"></i>`;
      gsap.to(videoCursor, {
        scale: 0.6,
      });
    } else {
      video.pause();
      video.style.opacity = 0;
      videoCursor.innerHTML = `<i class="ri-play-fill play"></i>`;
      gsap.to(videoCursor, {
        scale: 1,
      });
    }
  });
}
page1Anim();
function page2Anim() {
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
    },
  });

  ScrollTrigger.matchMedia({
    "(max-width: 768px)": function () {
      gsap.to(".boxes .imgBox:nth-of-type(1) .img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".imgBox",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(2) .img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(2)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(5) .img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(5)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(6) .img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(6)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(7) .img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(7)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".boxes .imgBox:nth-of-type(9) .img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".boxes .imgBox:nth-of-type(9)",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
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
      start: "top 100%",
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
      start: "top 100%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox2", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox2",
      start: "top 100%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox3", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox3",
      start: "top 100%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox4", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox4",
      start: "top 100%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox5", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox5",
      start: "top 100%",
      once: true,
    },
  });
  gsap.from(".p2underlineBox6", {
    xPercent: 100,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".p2underlineBox6",
      start: "top 100%",
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
page2Anim();

function page3Anim() {
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
page3Anim();
function page4Anim() {
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
page4Anim();
