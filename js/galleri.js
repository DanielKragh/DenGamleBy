$(function () {
    slowDownVideo();
});

function slowDownVideo(){
    var vid = document.getElementById("video");
    vid.playbackRate = 0.5;
}