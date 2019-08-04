$(function () {
    $(document).scroll(function (){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("navbar-scrolled", $(this).scrollTop() > $nav.height());
    });
});