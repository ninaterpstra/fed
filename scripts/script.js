const hamburger_menu = document.querySelector(".hamburger_menu");
const menu_nav = document.querySelector(".menu_nav");

hamburger_menu.addEventListener("click", () => {
    hamburger_menu.classList.toggle("active");
    menu_nav.classList.toggle("active");
})

document.querySelectorAll(".link_nav").forEach(n => n.
    addEventListener("click", () => {
        hamburger_menu.classList.remove("active");
        menu_nav.classList.remove("active");
    }))
