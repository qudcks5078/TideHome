$(document).ready(function () {

    function resizeCircle() {
        let ww = $(window).width();
        let circleww = $('.column ul').width();

        if (ww > 1200) {
            let circleArrow = ((circleww - 1000) / 3) / 3;

            $('.column ul li > span').css('left', 'calc(100% + ' + circleArrow + 'px)');
        } else if (ww > 767 && ww <= 1200) {
            let circleArrow = ((circleww - 800) / 3) / 3;
            
            $('.column ul li > span').css('left', 'calc(100% + ' + circleArrow + 'px)');
        } else {
            $('.column ul li > span').css('left', 'calc(50% - 21px)');
        }

    }

    function resizeImg(){
        let ww = $(window).width();
            let imgSrc = 'assets/img/layout/recruit/visual';

            if (ww < 767) {
                $('.recruit_visual_img').find('img').attr('src', imgSrc + '_mobile.jpg');
            }else{
                $('.recruit_visual_img').find('img').attr('src', imgSrc + '.jpg');
            }
    }

    $(window).resize(function () {
        resizeCircle();
        resizeImg();
        
    }).resize();
})