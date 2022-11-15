const namaDepan = prompt("siapa nama depanmu? ");
const namaBelakang = prompt("siapa nama belakangmu?");
const bahasa = prompt("bisa berbahasa apa?");

const user = {
  nama: {
    namaDepan,
    namaBelakang,
  },
  bahasa,
};

switch (user.bahasa) {
  case "english":
    alert(
      `nice to meet you ${user.nama.namaDepan} ${user.nama.namaBelakang}.!`
    );
    break;
  case "french":
    alert(
      `ravi dde vous rencontrer ${user.nama.namaDepan} ${user.nama.namaBelakang}.!`
    );
    break;
  case "japanense":
    alert(
      `oaidekiteureshīdesu ${user.nama.namaDepan} ${user.nama.namaBelakang}.!`
    );
    break;
  default:
    alert(
      `senang bertemu dengan anda ${user.nama.namaDepan} ${user.nama.namaBelakang}.!`
    );
}
