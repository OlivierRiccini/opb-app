/* Fullpage.js implementation for section navigation */
const nbProjects = document.querySelectorAll('.projects-container').length;

$(document).ready(function() {
  $('#fullpage').fullpage({
    scrollingSpeed: 1500,
     afterLoad: function () {
      if ( this[0].dataset.indexSection != 0 ) {
        $('.arrow-top-0').fadeIn();
        $('.arrow-up-circle').fadeIn();
        $('.logo-index-page').fadeIn();
      } else {
        $('.arrow-top-0').fadeOut();
        $('.arrow-up-circle').fadeOut();
        $('.logo-index-page').fadeOut();
      }

      if ( this[0].dataset.indexSection == nbProjects ) {
        $('.arrow-down-circle').fadeOut();
      } else {
        $('.arrow-down-circle').fadeIn();
      }
    }
  });
});

/* Arrow to top 0 */
$(document).ready(function(){
  $('.arrow-top-0').click(function(){
    $.fn.fullpage.moveTo(1);
    return false;
  });
});

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
    arrow.addEventListener("click", function(){$.fn.fullpage.moveSectionDown()});

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
    arrow.addEventListener("click", function(){$.fn.fullpage.moveSectionUp();});

  defIntervalArrowUp();

  });
}
globalArrowUpAnimation();
