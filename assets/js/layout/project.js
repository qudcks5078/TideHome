$(document).ready(function(){
    function resizeImg(){
        let ww = $(window).width();
            let imgSrc = 'assets/img/layout/project/visual';
    
            if (ww < 767) {
                $('.project_visual_img').find('img').attr('src', imgSrc + '_mobile.jpg');
            }else{
                $('.project_visual_img').find('img').attr('src', imgSrc + '.jpg');
            }
    }
    
    $(window).resize(function () {
        resizeImg();
        
    }).resize();
    });