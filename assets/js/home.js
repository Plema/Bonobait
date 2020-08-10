$(document).ready(function(){
 
  $('.all-slider-banner').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    customPaging : function(slider, i) {
      var slidesCount = slider.slideCount;
      if(slider.slideCount <= 9 ) {
        slidesCount = '0'+slider.slideCount;
      }
      if(i <= 8) {
        return '<a class="link">0'+(i+1)+'</a>'
      }
      else {
        return '<a class="link">'+(i+1)+'></a>'
      }
    }
  });
  
  //Slick-empty
  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();

  $(".more").bind("click", function(event){
    $('.hidd').css('display','block');
    $('.more').css('display','none');
  });

//   function windowSize(){
//     if ($(window).width() < '1280'){
//         $( ".showText" ).click(function(event) {
//           event.preventDefault();
//         $('.sel').stop().slideToggle();
//         });
//         $( ".hiddenText" ).click(function(event) {
//             var x = $(this).text();
//             var y = $(".showText").text();
//               $(this).text(y);
//               $(".showText").text(x);
//             $('.sel').stop().slideToggle();
//         });
//     } else {
//       $(".select-desc > p").bind("click", function(event){

//         $(this).parent().parent().find(".all-block-info").removeClass().addClass("all-block-info");
//         var $thisClass = $(this).attr("class");
//         var $some = $(this).parent().parent().find(".all-block-info").addClass($thisClass + "-show");

//         $('.select-desc > p').removeClass('active');
//         $(this).addClass('active');
//       });
//     }
// }
//   $(window).on('load resize',windowSize);


});
