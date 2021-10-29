let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


timeline 
    .fromTo(".bg", {y: -50}, {y:0, duration:5})



// Hamburger-menu

const hamburger = document.getElementById('hamburger-menu');
const navRight = document.getElementById('nav-right');

hamburger.addEventListener('click', () => {
    navRight.classList.toggle('show');
});