// Инициализируем Swiper
new Swiper('.slider', {
    // Навигация 
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        type: 'bullets',
        clickable: true
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    // Отступ между слайдами
    spaceBetween: 20,
    autoHeight: true,
    keyboard: {
        enabled: true,
    },
    odserver: true,
    observeParents: true,
    observeSlideChildren: true,
});