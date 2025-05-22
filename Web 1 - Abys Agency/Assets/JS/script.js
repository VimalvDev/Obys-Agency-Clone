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
function parallax() {
  //page1
  gsap.to(".video", {
    yPercent: 35,
    ease: "none",
    scrollTrigger: {
      trigger: ".p1content2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  //page2
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

}
parallax();
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
  document.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });
  });
}
customCursor();
function magnetEffect() {
  Shery.makeMagnet("nav li");
}
magnetEffect();
function page1Anim() {
  let videoCursorContainer = document.querySelector(".video");

  videoCursorContainer.addEventListener("mousemove", (e) => {
    gsap.to(".videoCursor", {
      x: e.clientX,
      y: e.clientY,
    });
  });
}
page1Anim();
function page3Anim() {
  gsap.from(".p3underline", {
    xPercent: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".p3underline",
      start: "top 90%",
      end:"top 70%",
      marker: "true",
      scrub:true
    }
  })
}
page3Anim();
