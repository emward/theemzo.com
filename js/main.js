$(document).ready(function () {
  $('.js-menu-btn').click(function () {
    $('.main-nav').toggleClass('is-open');
  });

  $('.main-nav li').click(function() {
    // toggle menu closed if menu item is clicked
    if ($('.main-nav.is-open')) {
      $('.main-nav').removeClass('is-open');
    }
  });

  $('.carousel').slick();
});
