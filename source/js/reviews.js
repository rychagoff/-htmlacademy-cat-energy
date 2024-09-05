import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews__swiper', {
  autoHeight: true,
  modules: [ Navigation ],
  navigation: {
    nextEl: '.reviews__navigation .section__swiper-button--next',
    prevEl: '.reviews__navigation .section__swiper-button--prev',
    disabledClass: 'section__swiper-button--disabled'
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  grabCursor: true,
});

reviewsSwiper.init();
