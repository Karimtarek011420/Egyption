
let ineerWidth = $(".slideList").innerWidth();
$(".slideList i").click(function () {
    if ($("#bar").css("left") == "0px") {
        $("#bar").animate({ left: -ineerWidth })
    }
})
$(".word_header i").click(function () {
    if ($("#bar").css("left") != "0px") {
        $("#bar").animate({ left: "0px" })

    }
})

$(".item h1").click(function (eventInfo) {
    $(eventInfo.target).next().slideToggle();
    $("p").not($(eventInfo.target).next()).hide(1000)
    
})
$("#text").keyup(function(eventInfo){
    let mark =$(eventInfo.target).val().length;
    $(".number").text(
        100-mark<=0 ?"number end" :100-mark
    )
})

$(document).ready(function () {
    $("#bar").animate({ left: -ineerWidth })
    $(".sk-fading-circle").slideUp(1000, function () {
        $("#loading").slideUp(1000, function () {
            $("body").css("overflow", "auto", 1000)
        })})
})



