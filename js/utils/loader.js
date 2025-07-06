export function startingLoader() {
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

  // 4️⃣ Define the rest of the animation
  function resumeTimeline() {
    tl.resume();
    tl.from(".txt", {
      opacity: 0,
    });
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
  }
}
