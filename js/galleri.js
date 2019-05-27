$(function () {
    slowDownVideo();
    lightbox();
});

function slowDownVideo() {
    var vid = document.getElementById("video");
    vid.playbackRate = 0.5;
}

function lightbox() {
    var images = $("#galleryContainer .imgWrapper");
    var overlayImage = $("#lightbox img");
    var lightboxContainer = $("#lightbox");
    var lightboxCloseBtn = lightboxContainer.find(".fa-times");

    images.on("click", function () {
        var imgSrc = $(this).find("img").attr("src");
        overlayImage.attr("src", imgSrc);
        lightboxContainer.fadeIn(500);
    });

    images.on("mouseenter mouseleave", function () {
        switch (event.type) {
            case "mouseover":
                var newElement = ("<i class='fas fa-search-plus'></i>");
                $(newElement).appendTo(this).hide().fadeIn(500);
                break;
            case "mouseout":
                $(this).find(".fa-search-plus").fadeOut(500, function(){
                    $(this).remove();
                });
                break;
        }
    });

    lightboxContainer.on("click", function (e) {
        if (e.target === lightboxContainer[0]) {
            lightboxContainer.fadeOut(500);
        }
    });

    lightboxCloseBtn.on("click", function () {
        lightboxContainer.fadeOut(500);
    });
}