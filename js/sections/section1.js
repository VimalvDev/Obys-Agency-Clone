export function page1Anim() {
  //nav auto hide
  let nav = document.querySelector(".navRight");
  let hoverTxt = document.querySelector(".p1txtHover");
  let hoverImg = document.querySelector(".hoverImg");
  let videoCont = document.querySelector(".videoContainer");
  let videoCursor = document.querySelector(".videoCursor");
  let video = document.querySelector(".videoContainer video");

  let lastScroll = window.scrollY;
  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    let isScrollingDown = currentScroll > lastScroll;

    gsap.to(nav, {
      top: isScrollingDown ? "-50px" : "0px",
      opacity: isScrollingDown ? 0 : 1,
      duration: 0.4,
      ease: "power2.out",
    });

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
