'use strict'

const select = document.getElementById('calc-select');
const width = document.getElementById('calc-width');
const widthShowValue = document.getElementById('calc-width-value');
const widthButtonLeft = width.closest('.range__container').querySelector('.range__button_left');
const widthButtonRight = width.closest('.range__container').querySelector('.range__button_right');
const height = document.getElementById('calc-height');
const heightShowValue = document.getElementById('calc-height-value');
const heightButtonLeft = height.closest('.range__container').querySelector('.range__button_left');
const heightButtonRight = height.closest('.range__container').querySelector('.range__button_right');
const colors = document.querySelectorAll('input[name="color"]');
const canvases = document.querySelectorAll('input[name="canvas"]');
const openings = document.querySelectorAll('input[name="opening"]');
const price = document.getElementById('price');
const priceInput = document.getElementById('mail-price');
const canvasTitle = document.getElementById('canvas-title');
const openingTitle = document.getElementById('opening-title');
const canvasSection = document.getElementById('canvas-section');
const openingSection = document.getElementById('opening-section');
const rangeError = document.querySelector('.range__error');

let selectValue = 'Обычная',
  widthValue = 110,
  heightValue = 110,
  colorValue = 'Белый',
  canvasValue = 'Стандарт',
  openingValue = 'Дверь',
  priceValue;

select.addEventListener('change', () => {
  selectValue = select.value;
  hideUnusedFields();
  calc();
});
width.addEventListener('input', () => {
  widthValue = width.value;
  showWidthValue(widthValue);
  calc();
});
height.addEventListener('input', () => {
  heightValue = height.value;
  showHeightValue(heightValue);
  calc();
});
for (let color of colors) {
  color.addEventListener('change', () => {
    colorValue = color.value;
    calc();
  });
}
for (let canvas of canvases) {
  canvas.addEventListener('change', () => {
    canvasValue = canvas.value;
    calc();
  });
}
for (let opening of openings) {
  opening.addEventListener('change', () => {
    openingValue = opening.value;
    calc();
  });
}
widthButtonLeft.addEventListener('click', () => {
  if (widthValue > 20) {
    widthValue = Number(widthValue) - 5;
    showWidthValue(widthValue);
    calc();
  }
});
widthButtonRight.addEventListener('click', () => {
  if (widthValue < 200) {
    widthValue = Number(widthValue) + 5;
    showWidthValue(widthValue);
    calc();
  }
});
heightButtonLeft.addEventListener('click', () => {
  if (heightValue > 20) {
    heightValue = Number(heightValue) - 5;
    showHeightValue(heightValue);
    calc();
  }
});
heightButtonRight.addEventListener('click', () => {
  if (heightValue < 200) {
    heightValue = Number(heightValue) + 5;
    showHeightValue(heightValue);
    calc();
  }
});

function showWidthValue(widthValue) {
  width.value = widthValue;
  widthShowValue.innerHTML = widthValue;
}

function showHeightValue(heightValue) {
  height.value = heightValue;
  heightShowValue.innerHTML = heightValue;
}

function calc() {
  let S = (widthValue / 100) * (heightValue / 100);

  if (selectValue === 'Обычная' && S > 1.5) {
    rangeError.classList.remove('_hide');
  }
  if (selectValue === 'Обычная' && S <= 1.5) {
    rangeError.classList.add('_hide');
  }

  if (selectValue === 'Обычная' && colorValue === 'Белый') {
    priceValue = 900;
  }
  if (selectValue === 'Обычная' && colorValue === 'Коричневый') {
    priceValue = 1000;
  }
  if (selectValue === 'Премиальная' && colorValue === 'Белый' && canvasValue === 'Стандарт') {
    priceValue = S * 2200;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' && colorValue === 'Белый' && canvasValue === 'Мошка') {
    priceValue = S * 2900;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' && colorValue === 'Белый' && canvasValue === 'Пыльца') {
    priceValue = S * 3600;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' && colorValue === 'Белый' && canvasValue === 'Кошка') {
    priceValue = S * 3000;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' && colorValue === 'Коричневый' && canvasValue === 'Стандарт') {
    priceValue = S * 2300;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' && colorValue === 'Коричневый' && canvasValue === 'Мошка') {
    priceValue = S * 3000;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' && colorValue === 'Коричневый' && canvasValue === 'Пыльца') {
    priceValue = S * 3700;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' && colorValue === 'Коричневый' && canvasValue === 'Кошка') {
    priceValue = S * 3100;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Плиссе' && colorValue === 'Белый' && openingValue === 'Окно') {
    priceValue = S * 4200;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Плиссе' && colorValue === 'Белый' && openingValue === 'Дверь') {
    priceValue = S * 3700;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Плиссе' && colorValue === 'Коричневый' && openingValue === 'Окно') {
    priceValue = S * 4300;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Плиссе' && colorValue === 'Коричневый' && openingValue === 'Дверь') {
    priceValue = S * 3800;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Белый' && canvasValue === 'Стандарт') {
    priceValue = S * 9000;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Белый' && canvasValue === 'Мошка') {
    priceValue = S * 9500;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Белый' && canvasValue === 'Пыльца') {
    priceValue = S * 9900;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Белый' && canvasValue === 'Кошка') {
    priceValue = S * 9600;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Коричневый' && canvasValue === 'Стандарт') {
    priceValue = S * 9200;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Коричневый' && canvasValue === 'Мошка') {
    priceValue = S * 9700;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Коричневый' && canvasValue === 'Пыльца') {
    priceValue = S * 10200;
    rangeError.classList.add('_hide');
  }
  if (selectValue === 'Детская' && colorValue === 'Коричневый' && canvasValue === 'Кошка') {
    priceValue = S * 9800;
    rangeError.classList.add('_hide');
  }
  price.innerHTML = Math.round(priceValue);
  priceInput.value = Math.round(priceValue);
}

function hideUnusedFields() {
  if (selectValue === 'Обычная') {
    canvasTitle.classList.add('_hide');
    canvasSection.classList.add('_hide');
    openingTitle.classList.add('_hide');
    openingSection.classList.add('_hide');
  }
  if (selectValue === 'Премиальная' || selectValue === 'Детская') {
    canvasTitle.classList.remove('_hide');
    canvasSection.classList.remove('_hide');
    openingTitle.classList.add('_hide');
    openingSection.classList.add('_hide');
  }
  if (selectValue === 'Плиссе') {
    canvasTitle.classList.add('_hide');
    canvasSection.classList.add('_hide');
    openingTitle.classList.remove('_hide');
    openingSection.classList.remove('_hide');
  }
}