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
        lightboxContainer.show();
    });

    images.on("mouseenter mouseleave", function () {
        switch (event.type) {
            case "mouseover":
                var newElement = ("<i class='fas fa-search-plus'></i>");
                $(this).append(newElement);
                break;
            case "mouseout":
                $(this).find(".fa-search-plus").remove();
                break;
        }
    });

    lightboxContainer.on("click", function (e) {
        if (e.target === lightboxContainer[0]) {
            lightboxContainer.hide();
        }
    });

    lightboxCloseBtn.on("click", function () {
        lightboxContainer.hide();
    });
}