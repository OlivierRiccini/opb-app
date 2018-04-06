/* Drawing Logo */
const path = document.querySelectorAll('path');
const logo = document.getElementById('logo');

let intervalDraw = null;

let i = 1500;
function draw() {
  i += 5;
  path.forEach(function(element) {
    element.style.strokeDasharray = `${i}`;
    if(i >= 3000) {
      clearInterval(intervalDraw);
    }
  });
}

function defIntervalDraw() {
  intervalDraw = setInterval(draw, 20);
}

defIntervalDraw();
//////////////////////////////////////////////////////////

/* Filling Logo */
let intervalFill = null;

let j = 0;
function fill() {
  j += 0.01;
  path.forEach(function(element) {
    element.style.fill = `rgba(0,0,0,${j})`;
    if(j >= 1) {
      clearInterval(intervalFill);
    }
  });
}

function defIntervalFill() {
  intervalFill = setInterval(fill, 10);
}

setTimeout(defIntervalFill, 4000);
/////////////////////////////////////////////////////


/* Displaying navigation items */
let intervalAnimItem1 = null;
let intervalAnimItem2 = null;
let intervalAnimItem3 = null;

function defIntervalAnimItem1() {
  AnimItem1 = setInterval(animItem, 1);
}

function defIntervalAnimItem2() {
  AnimItem2 = setInterval(animItem2, 1);
}

function defIntervalAnimItem3() {
  AnimItem3 = setInterval(animItem3, 1);
}

const items = document.querySelectorAll('.nav-label');

function initItem() {
  items.forEach(function(item){
    item.style.left = `${-item.offsetWidth}px`;
  });
}

let l = 0;
function animItem() {
  l += 0.5;
  items[0].style.left = `${-items[0].offsetWidth + l}px`;
  if (items[0].offsetWidth - l == 0) {
    clearInterval(AnimItem1);
  }
}

let l2 = 0;
function animItem2() {
  l2 += 0.5;
  items[1].style.left = `${-items[1].offsetWidth + l2}px`;
  if (items[1].offsetWidth - l2 == 1) {
    clearInterval(AnimItem2);
  }
}

let l3 = 0;
function animItem3() {
  l3 += 0.5;
  items[2].style.left = `${-items[2].offsetWidth + l3}px`;
  if (items[2].offsetWidth - l3 == -1) {
    clearInterval(AnimItem3);
  }
}

initItem();
animItem();
setTimeout(defIntervalAnimItem1, 5000);
setTimeout(defIntervalAnimItem2, 5000);
setTimeout(defIntervalAnimItem3, 5000);
////////////////////////////////////////////////////

/* Animating plus signs, with spin animation */
const plusSigns = document.querySelectorAll('.fa-plus-circle');

let intervalSpin1 = null;
let intervalSpin2 = null;
let intervalSpin3 = null;

function defIntervalSpin1(deg, direction) {
  intervalSpin1 = setInterval(function() { spin1(deg, direction); }, 5);
}

function defIntervalSpin2(deg, direction) {
  intervalSpin2 = setInterval(function() { spin2(deg, direction); }, 5);
}

function defIntervalSpin3(deg, direction) {
  intervalSpin3 = setInterval(function() { spin3(deg, direction); }, 5);
}

function animPlus() {
  setTimeout(function(){
    plusSigns[0].style.visibility = 'visible';
    plusSigns[1].style.visibility = 'visible';
    plusSigns[2].style.visibility = 'visible';
  }, 5000);
}

let r1 = 0;
function spin1(deg, direction) {
  if (direction == 1) {
    r1 += 1;
    plusSigns[0].style.transform = `rotate(${r1}deg)`;
    if (r1 >= deg) {
      clearInterval(intervalSpin1);
      r1 = 0;
    }
  } else if (direction == -1) {
    r1 -= 1;
    plusSigns[0].style.transform = `rotate(${r1}deg)`;
    if (r1 <= deg) {
      clearInterval(intervalSpin1);
      r1 = 0;
    }
  }
}

let r2 = 0;
function spin2(deg, direction) {
  if (direction == 1) {
    r2 += 1;
    plusSigns[1].style.transform = `rotate(${r2}deg)`;
    if (r2 >= deg) {
      clearInterval(intervalSpin2);
      r2 = 0;
    }
  } else if (direction == -1) {
    r2 -= 1;
    plusSigns[1].style.transform = `rotate(${r2}deg)`;
    if (r2 <= deg) {
      clearInterval(intervalSpin2);
      r2 = 0;
    }
  }
}

let r3 = 0;
function spin3(deg, direction) {
  if (direction == 1) {
    r3 += 1;
    plusSigns[2].style.transform = `rotate(${r3}deg)`;
    if (r3 >= deg) {
      clearInterval(intervalSpin3);
      r3 = 0
    }
  } else if (direction == -1) {
    r3 -= 1;
    plusSigns[2].style.transform = `rotate(${r3}deg)`;
    if (r3 <= deg) {
      clearInterval(intervalSpin3);
      r3 = 0
    }
  }
}

animPlus();
setTimeout(function() {
  defIntervalSpin1(180, 1);
  defIntervalSpin2(180, 1);
  defIntervalSpin3(180, 1);
}, 5000);

/////////////////////////////////////////////////////////////////

/* Hover effect on plus signs*/
plusSigns[0].addEventListener('mouseover', function() { defIntervalSpin1(90, 1); });
plusSigns[0].addEventListener('mouseleave', function() { defIntervalSpin1(-90, -1); });
plusSigns[1].addEventListener('mouseover', function() { defIntervalSpin2(90, 1); });
plusSigns[1].addEventListener('mouseleave', function() { defIntervalSpin2(-90, -1); });
plusSigns[2].addEventListener('mouseover', function() { defIntervalSpin3(90, 1); });
plusSigns[2].addEventListener('mouseleave', function() { defIntervalSpin3(-90, -1); });
