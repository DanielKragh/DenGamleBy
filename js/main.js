$(function () {
    // navbar border animation
    navAni();

    $(window).on("resize", function () {
        navAni();
    });

    // BURGER animation
    var burger = $("#Burger");
    var hrElm = $("<hr class='burger-hr'>");
    burger.on("click", function () {
        $("ul").toggleClass("show");
        if($("ul").hasClass("show")){
           $("li").append(hrElm); 
           $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
        } else{
            $(".burger-hr").remove();
            $('html, body').css({
                overflow: 'visible',
                height: 'auto'
            });
        }
        
    })

    // newsletter alert
    $("form").on("submit", function () {
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