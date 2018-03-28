function srollDown(index) {
  $("html, body").animate({ scrollTop: $(window).height() * index }, "slow"); return false;
}

/* Arrow pulse bottom */
const arrowDownCircle = document.querySelectorAll('.arrow-down-circle');

function globalArrowDownAnimation() {
  arrowDownCircle.forEach(function(arrow) {
    const arrowDown = arrow.querySelectorAll('.arrow-down');
    let intervalArrowDown = null;

    function defIntervalArrowDown() {
      intervalArrowDown = setInterval(arrwoDownAnimation, 50);
    }

    let arrowDownIndex = 5;
    let arrowDownColorIndex = 0;

    function arrwoDownAnimation() {
      arrowDownIndex += 1;
      arrowDownColorIndex += 0.05;
      arrowDown[0].style.top = `${arrowDownIndex}px`;
      arrowDown[0].style.borderColor = `rgba(0,0,0,${arrowDownColorIndex})`;
      if (arrowDownColorIndex >= 1) {
        arrowDownColorIndex = 0;
      }
      if (arrowDownIndex >= 20) {
        arrowDownIndex = 5;
      }
    }

    /* calling scroll down function using index defining scrolling height */
    arrow.addEventListener("click", function(){srollDown(arrow.dataset.arrowDown)});

  defIntervalArrowDown();

  });
}
globalArrowDownAnimation();


/* Arrow pulse up */
$(document).ready(function(){
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.arrow-up-circle').fadeIn();
    } else {
      $('.arrow-up-circle').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.arrow-up-circle').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});
