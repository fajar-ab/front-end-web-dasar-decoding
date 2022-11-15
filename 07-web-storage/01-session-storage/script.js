const button = document.getElementById("button");
const count = document.getElementById("count");
const cacheKey = "NUMBER";

if (typeof Storage !== undefined) {
  // cek apakah data sesionStorage dengan key NUMBER tersedia atau belum
  if (sessionStorage.getItem(cacheKey) === undefined) {
    // jika belum maka akan diatur dengan nilai awal 0
    sessionStorage.setItem(cacheKey, 0);
  }

  count.innerText = sessionStorage.getItem(cacheKey);

  // ketika tombol di click
  button.addEventListener("click", function () {
    // ambil data sesion tambah dengan 1
    let number = sessionStorage.getItem(cacheKey);
    number++;

    // set hasilnya ke sesion
    sessionStorage.setItem(cacheKey, number);
    count.innerText = sessionStorage.getItem(cacheKey);
  });
} else {
  alert("browser tidak mendukung Web Storange");
}
