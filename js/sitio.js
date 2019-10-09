/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});

/*---------------------------------
    OCULTAR Y MOSTRAR REDES SOCIALES EN MOBILE
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".redessociales-mobile").fadeIn();
        } else {
            $(".redessociales-mobile").fadeOut();
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA LOGO
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.LogoSitio');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("LogoSitio-animado");
    } else {
        nav.removeClass("LogoSitio-animado");
    }
});
/*---------------------------------
   CABECERA ANIMADA MENU
 ----------------------------------*/
$(window).scroll(function () {

    var nav = $('.menu-principal-desktop');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("menu-principal-desktop-animado");
    } else {
        nav.removeClass("menu-principal-desktop-animado");
    }
});
/* -------------------------------------
    TOOLTIP
----------------------------------------*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
