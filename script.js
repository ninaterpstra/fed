const hamburger_menu = document.querySelector(".hamburger_menu");
const menu_nav = document.querySelector("header nav ul");

hamburger_menu.addEventListener("click", () => {
    hamburger_menu.classList.toggle("active");
    menu_nav.classList.toggle("active");
})

document.querySelectorAll("header nav ul a").forEach(n => n.
    addEventListener("click", () => {
        hamburger_menu.classList.remove("active");
        menu_nav.classList.remove("active");
    }))
