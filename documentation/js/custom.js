/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
jQuery(document).ready(function ($) {

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').stop().animate({
                        scrollTop: target.offset().top - 20
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $(".tv-sticky-nav-wrapper").sticky({topSpacing: 0});


    (function ($) {
        $(window).load(function () {

            $("#content-3").mCustomScrollbar({
                scrollButtons: {enable: true},
                theme: "light-thick",
                scrollbarPosition: "outside"
            });

            $("#content-4").mCustomScrollbar({
                theme: "rounded-dots",
                scrollInertia: 400
            });

            $("#content-5").mCustomScrollbar({
                axis: "x",
                theme: "dark-thin",
                autoExpandScrollbar: true,
                advanced: {autoExpandHorizontalScroll: true}
            });

            $("#content-6").mCustomScrollbar({
                axis: "x",
                theme: "light-3",
                advanced: {autoExpandHorizontalScroll: true}
            });

            $("#content-7").mCustomScrollbar({
                scrollButtons: {enable: true},
                theme: "3d-thick"
            });

            $("#content-8").mCustomScrollbar({
                axis: "yx",
                scrollButtons: {enable: true},
                theme: "3d",
                scrollbarPosition: "outside"
            });

            $("#content-9").mCustomScrollbar({
                scrollButtons: {enable: true, scrollType: "stepped"},
                keyboard: {scrollType: "stepped"},
                mouseWheel: {scrollAmount: 188, normalizeDelta: true},
                theme: "rounded-dark",
                autoExpandScrollbar: true,
                snapAmount: 188,
                snapOffset: 65
            });

        });
    })(jQuery);


    $('.tv-nav-item a').click(function () {
        $(this).parents('ul.tv-instruction-nav').find('li.tv-nav-item a').removeClass('active');
        $(this).addClass('active');
    });

});


