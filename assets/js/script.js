const swiper = new Swiper('.swiper-container', {
  speed: 1000,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  lazy: {
    loadPrevNext: true
  }
});
