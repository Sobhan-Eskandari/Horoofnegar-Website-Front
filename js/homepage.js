$(document).ready(function () {
    // The DOM is ready!
    //========================== Fading out elements when cars slides up ===================//
    $("#cart1").mouseenter(function () {
        $("#cart1 .row").fadeOut('fast');
        $("#cart1.cart_hover").animate({
            marginTop: "-5px",
            height: "450px",
            borderTopLeftRadius: "20px"
        }, 500, function () {

        });
        $("#cart1 .row").animate({
            marginTop: "160px"
        });
        $("#cart1 .row").fadeIn('fast');
        $("#cart1 h2").animate({
            marginTop: "125px"
        });

    });

    $("#cart1").mouseleave(function () {
        $("#cart1 .row").fadeOut('fast');
        $("#cart1.cart_hover").animate({
            marginTop: "250px",
            height: "200px",
            borderTopLeftRadius: "0px"
        }, 500, function () {

        });
        $("#cart1 .row").animate({
            marginTop: "10px"
        });
        $("#cart1 .row").fadeIn('fast');
        $("#cart1 h2").animate({
            marginTop: "20px"
        });

    });


    $("#cart2").mouseenter(function () {
        $("#cart2 .row").fadeOut('fast');
        $("#cart2.cart_hover").animate({
            marginTop: "-5px",
            height: "450px",
            borderTopLeftRadius: "20px"
        }, 500, function () {

        });
        $("#cart2 .row").animate({
            marginTop: "160px"
        });
        $("#cart2 .row").fadeIn('fast');
        $("#cart2 h2").animate({
            marginTop: "125px"
        });
    });

    $("#cart2").mouseleave(function () {
        $("#cart2 .row").fadeOut('fast');
        $("#cart2.cart_hover").animate({
            marginTop: "250px",
            height: "200px",
            borderTopLeftRadius: "0px"
        }, 500, function () {

        });
        $("#cart2 .row").animate({
            marginTop: "10px"
        });
        $("#cart2 .row").fadeIn('fast');
        $("#cart2 h2").animate({
            marginTop: "20px"
        });
    });

    $("#cart3").mouseenter(function () {
        $("#cart3 .row").fadeOut('fast');
        $("#cart3.cart_hover").animate({
            marginTop: "-5px",
            height: "450px",
            borderTopLeftRadius: "20px"
        }, 500, function () {

        });
        $("#cart3 .row").animate({
            marginTop: "160px"
        });
        $("#cart3 .row").fadeIn('fast');
        $("#cart3 h2").animate({
            marginTop: "125px"
        });
    });

    $("#cart3").mouseleave(function () {
        $("#cart3 .row").fadeOut('fast');
        $("#cart3.cart_hover").animate({
            marginTop: "250px",
            height: "200px",
            borderTopLeftRadius: "0px"
        }, 500, function () {

        });
        $("#cart3 .row").animate({
            marginTop: "10px"
        });
        $("#cart3 .row").fadeIn('fast');
        $("#cart3 h2").animate({
            marginTop: "20px"
        });
    });

    // On Click of menu to scroll to section

//    $(".nav_item:nth-of-type(1)").click(function () {
//        $('html, body').animate({
//            scrollTop: $("#section8").offset().top
//        }, 1000);
//    });


    $(".nav li:nth-child(2)").click(function () {
        $('html, body').animate({
            scrollTop: $("#section7").offset().top
        }, 1500);
    });

    $(".nav li:nth-child(3)").click(function () {
        $('html, body').animate({
            scrollTop: $("#section1").offset().top
        }, 1000);
    });
    $(".nav li:nth-child(4)").click(function () {
        $('html, body').animate({
            scrollTop: $("#section2").offset().top
        }, 1000);
    });
    $(".nav li:nth-child(5)").click(function () {
        $('html, body').animate({
            scrollTop: $("#section1").offset().top
        }, 1500);
    });


});



//
//window.onresize = function (event) {
//    resizeDiv();
//}
//
//function resizeDiv() {
//    vpw = $(window).width();
//    vph = $(window).height();
//    $('#heroimage').css({
//        "height": vph + "px",
//        "width": vpw + "px"
//    });
//}