import { cursor } from "./cursor.js";
export function startingLoader() {
  const tl = gsap.timeline();

  tl.from("#loader .line h1", {
    yPercent: 100,
    stagger: 0.2,
    duration: 0.7,
    delay: 0.3,
  });
  tl.from(".txt", {
    opacity: 0,
  });
  tl.add(() => {
    const countdown = document.querySelector(".countdown");
    if (!countdown) return;

    let count = 0;
    let interval = () => {
      if (count <= 100) {
        countdown.textContent = count++;
        requestAnimationFrame(interval);
      } else {
        resumeTimeline();
      }
    };
    interval();
    tl.pause();
  }, "+=0.3");

  const resumeTimeline = () => {
    tl.resume();
    tl.to("#loader .line span", {
      opacity: 0,
      stagger: 0.1,
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
    tl.add(() => {
      cursor();
    }, "-=0.5")
  };
}
