
$(function() {

    "use strict";

    var wind = $(window);

    $.scrollIt({
      upKey: 38,                
      downKey: 40,            
      easing: 'swing',         
      scrollTime: 600,          
      activeClass: 'active',   
      onPageChange: null,       
      topOffset: -63            
    });

    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });

    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });


    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    $('.testimonials .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 15,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });


    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });



    $('.gallery').magnificPopup({
        delegate: '.link',
        type: 'image',
        gallery: {
            enabled: true
        }
    });



    $('.numbers .count').countUp({
        delay: 10,
        time: 1500
    });


});




$(window).on("load",function (){

    var wind = $(window);

    $(".loading").fadeOut(500);

    wind.stellar();

    $('.gallery').isotope({
      itemSelector: '.items'
    });
    var $gallery = $('.gallery').isotope({
    });

    $('.filtering').on( 'click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');
    });

});
