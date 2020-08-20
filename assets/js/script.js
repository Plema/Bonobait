$(document).ready(function(){

  $('body').css('opacity','1')
 
  $(".burg").bind("click", function(event){
    $('.nav-mob').addClass('open-nav-mob');
    $('.back-dark').addClass('open-back');
  });
 
  $(".open-list").bind("click", function(event){
    $(this).find('.hiddenNav').toggleClass('openHiddenNav');
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

  
  $('.dop > img').on('click', function(){
    var imgSrc = $(this).attr('src');
    $('.main-img').attr('src' , imgSrc);
  });

   
  $(".back-dark").bind("click", function(event){
    $('.back-dark').removeClass('open-back');
    $('.pop-up').removeClass('open-pop');
    $('.nav-mob').removeClass('open-nav-mob');
    $('body').css('overflow', 'auto')
  });
   
  $(".close-pop").bind("click", function(event){
    $('.back-dark').removeClass('open-back');
    $('.pop-up').removeClass('open-pop');
    $('body').css('overflow', 'auto')
  });
   
  $(".open-med-pop").bind("click", function(event){
    $('.back-dark').addClass('open-back');
    $('.med-pop').addClass('open-pop');
    $('body').css('overflow', 'hidden')
  });
   
  $(".open-vet-pop").bind("click", function(event){
    $('.back-dark').addClass('open-back');
    $('.vet-pop').addClass('open-pop');
    $('body').css('overflow', 'hidden')
  });
      
  $(".open-phone-pop").bind("click", function(event){
    $('.back-dark').addClass('open-back');
    $('.contact-pop').addClass('open-pop');
    $('body').css('overflow', 'hidden')
  });
      
  $(".open-politic").bind("click", function(event){
    $('.back-dark').addClass('open-back');
    $('.politic-pop').addClass('open-pop');
    $('body').css('overflow', 'hidden')
  });


  $("#phone1").mask("8(999) 999-9999");
  $("#phone2").mask("8(999) 999-9999");

});


