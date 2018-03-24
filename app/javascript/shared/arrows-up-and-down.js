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

/* Arrow pulse left */
const arrowLeft = document.querySelectorAll('.arrow-left');

let intervalArrowLeft = null;

function defIntervalArrowLeft() {
  intervalArrowLeft = setInterval(arrwoLeftAnimation, 50);
}

let arrowLeftIndex = -10;
let arrowLeftColorIndex = 0;

function arrwoLeftAnimation() {
  arrowLeftIndex += 1;
  arrowLeftColorIndex += 0.05;
  arrowLeft[1].style.left = `${arrowLeftIndex}px`;
  arrowLeft[1].style.borderColor = `rgba(0,0,0,${arrowLeftColorIndex})`;
  if (arrowLeftColorIndex >= 1) {
    arrowLeftColorIndex = 0;
  }
  if (arrowLeftIndex >= 5) {
    arrowLeftIndex = -10;
  }
}

defIntervalArrowLeft();

/* Arrow pulse right */
const arrowRight = document.querySelectorAll('.arrow-right');

let intervalArrowRight = null;

function defIntervalArrowRight() {
  intervalArrowRight = setInterval(arrwoRightAnimation, 50);
}

let arrowRightIndex = -10;
let arrowRightColorIndex = 0;

function arrwoRightAnimation() {
  arrowRightIndex += 1;
  arrowRightColorIndex += 0.05;
  arrowRight[0].style.right = `${arrowRightIndex}px`;
  arrowRight[0].style.borderColor = `rgba(0,0,0,${arrowRightColorIndex})`;
  if (arrowRightColorIndex >= 1) {
    arrowRightColorIndex = 0;
  }
  if (arrowRightIndex >= 5) {
    arrowRightIndex = -10;
  }
}

defIntervalArrowRight();
