$(document).ready(function(){
  function windowSize(){
    if ($(window).width() < '768'){

        $( ".showTextGeneral" ).click(function(event) {
          event.preventDefault();
          $('.hiddenTextGeneral').stop().slideToggle();
        });

        $( ".hiddenTextGeneral" ).click(function(event) {
          var x = $(this).text();
          var y = $(".showTextGeneral").text();
          $(this).text(y);
          $(".showTextGeneral").text(x);
          $('.hiddenTextGeneral').stop().slideToggle();
        });

    } 
    else {
      $(".first-v").bind("click", function(event){
        $('.select > p').removeClass('showTextGeneral');
        $(this).addClass('showTextGeneral');
        $('.one-slide').removeClass('activ-vet')
        $('.first-vet').addClass('activ-vet')
      });
      $(".sec-v").bind("click", function(event){
        $('.select > p').removeClass('showTextGeneral');
        $(this).addClass('showTextGeneral');
        $('.one-slide').removeClass('activ-vet')
        $('.sec-vet').addClass('activ-vet')
      });
      $(".third-v").bind("click", function(event){
        $('.select > p').removeClass('showTextGeneral');
        $(this).addClass('showTextGeneral');
        $('.one-slide').removeClass('activ-vet')
        $('.third-vet').addClass('activ-vet')
      });
      $(".four-v").bind("click", function(event){
        $('.select > p').removeClass('showTextGeneral');
        $(this).addClass('showTextGeneral');
        $('.one-slide').removeClass('activ-vet')
        $('.four-vet').addClass('activ-vet')
      });
      $(".fif-v").bind("click", function(event){
        $('.select > p').removeClass('showTextGeneral');
        $(this).addClass('showTextGeneral');
        $('.one-slide').removeClass('activ-vet')
        $('.fif-vet').addClass('activ-vet')
      });
      $(".six-v").bind("click", function(event){
        $('.select > p').removeClass('showTextGeneral');
        $(this).addClass('showTextGeneral');
        $('.one-slide').removeClass('activ-vet')
        $('.six-vet').addClass('activ-vet')
      });
    }
  }
  $(window).on('load resize',windowSize);
});