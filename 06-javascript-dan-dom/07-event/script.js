const gambar = document.getElementById("catImage");
gambar.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");

const caption = document.querySelector("#caption");
caption.innerHTML = "<b>Tiga</b> Anak Kucing";
caption.style.fontStyle = "italic";

const newElement = document.createElement("p");
newElement.innerHTML = `Anda menekan anak kucing sebanyak <span id="count">0</span> kali`;
document.body.appendChild(newElement);

gambar.addEventListener("click", function () {
  document.getElementById("count").innerText++;
});
