const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const mainMenu = document.querySelector(".container");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .container li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}
