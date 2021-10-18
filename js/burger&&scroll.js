const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger__icon');
const menu = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__item a');

burger.addEventListener('click', () => {
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
});

for (let link of menuLinks) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    burgerIcon.classList.remove('active');
    menu.classList.remove('active');
    // scrollToItem(event);
  });
}

function scrollToItem(event) {
  const menuLink = event.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    })
  }
}