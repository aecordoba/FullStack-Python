window.onscroll = function() { fixMenu() };

const menuBar = document.getElementById("menu-bar");
let menuBarTopPosition = menuBar.offsetTop;
const container = document.getElementById("container");
let containerTopPosition = container.offsetTop;
const header = document.getElementsByTagName("header")[0]
let headerTopPosition = header.offsetTop;

function fixMenu() {
    if (window.pageYOffset >= menuBarTopPosition + containerTopPosition + headerTopPosition) {
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

function formValidation() {
    let result = true;
    let errorSpans = document.getElementsByClassName("error");
    for (span of errorSpans)
        span.innerText = "";


    const names = document.getElementById("names").value;
    if (!/^[a-zA-Z\u00C0-\u017F\s]{2,25}$/.test(names)) {
        document.getElementById("names-error").innerText = "Nombre/s inválido/s.";
        result = false;
    }
    const lastName = document.getElementById("last-name").value;
    if (!/^[a-zA-Z\u00C0-\u017F\s]{2,25}$/.test(lastName)) {
        document.getElementById("last-name-error").innerText = "Apellido inválido.";
        result = false;
    }
    const phone = document.getElementById("phone").value;
    if (!/^[0-9]{7,11}$/.test(phone)) {
        document.getElementById("phone-error").innerText = "Teléfono inválido.";
        result = false;
    }
    const email = document.getElementById("email").value;
    if (!/^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/.test(email)) {
        document.getElementById("email-error").innerText = "E-mail inválido.";
        result = false;
    }
    const intentIndex = document.getElementById("intent").selectedIndex;
    if (intentIndex === 0) {
        document.getElementById("intent-error").innerText = "Elija una opción.";
        result = false;
    }
    const comments = document.getElementById("comments").value;
    if (comments.length > 1000) {
        document.getElementById("comments-error").innerText = "Comentarios muy extensos.";
        result = false;
    }

    return result;
}