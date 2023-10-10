/*
 Template Name: highbiz
 File Name: custom.js
 Author Name: ThemeVault
 Author URI: http://www.themevault.net/
 License URI: http://www.themevault.net/license/
 */


$(window).load(function () {
//    $('#loading').delay(1050).fadeOut('slow');

});


$(document).ready(function () {

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    $('.collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });

    $('.tv-accordion-style-3 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    $('.tv-accordion-style-3 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });

    /*-------------------------Smooth scroll to anchor ------------------------------------------------*/
//    $('a.page-scroll').on("click", function (e) {
//        e.preventDefault();
//        var anchor = $(this);
//        $('html, body').stop().animate({
//            scrollTop: $(anchor.attr('href')).offset().top - 60
//        }, 1000);
//    });

    $('.nav.navbar-nav a.page-scroll').click(function () {
        $(this).parents('ul.navbar-nav').find('a.page-scroll').removeClass('active');
        $(this).addClass('active');
        if ($('.navbar-header .navbar-toggle').is(':visible'))
            $(this).parents('.navbar-collapse').collapse('hide');
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    //Sliders owlCarousel - START CODE
    $(".tv-slider-one").owlCarousel({
        loop: false,
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        singleItem: true,
        navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"]
//        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-demo-menu").owlCarousel({
        items: 1,
        nav: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
    });

    $(".tv-brand-wrap").owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

// full screen height
    $(window).resize(function () {
        SetResizeHeight();
    });

    function SetResizeHeight() {
        var minheight = $(window).height();
        $(".tv-full-screen").css('min-height', minheight);
    }
    SetResizeHeight();

    SetResizeHeaderMenu();


    $('.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart').click(function (e) {
        e.preventDefault();
    });
    $('body').on('touchstart click', function (e) {
        if ($(window).width() < 992) {
            if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse').hasClass('in') && !$(e.target).hasClass('navbar-toggle')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
        else {
            if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse ul').hasClass('in')) {
                console.log(this);
                $('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
                $('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');
                $('.navbar-collapse a.dropdown-toggle').removeClass('active');
            }
        }
    });
    $('.navbar-collapse a.dropdown-toggle').on('touchstart', function (e) {
        $('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');
        if ($(this).hasClass('active'))
            $(this).removeClass('active');
        else
            $(this).addClass('active');
    });

    //progress bar
    //Initiat WOW JS
    new WOW().init();
    //smoothScroll
    smoothScroll.init();

    // Progress Bar
    $('#skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
            });
            $(this).unbind('inview');
        }
    });
    $('.skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
            });
            $(this).unbind('inview');
        }
    });

    $masonry = $('.masonry');
    $masonry.imagesLoaded(function () {
        $('.masonry').masonry({
            // options
            itemSelector: '.grid-item',
            percentPosition: true
        });
    });

    var $imagePopup = $('[data-image-popup]');
    /*Image*/
    $imagePopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

});

// Shrink nav on scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('tv-nav-stick1');
    } else {
        $('nav').removeClass('tv-nav-stick1');
    }
});

// Resize Header Menu
function SetResizeHeaderMenu() {
    var width = jQuery('nav.navbar').children('div.container').width();
    $("ul.mega-menu-full").each(function () {
        jQuery(this).css('width', width + 'px');
    });
}
$(window).resize(function () {
    //Position Fullwidth Subnavs fullwidth correctly
    $('.dropdown-fullwidth').each(function () {
        $(this).css('width', $('.row').width());
        var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
        $(this).css('left', subNavOffset);
    });

    setTimeout(function () {
        SetResizeHeaderMenu();
    }, 200);
    if ($(window).width() >= 992 && $('.navbar-collapse').hasClass('in')) {
        $('.navbar-collapse').removeClass('in');
        //$('.navbar-collapse').removeClass('in').find('ul.dropdown-menu').removeClass('in').parent('li.dropdown').addClass('open');
        $('.navbar-collapse ul.dropdown-menu').each(function () {
            if ($(this).hasClass('in')) {
                $(this).removeClass('in'); //.parent('li.dropdown').addClass('open');
            }
        });
        $('ul.navbar-nav > li.dropdown > a.dropdown-toggle').addClass('collapsed');
        $('.logo').focus();
        $('.navbar-collapse a.dropdown-toggle').removeClass('active');
    }

});

$(document).ready(function () {
    EqualHeight();
});

function EqualHeight() {
    equalheight = function (container) {

        var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = new Array(),
                $el,
                topPosition = 0;
        $(container).each(function () {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function () {
        equalheight('.equal-height');
    });


    $(window).resize(function () {
        equalheight('.equal-height');
    });
}

