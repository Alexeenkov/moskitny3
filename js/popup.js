const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const html = document.querySelector('html');
const popupTitle = document.getElementById('popup-title');
const popupEmail = document.querySelector('.popup__email');
const popupButton = document.querySelector('.popup__button');
const mailTitle = document.getElementById('mail-title');

let unlock = true;

const timeout = 1200;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function(e) {
      // ? Изменение заголовков форм и добавление полей в зависимости от нажатой кнопки:
      if (e.target.classList.contains('product__button-2') && e.target.closest('.product').classList.contains('product-1')) {
        popupTitle.textContent = 'Закажите обычные москитные сетки';
        mailTitle.value = 'Клиент хочет заказать "Обычные москитные сетки"';
        popupEmail.classList.add('_hide');
      } else if (e.target.classList.contains('product__button-2') && e.target.closest('.product').classList.contains('product-2')) {
        popupTitle.textContent = 'Закажите вставные премиальные сетки';
        mailTitle.value = 'Клиент хочет заказать "Вставные премиальные сетки"';
        popupEmail.classList.add('_hide');
      } else if (e.target.classList.contains('product__button-2') && e.target.closest('.product').classList.contains('product-3')) {
        popupTitle.textContent = 'Закажите сетки плиссе, гармошки';
        mailTitle.value = 'Клиент хочет заказать "Сетки плиссе, гармошки"';
        popupEmail.classList.add('_hide');
      } else if (e.target.classList.contains('product__button-2') && e.target.closest('.product').classList.contains('product-4')) {
        popupTitle.textContent = 'Закажите детские сетки, защищающие от выпадения';
        mailTitle.value = 'Клиент хочет заказать "Детские сетки, защищающие от выпадения"';
        popupEmail.classList.add('_hide');
      } else if (e.target.classList.contains('instruction__button')) {
        popupTitle.textContent = 'Заполните форму и получите инструкцию';
        popupEmail.classList.remove('_hide');
        popupButton.textContent = 'Получить инструкцию';
        mailTitle.value = 'Клиент хочет получить инструкцию!';
      } else if (e.target.classList.contains('calculator__button')) {
        if (!document.querySelector('.range__error').classList.contains('_hide')) {
          return;
        }
      } else {
        popupTitle.innerHTML = 'Напишите свое имя и телефон и&nbsp;мы&nbsp;Вам&nbsp;перезвоним';
        popupButton.textContent = 'Оставить заявку';
        popupEmail.classList.add('_hide');
        mailTitle.value = 'Клиент оставил заявку на звонок!';
      }

      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
// Закрывает попап с указанным классом
const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.popup')); // ЧТО ЗАКРЫВАЕМ (родитель)
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function(e) {
      if (!e.target.closest('.popup__content')) {


        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  html.classList.add('lock');

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function() {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
    html.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function(e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function() {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function() {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();