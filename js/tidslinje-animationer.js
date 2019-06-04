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

    var tl = new TimelineLite({
        paused: false
    });
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

function animation2() {
    var maaneRaket = $("#maane-raket");
    var raketMedIld = $("#raket, #raket-ild");
    var raket = $("#raket");
    var raketIld = $("#raket-ild");
    var maane = $("#maane");

    var tl = new TimelineLite()
    
    raketIld.show();
    tl.fromTo(raketMedIld, 3, {
        transform: "translateY(-400px)",
        
    },{
        transform: "translateY(0)",
        onComplete: function(){
            raketIld.hide();
        }
    });
    var tl2 = new TimelineMax({repeat:-1});
    tl2.from(raketIld, 0.1, {
        scale: .5,
        transformOrigin: "50%"
    });
    
}
function animation3() {
    var red = $("#red");
    var green = $("#green");

    var tl = new TimelineLite();
    tl.fromTo(red, 2, {
        rotation: 0,
        transformOrigin: "50% bottom"
    },{
        rotation: -30

    });
    var tl2 = new TimelineLite();
    tl2.fromTo(green, 2, {
        rotation: 0,
        transformOrigin: "50% bottom"
    },{
        rotation: 30

    });
}