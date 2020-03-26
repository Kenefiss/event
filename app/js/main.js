var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  }
});

new WOW().init();

$(function () {


});