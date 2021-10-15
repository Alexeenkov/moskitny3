const adButtons = document.getElementsByClassName('ad__button');
const mainButtons = document.getElementsByClassName('button_click');
const inputAddress = document.getElementById('input-address');
const helpInput = document.getElementById('source');
const addressSign = document.getElementById('address-sign');
const mailTitle = document.getElementById('for-mail-title');
const popupTitle = document.querySelector('.popup__title');

if (adButtons) {
    for (let button of adButtons) {
        button.addEventListener('click', () => {
            popupTitle.textContent = 'Добавьте адрес сайта или соцсети';
            if (button.textContent === 'Рекламировать соцсеть') {
                inputAddress.setAttribute('placeholder', 'Введите адрес соц. сети');
                helpInput.value = 'Ссылка на аккаунт соц. сети:';
                mailTitle.value = 'Пользователь заполнил форму "Рекламировать социальную сеть"!';
                addressSign.textContent = 'Например, https://instagram.com/ivan';
            } else if (button.textContent === 'Рекламировать интернет-магазин') {
                inputAddress.setAttribute('placeholder', 'Введите адрес интернет-магазина');
                helpInput.value = 'Ссылка на интернет-магазин:';
                mailTitle.value = 'Пользователь заполнил форму "Рекламировать интернет-магазин"!';
                addressSign.textContent = 'Например, https://ozon.ru';
            } else if (button.textContent === 'Рекламировать сайт') {
                inputAddress.setAttribute('placeholder', 'Введите адрес сайта');
                helpInput.value = 'Ссылка на сайт:';
                mailTitle.value = 'Пользователь заполнил форму "Рекламировать сайт"!';
                addressSign.textContent = 'Например, https://yandex.ru';
            }
        });
    }
}

if (mainButtons) {
    for (let button of mainButtons) {
        button.addEventListener('click', () => {
            if (button.textContent === 'Провести аудит') {
                popupTitle.textContent = 'Оставьте заявку, и мы проведем аудит Ваших рекламных кампаний, и покажем, как повысить количество заявок';
                mailTitle.value = 'Пользователь заполнил форму "Провести аудит"!';
            } else if (button.textContent === 'Получить кейсы') {
                mailTitle.value = 'Пользователь заполнил форму "Получить кейсы"!';
            } else {
                mailTitle.value = 'Пользователь заполнил форму "Обратный звонок"!';
            }
        });
    }
}