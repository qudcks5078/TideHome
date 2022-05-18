$(document).ready(function(){
function resizeImg(){
    let ww = $(window).width();
        let imgSrc = 'assets/img/layout/culture/visual';

        if (ww < 767) {
            $('.culture_visual_img').find('img').attr('src', imgSrc + '_mobile.jpg');
        }else{
            $('.culture_visual_img').find('img').attr('src', imgSrc + '.jpg');
        }
}

$(window).resize(function () {
    resizeImg();
    
}).resize();
});