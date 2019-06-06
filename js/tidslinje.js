//https://scrollmagic.io/docs/ScrollMagic.Scene.html
var addIndicators = false;

//We use onload here instead because jquery's onload event happens to early.
window.onload = function(){
    var controller = new ScrollMagic.Controller();
    var FirstDotDuration = $("#firstDot").position().top - $(window).height() / 2;
    var SecondDotDuration = $("#secondDot").position().top - $(window).height() / 2;
    var ThirdDotDuration = $("#thirdDot").position().top - $(window).height() / 2;
    var tween = new TimelineMax()
        .add(TweenMax.to($("#linje path"), 0.8, { strokeDashoffset: 2229, ease: Linear.easeNone }))
    var scene = new ScrollMagic.Scene({duration: FirstDotDuration-100 })
        .setTween(tween)
        .addTo(controller)
    var tween2 = new TimelineMax()
        .add(TweenMax.to($("#linje path"), 0.9, { strokeDashoffset: 1487, ease: Linear.easeNone }));
    var scene2 = new ScrollMagic.Scene({ triggerElement: "#firstDot", duration: SecondDotDuration - FirstDotDuration-200})
        .setTween(tween2)
        .addTo(controller);
    var tween3 = new TimelineMax()
        .add(TweenMax.to($("#linje path"), 0.9, { strokeDashoffset: 637, ease: Linear.easeNone })); //637
    var scene3 = new ScrollMagic.Scene({ triggerElement: "#secondDot", duration: ThirdDotDuration - SecondDotDuration-200})
        .setTween(tween3)
        .addTo(controller);
        
    scene.on("end", function(){
        $(".left").eq(0).toggleClass("fade-in-from-left");
        $(".right").eq(0).toggleClass("fade-in-from-right");
        $("#firstDot").toggleClass("show");
        animation1();
    });
    scene2.on("end", function(){
        $(".left").eq(1).toggleClass("fade-in-from-left");
        $(".right").eq(1).toggleClass("fade-in-from-right");
        $("#secondDot").toggleClass("show");    
        animation2()
    });
    scene3.on("end", function(){
        $(".left").eq(2).toggleClass("fade-in-from-left");
        $(".right").eq(2).toggleClass("fade-in-from-right");
        $("#thirdDot").toggleClass("show");
        animation3()
    });

    if(addIndicators){
        scene.addIndicators();
        scene2.addIndicators();
        scene3.addIndicators();
    }
    
    $(window).on("resize scroll", function(){
        FirstDotDuration = $("#firstDot").position().top - $(window).height() / 2;
        SecondDotDuration = $("#secondDot").position().top - $(window).height() / 2;
        ThirdDotDuration = $("#thirdDot").position().top - $(window).height() / 2;
        scene.duration(FirstDotDuration - 100);
        scene2.duration(SecondDotDuration - FirstDotDuration - 200);
        scene3.duration(ThirdDotDuration - SecondDotDuration - 200);
    });

}
//FirstDot: 2229
//SecondDot: 1487
//ThirdDot: 637