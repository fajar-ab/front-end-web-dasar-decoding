const button = document.getElementById("button");
const count = document.getElementById("count");
const clear = document.getElementById("clear");

const cacheKey = "NUMBER";

if (typeof Storage !== undefined) {
  // cek apakah data localStorage dengan key NUMBER tersedia atau belum
  if (localStorage.getItem(cacheKey) === undefined) {
    // jika belum maka akan diatur dengan nilai awal 0
    localStorage.setItem(cacheKey, 0);
  }

  count.innerText = localStorage.getItem(cacheKey);

  // ketika tombol di click
  button.addEventListener("click", function () {
    // ambil data sesion tambah dengan 1
    let number = localStorage.getItem(cacheKey);
    number++;

    // set hasilnya ke sesion
    localStorage.setItem(cacheKey, number);
    count.innerText = localStorage.getItem(cacheKey);
  });

  // ketika tombol clear di click
  clear.addEventListener("click", function () {
    localStorage.removeItem(cacheKey);
    count.innerText = localStorage.getItem(cacheKey);
  });
} else {
  alert("browser tidak mendukung Web Storange");
}
