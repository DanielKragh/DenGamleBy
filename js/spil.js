$(function () {
    var plakatNavne = ["Plakat1", "Plakat2", "Plakat3", "Plakat4", "Plakat5", "Plakat6"];
    
    // var plakatImg = $(".plakat img");
    // var plakat = $(".plakat");
    // var ild = $(".ild");
    var spilBg = $(".spil-bg");
    var plakatSamling = $(".plakat-samling");

    var bgHeight = spilBg.height();
    var spilWidht = spilBg.width();

    var tls = [];
    var paused = false;

    IldAnimation();

    // pause
    $("#pauseBtn").on("click", function () {
        if (paused) {
            paused = false;
            $(this).text("Pause");
            tls.forEach(function (element) {
                element.resume();
            });
        } else {
            paused = true;
            $(this).text("Start");
            tls.forEach(function (element) {
                element.pause();
            });
        }
    });

    // restart
    $("#restartBtn").on("click", function () {
        location.reload();
    });

    // animation
    function timeline(plakat) {
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


    //Spawner
    setInterval(function () {
        var plakatRandom = Math.floor(Math.random() * Math.floor(plakatNavne.length));
        if (paused)
            return;
        var plakatDiv = $("<div class='plakat'><img src='resorces/img/Spil/"+plakatNavne[plakatRandom]+".jpg' draggable='false' alt=''></div>")
        spilBg.append(plakatDiv);

        timeline(plakatDiv);

        plakatDiv.on("mousedown", function () {
            $(this).hide();
            var plakatAttr = $(this).find("img").attr("src");
            plakatSamling.append('<img class="fanget" src="' + plakatAttr + '"></img>');
        });

    }, 500);
    
    //Loop(50ms)
    setInterval(function () {
        if (!paused) {
            var pLiv = $(".liv").text();
            var numLiv = parseInt(pLiv, 10);
            var allPlakat = $(".plakat");
            allPlakat.each(function () {
                
                //Lose Health 
                if ($(this).offset().top >= spilBg.offset().top + bgHeight - 5) {
                    numLiv--
                    $(".liv").text(numLiv);
                    $(this).remove();
                }

                // death
                if (numLiv == 0) {
                    paused = true;
                    tls.forEach(function (element) {
                        element.pause();
                    });
                }
            });
        }
    }, 50);    
});

function IldAnimation(){
    var ildTl = new TimelineMax({yoyo: true, repeat: -1});

    ildTl.to($(".ild .a"), 0.5, {
        x: "5%",
        ease: Linear.easeNone
    }, 0);
    ildTl.to($(".ild .b"), 0.5, {
        x: "-5%",
        ease: Linear.easeNone
    }, 0);
}