$(document).ready(function(){
  $('.arrow-circle').click(function(){
  $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }); return false;
  });
});

$(document).ready(function(){
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.arrow-circle-up').fadeIn();
    } else {
      $('.arrow-circle-up').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.arrow-circle-up').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});
