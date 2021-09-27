window.onscroll = function() { fixMenu() };

var menuBar = document.getElementById("menu-bar");
var topPosition = menuBar.offsetTop;


function fixMenu() {
    if (window.pageYOffset >= topPosition && window.innerWidth < 992) {
        menuBar.classList.add("fixed-menu-bar")
    } else {
        menuBar.classList.remove("fixed-menu-bar");
    }
}


function openMenu() {
    document.getElementById("menu").style.height = "50%";
}


function closeMenu() {
    document.getElementById("menu").style.height = "0%";
}