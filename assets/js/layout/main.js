$(document).ready(function () {

    $(window).resize(function () {
        let ww = window.innerWidth;

            $('.section.visual_main .swiper-slide').each(function (index) {
                let imgSrc = 'assets/img/layout/main/slide_';
                if (ww < 767) {
                    $(this).find('img').attr('src', imgSrc + (index + 1) + '_mobile.jpg');
                }else{
                    $(this).find('img').attr('src', imgSrc + (index + 1) + '.jpg');
                }
            })

            $('.section.own_work .swiper-slide').each(function (index) {
                let imgSrc = 'assets/img/layout/main/own_work';
                if (ww < 767) {
                    $(this).find('img').attr('src', imgSrc + (index + 1) + '_mobile.jpg');
                }else{
                    $(this).find('img').attr('src', imgSrc + (index + 1) + '.jpg');
                }
            })
    }).resize();

    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let transDiv = $('.work_wrap > div > div');

        transDiv.each(function (index) {
            if (scrollPos >= ($(this).offset().top / 2)) {
                $(this).css({
                    'transform': 'rotateX(0deg)',
                    'transform': 'translate(0px, 0px)',
                    'transition-delay': index * 0.1 + 's',
                    'opacity': '1',
                })
            }
        })
    })
})