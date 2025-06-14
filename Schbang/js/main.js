(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);

// Time Counter

            // Function to get current time and update the element
            function updateTime(elementId, offset) {
                const now = new Date();
                const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
                const nd = new Date(utc + (3600000 * offset));
                const hours = nd.getHours().toString().padStart(2, '0');
                const minutes = nd.getMinutes().toString().padStart(2, '0');
                const seconds = nd.getSeconds().toString().padStart(2, '0');
                document.getElementById(elementId).textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
            }
            // Update time for each location initially
            updateTime('indiaTime', 5.5); // India: UTC +5.5 hours
            updateTime('londonTime', 0); // London: UTC +0 hours
            updateTime('dubaiTime', 4); // Dubai: UTC +4 hours
            updateTime('amsterdamTime', 2); // Amsterdam: UTC +2 hours
            // Update time every second
            setInterval(() => {
                updateTime('indiaTime', 5.5); // India: UTC +5.5 hours
                updateTime('londonTime', 0); // London: UTC +0 hours
                updateTime('dubaiTime', 4); // Dubai: UTC +4 hours
                updateTime('amsterdamTime', 2); // Amsterdam: UTC +2 hours
            }, 1000);

