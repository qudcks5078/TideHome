$(document).ready(function () {

    $(document).on('click', '#gnb_btn', function () {
        if ($('#gnb_btn').hasClass('open')) {
            $(this).removeClass('open');
            $('section').removeClass('filter');
            $('.overlay_bg').css({
                'height': '1px',
                'opacity': '0'
            })
            $('nav').hide();
            $('.nav_inner').hide();
            $('.inner').css({
                'transform': 'translate(0, 110px)',
            }).removeClass('open');


            $('html').removeClass('stop-scrolling');
        } else {
            $(this).addClass('open')
            $('section').addClass('filter');
            $('.overlay_bg').css({
                'height': '100%',
                'opacity': '0.93'
            })
            $('html').addClass('stop-scrolling');
            $('nav').show();
            $('.nav_inner').fadeIn(800);
            $('.inner').css({
                'transform': 'translate(0, 0)',
            }).addClass('open');
        }
    })

    // Header Scroll
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let headerHeight = $('header').height();

        if (scrollPos > headerHeight) {
            $('header').addClass('scrolled')
        } else {
            $('header').removeClass('scrolled');
        }
    })
})