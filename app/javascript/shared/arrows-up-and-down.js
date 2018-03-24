$(document).ready(function(){
  $('.arrow-down-circle').click(function(){
    $("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, "slow"); return false;
  });
});


$(document).ready(function(){
  $('.arrow-up-circle').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});

/* Arrow pulse bottom */
const arrowDown = document.querySelectorAll('.arrow-down');

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

defIntervalArrowDown();


/* Arrow pulse up */
const arrowUp = document.querySelectorAll('.arrow-up');

let intervalArrowUp = null;

function defIntervalArrowUp() {
  intervalArrowUp = setInterval(arrwoUpAnimation, 50);
}

let arrowUpIndex = 5;
let arrowUpColorIndex = 0;

function arrwoUpAnimation() {
  arrowUpIndex += 1;
  arrowUpColorIndex += 0.05;
  arrowUp[0].style.bottom = `${arrowUpIndex}px`;
  arrowUp[0].style.borderColor = `rgba(0,0,0,${arrowUpColorIndex})`;
  if (arrowUpColorIndex >= 1) {
    arrowUpColorIndex = 0;
  }
  if (arrowUpIndex >= 20) {
    arrowUpIndex = 5;
  }
}

// defIntervalArrowUp();
