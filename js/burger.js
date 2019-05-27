document.addEventListener("DOMContentLoaded", function (event) {
    var burger = document.querySelector("#Burger");
    var top = document.querySelector("#top");
    var mid = document.querySelector("#mid");
    var bot = document.querySelector("#bot");
    var tl = new TimelineMax({
        paused: true
    });
    // animationer
    tl.to(bot, 1, {
        y: "100%",
        ease: CustomEase.create("custom", "M0,0 C0,0 0.162,0.164 0.226,0.046 0.25,0 0.316,-0.198 0.39,-0.166 0.549,-0.097 0.43,1.21 0.582,1.228 0.641,1.235 0.678,0.874 0.782,0.948 0.922,1.047 1,1 1,1")
    }, '0');
    tl.to(top, 1.5, {
        rotation: 45,
        transformOrigin: "left 50%",
        x: "15%",
        ease: CustomEase.create("custom", "M0,0 C0,0 0.162,0.164 0.226,0.046 0.25,0 0.316,-0.198 0.39,-0.166 0.549,-0.097 0.43,1.21 0.582,1.228 0.641,1.235 0.678,0.874 0.782,0.948 0.922,1.047 1,1 1,1")
    }, '0');
    tl.to(mid, 1.5, {
        rotation: -45,
        transformOrigin: "right 50%",
        y: "-250%",
        x: "-15%",
        ease: CustomEase.create("custom", "M0,0 C0,0 0.162,0.164 0.226,0.046 0.25,0 0.316,-0.198 0.39,-0.166 0.549,-0.097 0.43,1.21 0.582,1.228 0.641,1.235 0.678,0.874 0.782,0.948 0.922,1.047 1,1 1,1")
    }, '0');
    // afspil
    burger.addEventListener("click", function () {
        if (tl.progress() === 1) {
            tl.reverse();
        } else {
            tl.play();
        }

    });


});