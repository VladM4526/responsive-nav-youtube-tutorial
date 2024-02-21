const buttonOpen = document.querySelector(".rm-menu-burger-button");
const buttonClose = document.querySelector(".rm-menu-burger-close-button");
const menu = document.querySelector(".overlay");

buttonOpen.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hidden");
}
