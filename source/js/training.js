import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const trainingSwiper = new Swiper('.training-swiper', {
  init: false,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.training-navigation .section__swiper-button--next',
    prevEl: '.training-navigation .section__swiper-button--prev',
    disabledClass: 'section__swiper-button--disabled'
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2
    },
    768: {
      slidesPerView: 3,
      initialSlide: 0,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  grabCursor: true,
});

trainingSwiper.init();
