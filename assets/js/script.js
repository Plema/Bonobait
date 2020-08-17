$(document).ready(function(){

  $('body').css('opacity','1')
 
  $(".burg").bind("click", function(event){
    $('.nav-mob').toggleClass('open-nav-mob');
  });
 
  $(".open-list").bind("click", function(event){
    // $('.hiddenNav').removeClass('openHiddenNav');
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

  $("#phone1").mask("8(999) 999-9999");

});


