//При прокручивании странички вниз меняется внешний вид меню
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('headerScroll');
        $('.header-content').addClass('headerContentScroll');        
    } else {
        $('header').removeClass('headerScroll');
        $('.header-content').removeClass('headerContentScroll');        
    }
});

//При наведении на технологию показывается ее название при помощи слайда вниз
$('.boxShowHide').hover(
    function () {
        $(this).find('.caption').slideDown(450);
    },
    function () {
        $(this).find('.caption').slideUp(200);
    }
    );