function srollDown(index) {
  $("html, body").animate({ scrollTop: $(window).height() * index }, "slow"); return false;
}

function srollUp(index) {
  $("html, body").animate({ scrollTop : $(window).height() * index - $(window).height() * 2 }, "slow"); return false;
}

/* Arrow pulse bottom */
const arrowDownCircle = document.querySelectorAll('.arrow-down-circle');
const nbProjects = document.querySelectorAll('.projects-container').length;

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

    if (arrow.dataset.arrowDown == nbProjects + 1) {
      arrow.style.display = 'none';
    }

  defIntervalArrowDown();

  });
}
globalArrowDownAnimation();


/* Arrow pulse up */
const arrowUpCircle = document.querySelectorAll('.arrow-up-circle');

function globalArrowUpAnimation() {
  arrowUpCircle.forEach(function(arrow) {
    const arrowUp = arrow.querySelectorAll('.arrow-up');
    let intervalArrowUp = null;

    function defIntervalArrowUp() {
      intervalArrowUp = setInterval(arrwoUpAnimation, 50);
    }

    let arrowUpIndex = 5;
    let arrowUpColorIndex = 0;

    function arrwoUpAnimation() {
      arrowUpIndex += 1;
      arrowUpColorIndex += 0.05;
      arrowUp[0].style.top = `${arrowUpIndex}px`;
      arrowUp[0].style.borderColor = `rgba(0,0,0,${arrowUpColorIndex})`;
      if (arrowUpColorIndex >= 1) {
        arrowUpColorIndex = 0;
      }
      if (arrowUpIndex >= 20) {
        arrowUpIndex = 5;
      }
    }

    /* calling scroll down function using index defining scrolling height */
    arrow.addEventListener("click", function(){srollUp(arrow.dataset.arrowUp)});

  defIntervalArrowUp();

  });
}
globalArrowUpAnimation();


/* Arrow to top 0 */

$(document).ready(function(){
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.arrow-top-0').fadeIn();
    } else {
      $('.arrow-top-0').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.arrow-top-0').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});
