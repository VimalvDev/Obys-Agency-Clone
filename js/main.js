// scroll to top on reload
window.addEventListener("load", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// lenis js smooth scrolling
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// importing functions
// import { startingLoader } from "./utils/loader.js";
import { page1Anim } from "./sections/section1.js";
import { page2Anim } from "./sections/section2.js";
import { page3Anim } from "./sections/section3.js";
import { page4Anim } from "./sections/section4.js";

// Calling function
// startingLoader();
page1Anim();
page2Anim();
page3Anim();
page4Anim();
