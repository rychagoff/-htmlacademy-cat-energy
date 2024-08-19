const header = document.querySelector('.header');
const burger = header.querySelector('.header__toggle');
const nav = header.querySelector('.header__nav');
const links = nav.querySelectorAll('.header__link');

function getHeight() {
  const windowHeight = window.innerHeight;
  const navHeight = nav.scrollHeight;
  const navPositionTop = nav.offsetTop;

  const currentNavHeight = windowHeight - navPositionTop;

  if (currentNavHeight < navHeight) {
    nav.style.height = `${currentNavHeight}px`;
  } else {
    nav.style.height = `${navHeight}px`;
  }
}

// function removeHeight() {
//   nav.removeAttribute('style');
// }

function scrollReset() {
  setTimeout(() => {
    nav.scrollTo({top: 0});
  }, 500);
}

function showMenu() {
  burger.classList.remove('header__toggle--closed');
  burger.classList.add('header__toggle--opened');
  burger.setAttribute('aria-expanded', false);
  burger.setAttribute('aria-label', 'Закрыть меню');

  nav.classList.remove('header__nav--closed');
  nav.classList.add('header__nav--opened');

  document.body.classList.add('no-scroll');
}

function hiddenMenu() {
  burger.classList.remove('header__toggle--opened');
  burger.classList.add('header__toggle--closed');
  burger.setAttribute('aria-expanded', true);
  burger.setAttribute('aria-label', 'Открыть меню');

  nav.classList.remove('header__nav--opened');
  nav.classList.add('header__nav--closed');

  document.body.classList.remove('no-scroll');
}

burger.addEventListener('click', () => {
  if (burger.classList.contains('header__toggle--closed')) {
    showMenu();
    getHeight();
  } else {
    hiddenMenu();
    // removeHeight();
    scrollReset();
  }

  links.forEach((link) => {
    link.addEventListener('click', () => {
      hiddenMenu();
      // removeHeight();
      scrollReset();
    });
  });
});
