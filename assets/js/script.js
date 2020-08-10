$(document).ready(function(){

  $('body').css('opacity','1')
 
  $(".burg").bind("click", function(event){
    $('.nav-mob').toggleClass('open-nav-mob');
  });
 
  // $(".menu-burg").bind("click", function(event){
  //   $('.burger-menu').addClass('open-burger-menu');
  //   $('body').css('overflow','hidden');
  // });
 
  // $(".close-burg").bind("click", function(event){
  //   $('.burger-menu').removeClass('open-burger-menu');
  //   $('body').css('overflow','auto');
  // });

  // $(".close-pop").bind("click", function(event){
  //   $('.pop-up').removeClass('open-pop');
  //   $('.back-dark').removeClass('open-back-dark');
  //   $('body').css('overflow','auto')
  // });

  // $(".back-dark").bind("click", function(event){
  //   $('.pop-up').removeClass('open-pop');
  //   $('.back-dark').removeClass('open-back-dark');
  //   $('body').css('overflow','auto')
  // });

  // $("#check1-contactMenedg").mask("8(999) 999-9999");
  // $("#check1-contactMenedgBig").mask("8(999) 999-9999");
  // $("#numb3").mask("8(999) 999-9999");
  // $("#inp-footer").mask("8(999) 999-9999");
  // $("#inp-popup1").mask("8(999) 999-9999");
  // $("#phone-p").mask("8(999) 999-9999");
});


