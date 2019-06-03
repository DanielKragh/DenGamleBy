function animation1() {
    var ani1 = $("#bombe-ani");
    var bombe = $("#bombe");
    var lunde = $("#lunde");
    var lundeIld = $("#lunde-ild");
    var boom = $("#boom");
    
    bombe.show();
    lunde.show();
    lundeIld.show();
    boom.hide();

    $("animateMotion")[0].beginElement();

    var tl = new TimelineLite({ paused: false });
    tl.fromTo($(".lunde-ani"), 3, {
        "stroke-dashoffset": 0
    }, {
        "stroke-dashoffset": 550,
        ease: Linear.easeNone,
        onComplete: function () {
            bombe.hide();
            lunde.hide();
            lundeIld.hide();
            boom.show();
        }
    }, 0);
    tl.fromTo(boom, 1, {
        transform: "scale(0)"
    }, {
        transform: "scale(1)"
    });
}