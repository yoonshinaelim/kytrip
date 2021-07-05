(function($) {
    $.fn.swiper = function(){
        mainSlider : {
            var mainSlider = new Swiper('.mainSlider', {
                onInit:function(swiper){
                    var acitveIdx = swiper.activeIndex;
                    $('.mainSlider .swiper-slide.main').on('click',function(){
                        mainSlider.slideNext();
                    });
                }

            });
        }
    }
})(jQuery);
window.onload = function(){
    $.fn.swiper();
}
