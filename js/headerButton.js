let headerButton = document.getElementById('header-button');

changeNameButton();

window.addEventListener('resize', () => {
    changeNameButton();
});

function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
}

function changeNameButton() {
    if (getWindowWidth() <= 700) {
        headerButton.textContent = 'Оставить заявку';
    } else {
        headerButton.textContent = 'Обратный звонок';
    }
};