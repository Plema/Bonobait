$(document).ready(function(){

  $('.slider-text').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    dots: false,
    fade: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: true,
        }
      }
    ]
  });

  $('.slider-bones').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    fade: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();
});


