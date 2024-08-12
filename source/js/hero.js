import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  modules: [ Pagination ],
  pagination: {
    bulletClass: 'swiper-pagination-bullet hero-swiper__bullet',
    el: '.swiper-pagination',
  },
  clickable: true,
});


