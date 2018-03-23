/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')


const path = document.querySelectorAll('path');
const rect = document.querySelectorAll('rect');
const logo = document.getElementById('logo');

/* Create intervals in order to clear them after action*/
let interval = null;
let interval2 = null;
let interval3 = null;
let interval4 = null;
let interval5 = null;
let interval6 = null;
let interval7 = null;
let interval8 = null;
let interval9 = null;

function defInterval() {
  interval = setInterval(draw, 20);
}

function defInterval2() {
  interval2 = setInterval(fill, 10);
}


function defInterval3() {
  interval3 = setInterval(inverseDraw, 20);
}

function defInterval4() {
  interval4 = setInterval(animItem, 1);
}

function defInterval5() {
  interval5 = setInterval(animItem2, 1);
}

function defInterval6() {
  interval6 = setInterval(animItem3, 1);
}

function defInterval7() {
  interval7 = setInterval(iterator1, 5);
}

function defInterval8() {
  interval8 = setInterval(iterator2, 5);
}

function defInterval9() {
  interval9 = setInterval(iterator3, 5);
}



/* Drawing Logo */
let i = 1500;
function draw() {
  i += 5;
  path.forEach(function(element) {
    element.style.strokeDasharray = `${i}`;
    if(i >= 3000) {
      clearInterval(interval);
    }
  });
  rect.forEach(function(element) {
    element.style.strokeDasharray = `${i}`;
    if(i >= 3000) {
      clearInterval(interval);
    }
  });
}


/* Filling Logo */
let j = 0;
function fill() {
  j += 0.01;
  path.forEach(function(element) {
    element.style.fill = `rgba(0,0,0,${j})`;
    if(j >= 1) {
      clearInterval(interval2);
    }
  });
  rect.forEach(function(element) {
    element.style.fill = `rgba(0,0,0,${j})`;
    if(j >= 1) {
      clearInterval(interval2);
    }
  });
}

let i2 = 3000;
function inverseDraw() {
  i2 -= 5;
  path.forEach(function(element) {
    element.style.strokeDasharray = `${i2}`;
    if(i2 <= 1500) {
      clearInterval(interval3);
    }
  });
  rect.forEach(function(element) {
    element.style.strokeDasharray = `${i2}`;
    if(i2 <= 1500) {
      clearInterval(interval3);
    }
  });
}

/* nav items animation */
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
    clearInterval(interval4);
  }
}

let l2 = 0;
function animItem2() {
  l2 += 0.5;
  items[1].style.left = `${-items[1].offsetWidth + l2}px`;
  if (items[1].offsetWidth - l2 == 0) {
    clearInterval(interval5);
  }
}

let l3 = 0;
function animItem3() {
  l3 += 0.5;
  items[2].style.left = `${-items[2].offsetWidth + l3}px`;
  if (items[2].offsetWidth - l3 == 0) {
    clearInterval(interval6);
  }
}

const plusSigns = document.querySelectorAll('.fa-plus-circle');


let r1 = 0;
function iterator1() {
  r1 += 1;
  plusSigns[0].style.transform = `rotate(${r1}deg)`;
}

let r2 = 0;
function iterator2() {
  r2 += 1;
  plusSigns[1].style.transform = `rotate(${r2}deg)`;
}

let r3 = 0;
function iterator3() {
  r3 += 1;
  plusSigns[2].style.transform = `rotate(${r3}deg)`;
}

function animPlus(r1, ) {
  setTimeout(function(){
    plusSigns[0].style.visibility = 'visible';
  }, 9500);
  setTimeout(function(){
    plusSigns[1].style.visibility = 'visible';
  }, 11000);
  setTimeout(function(){
    plusSigns[2].style.visibility = 'visible';
  }, 12500);
}

animPlus();
initItem();
animItem();
defInterval();
setTimeout(defInterval2, 4000);
setTimeout(defInterval3, 4100);
setTimeout(defInterval4, 10000);
setTimeout(defInterval7, 10000);
setTimeout(defInterval5, 11500);
setTimeout(defInterval8, 11500);
setTimeout(defInterval6, 13000);
setTimeout(defInterval9, 13000);
