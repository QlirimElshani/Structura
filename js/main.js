let burgerMenu = document.getElementById("header__burger");
burgerMenu.addEventListener("click", addClassToBody);

function addClassToBody() {
  document.querySelector("body").classList.toggle("menu-open");
}
