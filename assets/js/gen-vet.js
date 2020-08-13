$(document).ready(function(){
  function windowSize(){
    if ($(window).width() < '1280'){

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