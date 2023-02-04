const menuButton = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const navBody = document.querySelector('body');
const backBlur = document.querySelector('.back-blur');

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
menuButton.addEventListener('click', ()=> {
    menuButton.classList.toggle('opened');
    menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
    navList.classList.toggle('opened');
    navBody.classList.toggle('opened');
    backBlur.classList.toggle('opened');
});

/* Close the menu when a link is clicked */
navList.addEventListener('click', (e)=> {
    if(e.target.classList.contains('active')) {
        menuButton.classList.remove('opened');
        menuButton.setAttribute('aria-expanded', false);
        navList.classList.remove('opened');
        navBody.classList.remove('opened');
        backBlur.classList.remove('opened');
    }
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    if (currentScrollPos > 100) {
      document.querySelector(".navbar").style.top = "-150px";
    }
  }
  prevScrollpos = currentScrollPos;
};