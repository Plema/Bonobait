$(document).ready(function(){
  function windowSize(){
    if ($(window).width() < '1024'){

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

    } 
  }
  $(window).on('load resize',windowSize);
});