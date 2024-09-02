import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const toursSwiper = new Swiper('.tours-swiper', {
  init: false,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.tours-navigation .section__swiper-button--next',
    prevEl: '.tours-navigation .section__swiper-button--prev',
    disabledClass: 'section__swiper-button--disabled'
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    320: {
      slidesPerView: 1
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
