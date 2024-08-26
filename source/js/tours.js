import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const toursSwiper = new Swiper('.tours-swiper', {
  init: false,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.tours-swiper__button--next',
    prevEl: '.tours-swiper__button--prev',
    disabledClass: 'tours-swiper__button--disabled'
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  grabCursor: true,
});

toursSwiper.init();
