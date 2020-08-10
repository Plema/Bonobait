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
  
  //Slick-empty
  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();

  $(".more").bind("click", function(event){
    $('.hidd').css('display','block');
    $('.more').css('display','none');
  });

  $(".first-med").bind("click", function(event){
    $('.all-sel-desc > p').removeClass('active');
    $(this).addClass('active');
    $('.all-blocks > .one-block').removeClass('active');
    $('.all-blocks > .first').addClass('active');
    console.log('yes')
  });

  $(".second-med").bind("click", function(event){
    $('.all-sel-desc > p').removeClass('active');
    $(this).addClass('active');
    $('.all-blocks > .one-block').removeClass('active');
    $('.all-blocks > .second').addClass('active');
  });

  $(".third-med").bind("click", function(event){
    $('.all-sel-desc > p').removeClass('active');
    $(this).addClass('active');
    $('.all-blocks > .one-block').removeClass('active');
    $('.all-blocks > .third').addClass('active');
  });

  $(".fourth-med").bind("click", function(event){
    $('.all-sel-desc > p').removeClass('active');
    $(this).addClass('active');
    $('.all-blocks > .one-block').removeClass('active');
    $('.all-blocks > .fourth').addClass('active');
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


});
