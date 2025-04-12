//================loader animation============================
//up 
gsap.from(".line h1", {
    yPercent: 100,
    stagger: .3,
    duration: .7,
    delay:.2
})

//timer 
let countdown = document.querySelector(".countdown")
let count = 0;
let timefun = setInterval(() => {
    if (count <= 100)
    {
        countdown.textContent = count++;
    }

},30)
