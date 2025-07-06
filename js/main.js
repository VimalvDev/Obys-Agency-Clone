window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

import { startingLoader } from "./utils/loader.js";
import { page1Anim } from "./sections/section1.js";
import { cursor } from "./utils/cursor.js"
import { page2Anim } from "./sections/section2.js";
import { page3Anim } from "./sections/section3.js";
import { page4Anim } from "./sections/section4.js";

startingLoader();
cursor();
page1Anim();
page2Anim();
page3Anim();
page4Anim();
