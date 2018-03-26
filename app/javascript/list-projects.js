const listNav = document.querySelector('.info-opb-right ul');

/* different pages */
const agencyPage = document.querySelector('.container-agency');
const listProjects = document.querySelector('.container-list-projects');
const contactPage = document.querySelector('.container-contact');

const circleArrow = document.querySelectorAll('.arrow-down-circle');

let fadeOutInterval = null;

function defFadeOutInterval(page) {
  fadeOutInterval = setInterval(function(){fadeOut(page)}, 50);
  fadeOutIndex = 0;
  fadeInIndex = 1;
}

let fadeOutIndex = 0;
let fadeInIndex = 1;

function fadeOut(page) {
  fadeOutIndex += 0.05;
  fadeInIndex -= 0.05;
  page.style.opacity = fadeOutIndex;
  listNav.style.opacity = fadeInIndex;
  page.style.zIndex = 999;
  circleArrow.forEach(function(arrow){
    arrow.style.opacity = fadeInIndex;
  });
  if (fadeOutIndex >= 1) {
    clearInterval(fadeOutInterval);
  }
}

const agencyButton = document.getElementById('agence-nav');
const projectsButton = document.getElementById('projets-nav');
const contactButton = document.getElementById('contact-nav');

agencyButton.addEventListener('click', function(){defFadeOutInterval(agencyPage)});
projectsButton.addEventListener('click', function(){defFadeOutInterval(listProjects)});
contactButton.addEventListener('click', function(){defFadeOutInterval(contactPage)});

////////////////////////////////////////

let fadeInInterval = null;

function defFadeInInterval() {
  fadeInInterval = setInterval(fadeIn, 50);
  fadeInIndex2 = 1;
  fadeOutIndex2 = 0;
}

let fadeInIndex2 = 1;
let fadeOutIndex2 = 0;

function fadeIn() {
  fadeInIndex2 -= 0.05;
  fadeOutIndex2 += 0.05;
  listProjects.style.opacity = fadeInIndex2;
  listNav.style.opacity = fadeOutIndex2;
  listProjects.style.zIndex = 0;
  circleArrow.forEach(function(arrow){
    arrow.style.opacity = fadeOutIndex2;
  });
  if (fadeInIndex2 <= 0) {
    clearInterval(fadeInInterval);
  }
}

const closingCross = document.querySelector('.close-button');
closingCross.addEventListener('click', defFadeInInterval);

