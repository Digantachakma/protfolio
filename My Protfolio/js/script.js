$(function () {
    'use strict';

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


});