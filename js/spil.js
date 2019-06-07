$(function () {
    var plakatImg = $(".plakat img");
    var plakat = $(".plakat");
    var ild = $(".ild");
    var spilBg = $(".spil-bg");
    var plakatSamling = $(".plakat-samling");

    var bgHeight = spilBg.height();
    var spilWidht = spilBg.width();

    var tls = [];
    var paused = false;

    $("#pauseBtn").on("click", function(){
        if(paused){
            paused = false;
            $(this).text("Pause");
            tls.forEach(function(element){
                element.resume();
            });
        } else {
            paused = true;
            $(this).text("Start");
            tls.forEach(function(element){
                element.pause();
            });
        }
    });
    function timeline(plakat){
        var tl = new TimelineMax();
        tls.push(tl);
        var positionX = Math.floor(Math.random() * Math.floor(spilWidht - plakat.width()));

        tl.fromTo(plakat, 1.5, {
            transform: "translateY(-100%) translateX(" + positionX + "px)"
        }, {
            transform: "translateY(" + bgHeight + "px) translateX(" + positionX + "px)",
            ease: Linear.easeNone
        });
    }

    setInterval(function () {
        if(paused)
            return;
        var plakatDiv = $("<div class='plakat'><img src='/resorces/img/Plakat1.jpg' draggable='false' alt=''></div>")
        spilBg.append(plakatDiv);

        timeline(plakatDiv);

        plakatDiv.on("mousedown", function () {
            $(this).hide();
            var plakatAttr = $(this).find("img").attr("src");
            plakatSamling.append('<img class="fanget" src="' + plakatAttr + '"></img>');
        });

    }, 500);
});