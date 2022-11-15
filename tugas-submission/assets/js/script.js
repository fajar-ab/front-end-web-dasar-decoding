const tombolMenu = document.querySelector(".tombol-menu");
const listMenu = document.querySelector("ul");

tombolMenu.addEventListener("click", function () {
  listMenu.classList.toggle("tampil-menu");
});
