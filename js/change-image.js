'use strict'

// ? Смена изображений первого экрана:
// Когда документ загружен:
document.addEventListener('DOMContentLoaded', () => {
    let imageMain = document.querySelector('.main__image');
    let num = 2;

    // Выполняется функция changesImages с указанным интервалом:
    setInterval(changesImages, 1500);

    // Меняет изображения первого экрана:
    function changesImages() {
        imageMain.setAttribute('src', `img/1-screen/img-${num}.png`);
        num += 1;
        if (num === 4) {
            num = 1;
        }
    }
});