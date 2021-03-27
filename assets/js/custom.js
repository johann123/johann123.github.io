/*=========================================================================
        Preloader
=========================================================================*/
$(window).load(function () {
    "use strict";
    $(".preloader-outer").delay(350).fadeOut('slow');
});

$(function () {
    "use strict";
    /*=========================================================================
            One Page Nav
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    /*=========================================================================
            Hamburger Menu & Mobile Push menu
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on('click', function () {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();

    /*=========================================================================
            Carousels / Resume, Testimonials, Customers /
    =========================================================================*/
    $(".customer-carousel").owlCarousel({
        items: 4
    });

    $(".projects-carousel").owlCarousel({
        items: 1,
        autoHeight: false,
        autoPlay: true,
        stopOnHover: true,
        afterAction: function (el) {
            this.$owlItems.removeClass('active');
            this.$owlItems.eq(this.currentItem).addClass('active');
        }
    });
    // $(".projects-carousel").owlCarousel({
    //     items: 1,
    //     autoHeight: false,
    //     autoPlay: true,
    //     stopOnHover: true,
    //     afterAction: function (el) {
    //         this.$owlItems.removeClass('active');
    //         this.$owlItems.eq(this.currentItem).addClass('active');
    //     }
    // });

    $(".resume-carousel, .testimonial-carousel").owlCarousel({
        singleItem: true
    });

    /*=========================================================================
            Backstretch Background Slider
    =========================================================================*/
    $("#welcome").backstretch([
        "http://placehold.it/1200x768",
        "http://placehold.it/1200x768",
        // "assets/images/your_pic.jpg"
    ], {duration: 5000, fade: 400});

    /*=========================================================================
            Welcome & Header Height
    =========================================================================*/
    $("#welcome").css({'height': ($(window).height()) + 'px'});
    $(".header").css({'height': ($(window).height()) + 'px'});

    /*=========================================================================
            Magnific Popup Functions
    =========================================================================*/
    $('.work-image').magnificPopup({
        type: 'image'
    });
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-zoom-out',
    });
    $('.work-video').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',

                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            },
            srcAction: 'iframe_src',
        }
    });

})
;
