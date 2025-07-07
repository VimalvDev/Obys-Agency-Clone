export function page1Anim() {
  const nav = document.querySelector(".navRight");
  const hoverTxt = document.querySelector(".p1txtHover");
  const hoverImg = document.querySelector(".hoverImg");
  const videoCont = document.querySelector(".videoContainer");
  const videoCursor = document.querySelector(".videoCursor");
  const video = document.querySelector(".videoContainer video");

  //nav auto hide
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

  //hoverImg
  const handleHoverMove = (pos) => {
    const rect = hoverImg.getBoundingClientRect();
    const offsetX = rect.width / 2;
    const offsetY = rect.height / 2;

    // Centering the image
    gsap.to(hoverImg, {
      opacity: 1,
      left: pos.clientX - offsetX,
      top: pos.clientY - offsetY,
      skewX: pos.movementX * 0.3,
      skewY: pos.movementY * 0.3,
    });
  };

  hoverTxt.addEventListener("mouseenter", () => {
    hoverTxt.addEventListener("mousemove", handleHoverMove);
  });
  hoverTxt.addEventListener("mouseleave", () => {
    hoverTxt.removeEventListener("mousemove", handleHoverMove);
    gsap.to(hoverImg, { opacity: 0 });
  });

  //parallax effect of video
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
  // Video cursor
  videoCont.addEventListener("click", () => {
    const isPaused = video.paused;

    // Play/Pause video
    if (isPaused) {
      video.play();

      gsap.to(video, {
        opacity: 1,
        duration: 0.1,
      });

      videoCursor.innerHTML = `<i class="ri-pause-line"></i>`;
      gsap.to(videoCursor, {
        scale: 0.6,
      });
    } else {
      video.pause();

      gsap.to(video, {
        opacity: 0,
        duration: 0.1,
      });

      videoCursor.innerHTML = `<i class="ri-play-fill play"></i>`;
      gsap.to(videoCursor, {
        scale: 1,
      });
    }
  });
}
