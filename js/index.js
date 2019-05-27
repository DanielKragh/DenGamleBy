$(function () {
    var overSkrift = $("text");
    var orangeStr = $(".st1");
    var redStr = $(".st2");
    var blueStr = $(".st3");

    var overSvg = $(".oversvg");
    var overSvgT = $(".oversvgT");
    var tl = new TimelineMax();
    tl.staggerFrom(overSvg, 1, {
        transform: "translate(-1000px, 200px)"
    }, 0.25);
});