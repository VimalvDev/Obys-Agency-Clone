//================loader animation============================
//up
gsap.from(".line h1", {
  yPercent: 100,
  stagger: 0.3,
  duration: 0.7,
  delay: 0.2,
});

//timer

gsap.from(".timer", {
  opacity: 0,
  delay: 1,
  onStart: function () {
    let countdown = document.querySelector(".countdown");
    let count = 0;
    let timefun = setInterval(() => {
      if (count <= 100) {
        countdown.textContent = count++;
      }
    }, 25);
  },
});
//end
gsap.to(".line span", {
  opacity: 0,
  stagger: 0.1,
  delay: 3.5,
});
gsap.to(".line h1", {
  opacity: 0,
  stagger: 0.1,
  delay: 4,
});
gsap.to("#loader", {
  yPercent: -100,
  duration: 1.5,
  ease: "power4.out",
  delay: 4.5,
});

//nowTxt
