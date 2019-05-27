$(function () {
    var overSkrift = $("text");
    var orangeStr = $(".st1");
    var redStr = $(".st2");
    var blueStr = $(".st3");

    var overSvg = $(".oversvg");
    var overSvgT = $(".oversvgT");
    var tl = new TimelineMax();
    console.log(overSvg);
    // TweenMax.to(overSvg[3], 1, {transform: "translate(50%, 50%)"});


    tl.staggerFrom(overSvg, 1, {
        transform: "translate(-100%, 150%)"
    }, 0.25);
});