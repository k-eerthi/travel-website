const header=document.quertSelector("header");

window.addEventlistener("scroll",function() {
	header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick =() => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};