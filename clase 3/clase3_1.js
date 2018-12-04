$("#encadenamiento").click(function(){
    $("#img4").hide(4500).show(1500);
    alert("listo")
})

$("#animar").click(function(){
    $("#img3").animate({
        height :500,
        width  :500,
        opacity:0
    },"slow")
})

$("#slide").click(function(){
    // si esta abierta se hace slideUp
    // si esta cerrada se hace slideDown
    $("#img1").slideToggle("fast");
    $("#img1").slideToggle("fast");
})

$("#fade").click(function(){
    // si esta visible se hae fadeOut
    // sino, se hace fadeIn
    $("#img2").fadeToggle("2500");
})

$("#mover").click(function(){
    $('#div1').animate({top:"430px"},3000);
    $('#div2').animate({left:"0px"},3000);
    $('#div3').animate({left:"430px"},3000);
    $('#div4').animate({bottom:"1290px"},3000);
})