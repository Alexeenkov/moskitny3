function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [44.104931535961455, 42.98426180732747],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17
  });

  var myMap2 = new ymaps.Map("map-mobile", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [44.1049624591062, 42.98689631349182],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17
  });

  myMap.behaviors.disable([
    'scrollZoom'
  ]);

  myMap2.behaviors.disable([
    'scrollZoom'
  ]);

  var myPlacemark = new ymaps.Placemark([44.1049624591062, 42.98689631349182], {
    balloonContentHeader: 'Производство жалюзи на КМВ "АСК & ТРИМ"',
    balloonContentBody: 'г. Лермонтов, ул. Матвиенко, д. 3',
    balloonContentFooter: '2-ой Дом Олимп (Напротив фитнес - клуба FitTime)',
    hintContent: 'Производство жалюзи на КМВ "АСК & ТРИМ"'
  }, {
    preset: 'islands#redIcon'
  });

  var myPlacemark2 = new ymaps.Placemark([44.1049624591062, 42.98689631349182], {
    balloonContentHeader: 'Производство жалюзи на КМВ "АСК & ТРИМ"',
    balloonContentBody: 'г. Лермонтов, ул. Матвиенко, д. 3',
    balloonContentFooter: '2-ой Дом Олимп (Напротив фитнес - клуба FitTime)',
    hintContent: 'Производство жалюзи на КМВ "АСК & ТРИМ"'
  }, {
    preset: 'islands#redIcon'
  });

  myMap.geoObjects.add(myPlacemark);
  myMap2.geoObjects.add(myPlacemark2);

  // Балун откроется в точке «привязки» балуна — т. е. над меткой.
  // myPlacemark.balloon.open();
}