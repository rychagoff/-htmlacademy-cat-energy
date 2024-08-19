import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const heroSwiper = new Swiper('.hero-swiper', {
  init: false,
  loop: true,
  modules: [ Pagination ],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    // bulletElement: 'button',
    // renderBullet: function (index, className) {
    //   return `<span class="${className}" role="button"></span>`;
    // },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  grabCursor: true,
});

heroSwiper.on('init', () => {
  const hero = document.querySelector('.hero-swiper');
  const slides = hero.querySelectorAll('.swiper-slide');

  // console.log(hero);
  // console.log(slides);

  slides.forEach((slide) => {
    if (!slide.classList.contains('swiper-slide-active')) {
      const slideLink = slide.querySelector('.hero-swiper__link');
      slideLink.setAttribute('tabindex', -1);
    }
  });
});

heroSwiper.init();
