$(function () {
    'use strict';
    
    // manu fixed start


    // manu fixed end

    // nav toggle part start

    $('.manu_icon').on('click', function () {
        $('.manu_item').toggleClass('slide_bar')
    })
    // nav toggle part end
    
    // banner slider start

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // banner slider end
    // counter up js start
    $('.counter').counterUp();
    // counter up js end

    // testimonial part start
    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // testimonial part end

// back to top start
$(".back_to_top").on("click", function(){
    $("html,body").animate({
        scrollTop: 0
    });
});
// back to top end

    
    /*=====wow=====*/
    new WOW().init();
    
    AOS.init();
    
    
});