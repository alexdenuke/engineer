    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [55.753656, 37.589988],
            zoom: 17
        });
    
        var myPlacemark = new ymaps.Placemark([55.753656, 37.589988], {
            hintContent: 'Smart Engineer',
            balloonContent: 'Smart Engineer'
        });
        myMap.behaviors.disable('scrollZoom');
    
        myMap.geoObjects.add(myPlacemark);
    }
