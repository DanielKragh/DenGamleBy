function animation1() {
    var ani1 = $("#bombe-ani");
    var bombe = $("#bombe");
    var lunde = $("#lunde");
    var lundeIld = $("#lunde-ild");
    var boom = $("#boom");

    boom.css({
        "display": "none"
    });

    var tl = new TimelineLite();
    
    tl.to($(".lunde-ani"), 3, {
        "stroke-dashoffset": 550
    }, 1);
    tl.to(bombe, 0,{
        display:"none"
    });
    tl.to(lunde, 0,{
        display:"none"
    });
    tl.to(lundeIld, 0,{
        display:"none"
    });
    tl.to(boom, 0,{
        display: "block"
    });
    tl.from(boom, 1, {
        transform: "scale(0)"
    })
}