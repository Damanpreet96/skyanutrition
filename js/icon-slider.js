jQuery(document).ready(function($) {
    "use strict";
    $('#icon-list').owlCarousel( {
            loop: true,
            center: false,
            items: 4,
            margin: 30,
            autoplay: true,
            dots:true,
        nav:true,
            autoplayTimeout: 2500,
            smartSpeed: 250,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 4
                }
            }
        });
    });