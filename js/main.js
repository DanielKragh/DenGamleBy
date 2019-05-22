$(function(){
    // navbar border animation
    var hr = $(".hr-ani");
    var active = $(".active");
    var position = active.position();
    var top = position.top;
    var left = position.left;

    hr.css({top: top+active.height(), left:left+active.width()/2-hr.width()/2, display:"block"});

    
    
});