const header = document.querySelector('.header');
const burger = header.querySelector('.header__toggle');
const nav = header.querySelector('.header__nav');
const links = nav.querySelectorAll('.header__link');

function showMenu() {
  burger.classList.remove('header__toggle--closed');
  burger.classList.add('header__toggle--opened');

  nav.classList.remove('header__nav--closed');
  nav.classList.add('header__nav--opened');

  document.body.classList.add('no-scroll');
}

function hiddenMenu() {
  burger.classList.remove('header__toggle--opened');
  burger.classList.add('header__toggle--closed');

  nav.classList.remove('header__nav--opened');
  nav.classList.add('header__nav--closed');

  document.body.classList.remove('no-scroll');
}

burger.addEventListener('click', (evt) => {
  evt.preventDefault;

  if (burger.classList.contains('header__toggle--closed')) {
    showMenu();
  } else {
    hiddenMenu();
  }

  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault;
      hiddenMenu();
    })
  })
})
