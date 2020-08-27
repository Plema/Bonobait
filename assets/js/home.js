$(document).ready(function(){
 
  $('.all-slider-banner').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });

  $(".all-slider-banner").on('afterChange', function(event, slick, currentSlide, slidesCount){
    $("#cp").text(currentSlide + 1);
  });

  $(".more").bind("click", function(event){
    $('.hidd').css('display','block');
    $('.more').css('display','none');
  });


  function windowSize(){
    if ($(window).width() < '1280'){

        $( ".showText" ).click(function(event) {
          event.preventDefault();
          $('.hiddenText').stop().slideToggle();
        });

        $( ".hiddenText" ).click(function(event) {
          var x = $(this).text();
          var y = $(".showText").text();
          $(this).text(y);
          $(".showText").text(x);
          $('.hiddenText').stop().slideToggle();
        });

    } else {
      $(".select-desc > p").bind("click", function(event){

        $(this).parent().parent().find(".all-block-info").removeClass().addClass("all-block-info");
        var $thisClass = $(this).attr("class");
        var $some = $(this).parent().parent().find(".all-block-info").addClass($thisClass + "-show");

        $('.select-desc > p').removeClass('active');
        $(this).addClass('active');
      });
    }
  }
  $(window).on('load resize',windowSize);

 
  $('.all-vet-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
  });

 
  $('.all-slider-partners').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // variableWidth: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
        }
      },
    ]
  });
 
  $('.all-slider-news').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    fade: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          fade: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
        }
      },
    ]
  });

  $( ".showTextForm" ).click(function(event) {
    event.preventDefault();
    $('.hiddenTextForm').stop().slideToggle();
  });

  $( ".hiddenTextForm" ).click(function(event) {
    var x = $(this).text();
    var y = $(".showText").text();
    $(this).text(y);
    $(".showTextForm").text(x);
    $('.hiddenTextForm').stop().slideToggle();
  });

    
  //Slick-empty
  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();


});
