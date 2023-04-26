const menubar = document.querySelector(".menu-bar");
const line= document.querySelector(".line");
const line_1 = document.querySelector(".line--1");
const line_2 = document.querySelector(".line--2");
const line_3 = document.querySelector(".line--3");
const navDisplay = document.querySelector(".navigation");

menubar.addEventListener('click', function ()
{
    line_1.classList.toggle('rotate-line--1');
    line_2.classList.toggle('rotate-line--2')
    line_3.classList.toggle('rotate-line--3')
    navDisplay.classList.toggle('navigation-display')
    
    
})
