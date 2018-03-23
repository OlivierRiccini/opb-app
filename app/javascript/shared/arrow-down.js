$(document).ready(function(){
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollDown() > 500) {
      $('.scrollToDown').fadeIn();
    } else {
      $('.scrollToDown').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrollToDown').click(function(){
    $('html, body').animate({scrollDown : 0},800);
    return false;
  });

});
