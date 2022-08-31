$(document).ready(function () {
  $('.your-class').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
  $('#main_menu').meanmenu({
    meanMenuContainer:'#mobile_menu',
    meanScreenWidth:768,
  });
});