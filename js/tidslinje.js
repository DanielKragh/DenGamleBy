//https://scrollmagic.io/docs/ScrollMagic.Scene.html
$(function () {
    var controller = new ScrollMagic.Controller();
    //console.log(controller);
    var FirstDotDuration = $("#firstDot").offset().top - $(window).scrollTop() - $(window).height() / 2;
    var SecondDotDuration = $("#secondDot").offset().top - $(window).scrollTop() - $(window).height() / 2;
    var ThirdDotDuration = $("#thirdDot").offset().top - $(window).scrollTop() - $(window).height() / 2;
    console.log(SecondDotDuration);
    var tween = new TimelineMax()
        .add(TweenMax.to($("#linje path"), 0.8, { strokeDashoffset: 2229, ease: Linear.easeNone }))
        .add(TweenMax.from($("#firstDot"), 0.2, {opacity: 0}));
    var scene = new ScrollMagic.Scene({duration: FirstDotDuration })
        .setTween(tween)
        .addIndicators()
        .addTo(controller)
    var tween2 = new TimelineMax()
        .add(TweenMax.to($("#linje path"), 0.9, { strokeDashoffset: 1487, ease: Linear.easeNone }))
        .add(TweenMax.from($("#secondDot"), 0.1, {opacity: 0}))
    var scene2 = new ScrollMagic.Scene({ triggerElement: "#firstDot", duration: SecondDotDuration})
        .setTween(tween2)
        .addIndicators()
        .addTo(controller);
    var tween3 = new TimelineMax()
        .add(TweenMax.to($("#linje path"), 0.9, { strokeDashoffset: 637, ease: Linear.easeNone }))
        .add(TweenMax.from($("#thirdDot"), 0.1, {opacity: 0}));
    var scene3 = new ScrollMagic.Scene({ triggerElement: "#secondDot", duration: ThirdDotDuration})
        .setTween(tween3)
        .addIndicators()
        .addTo(controller);
    scene.on("end", function(){
        scene2.duration($("#secondDot").offset().top - $(window).scrollTop() - $(window).height() / 2);
        $(".left").eq(0).toggleClass("fade-in-from-left");
        $(".right").eq(0).toggleClass("fade-in-from-right");
    });
    scene2.on("end", function(){
        scene3.duration($("#thirdDot").offset().top - $(window).scrollTop() - $(window).height() / 2);
        $(".left").eq(1).toggleClass("fade-in-from-left");
        $(".right").eq(1).toggleClass("fade-in-from-right");
    });
    scene3.on("end", function(){
        $(".left").eq(2).toggleClass("fade-in-from-left");
        $(".right").eq(2).toggleClass("fade-in-from-right");
    });
    $(window).on("scroll", function () {
        //console.log($(window).scrollTop());
        //console.log($("#firstDot").offset().top/2 - $(window).scrollTop());
    });
});
//FirstDot: 2229
//SecondDot: 1487
//ThirdDot: 637