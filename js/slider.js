const images = document.querySelectorAll('.gallery__image img');
const buttons = document.querySelectorAll('.gallery__button');
const mainImages = document.querySelectorAll('.gallery__main img');
const popupImage = document.querySelector('.slider__img img');
const popupButtonRight = document.querySelector('.slider__right');
const popupButtonLeft = document.querySelector('.slider__left');
let buttonRight;
let buttonLeft;

for (let image of images) {
  image.addEventListener('click', (event) => {
    const clickedImg = event.target;
    const activeImgs = clickedImg.closest('.gallery').querySelectorAll('.active');
    for (activeImg of activeImgs) {
      activeImg.classList.remove('active');
    }
    clickedImg.closest('.gallery__image').classList.add('active');
    showImage(clickedImg);
  });
}

for (let mainImage of mainImages) {
  mainImage.addEventListener('click', (event) => {
    const clickedImg = event.target;
    popupImage.src = clickedImg.src;

    buttonRight = clickedImg.closest('.gallery').querySelector('.gallery__right');
    buttonLeft = clickedImg.closest('.gallery').querySelector('.gallery__left');
  });
}

popupButtonRight.addEventListener('click', () => {
  buttonRight.click();
});
popupButtonLeft.addEventListener('click', () => {
  buttonLeft.click();
});

// ? При нажатии на одну из кнопок:
for (button of buttons) {
  button.addEventListener('click', (event) => {
    const clickedButton = event.target;
    const imagesAll = clickedButton.closest('.gallery').querySelectorAll('.gallery__image');
    // ! Если кликнули на стрелку вправо:
    if (clickedButton.classList.contains('gallery__right')) {
      // Меняем активный слайд на следующий:
      for (let i = 0; i < imagesAll.length; i++) {
        if (imagesAll[i].classList.contains('active')) {
          imagesAll[i].classList.remove('active');
          if (imagesAll[i + 1] === undefined) {
            i = 0;
            imagesAll[i].classList.add('active');
            showImage(imagesAll[i].querySelector('img'));
          } else {
            imagesAll[i + 1].classList.add('active');
            showImage(imagesAll[i + 1].querySelector('img'));
          }
          break;
        }
      }
    } else {
      // ! Если кликнули на стрелку влево:
      // Меняем активный слайд на предыдущий:
      for (let i = 0; i < imagesAll.length; i++) {
        if (imagesAll[i].classList.contains('active')) {
          imagesAll[i].classList.remove('active');
          if (imagesAll[i - 1] === undefined) {
            i = 3;
            imagesAll[i].classList.add('active');
            showImage(imagesAll[i].querySelector('img'));
          } else {
            imagesAll[i - 1].classList.add('active');
            showImage(imagesAll[i - 1].querySelector('img'));
          }
          break;
        }
      }
    }
  });
}

function showImage(image) {
  const mainImage = image.closest('.gallery').querySelector('.gallery__main img');
  mainImage.src = image.dataset.big;
  popupImage.src = mainImage.src;
}