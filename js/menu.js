$(document).ready(function (){
    $('#burger_menu').click(function(){
        $('.menu').fadeToggle('active');
    });
    $('.header-mobile').click(function(){
        $('.mobile-menu').toggleClass('is-active');
    });
});