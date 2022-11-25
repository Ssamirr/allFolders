window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header-navbar-menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.querySelector('.header-navbar-menu').style.bottom='auto';
  } else {
    navbar.classList.remove("sticky");
    document.querySelector('.header-navbar-menu').style.bottom='0';
  }
}