$(function () {
    var plakatNavne = ["Plakat1.jpg", "Plakat2.jpg", "Plakat3.jpg", "Plakat4.png", "Plakat5.png", "Plakat6.png"];
    
    var plakatImg = $(".plakat img");
    var plakat = $(".plakat");
    var ild = $(".ild");
    var spilBg = $(".spil-bg");
    var plakatSamling = $(".plakat-samling");

    var bgHeight = spilBg.height();
    var spilWidht = spilBg.width();

    var tls = [];
    var paused = false;

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

    // 
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

    setInterval(function () {
        var plakatRandom = Math.floor(Math.random() * Math.floor(plakatNavne.length));
        if (paused)
            return;
        var plakatDiv = $("<div class='plakat'><img src='resorces/img/"+plakatNavne[plakatRandom]+"' draggable='false' alt=''></div>")
        spilBg.append(plakatDiv);

        timeline(plakatDiv);

        plakatDiv.on("mousedown", function () {
            $(this).hide();
            var plakatAttr = $(this).find("img").attr("src");
            plakatSamling.append('<img class="fanget" src="' + plakatAttr + '"></img>');
        });

    }, 500);

    setInterval(function () {
        // death
        if (!paused) {
            var pLiv = $(".liv").text();
            var numLiv = parseInt(pLiv, 10);
            var allPlakat = $(".plakat");
            allPlakat.each(function () {
                if ($(this).position().top > bgHeight) {
                    numLiv--
                    $(".liv").text(numLiv);
                    $(this).remove();
                }
                console.log($(this).position().top)
                if (numLiv == 0) {
                    paused = true;
                    //$(this).text("Start");
                    tls.forEach(function (element) {
                        element.pause();
                    });
                }
            })
        }
    }, 50)

    // skriftende billeder
    
});