$(function () {

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      924: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1112: {
        slidesPerView: 3,
      }
    },
  });


  new WOW({
    mobile: false
  }).init();


  $('.header__menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.menu__list').slideToggle(1112);
  });

  $(window).resize(function () {
    if ($(window).width() > 1112) {
      $('.menu__list').removeAttr('style');
    }
  });

});