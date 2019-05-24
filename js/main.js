$(function () {
    // navbar border animation
    navAni();

    $(window).on("resize", function () {
        navAni();
    });

    // video
    // var vid = document.getElementById("video");
    // vid.playbackRate = 0.5;

    // newsletter alert
    $("form").on("submit", function(){
        alert("Du er tilmeldt nyhedsbrev");
        return false;
    });

});
function navAni() {
        var hr = $(".hr-ani");
        var active = $(".active");
        var position = active.position();
        var top = position.top;
        var left = position.left;
        hr.css({
            top: top + active.height(),
            left: left + active.width() / 2 - hr.width() / 2,
            display: "block"
        });
    }