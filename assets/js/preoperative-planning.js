$(document).ready(function(){


  
  function windowSize2(){
    if ($(window).width() < '768'){
        $('.all-slider-schema').slick({
          dots: true,
          arrows: false,
          infinite: false,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        });
        $('.slick-arrow').empty();
        $('.slick-dots > li > button').empty();
    }}
  $(window).on('load resize',windowSize2);

});
