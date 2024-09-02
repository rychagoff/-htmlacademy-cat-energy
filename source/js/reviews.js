import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [ Navigation ],
  navigation: {
    nextEl: '.reviews-navigation .section__swiper-button--next',
    prevEl: '.reviews-navigation .section__swiper-button--prev',
    disabledClass: 'section__swiper-button--disabled'
  },
  slidesPerView: 1,
  spaceBetween: 15,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  grabCursor: true,
});

reviewsSwiper.init();
