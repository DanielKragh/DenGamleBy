function animation1() {
    var ani1 = $("#bombe-ani");
    var bombe = $("#bombe");
    var lunde = $("#lunde");
    var lundeIld = $("#lunde-ild");
    var boom = $("#boom");

    boom.css({
        "display": "none"
    });


    var lengthy = $("#wire")[0].getTotalLength();
    


    var tl = new TimelineLite({});
    // t1.to(lundeIld, 0, {

    // });
    var counter = 0;
    function SomethingWeird(){
        counter += 0.3;
        var test = $("#wire")[0].getPointAtLength(counter * lengthy).x;
        lundeIld[0].setAttribute("transform", "translateX(" + test + ")");
        requestAnimationFrame(SomethingWeird);
    }

    requestAnimationFrame(SomethingWeird);

    tl.to($(".lunde-ani"), 3, {
        "stroke-dashoffset": 550
    }, 0);
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