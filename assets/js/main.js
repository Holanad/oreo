$(document).ready(function() {
    if ($('.main-slider').length) {
        $(window).on('load resize', function () {
            $('.main-slider').slick({
                infinite: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                lazyLoad: 'ondemand',
                fade: true,
                cssEase: 'linear',
                autoplay: true
            });
        });
    }
    
    (function accordion() {
        $(".m-menu-category").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(this).next().toggleClass('d-flex');
            $(this).parent().toggleClass('border');
            $(this).children('.m-menu-category__text').children('h3').toggleClass('black');
            $(this).children('.m-menu-category__text').children('span').toggleClass('black');
            $(this).children('svg').children('path').toggleClass('active');
            $(this).children('svg').toggleClass('active');
            $(".m-menu-category").not(this).removeClass("open").next().slideUp();
            $(".m-menu-category").not(this).next().removeClass("d-flex")
            $(".m-menu-category").not(this).parent().removeClass("border"); 
            $(".m-menu-category").not(this).children('.m-menu-category__text').children('h3').removeClass('black');  
            $(".m-menu-category").not(this).children('.m-menu-category__text').children('span').removeClass('black'); 
            $(".m-menu-category").not(this).children('svg').children('path').removeClass('active');      
            $(".m-menu-category").not(this).children('svg').removeClass('active');  
        });
    }());
});