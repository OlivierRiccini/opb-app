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
const logo = document.getElementById('logo');

/* Create intervals in order to clear them after action*/
let interval = null;
let interval2 = null;
let interval3 = null;
let interval4 = null;
let interval5 = null;

function defInterval() {
  interval = setInterval(draw, 30);
}

function defInterval2() {
  interval2 = setInterval(fill, 50);
}

function defInterval3() {
  interval3 = setInterval(changeLogoPositionTop, 9);
}

function defInterval4() {
  interval4 = setInterval(changeLogoPositionLeft, 3);
}

function defInterval5() {
  interval5 = setInterval(changeLogoWidth, 20);
}


/* Drawing Logo */
let i = 1500;
function draw() {
  i += 5;
  path.forEach(function(element) {
    element.style.strokeDasharray = `${i}`;
    if(i == 3000) {
      clearInterval(interval);
    }
  });
}

/* Filling Logo */
let j = 0;
function fill() {
  j += 0.01;
  path.forEach(function(element) {
    element.style.fill = `rgba(0,0,0,${j}`;
    if(j == 1) {
      clearInterval(interval2);    }
  });
}

var rect = logo.getBoundingClientRect();

let t = rect.top;
let l = rect.left;

function changeLogoPositionTop() {
  t -= 1;
  logo.style.top = `${t}px`;
  if(t <= 0) {
    clearInterval(interval3);
  }
}

function changeLogoPositionLeft() {
  l -= 1;
  logo.style.left = `${l}px`;
  if(l <= 0) {
    clearInterval(interval4);
  }
}


let w = 0;
if(window.innerWidth > 650) {
  w = 40;
} else {
  w = 50;
}

function changeLogoWidth() {
  w -= 0.1;
  logo.style.width = `${w}vw`
  if(window.innerWidth < 600 && w < 35) {
    clearInterval(interval5);
  } else if(window.innerWidth < 800 && w < 30) {
    clearInterval(interval5);
  } else if(window.innerWidth > 800 && w < 25) {
    clearInterval(interval5);
  }
}


defInterval();
setTimeout(defInterval2, 8000);
setTimeout(defInterval3, 10000);
setTimeout(defInterval4, 10000);
setTimeout(defInterval5, 10000);
