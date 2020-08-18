$(document).ready(function(){

   
  $(".med").bind("click", function(event){
    $('.med').removeClass('white-button');
    $('.med').addClass('blue-button');
    $('.vet').removeClass('blue-button');
    $('.vet').addClass('white-button');
    $('.all-medicine').removeClass('none');
    $('.all-vet').addClass('none');
  });
   
  $(".vet").bind("click", function(event){
    $('.vet').removeClass('white-button');
    $('.vet').addClass('blue-button');
    $('.med').removeClass('blue-button');
    $('.med').addClass('white-button');
    $('.all-vet').removeClass('none');
    $('.all-medicine').addClass('none');
  });

});
