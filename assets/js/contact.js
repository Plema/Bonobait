$(document).ready(function(){
 
  $(".title").bind("click", function(event){
    $(this).parent().find('.answer').slideToggle();
    $(this).parent().toggleClass('open-quest');
  });
 

});


ymaps.ready(function () {
var myMap = new ymaps.Map('map', {
        center: [55.741049, 37.524327],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    })

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      balloonContent: 'Moscow, Kutuzovsky Ave 36 b.3'
    }, {
        iconLayout: 'default#image',
    }),
    myMap.geoObjects
        .add(myPlacemark);
});