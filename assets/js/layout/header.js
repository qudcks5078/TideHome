$(document).ready(function () {

    $('#gnb_btn').click(function () {
        if ($('#gnb_btn').hasClass('open')) {
            $(this).removeClass('open');
            $('nav').css({
                'transform': 'translate(0, -100%)',
                'opacity': '0'
            });
            $('html').removeClass('stop-scrolling');
        } else {
            $(this).addClass('open')
            $('nav').css({
                'transform': 'translate(0, 0',
                'opacity': '0.93'
            });
            $('html').addClass('stop-scrolling');
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